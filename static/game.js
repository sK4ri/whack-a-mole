function endGame() {
    document.querySelector('.container'). innerHTML = `<p class=endGame>Would you like to restart?</p>`;
    // document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('life')[0].style.display = 'none';
    document.getElementsByClassName('scoring-system')[0].style.display = 'none';
}


function checkState(life, score) {
    refreshScores(life, score);
    if (life < 1 || score < 0) {
        death.play();
        alert('GAME OVER!');
        endGame()
    } else if (score === 50) {
        alert('Level 2.');
    } else if (score >= 100) {
        alert('YOU WIN');
        endGame();
    }
}


function refreshScores(life, score) {
    document.querySelector('.life').innerHTML = `<div class="life">Life: ${life}</div>`;
    document.querySelector('.scoring-system').innerHTML = `<div class="scoring-system">Score: ${score}</div>`;
}


function timedPopups(table, mole, field, interval) {
    setInterval(function () {
        let currentCell = table[Math.floor(Math.random() * table.length)];
        currentCell.innerHTML = mole;
        setTimeout(function () {
            currentCell.innerHTML = field;
        }, interval-800);
    }, interval);
}


function gameLogic(table, life, score, images) {
    let showTime = 2000;
    timedPopups(table, images.mole, images.emptyField, showTime);
    for (let cell of table) {
        cell.innerHTML = images.emptyField;
        cell.addEventListener('click', function () {
            if (cell.innerHTML === images.mole) {
                click_on_mole.play();
                cell.innerHTML = images.registeredHit;
                score += 10;
            } else {
                missclick.play();
                cell.innerHTML = images.registeredMiss;
                life -= 1;
                score -= 10;
            }
            setTimeout(function () {
                cell.innerHTML = images.emptyField;
            }, 500);
            checkState(life, score);
        });
    }
}


let background_sound, click_on_mole ,missclick, death;

function setup() {
    background_sound.setVolume(0.3);
    background_sound.loop();
}


function preload() {
    soundFormats('mp3', 'ogg');
    background_sound = loadSound("/static/sounds/Free_SFX_Package/MP3/Music/Music-01.mp3");
    click_on_mole = loadSound("/static/sounds/Free_SFX_Package/MP3/Input/Input-01.mp3");
    missclick = loadSound("/static/sounds/Free_SFX_Package/MP3/Input/Input-04a.mp3");
    death = loadSound("/static/sounds/Free_SFX_Package/MP3/Alert/Alert-04.mp3")
}


function init() {

    let life = eval(document.querySelector('.life').textContent);
    let score = eval(document.querySelector('.scoring-system').textContent);
    let table = document.querySelectorAll('.col-md-1');
    let images = {
        'mole': `<img alt="" src="/static/mole.png" class="imagepopup0">`,
        'emptyField': `<img alt="" src="/static/hill.png" class="imagepopup0">`,
        'registeredMiss': `<img alt="" src="/static/hillHit.png" class="imagepopup0">`,
        'registeredHit': `<img alt="" src="/static/hit.png" class="imagepopup0">`
    };
    gameLogic(table, life, score, images);
}

init();