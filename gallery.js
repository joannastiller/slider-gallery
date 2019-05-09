let currentNumber = 1;
let newNumber;
let playing = false;
let slideshowInterval;


//changing slides on pin clicks

document.querySelector(`#slide${currentNumber}`).classList.add('show');
document.querySelector(`#pin${currentNumber}`).classList.add('selected');

function selectPin(newNumber) {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector(`#pin${newNumber}`).classList.add('selected');
}

function showSlide(newNumber) {
    document.querySelector('.show').classList.remove('show');
    document.querySelector(`#slide${newNumber}`).classList.add('show');
    currentNumber = newNumber;
    selectPin(newNumber);
}

for (let pinNumber = 1; pinNumber <= 5; pinNumber++) {
    document
        .querySelector(`#pin${pinNumber}`)
        .addEventListener('click', function () {
            showSlide(pinNumber);
        })
}

//arrows

function showNextSlide() {
    newNumber = currentNumber + 1;

    if (newNumber > 5) {
        newNumber = 1;
    }
    showSlide(newNumber)
}

document.querySelector('.next').addEventListener('click', showNextSlide);


function showPreviousSlide() {
    newNumber = currentNumber - 1;

    if (newNumber < 1) {
        newNumber = 5;
    }
    showSlide(newNumber)

}

document.querySelector('.prev').addEventListener('click', showPreviousSlide);

//play slideshow

function startSlideshow() {
    document.querySelector('#play').classList.add('on');
    playing = true;
    slideshowInterval = setInterval(showNextSlide, 3000)
}

function stopSlideshow() {
    document.querySelector('#play').classList.remove('on');
    playing = false;
    clearInterval(slideshowInterval);
}


function playButtonClicked() {
    if (playing === true) {
        stopSlideshow();
    } else {
        startSlideshow()
    }
}

document.querySelector('#play').addEventListener('click', playButtonClicked);
