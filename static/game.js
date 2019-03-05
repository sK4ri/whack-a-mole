

function getClicks() {
    let table = document.querySelectorAll('.col-md-1');


    for (let cell of table) {
        cell.addEventListener('click', function () {
            cell.textContent = 'KAL';
        });
    }
}

getClicks();