

function endGame() {
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('life')[0].style.display = 'none';
    document.getElementsByClassName('scoring-system')[0].style.display = 'none';
}


function checkState (life, score) {

    refreshScores(life, score);
    if (life < 1 || score < 0) {
        alert('GAME OVER!');
        endGame()
    }
    else if (score >= 50) {
        alert('YOU WON');
        endGame()
    }

}


function refreshScores (life, score) {

    document.querySelector('.life').innerHTML = `<div id="life">${'Life: ' + life}</div>`;
    document.querySelector('.scoring-system').innerHTML = `<div id="scoring-system">${'Score: '+ score}</div>`;
}


function timedPopups (table, mole, field, showTime) {

    setInterval(function () {
    let currentCell = table[Math.floor(Math.random()*table.length)];
        currentCell.innerHTML = mole;
        setTimeout(function () {currentCell.innerHTML = field}, showTime);
        }, 2000);
    }


function gameLogic(table, mole, life, score, field, hit, miss) {

    for (let cell of table) {
        cell.innerHTML = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
        cell.addEventListener('click', function () {
            if (cell.innerHTML === mole) {
                cell.innerHTML = hit;
                score += 10;
            } else {
                cell.innerHTML = miss;
                life -= 1;
                score -= 10;
            }
            setTimeout(function () {
                cell.innerHTML = field
            }, 500);
            checkState(life, score);
        });
    }
}


function init() {
    let showTime = 1500;
    let life = eval(document.querySelector('.life').textContent);
    let score = eval(document.querySelector('.scoring-system').textContent);
    let table = document.querySelectorAll('.col-md-1');
    let mole = `<img alt="" src="/static/mole.png" class="imagepopup0">`;
    let emptyField = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
    let registeredMiss = `<img alt="" src="/static/hillHit.png" class="imagepopup0">`;
    let registeredHit = `<img alt="" src="/static/hit.png" class="imagepopup0">`;

    timedPopups(table, mole, emptyField, showTime);
    gameLogic(table, mole, life, score, emptyField, registeredHit, registeredMiss);
}

init();