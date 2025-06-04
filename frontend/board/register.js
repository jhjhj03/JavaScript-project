document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const user = {
      memberEmail: document.getElementById("username").value,
      memberPassword: document.getElementById("password").value,
      memberName: document.getElementById("name").value
    };
  
    fetch("http://localhost:8080/members/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) throw new Error("회원가입 실패");
        return res.text();
      })
      .then(msg => {
        alert(msg);
        window.location.href = "login.html";
      })
      .catch(err => {
        console.error(err);
        alert("회원가입 중 오류가 발생했습니다.");
      });
  });
  