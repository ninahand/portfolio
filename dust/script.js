document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((items) => {
        items.forEach((item) => {
            let mainContainer = document.querySelector('.main-image-container');
            if (item.title === "gif") {
                let gifContainer = document.querySelector('.gif-container');
                let gifImage = document.createElement("img");
                gifImage.src = item.path;
                gifContainer.appendChild(gifImage);
            } else {
                let imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");
                let projectImage = document.createElement("img");
                projectImage.src = item.path;
                imageContainer.appendChild(projectImage);
                mainContainer.appendChild(imageContainer);
            }
        });
    });
});