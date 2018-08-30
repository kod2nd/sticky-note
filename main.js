const createNote = (noteTitle) => {
  const note = document.createElement("div");
  note.className = "note";

  const title = document.createElement("div");
  title.className = "note-title";
  title.textContent = noteTitle;

  const list = document.createElement("ul");
  const listItems = document.createElement("li");
  listItems.textContent = "some item in list";

  list.appendChild(listItems);
  note.appendChild(title);
  note.appendChild(list);

  return note;
};

const main = document.createElement("div");
main.className = "main";

const userTitleInput = document.querySelector("input#note-title")
userTitleInput.addEventListener('input', ()=>{
    userInputValue = userTitleInput.value
})

const addButton = document.querySelector("button#add");
addButton.addEventListener("click", () => {
  return main.appendChild(createNote(userTitleInput.value));
});


document.querySelector("body").appendChild(main);
