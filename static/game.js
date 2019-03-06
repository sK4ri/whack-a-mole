

function end_of_game (life, score) {
    if (life < 1 || score < 0) {
        alert('GAME OVER!')
    } else if (score >= 50) {
        alert('YOU WON!')
    }
}


function refresh_scores (life, score) {
    document.querySelector('.life')
                    .innerHTML = `<div class="life">${'Life: ' + life}</div>`;
    document.querySelector('.scoring-system')
                    .innerHTML = `<div class="scoring-system">${'Score: '+ score}</div>`;
}


function timed_popups (table, mole, field) {

    setInterval(function () {
    let current_cell = table[Math.floor(Math.random()*table.length)];
        current_cell.innerHTML = mole;
        setTimeout(function () {current_cell.innerHTML = field}, 1500);
        }, 2000);
    }


function checkForClicks(table, mole, life, score, field, hit) {

    for (let cell of table) {
        cell.innerHTML = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
        cell.addEventListener('click', function () {
            // ternary ops here!
            if (cell.innerHTML === mole) {
                cell.innerHTML = hit;
                score += 10;
                refresh_scores(life, score);
            } else {
                cell.textContent = 'FAIL';
                life -= 1;
                score -= 10;
                refresh_scores(life, score);
            }
            end_of_game(life, score);
            setTimeout(function () {
                cell.innerHTML = field
            }, 500);
        });
    }
}


function init() {
    let life = eval(document.querySelector('.life').textContent);
    let score = eval(document.querySelector('.scoring-system').textContent);
    let table = document.querySelectorAll('.col-md-1');
    let mole = `<img alt="" src="/static/mole.png" class="imagepopup0">`;
    let emptyField = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
    let registered_hit = `<img alt="" src="/static/hit.png" class="imagepopup0">`

    refresh_scores(life, score);
    timed_popups(table, mole, emptyField);
    checkForClicks(table, mole, life, score, emptyField, registered_hit);
}

init();