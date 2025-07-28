// 로그인 => 로그아웃
const user = JSON.parse(localStorage.getItem("user"));
const goLogin = document.querySelector(
  "#header > .header-inner > .header-top > .header-top-list > .go-login"
);
const createDay = document.querySelector(".button-box > button");

console.log(createDay);

goLogin.addEventListener("click", () => {
  const logout = confirm("로그아웃 하시겠습니까?");
  if (user.email) {
    if (logout) {
      localStorage.removeItem("user");
      location.href = "./index.html";
    }
  }
});

const diaryBox = document.querySelector(".diary-box");

/* 
    <div class="diary-box">
      <div>
        <div class="diary-list">
            <div class="user-email">이메일</div>
            <a class="diary-itle">제목</div>
            <div>내용</div>
         </div>
        <img src="../public/img/diary-bab-img.png">
       </div>
    </div>
*/
createDay.addEventListener("click", () => {
  loginCheck("../login.html", "./create.html");
});

if (user.email) {
  goLogin.innerHTML = "로그아웃";
}

function drawing() {
  const user = JSON.parse(localStorage.getItem("user"));
  const board = JSON.parse(localStorage.getItem("board")) || [];
  diaryBox.inerHTML = "";
  for (let i = 0; i < board.length; i++) {
    const userEmail = document.createElement("div");
    userEmail.innerHTML = user.email;

    const diaryInner = document.createElement("div");

    const diaryList = document.createElement("div");
    diaryList.setAttribute("class", "diary-list");
    diaryList.setAttribute("index", `${i}`);
    diaryList.setAttribute("data-index", board[i].title);

    const diaryImg = document.createElement("img");
    diaryImg.setAttribute("src", "../public/img/diary-bab-img.png");

    const diaryTitle = document.createElement("a");
    const diaryContent = document.createElement("div");

    diaryTitle.setAttribute("class", "diary-title");
    diaryTitle.setAttribute(
      "href",
      `./view.html?diaryTitle=${board[i].title}&index=${i}`
    );

    diaryTitle.innerHTML = board[i].title;
    diaryContent.innerHTML = board[i].content;

    diaryList.append(userEmail, diaryTitle, diaryContent);
    diaryInner.append(diaryList, diaryImg);
    diaryBox.append(diaryInner);
  }
}

drawing();
