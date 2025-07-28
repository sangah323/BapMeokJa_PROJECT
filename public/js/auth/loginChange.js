const getUser = JSON.parse(localStorage.getItem("user")) || "";
const loginChange = (loginURL, logoutURL) => {
  if (getUser === "") {
    location.href = loginURL;
  } else if (getUser) {
    alert("로그아웃 하셨습니다.");
    localStorage.removeItem("user");
    location.href = logoutURL;
  }
};
