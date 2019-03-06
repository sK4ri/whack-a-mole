function timed_popups (table, bug, hill) {
    setInterval(function () {
    let current_cell = table[Math.floor(Math.random() * table.length)];
    current_cell.innerHTML = bug;

    setTimeout(function () {
        current_cell.innerHTML = hill;}, 1500);
    }, 2000);

    }


function checkForClicks(table, bug, hill) {
    for (let cell of table) {
        cell.addEventListener('click', function () {
            if (cell.innerHTML === bug) {
                cell.innerHTML = hill;
            }
            setTimeout(function () {
                cell.innerHTML = hill;
            }, 500);
        });
    }
}


function init() {
    let table = document.querySelectorAll('.col-md-1');
    let bug = `<img id="hill" alt="" src="/static/img/mole.png">`;
    let hill = `<img id="hill" alt="" src="/static/img/hill.png">`;
    timed_popups(table, bug, hill);
    checkForClicks(table, bug, hill);
}

init();