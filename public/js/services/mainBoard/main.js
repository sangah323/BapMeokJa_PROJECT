const goLogin = document.querySelector(".go-login");
const login = document.querySelector(".go-login > a");
const goMypage = document.querySelector(".go-mypage");
const myPage = document.querySelector(".go-mypage > a");

goLogin.addEventListener("click", (e) => {
  loginChange("./login.html", "./main.html");
});

goMypage.addEventListener("click", (e) => {
  e.preventDefault();
  loginCheck("./login.html", "./userProfile/mypage.html");
});

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  login.innerHTML = "로그아웃";
}
