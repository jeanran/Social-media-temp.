function toggleAccordion(id) {
    var allContents = document.querySelectorAll('.accordion-content');
    var content = document.getElementById(id);

    allContents.forEach(item => {
        if (item.id !== id) {
            item.style.display = "none"; 
        }
    });

    content.style.display = (content.style.display === "block") ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("closeNotif");
    const notifBox = document.getElementById("notifBox");

    if (closeBtn && notifBox) {
        closeBtn.addEventListener("click", function () {
            notifBox.classList.add("hidden"); 
        });
    }
});


