let progressBar1 = document.querySelector('.p1');
let valueContainer1 = document.querySelector('.v1');

let progressValue = 0;
let progressEndValue1 = 65;
let speed = 10;

let progress1 = setInterval( ()=>{
    progressValue++;
    valueContainer1.textContent = `${progressValue}%`;
    progressBar1.style.background = `conic-gradient( #C147E9 ${progressValue * 3.6}deg,#F0E9FF ${progressValue * 3.6}deg)`;
    if(progressValue == progressEndValue1){
        clearInterval(progress1);
    }
}, speed);

let progressBar2 = document.querySelector('.p2');
let valueContainer2 = document.querySelector('.v2');

let progressValue2 = 0;
let progressEndValue2 = 85;

let progress2 = setInterval( ()=>{
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient( #C147E9 ${progressValue2 * 3.6}deg,#F0E9FF ${progressValue2 * 3.6}deg)`;
    if(progressValue2 == progressEndValue2){
        clearInterval(progress2);
    }
}, speed);

let progressBar3 = document.querySelector('.p3');
let valueContainer3 = document.querySelector('.v3');

let progressValue3 = 0;
let progressEndValue3 = 76;

let progress3 = setInterval( ()=>{
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient( #C147E9 ${progressValue3 * 3.6}deg,#F0E9FF ${progressValue3 * 3.6}deg)`;
    if(progressValue3 == progressEndValue3){
        clearInterval(progress3);
    }
}, speed);

let progressBar4 = document.querySelector('.p4');
let valueContainer4 = document.querySelector('.v4');

let progressValue4 = 0;
let progressEndValue4 = 60;

let progress4 = setInterval( ()=>{
    progressValue4++;
    valueContainer4.textContent = `${progressValue3}%`;
    progressBar4.style.background = `conic-gradient( #C147E9 ${progressValue4 * 3.6}deg,#F0E9FF ${progressValue4 * 3.6}deg)`;
    if(progressValue4 == progressEndValue4){
        clearInterval(progress4);
    }
}, speed);

