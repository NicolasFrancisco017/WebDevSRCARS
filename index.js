const banner = document.getElementById("banner_principal");


function fadeOutAndChangeBanner() {
    let opacity = 1;
    
    const fadeOut = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1;
            banner.style.opacity = opacity;
        } else {
            clearInterval(fadeOut);
            trocarImagem();
        }
    }, 50);
}

function trocarImagem() {

    if(banner.src.endsWith("banner1.png")) {
        banner.src = "./img/banner2.jpg"
    } else {
        banner.src = "./img/banner1.png"
    }

    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            banner.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 50);
}

document.getElementById("home-button-left").addEventListener("click", fadeOutAndChangeBanner);
document.getElementById("home-button-right").addEventListener("click", fadeOutAndChangeBanner);
