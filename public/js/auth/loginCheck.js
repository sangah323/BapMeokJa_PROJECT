const loginCheck = (falseURL, trueURL) => {
  const getUser = JSON.parse(localStorage.getItem("user")) || "";
  if (getUser === "") {
    alert("로그인 후 이용 가능합니다.");
    location.href = falseURL;
  } else if (getUser) {
    location.href = trueURL;
  }
};
