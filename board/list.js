fetch("http://localhost:8080/boards/list")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("post-list");
      data.forEach(post => {
        if(post.boardTitle){
        const item = document.createElement("a");
        item.href = `post.html?id=${post.id}`;
        item.className = "list-group-item";
        item.innerText = post.boardTitle;
        container.appendChild(item);}
      });
    })
    .catch(err => console.error("게시글 목록 로딩 실패", err));
