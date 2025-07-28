const user = JSON.parse(localStorage.getItem("user"));
const emailBox = document.querySelector(
  "#content > .user-info > .user-info-box > div"
);

const goMypage = document.querySelector(".go-mypage");
const myPage = document.querySelector(".go-mypage > a");

goMypage.addEventListener("click", (e) => {
  e.preventDefault();
  loginCheck("../login.html", "../mypage.html");
});

if (user.email) {
  emailBox.innerHTML = user.email;
}

// 로그인 => 로그아웃
const goLogin = document.querySelector(".go-login");
const login = document.querySelector(".go-login > a");

if (user) {
  login.innerHTML = "로그아웃";
}

goLogin.addEventListener("click", (e) => {
  loginChange("../login.html", "../index.html");
});

// goLogin.addEventListener("click", () => {
//   const logout = confirm("로그아웃 하시겠습니까?");
//   if (user.email) {
//     if (logout) {
//       localStorage.removeItem("user");
//       location.href = "./index.html";
//     }
//   }
// });
