/* 
TODO:
-> Localstorage
-> Drag and drop

FIX:
-> DOING/DONE: Count task
-> DOING/DONE: Edit card
-> DOING/DONE: Remove card
*/

const cards = document.querySelector(".kb-cards");
const btnAddCard = document.querySelector(".btn-add");
const card = `
<div class="kb-card">
	<div class="kb-card-header">
		<h1 class="kb-card-title">Title task</h1>
		<button type="submit" class="btn delete-card">
			<img src="./assets/img/remove.svg" alt="Delete card" />
		</button>
	</div>

	<p class="kb-card-description">Description task</p>
</div>
`;

// Count task
function countTask() {
	const tagCountTask = document.querySelector(".kb-tag");
	const count = document.querySelectorAll(".kb-card").length;
	tagCountTask.textContent = count;
}

// Add card
btnAddCard.addEventListener("click", (event) => {
  event.preventDefault();

  cards.insertAdjacentHTML("beforeend", card);
	countTask();
});

// edit card
cards.addEventListener("click", (event) => {
  const kbCardTitle = event.target.closest(".kb-card-title");
  const kbCardDescription = event.target.closest(".kb-card-description");

  if (kbCardTitle) {
    kbCardTitle.contentEditable = true;
    kbCardTitle.focus();
    kbCardTitle.addEventListener("blur", (event) => {
      kbCardTitle.contentEditable = false;
    });
  }

  if (kbCardDescription) {
    kbCardDescription.contentEditable = true;
    kbCardDescription.focus();
    kbCardDescription.addEventListener("blur", (event) => {
      kbCardDescription.contentEditable = false;
    });
  }
});

// remove card
cards.addEventListener("click", (event) => {
  if (event.target.closest("button")) {
    event.target.closest(".kb-card").remove();
		countTask();
  }
});

// TODO: Drag and drop card

