document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((items) => {
        let gridContainer = document.querySelector('.grid-container');
        let zoomContainer = document.querySelector('.zoom-container');

        items.forEach(item => {
            let projectImage = document.createElement("img");
            projectImage.src = item.path;
            gridContainer.appendChild(projectImage);

            if (window.matchMedia("(min-width: 600px)").matches) {
                projectImage.addEventListener('mouseover', function() {
                    console.log('mouseover');
                    if (item.path) {
                        let img = document.createElement('img');
                        img.src = item.path;
                        zoomContainer.innerHTML = '';
                        zoomContainer.appendChild(img);
                    }
                });

                projectImage.addEventListener('mouseout', function() {
                    zoomContainer.innerHTML = '';
                });
            }
        });
    });
});
