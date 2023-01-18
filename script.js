const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const player = new Image();

player.src = 'assets/shadow_dog.png';
let frameX = 0;
let frameY = 0;
let repetitions = 6;
let x = 0;
let y = 0;

const spriteWidth = 575;
const spriteHeight = 523;

window.addEventListener('keydown', e => {
    console.log(e.key);
    animacion(e.key);
})
function animacion(key) {
    switch (key.toLowerCase()) {
        case '1':
            frameY = 1;
            repetitions = 6;
            break;
        case '2':
            frameY = 2;
            repetitions = 6;
            break;
        case '3':
            frameY = 3;
            repetitions = 8;
            break;
        case '4':
            frameY = 4;
            repetitions = 8;
            break;
        case '5':
            frameY = 5;
            repetitions = 3;
            break;
        case '6':
            frameY = 6;
            repetitions = 5;
            break;
        case '7':
            frameY = 7;
            repetitions = 6;
            break;
        case '8':
            frameY = 8;
            repetitions = 11;
            break;
        case '9':
            frameY = 9;
            repetitions = 3;
            break;
        case '0':
            frameY = 0;
            repetitions = 6;
            break;

        default:
            alert('Seleccione un comando');
            break;
    }
}
//Funcion animacion1
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //Mostraremos la imagen canvas1
    ctx.drawImage(player, 
                  frameX * spriteWidth, frameY * spriteHeight,
                  spriteWidth, spriteHeight,
                  0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    x++;
    requestAnimationFrame(animate);
}
animate();