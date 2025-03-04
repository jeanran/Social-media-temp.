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

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".notification-box").style.display = "none"; 
});
