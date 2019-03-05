

function getClicks() {
    let table = document.querySelectorAll('.game-table');

    for (let cell of table) {
        cell.addEventListener('click', function () {
            alert('ASDASDASD')
        });
    }
}

getClicks();