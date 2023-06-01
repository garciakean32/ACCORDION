const acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        const text = this.nextElementSibling;
        if (text.style.display === 'none' || !text.style.display) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
}