
let first_header = document.getElementById('first-header')
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementById('overlay');
let body = document.querySelector('body');
let computer = document.getElementById('computer');
let player1 = document.getElementById('player1');
let sound = document.getElementById('sound-p');
let fullscreen = document.getElementById('fullscreen');
let reload = document.getElementById('reload');
let bar = document.getElementById('bar');
let sound_aicon = document.getElementById('sound');
let video_quit = document.getElementById('video-quit');
let cont_quit = document.getElementById('cont-quit');
let change_play = undefined;
let change_fullscreen = 'open';
let change_reload = 'open';
let change_bar = 'open';
let sound_style = document.head.appendChild(document.createElement("style"));
let fullscreen_style = document.head.appendChild(document.createElement("style"));
let bar_style = document.head.appendChild(document.createElement("style"));
let max = 10;
let min = 5;

var div = document.createElement("div");
div.className = 'main-div';
document.body.appendChild(div);

for (let i = 0; i < 10; i++) {
    var div_x = document.createElement("div");
    div_x.innerHTML = "X";
    div_x.className = 'div';
    div_x.style.top = Math.floor(Math.random() * 600) + 'px';
    div_x.style.left = Math.floor(Math.random() * (innerWidth - div_x)) + 'px';
    div_x.style.animation = 'anime ' + Math.floor(Math.random() * (max - min) + min) * 2 + 's ' + (i) + 's infinite';

    div.appendChild(div_x);
}

for (let i = 10; i < 20; i++) {
    var div_o = document.createElement("div");
    div_o.innerHTML = "O";
    div_o.className = 'div';
    div_o.style.top = Math.floor(Math.random() * 600) + 'px';
    div_o.style.left = Math.floor(Math.random() * 600) + 'px';
    div_o.style.animation = 'anime ' + Math.floor(Math.random() * (max - min) + min) * 2 + 's ' + (i - 11) + 's infinite';
    div.appendChild(div_o);
}

function first_header_start() {
    first_header.style.transform = 'scale(0)';
    first_header.style.opacity = 0;
    div.style.transform = 'scale(0)';
    div.style.opacity = 0;
    sound.play();
}

overlay.addEventListener('click', function () {
    if (change_bar == 'close') {
        change_bar = 'open';
        bar.style.backgroundColor = 'white';
        bar_style.innerHTML = ' ';
        overlay.style.opacity = 0;
        overlay.style.zIndex = -10;
        sidebar.style.opacity = 0;
        sidebar.style.zIndex = -10;
        bar.style.zIndex = 99999;
    }
})

function side_bar() {
    if (change_bar == 'open') {
        change_bar = 'close';
        bar.style.backgroundColor = 'transparent';
        bar_style.innerHTML = '#bar::before {top: -1px; transform: rotate(45deg);} #bar::after {top: -1px; transform: rotate(136deg);}';
        overlay.style.opacity = 1;
        overlay.style.zIndex = 99999;
        sidebar.style.opacity = 1;
        sidebar.style.zIndex = 99999;
        bar.style.zIndex = 99999;
    } else {
        change_bar = 'open';
        bar.style.backgroundColor = 'white';
        bar_style.innerHTML = ' ';
        overlay.style.opacity = 0;
        overlay.style.zIndex = -10;
        sidebar.style.opacity = 0;
        sidebar.style.zIndex = -10;
        bar.style.zIndex = 99999;
    }
}

function fun_sound() {
    if (sound.paused == false) {
        sound_style.innerHTML = "#sound::before {top: 3px; width: 30px; height: 30px; border-top-right-radius: 0px; border-right: 0px;} #sound span{border-top-right-radius: 0px; border-top: 0px; right: -39px; top: -15px;}";
        sound.pause();
    } else {
        sound_style.innerHTML = " ";
        sound.play();
    }
}

function fullscreen_change() {
    if (change_fullscreen == 'open' && !document.fullscreenElement) {
        change_fullscreen = 'close';
        fullscreen.style.width = 12 + 'px';
        fullscreen.style.height = 22 + 'px';
        fullscreen.style.border = 0;
        fullscreen.style.backgroundColor = '#1f1349';
        fullscreen.style.boxSizing = 'content-box';
        fullscreen_style.innerHTML = "#fullscreen::after {background-color: unset; border: 1px solid white; border-left: 0; border-right: 0;z-index: -10;} #fullscreen::before {background-color: unset; border: 1px solid white; border-bottom: 0; border-top: 0;z-index: -10;}";
        body.requestFullscreen();

    } else {
        change_fullscreen = 'open';
        fullscreen.style.width = 55 + 'px';
        fullscreen.style.height = 55 + 'px';
        fullscreen.style.border = 4 + 'px solid white';
        fullscreen.style.backgroundColor = 'unset';
        fullscreen.style.boxSizing = 'border-box';
        fullscreen_style.innerHTML = ' ';
        document.exitFullscreen();
    }
}

function start() {
    bar.style.backgroundColor = 'white';
    bar_style.innerHTML = ' ';
    overlay.style.opacity = 0;
    overlay.style.zIndex = -10;
    sidebar.style.opacity = 0;
    sidebar.style.zIndex = -10;
    if (change_play == undefined) {
        change_play = 'you';
        mazen.textContent = 'You';
    }
    setTimeout(fullscreen, 500)
    function fullscreen() {
        body.requestFullscreen();
    }
}

function change_caracter(change) {
    switch (change) {
        case 'computer':
            change_play = 'you';
            computer.style.backgroundColor = '#190b4e';
            player1.style.backgroundColor = '#4b3c82';
            mazen.textContent = 'you';
            break;

        case 'player1':
            change_play = 'player1';
            player1.style.backgroundColor = '#190b4e';
            computer.style.backgroundColor = '#4b3c82';
            mazen.textContent = 'Player1';
            break;
    }
}

let cont_quit_num = 18;
function quit() {
    sidebar.style.display = 'none';
    video_quit.style.display = 'block';
    cont_quit.style.visibility = 'unset';
    video_quit.play();
    sound.pause();

    setInterval(cont_quit_time, 1000)
    function cont_quit_time() {
        if (cont_quit_num >= 1) {
            cont_quit_num = cont_quit_num - 1;
        }
        cont_quit.innerHTML = cont_quit_num;
        video_quit.style.top = Math.floor(Math.random() * (innerHeight - video_quit.videoHeight)) + 'px';
        video_quit.style.left = Math.floor(Math.random() * (innerWidth - video_quit.videoWidth)) + 'px';
        console.log(innerHeight - video_quit.videoHeight)
        setTimeout(video_play, 18000)
        function video_play() {
            window.close();
        }
    }
}



const mazen = document.getElementById('title');
const button_ox = document.querySelectorAll('.button');
let li = document.querySelectorAll('li');

function xo(x) {

    const el = x.querySelectorAll(".button")[0];
    index = Array.from(document.querySelectorAll(".button")).indexOf(el);
    if (document.querySelectorAll('.button')[index].textContent.length <= 0) {
        if (change_play == 'you') {
            el.textContent = 'x';
            change_play = 'computer';
            mazen.textContent = 'Computer';
            setTimeout(com, 1000)
        } else if (change_play == 'player1') {
            el.textContent = 'o';
            change_play = 'Player2';
            mazen.textContent = 'Player2';

        } else if (change_play == 'Player2') {
            el.textContent = 'x';
            change_play = 'player1';
            mazen.textContent = 'Player1';
        }
    }

    function com() {
        var array = [0, 2, 6, 8];
        var ran = Math.floor(Math.random() * 8);
        var ran2 = Math.floor(Math.random() * array.length);
        if (change_play == 'computer') {
            if (button_ox[0].textContent == 'o' && button_ox[1].textContent == 'o' && button_ox[2].textContent.length < 1) {
                button_ox[2].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[3].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[5].textContent.length < 1) {
                button_ox[5].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'o' && button_ox[7].textContent == 'o' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'o' && button_ox[1].textContent == 'o' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[5].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[3].textContent.length < 1) {
                button_ox[3].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'o' && button_ox[7].textContent == 'o' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[0].textContent == 'o' && button_ox[2].textContent == 'o' && button_ox[1].textContent.length < 1) {
                button_ox[1].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[3].textContent == 'o' && button_ox[5].textContent == 'o' && button_ox[4].textContent.length < 1) {
                button_ox[4].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'o' && button_ox[6].textContent == 'o' && button_ox[7].textContent.length < 1) {
                button_ox[7].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[0].textContent == 'o' && button_ox[3].textContent == 'o' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[1].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[7].textContent.length < 1) {
                button_ox[7].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'o' && button_ox[5].textContent == 'o' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'o' && button_ox[3].textContent == 'o' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[7].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[1].textContent.length < 1) {
                button_ox[1].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'o' && button_ox[0].textContent == 'o' && button_ox[3].textContent.length < 1) {
                button_ox[3].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[7].textContent == 'o' && button_ox[1].textContent == 'o' && button_ox[4].textContent.length < 1) {
                button_ox[4].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'o' && button_ox[2].textContent == 'o' && button_ox[5].textContent.length < 1) {
                button_ox[5].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[0].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[2].textContent.length < 1) {
                button_ox[2].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[0].textContent == 'x' && button_ox[1].textContent == 'x' && button_ox[2].textContent.length < 1) {
                button_ox[2].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[3].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[5].textContent.length < 1) {
                button_ox[5].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'x' && button_ox[7].textContent == 'x' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'x' && button_ox[1].textContent == 'x' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[5].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[3].textContent.length < 1) {
                button_ox[3].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'x' && button_ox[7].textContent == 'x' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[0].textContent == 'x' && button_ox[2].textContent == 'x' && button_ox[1].textContent.length < 1) {
                button_ox[1].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[3].textContent == 'x' && button_ox[5].textContent == 'x' && button_ox[4].textContent.length < 1) {
                button_ox[4].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'x' && button_ox[6].textContent == 'x' && button_ox[7].textContent.length < 1) {
                button_ox[7].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[0].textContent == 'x' && button_ox[3].textContent == 'x' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[1].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[7].textContent.length < 1) {
                button_ox[7].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'x' && button_ox[5].textContent == 'x' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'x' && button_ox[3].textContent == 'x' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[7].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[1].textContent.length < 1) {
                button_ox[1].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'x' && button_ox[0].textContent == 'x' && button_ox[3].textContent.length < 1) {
                button_ox[3].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[7].textContent == 'x' && button_ox[1].textContent == 'x' && button_ox[4].textContent.length < 1) {
                button_ox[4].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'x' && button_ox[2].textContent == 'x' && button_ox[5].textContent.length < 1) {
                button_ox[5].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[8].textContent == 'x' && button_ox[5].textContent == 'x' && button_ox[2].textContent.length < 1) {
                button_ox[2].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';


            } else if (button_ox[0].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[8].textContent.length < 1) {
                button_ox[8].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[2].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[6].textContent.length < 1) {
                button_ox[6].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[8].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[0].textContent.length < 1) {
                button_ox[0].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';
            } else if (button_ox[6].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[2].textContent.length < 1) {
                button_ox[2].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[0].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[2].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[6].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[8].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[3].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[5].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[1].textContent == 'x' && button_ox[4].textContent.length < 1 || button_ox[7].textContent == 'x' && button_ox[4].textContent.length < 1) {
                button_ox[4].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else if (button_ox[4].textContent == 'x' && button_ox[0].textContent.length < 1 && button_ox[1].textContent.length < 1 && button_ox[2].textContent.length < 1 && button_ox[3].textContent.length < 1 && button_ox[5].textContent.length < 1 && button_ox[6].textContent.length < 1 && button_ox[7].textContent.length < 1 && button_ox[8].textContent.length < 1) {
                button_ox[array[ran2]].textContent = 'o';
                change_play = 'you';
                mazen.textContent = 'You';

            } else {
                if (button_ox[ran].textContent.length > 0) {
                    setTimeout(com, 10)
                } else {
                    button_ox[ran].textContent = 'o';
                    change_play = 'you';
                    mazen.textContent = 'You';
                    console.log(ran)
                }
            }
        }
    }
}

let rotate_plas = 0;
function reload_change() {
    if (button_ox[0].innerHTML.length >= 0 && button_ox[1].innerHTML.length >= 0 && button_ox[2].innerHTML.length >= 0 && button_ox[3].innerHTML.length >= 0 && button_ox[4].innerHTML.length >= 0 && button_ox[5].innerHTML.length >= 0 && button_ox[6].innerHTML.length >= 0 && button_ox[7].innerHTML.length >= 0 && button_ox[8].innerHTML.length >= 0) {
        rotate_plas = rotate_plas + 360;
        reload.style.transform = 'rotate(' + rotate_plas + 'deg)';
        for (let i = 0; i <= 8; i++) {
            button_ox[i].innerHTML = '';
            button_ox[i].style.color = 'black';
            li[i].setAttribute("onClick", "xo(this)")
        }
    } else {
    }
}

setInterval(chek, 0)

function chek() {
    if (button_ox[0].textContent == 'x' && button_ox[1].textContent == 'x' && button_ox[2].textContent == 'x' || button_ox[0].textContent == 'o' && button_ox[1].textContent == 'o' && button_ox[2].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[0].style.color = 'green';
        button_ox[1].style.color = 'green';
        button_ox[2].style.color = 'green';
    }

    if (button_ox[3].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[5].textContent == 'x' || button_ox[3].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[5].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[3].style.color = 'green';
        button_ox[4].style.color = 'green';
        button_ox[5].style.color = 'green';
    }

    if (button_ox[6].textContent == 'x' && button_ox[7].textContent == 'x' && button_ox[8].textContent == 'x' || button_ox[6].textContent == 'o' && button_ox[7].textContent == 'o' && button_ox[8].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[6].style.color = 'green';
        button_ox[7].style.color = 'green';
        button_ox[8].style.color = 'green';
    }

    if (button_ox[0].textContent == 'x' && button_ox[3].textContent == 'x' && button_ox[6].textContent == 'x' || button_ox[0].textContent == 'o' && button_ox[3].textContent == 'o' && button_ox[6].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[0].style.color = 'green';
        button_ox[3].style.color = 'green';
        button_ox[6].style.color = 'green';
    }

    if (button_ox[1].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[7].textContent == 'x' || button_ox[1].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[7].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[1].style.color = 'green';
        button_ox[4].style.color = 'green';
        button_ox[7].style.color = 'green';
    }

    if (button_ox[2].textContent == 'x' && button_ox[5].textContent == 'x' && button_ox[8].textContent == 'x' || button_ox[2].textContent == 'o' && button_ox[5].textContent == 'o' && button_ox[8].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[2].style.color = 'green';
        button_ox[5].style.color = 'green';
        button_ox[8].style.color = 'green';
    }


    if (button_ox[0].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[8].textContent == 'x' || button_ox[0].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[8].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[0].style.color = 'green';
        button_ox[4].style.color = 'green';
        button_ox[8].style.color = 'green';
    }

    if (button_ox[2].textContent == 'x' && button_ox[4].textContent == 'x' && button_ox[6].textContent == 'x' || button_ox[2].textContent == 'o' && button_ox[4].textContent == 'o' && button_ox[6].textContent == 'o') {
        mazen.textContent = 'win';
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
        button_ox[2].style.color = 'green';
        button_ox[4].style.color = 'green';
        button_ox[6].style.color = 'green';
    }

    if (button_ox[0].textContent.length > 0 && button_ox[1].textContent.length > 0 && button_ox[2].textContent.length > 0 && button_ox[3].textContent.length > 0 && button_ox[5].textContent.length > 0 && button_ox[6].textContent.length > 0 && button_ox[7].textContent.length > 0 && button_ox[8].textContent.length > 0) {
        for (i = 0; i < 9; i++) {
            button_ox[i].style.color = 'red';
            li[i].onclick = ' ';
        }
    }
}