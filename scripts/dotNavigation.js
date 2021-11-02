$(document).load().scrollTop(0);

const navigatorAnimation = () => {
    const color = '#C0DEEF';
    const top = document.documentElement.scrollTop;
    let navigationBtns = document.getElementById('navigation').getElementsByTagName('div');
    console.log(top);
    if (top >= 0 && top <= 500) {
        navigationBtns[0].style.backgroundColor = color;
        navigationBtns[1].style.backgroundColor = 'transparent';
        navigationBtns[2].style.backgroundColor = 'transparent';
        navigationBtns[3].style.backgroundColor = 'transparent';
    }
    else if (top > 500 && top < 2500) {
        navigationBtns[0].style.backgroundColor = 'transparent';
        navigationBtns[1].style.backgroundColor = color;
        navigationBtns[2].style.backgroundColor = 'transparent';
        navigationBtns[3].style.backgroundColor = 'transparent';
    }
    else if (top > 2500 && top < 3100){
        navigationBtns[0].style.backgroundColor = 'transparent';
        navigationBtns[1].style.backgroundColor = 'transparent';
        navigationBtns[2].style.backgroundColor =  color;
        navigationBtns[3].style.backgroundColor = 'transparent';
    }
    else {
        navigationBtns[0].style.backgroundColor = 'transparent';
        navigationBtns[1].style.backgroundColor = 'transparent';
        navigationBtns[2].style.backgroundColor = 'transparent';
        navigationBtns[3].style.backgroundColor = color;
    }
}

window.addEventListener('scroll', function() {
    navigatorAnimation();
});

function jump(h){
    let top = document.getElementById(h).offsetTop;
    window.scrollTo({top: top, behavior: "smooth"});
    navigatorAnimation();
}
