const modal = document.querySelector("#contacts-modal");
const openModal = document.querySelector(".open-contacts-modal");
const closeModal = document.querySelector(".close-contacts-modal");

openModal.addEventListener("click", () => {
modal.showModal();
});

closeModal.addEventListener("click", () => {
modal.close();
});

window.onclick = (event) => {
    if(event.target.matches("#contacts-modal")) {
        modal.close();
    }
}