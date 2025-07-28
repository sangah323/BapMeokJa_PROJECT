const goLogin = document.querySelector(".go-login");
const login = document.querySelector(".go-login > a");
const loginForm = document.querySelector("#loginForm");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const naverLogin = document.querySelector(".naver-login");
const appleLogin = document.querySelector(".apple-login");

naverLogin.addEventListener("click", () => {
  location.href =
    "https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/";
});

appleLogin.addEventListener("click", () => {
  location.href = "https://account.apple.com/sign-in";
});

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  login.innerHTML = "로그아웃";
}

goMypage.addEventListener("click", (e) => {
  e.preventDefault();
  loginCheck("./login.html", "./userProfile/mypage.html");
});

const userLogin = (e) => {
  e.preventDefault();
  const { email, password } = e.target;

  // 빈값
  if (email.value === "") {
    emailError.innerHTML = "이메일을 입력해주세요";
    return;
  } else {
    emailError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "비밀번호를 입력해주세요";
    return;
  } else {
    passwordError.innerHTML = "";
  }

  // 회원 확인
  const users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    const flag =
      users[i].email === email.value && users[i].password === password.value;

    if (flag) {
      const user = {
        email: users[i].email,
        password: users[i].password,
        name: users[i].name,
        address: users[i].address,
        phoneNumber: users[i].phoneNumber,
      };
      localStorage.setItem("user", JSON.stringify(user));
      location.href = "./main.html";
      return;
    } else {
      passwordError.innerHTML = "이메일 또는 비밀번호가 잘못되었습니다.";
    }
  }
};

loginForm.addEventListener("submit", userLogin);
