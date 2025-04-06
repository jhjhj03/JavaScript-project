const month = document.getElementById("month");
const leftbtn=document.getElementById("leftbtn");
const rightbtn=document.getElementById("rightbtn");
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentyear = currentDate.getFullYear();
let currentdate = currentDate.getDate();

leftbtn.addEventListener("click",()=>{if (currentMonth>=1){
currentMonth-=1;}
printMonth();
printCalendar();
})
rightbtn.addEventListener("click",()=>{ if(currentMonth<=10){
    currentMonth+=1;
}
printMonth();
printCalendar();
    })

function printMonth(){
    const monthNumbers =[
        "january", "February", "March", "April", "May", "june", "july", "august", "september", "october", "november", "december"
    ];

    const currentMonthName= monthNumbers[currentMonth];

    month.innerHTML = "<h2>" + currentMonthName + "</h2>";
}

const calendarbox= document.getElementById("calendarbox");

function printCalendar(){
    const today = new Date(currentyear,currentMonth,1);
    const day = today.getDay();
    console.log(day)

    const last =[31,28,31,30,31,30,31,31,30,31,30,31]

    if (currentyear%4 ==0 && currentyear%100 !=0 || currentyear% 400==0){
        last[1]=29;
    }
    const lastDay =last[currentMonth];

    const row = Math.ceil((lastDay+day)/7);

    var calendar = "<table border ='1'>";
    calendar += "<tr>";
    calendar += "<th>MON</th>";
    calendar += "<th>TUE</th>";
    calendar += "<th>WED</th>";
    calendar += "<th>THU</th>";
    calendar += "<th>FRI</th>";
    calendar += "<th>SAT</th>";
    calendar += "<th>SUN</th>";
    calendar += "</tr>";
    let dNum = 1;
    for(let i=0; i<row; i++){
        calendar+="<tr>";
        for(let k=0; k<7; k++){
            if(i==0&& k<day-1 || dNum>lastDay){ calendar+="<td>&nbsp; </td>";}
            else{
                if(dNum==currentdate){
                    calendar+="<td id=today>"+dNum+"</td>"
                }
                else{
                   calendar+= "<td>"+dNum+"</td>"
                }
                dNum++;
            }
           

        }
        calendar+="</tr>"
    }
    calendar+="</table>"
calendarbox.innerHTML=calendar;


}
printMonth();
printCalendar();