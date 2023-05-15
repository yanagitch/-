//ローディング画面アニメーション
const loading = document.querySelector('#loading');

window.addEventListener('load',() =>{
    loading.classList.add('loaded')
})

//メインショップネームアニメーション
const picture_1 = document.querySelector('.picture_1');
const keyframes = {
    borderRadius:[
        '50%','40%','30%','20%','10%'
    ],
};
const options = {
    duration: 2500,
    direction: 'alternate',
    iterations: Infinity,
};
picture_1.animate(keyframes,options);

//メニュー画像をふわっと表示
const animateFafde = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        //console.log(entry.target);
        entry.target.animate(
            {
                opacity:[0,1],
                filter:['blur(.4rem)','blur(0)'],
                translate: ['0 4rem',0],
            },
            {
                duration:1500,
                easing:'ease',
                fill:'forwards',
            }
        );
        }
    });
};
//監視設定
const fadeObserber = new IntersectionObserver(animateFafde);
//.fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserber.observe(fadeElement);
});
fadeObserber.observe(fadeElements);

//スライドショーを表示
const slidepictures = ["Mochajava-Image/About-1.jpg","Mochajava-Image/About-2.jpg","Mochajava-Image/About-3.jpg","Mochajava-Image/About-4.jpg"];
let num = -1;
function slideshow_timer(){
    if (num === 3){
    num = 0;
    } 
    else {
    num ++;
    }
    document.getElementById("slideshow").src = slidepictures[num];
}
    setInterval(slideshow_timer,1000);

//メニュー名をクリックするとメニュー画面を非表示に
const Menuclick = document.querySelectorAll('.list');

