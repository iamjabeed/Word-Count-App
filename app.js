const textArea = document.getElementById("textarea");
const totalCount = document.getElementById("total-char");
const remainingCount = document.getElementById("remaining-char");

textArea.addEventListener("keyup", () => {
  countWords();
});
//? To upadate count when refresh page
countWords();

function countWords() {
  totalCount.innerText = textArea.value.length;
  remainingCount.innerText =
    textArea.getAttribute("maxLength") - textArea.value.length;
}
