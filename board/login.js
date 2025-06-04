document.getElementById("login-form").addEventListener("submit",function(e){
    e.preventDefault();

    const credentials = {
        memberEmail : document.getElementById("username").value,
        memberPassword: document.getElementById("password").value
    };

    fetch("http://localhost:8080/members/login",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify(credentials)
        }
    )
        .then(res=> {
            if(!res.ok) throw new Error("로그인 실패");
            return res.text();
        } )

         .then(member => {
        // localStorage에 사용자 정보 저장
        localStorage.setItem("loginUser", JSON.stringify(member));
        alert("로그인 성공!");
        window.location.href = "list.html";
    })

        .catch(err => {
            console.error(err);
            alert("로그인 오류")
        })
})