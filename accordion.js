const show = document.getElementById('show');
const content = document.getElementById('content');

show.addEventListener("click", () => {
    content.classList.toggle("active");
});
