const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

if(postId){
    fetch(`http://localhost:8080/boards/${postId}`)
    .then(res => {
        if(!res.ok) throw new Error("서버 응답 오류");
        return res.json();
    })
    .then(post =>{
        document.getElementById("post-title").innerText = post.boardTitle;
        document.getElementById("post-writer").innerText = post.writer || "작성자 없음";
        document.getElementById("post-date").innerText = post.createdAt || "날짜 없음"
        document.getElementById("post-content").innerText = post.boardContents;
    })
    .catch(err => {
        console.error("게시글 로딩 실패", err);
        alert("게시글을 불러오지 못했습니다.");
    });
}
else{
    alert("잘못된 접근입니다");
    window.location.href ="list.html";
}