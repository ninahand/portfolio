document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then((response) => response.json())
    .then((items) => {
        let tableContainer = document.querySelector('.table-container');
        let imageContainer = document.querySelector('.image-container');

        // Create table element
        let table = document.createElement('table');
        table.classList.add('project-table');

        // Populate table with data
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

      
            row.addEventListener('mouseover', function() {
               
                if (item.image) {
                    let img = document.createElement('img');
                    img.src = item.image;
                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(img);
                }
            });
        });

        tableContainer.appendChild(table);
    });
});
