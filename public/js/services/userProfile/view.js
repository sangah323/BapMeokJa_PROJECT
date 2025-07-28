// 로그인 => 로그아웃
const user = JSON.parse(localStorage.getItem("user"));
const goLogin = document.querySelector(
  "#header > .header-inner > .header-top > .header-top-list > .go-login"
);

if (user.email) {
  goLogin.innerHTML = "로그아웃";
}

goLogin.addEventListener("click", () => {
  const logout = confirm("로그아웃 하시겠습니까?");
  if (user.email) {
    if (logout) {
      localStorage.removeItem("user");
      location.href = "./main.html";
    }
  }
});

//
const userName = document.querySelector(
  "#content > #contentContainer > .user-profile > ul > .user-name"
);
const userTel = document.querySelector(
  "#content > #contentContainer > .user-profile > ul > .user-tel"
);
const userEmail = document.querySelector(
  "#content > #contentContainer > .user-profile > ul > .user-email"
);
const userAddress = document.querySelector(
  "#content > #contentContainer > .user-address-box > ul > .user-address"
);

if (user.email) {
  userName.innerHTML = user.name;
}

if (user.email) {
  userTel.innerHTML = user.phoneNumber;
}
if (user.email) {
  userEmail.innerHTML = user.email;
}
if (user.email) {
  userAddress.innerHTML = user.address;
}
