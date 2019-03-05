

function timed_popups (table) {

    setInterval(function () {
    let current_cell = table[Math.floor(Math.random()*25)];
        current_cell.textContent = 'KAL';
        setTimeout(function () {current_cell.textContent = 'O'}, 1500);
        }, 2000);
    }


function checkForClicks(table) {

    for (let cell of table) {
        cell.addEventListener('click', function () {
            // ternary ops here!
            if (cell.textContent === 'KAL') {
                cell.textContent = 'XX';
            } else {
                cell.textContent = 'FAIL';
            }
            setTimeout(function () {
                cell.textContent = 'O'
            }, 800);
        });
    }
}


function init() {
    let table = document.querySelectorAll('.col-md-1');
    timed_popups(table);
    checkForClicks(table);
}

init();