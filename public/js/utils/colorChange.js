const loginBtn = document.querySelector(
  ".header-top-list>li:nth-of-type(5) > a"
);

const colorChange = (e) => {
  loginBtn.style.color = "rgb(248, 116, 59)";
};

loginBtn.addEventListener("click", colorChange);
