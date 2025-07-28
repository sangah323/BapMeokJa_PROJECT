const diaryInner = document.querySelector("#diaryInner");
const modifyTitle = document.querySelector("#modifyTitle");
const modifyContent = document.querySelector("#modifyContent");

const titleIndex = location.search;
const userUrlTitle = new URLSearchParams(location.search).get("diaryTitle");
const userUrlContent = new URLSearchParams(location.search).get("diaryContent");

if (titleIndex === "" || userUrlTitle === "") {
  alert("정상적인 방법으로 접근해주세요.");
  location.href = "./list.html";
}

modifyTitle.value = userUrlTitle;
modifyContent.value = userUrlContent;

const diaryUpdate = (e) => {
  const board = JSON.parse(localStorage.getItem("board")) || [];
  console.log(board[parseTitleIndex[3]]);

  const newData = {
    title: modifyTitle.value,
    content: modifyContent.value,
    date: new Date(),
  };

  board.splice(Number(parseTitleIndex[3]), 1, newData);

  localStorage.setItem("board", JSON.stringify(board));
};

diaryInner.addEventListener("submit", diaryUpdate);
