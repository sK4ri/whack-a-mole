

function endGame() {
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('life')[0].style.display = 'none';
    document.getElementsByClassName('scoring-system')[0].style.display = 'none';
}


function checkState (life, score) {

    refreshScores(life, score);
    if (life < 1 || score < 0) {
        alert('GAME OVER!');
        //death.play()
    } else if (score >= 50) {
        alert('YOU WON!')
        alert('GAME OVER!');
        endGame();
    } else if (score === 10) {
        alert('Level 2.');
    } else if (score >= 100) {
        alert('YOU WIN');
        endGame();
    }
}


function refreshScores (life, score) {

    document.querySelector('.life').innerHTML = `<div id="life">${'Life: ' + life}</div>`;
    document.querySelector('.scoring-system').innerHTML = `<div id="scoring-system">${'Score: '+ score}</div>`;
}


function timedPopups (table, mole, field, interval) {

    setInterval(function () {
    let currentCell = table[Math.floor(Math.random()*table.length)];
        currentCell.innerHTML = mole;
        setTimeout(function () {currentCell.innerHTML = field}, interval);
        }, 2000);
    }


function gameLogic(table, mole, life, score, field, hit, miss) {

    let showTime = 1200;
    timedPopups(table, mole, field, showTime);
    for (let cell of table) {
        cell.innerHTML = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
        cell.addEventListener('click', function () {
            if (cell.innerHTML === mole) {
                cell.innerHTML = hit;
                score += 10;
                //click_on_mole.play();
            } else {
                cell.innerHTML = miss;
                life -= 1;
                score -= 10;
                //missclick.play();
            }
            setTimeout(function () {
                cell.innerHTML = field
            }, 500);
            checkState(life, score);

        });
    }
}

let background_sound,click_on_mole,missclick,death;
function setup() {
    background_sound.setVolume(0.3);
    background_sound.loop();
}


function preload() {
    soundFormats('mp3', 'ogg');
    background_sound = loadSound("/static/sounds/Free_SFX_Package/MP3/Music/Music-01.mp3");
    //click_on_mole = loadSound("/static/sounds/FREE_SFX_Package/MP3/Input/Input-01.mp3");
    //missclick = loadSound("/static/sounds/FREE_SFX_Package/MP3/Input/Input-04.mp3");
    //death = loadSound("/static/sounds/FREE_SFX_Package/MP3/Alert/Alert-04.mp3")
}
function init() {

    let life = eval(document.querySelector('.life').textContent);
    let score = eval(document.querySelector('.scoring-system').textContent);
    let table = document.querySelectorAll('.col-md-1');
    let mole = `<img alt="" src="/static/mole.png" class="imagepopup0">`;
    let emptyField = `<img alt="" src="/static/hill.png" class="imagepopup0">`;
    let registeredMiss = `<img alt="" src="/static/hillHit.png" class="imagepopup0">`;
    let registeredHit = `<img alt="" src="/static/hit.png" class="imagepopup0">`;

    gameLogic(table, mole, life, score, emptyField, registeredHit, registeredMiss);
}

init();