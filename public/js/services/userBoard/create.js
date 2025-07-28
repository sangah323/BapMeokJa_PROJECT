const diaryInner = document.querySelector("#diaryInner");
const titleError = document.querySelector(".title-error");
const contentError = document.querySelector(".content-error");

const createDiary = (e) => {
  const { title, content } = e.target;

  if (title.value === "") {
    e.preventDefault();
    titleError.innerHTML = "제목을 입력해주세요";
    return;
  } else {
    titleError.innerHTML = "";
  }
  if (content.value === "") {
    e.preventDefault();
    contentError.innerHTML = "내용을 입력해주세요";
    return;
  } else {
    contentError.innerHTML = "";
  }

  const board = JSON.parse(localStorage.getItem("board")) || [];

  board.push({
    title: title.value,
    content: content.value,
    date: new Date(),
  });

  localStorage.setItem("board", JSON.stringify(board));
};

diaryInner.addEventListener("submit", createDiary);
