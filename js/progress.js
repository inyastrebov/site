// const circle = document.querySelector('.progress');



// const progressAnimation = () => {
//     let percentageProgress = Math.floor(50);

//     let radius = circle.getAttribute('r');
//     let circleLenght = 2 * Math.PI * radius;
//     circle.setAttribute('stroke-dasharray', circleLenght);
//     circle.setAttribute('stroke-dashoffset', circleLenght - circleLenght * percentageProgress / 100);
// };

// progressAnimation();

const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {

    if (el.dataset.percentage == 'true') {
        let progress = el.querySelector('.progress');
        let valueBlock = el.querySelector('.facts-element__value');
        let radius = progress.getAttribute('r');
        let circleLenght = 2 * Math.PI * radius;
        let full = el.dataset.full;
        let value = el.dataset.value;
        let percentageProgress = Math.floor(value / full * 100);
        valueBlock.textContent = value;
        progress.setAttribute('stroke-dasharray', circleLenght);
        progress.setAttribute('stroke-dashoffset', circleLenght - circleLenght * percentageProgress / 100);
    } else {
        let progress = el.querySelector('.progress');
        let valueBlock = el.querySelector('.facts-element__value');
        let radius = progress.getAttribute('r');
        let circleLenght = 2 * Math.PI * radius;
        let percent = el.dataset.percent;
        let percentageProgress = Math.floor(percent);
        valueBlock.textContent = percent + '%';
        progress.setAttribute('stroke-dasharray', circleLenght);
        progress.setAttribute('stroke-dashoffset', circleLenght - circleLenght * percentageProgress / 100);
    }
});