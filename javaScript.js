const titleColor = document.querySelector('.title__color');
const reset = document.querySelector('.btn__reset');
const btnColor = document.querySelector('.btn__color');
const AllBoxs = document.querySelectorAll('.box');
const body = document.querySelector('body');
const subtitle = document.querySelector('.subtitle__color');
const copyImg = document.querySelector('.copy__img');

btnColor.addEventListener('click', function () {
    for (let i = 0; i < AllBoxs.length; i++) {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var colorID = AllBoxs[i];

        colorID.style.background = randomColor;

        colorID.addEventListener('click', function () {
            body.style.background = randomColor;
            subtitle.style.color = randomColor;
            titleColor.style.color = randomColor;
            subtitle.textContent = randomColor;
            document.title = `Background: ${randomColor}`;
            
            copyImg.addEventListener("click", function () {
                let tempInput = document.createElement('input');
                tempInput.value = randomColor;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                copyImg.style.background = randomColor;
            });
        });

        reset.addEventListener('click', function () {
            let reset = "#fff";
            let reset2 = "#000";
            body.style.background = reset;
            copyImg.style.background = reset;
            subtitle.textContent = reset;
            titleColor.style.color = reset;
            subtitle.style.color = reset2;
        });
    };
});
