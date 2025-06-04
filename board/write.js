document.getElementById("write-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
      // localStorage에서 로그인한 사용자 꺼내기
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));

    fetch("http://localhost:8080/boards/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        boardTitle: title,
        boardContents: content,
        memberId: loginUser.id
      }),
      
    })
      .then(res => {
        if (!res.ok) throw new Error("작성 실패");
        return res.json();
      })
      .then(data => {
        alert("게시글이 성공적으로 작성되었습니다.");
        window.location.href = "list.html"; // 게시판 목록으로 이동
      })
      .catch(err => {
        console.error(err);
        alert("게시글 작성 중 오류가 발생했습니다.");
      });
  });
  