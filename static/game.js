

function timed_popups (table, bug) {

    setInterval(function () {
    let current_cell = table[Math.floor(Math.random()*25)];
        current_cell.innerHTML = bug;
        setTimeout(function () {current_cell.textContent = 'O'}, 1500);
        }, 2000);
    }


function checkForClicks(table, bug) {

    for (let cell of table) {
        cell.addEventListener('click', function () {
            // ternary ops here!
            if (cell.innerHTML === bug) {
                cell.textContent = 'XX';
            } else {
                cell.textContent = 'FAIL';
            }
            setTimeout(function () {
                cell.textContent = 'O'
            }, 500);
        });
    }
}


function init() {
    let table = document.querySelectorAll('.col-md-1');
    let bug = `<img alt="" style="height: 80%; width: 80%;" src="https://img2.freepng.es/20180426/vbw/kisspng-royalty-free-fly-stock-photography-clip-art-5ae247776ff4f6.7260687515247788714586.jpg" class="imagepopup0">`;
    timed_popups(table, bug);
    checkForClicks(table, bug);
}

init();