//할 일 생성 버튼, 할 일 목록 리스트
const createBtn = document.getElementById("create-btn");
const list = document.getElementById("list")

//할 일 객체를 저장하는 배열열
let todos =[];

//createBtn 클릭시 createNewTodo 함수 실행
createBtn.addEventListener('click', createNewTodo);

//할 일 객체 생성성
function createNewTodo(){
    let item={
        id: new Date().getTime(),
        text: "",
        complete: false
    }

//todos 배열의 맨 앞단에 item 객체 삽입입
todos.unshift(item);
//item 객체를 바탕으로 새로운 html 요소를 생성하고 itemEl, inputEl 변수에 담음
const{itemEl, inputEl} = createNewTodoEle(item);
//리스트의 맨 앞단에 할일 요소를 넣는다
list.prepend(itemEl);
//inputEl의 disalbled 속성제거
inputEl.removeAttribute('disabled');
//inputEl 입력창에 초점이 맞춰짐짐
inputEl.focus();
//로컬스토리지에 저장장
saveToLocalStorage();
}

function createNewTodoEle(item){
    const itemEl = document.createElement('div');

    const actionsEl =document.createElement('div');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = "checkbox";
    checkboxEl.checked = item.complete;
    if(item.complete){
        itemEl.classList.add("complete");
    }

    const inputEl = document.createElement('input');
    inputEl.type = "text"
    inputEl.value = item.text;
    inputEl.setAttribute("disalbled", "");

    const editBtn = document.createElement('button');
    editBtn.innerHTML = "수정하기";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제하기";

    actionsEl.append(editBtn);
    actionsEl.append(deleteBtn);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);


    //이벤트 처리
    checkboxEl.addEventListener('change', ()=>{
        item.complete = checkboxEl.checked;

        if(item.complete){
            itemEl.classList.add("complete");
        }
        else{
            itemEl.classList.remove("complete");
        }
        saveToLocalStorage();
    })

    inputEl.addEventListener('input',()=>
    {
        item.text = inputEl.value;
    }
    )

    inputEl.addEventListener('blur',()=>{
        inputEl.setAttribute("disabled" ,"");
    })

    editBtn.addEventListener('click', ()=>{
        inputEl.removeAttribute("disabled");
        inputEl.focus();
    })

    deleteBtn.addEventListener('click',()=>{
        todos = todos.filter(t => t.id != item.id);
        itemEl.remove();
        saveToLocalStorage();
    })
    return {inputEl, deleteBtn, editBtn, itemEl}
}

function displayTodos(){

    loadFromLocalStorage();
    
    for(let i = 0; i < todos.length; i++){
        const item = todos[i];

        const{itemEl} = createNewTodoEle(item);

        list.append(itemEl);

    }
}

displayTodos();

function saveToLocalStorage(){
    const data = JSON.stringify(todos);

    localStorage.setItem("mydataya",data);
}

function loadFromLocalStorage(){
   const data = localStorage.getItem("mydataya")

    if(data){
        todos = JSON.parse(data)
    }
}








