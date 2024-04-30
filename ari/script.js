document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((items) => {
        let mainContainer = document.querySelector('.main-image-container');
        items.forEach((item) => {
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            let projectImage = document.createElement("img");
            projectImage.src = item.path;
            imageContainer.appendChild(projectImage);
            mainContainer.appendChild(imageContainer);
        });
    });
});
