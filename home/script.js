document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((items) => {
        let tableContainer = document.querySelector('.table-container');
        let zoomContainer = document.querySelector('.zoom-container');

        let table = document.createElement('table');
        table.classList.add('project-table');

        items.forEach(item => {
            let row = table.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            cell1.textContent = item.project;
            cell2.textContent = item.date;
            cell3.textContent = item.type;
            cell4.textContent = item.description;

            row.addEventListener('click', function() {
                if (item.link) {
                    window.location.href = item.link;
                }
            });

            if (window.matchMedia("(min-width: 600px)").matches) {
                row.addEventListener('mouseover', function() {
                    if (item.image) {
                        let img = document.createElement('img');
                        img.src = item.image;
                        zoomContainer.innerHTML = '';
                        zoomContainer.appendChild(img);
                    }
                });
            } else {
                console.log('small screen!')
                if (item.gif) {
                    let gif = document.createElement('img');
                    gif.src = item.gif;
                    zoomContainer.innerHTML = '';
                    zoomContainer.appendChild(gif);
                }
            }
        });

        tableContainer.appendChild(table);
    });
});
