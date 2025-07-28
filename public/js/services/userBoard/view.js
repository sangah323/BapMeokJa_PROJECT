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
      location.href = "../main.html";
    }
  }
});

/* 
    <div class="diary-box">
      <div>
        <div class="diary-list">
            <div>이메일</div>
            <div>날짜</div>
            <div>제목</div>
            <img src="../public/img/diary-bab-img.png">
            <div>내용</div>
         </div>
         <button class="delete-btn">삭제</button>
       </div>
    </div>
*/
const diaryBox = document.querySelector(".diary-box");
const userDiaryTitle = document.querySelector(".user-diary-title > h1");

const titleIndex = location.search;
const userUrlTitle = new URLSearchParams(location.search).get("diaryTitle");

if (titleIndex === "" || userUrlTitle === "") {
  alert("정상적인 방법으로 접근해주세요.");
  location.href = "./list.html";
}

const parseTitleIndex = titleIndex.split("=");

// parseTitleIndex[2] <<< index!!
// parseUserTitle[0] <<< title!!

const readDiary = () => {
  const board = JSON.parse(localStorage.getItem("board")) || [];
  const user = JSON.parse(localStorage.getItem("user"));

  let result = {};
  for (let i = 0; i < board.length; i++) {
    if (board[i].title === userUrlTitle) {
      result = { ...board[i] };
    }
  }

  userDiaryTitle.innerHTML = `${user.email}님의 일기`;

  const diaryModifyBtn = document.querySelector(".diary-modify-btn");

  diaryModifyBtn.addEventListener("click", () => {
    location.href = `./modify.html?diaryTitle=${result.title}&diaryContent=${result.content}&index=${parseTitleIndex[2]}`;
  });
  const diaryInner = document.createElement("div");
  diaryInner.setAttribute("data-index", result.title);

  const diaryList = document.createElement("div");
  diaryList.setAttribute("class", "diary-list");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "diary-delete-btn");
  deleteBtn.innerHTML = "삭제";

  const userEmail = document.createElement("div");
  const diaryDate = document.createElement("div");
  const diaryTitle = document.createElement("div");
  const diaryImg = document.createElement("img");
  const diaryContent = document.createElement("div");

  diaryImg.setAttribute("src", "../public/img/diary-bab-img.png");

  userEmail.innerHTML = user.email;
  diaryDate.innerHTML = result.date;
  diaryTitle.innerHTML = result.title;
  diaryContent.innerHTML = result.content;

  diaryList.append(userEmail, diaryDate, diaryTitle, diaryImg, diaryContent);
  diaryInner.append(diaryList, deleteBtn);
  diaryBox.append(diaryInner);
};

readDiary();

// 삭제
const diaryDelete = (e) => {
  if (e.target.className === "diary-delete-btn") {
    const result = confirm("정말 삭제하시겠습니까?");
    if (result) {
      const parentElement = e.target.parentNode;
      const diaryTitle = parentElement.dataset.index;

      const board = JSON.parse(localStorage.getItem("board"));
      for (let i = 0; i < board.length; i++) {
        if (board[i].title === diaryTitle) {
          board.splice(i, 1);
        }
      }
      localStorage.setItem("board", JSON.stringify(board));
      alert("삭제가 완료되었습니다.");
      location.href = "./list.html";
    }
  }
};

diaryBox.addEventListener("click", diaryDelete);
