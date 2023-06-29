// get element from HTMl
let numOfSub = document.getElementById('num-of-sub');
let upButton = document.getElementById('up-button');
let sections = document.getElementById('sections');
let burgerMenu = document.getElementById('burger-menu');
let homeLink = document.getElementById('home-link');
let aboutLink = document.getElementById('about-link');
let socialLink = document.getElementById('social-link');
let statisticsLink = document.getElementById('statistics-link');
let filesLink = document.getElementById('files-link');
let arBtn = document.getElementById('ar-btn');

// up btn script
window.onscroll = function() {
    if(window.scrollY >= 100) {
        upButton.style.display = 'flex';
        upButton.onclick = function() {
            window.scrollTo(0, 0)
        }
    }
    else if(window.scrollY >= 0) {
        upButton.style.display = 'none';
    }
}

//burger menu script
let con = 0;
burgerMenu.onclick = function() {
    if(con == 0) {
        burgerMenu.className = 'fa-solid fa-xmark burger-menu';
        sections.style.position = 'absolute';
        sections.style.top = '0';
        sections.style.left = '0';
        sections.style.padding = '10px';
        sections.style.direction = 'ltr';
        sections.style.flexDirection = 'column';
        sections.style.height = '30%';
        sections.style.width = '100%';
        sections.style.gap = '20px';
        sections.style.backgroundColor = '#333';
        sections.style.opacity = '50%';
        homeLink.style.display = 'block';
        aboutLink.style.display = 'block';
        socialLink.style.display = 'block';
        statisticsLink.style.display = 'block';
        filesLink.style.display = 'block';
        arBtn.style.display = 'block';
        con = 1;
    }
    else {
        burgerMenu.className = 'fa-solid fa-bars burger-menu';
        sections.style.position = 'unset';
        sections.style.top = '1';
        sections.style.left = '1';
        sections.style.padding = '0';
        sections.style.direction = 'ltr';
        sections.style.flexDirection = 'row';
        sections.style.height = '100%';
        sections.style.width = '50%';
        sections.style.gap = '20px';
        sections.style.backgroundColor = 'transparent';
        sections.style.opacity = '100%';
        homeLink.style.display = 'none';
        aboutLink.style.display = 'none';
        socialLink.style.display = 'none';
        statisticsLink.style.display = 'none';
        filesLink.style.display = 'none';
        arBtn.style.display = 'none';
        con = 0;
    }
}


// apis
let YoutupeApi = new XMLHttpRequest();
YoutupeApi.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2N76ed4n_t5wiUTSIFvlZA&key=AIzaSyDuvEShjHpRcZCreE2MZpJA4Pqi7CSI-gM')
YoutupeApi.send();
YoutupeApi.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let YoutupeApiJsObj = JSON.parse(this.responseText);
        let subscriberNum = YoutupeApiJsObj.items[0].statistics.subscriberCount;
        let viewerNum = YoutupeApiJsObj.items[0].statistics.viewCount;
        let videosNum = YoutupeApiJsObj.items[0].statistics.videoCount;
        numOfSub.innerHTML = subscriberNum;
    }
}
// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2N76ed4n_t5wiUTSIFvlZA&key=AIzaSyDuvEShjHpRcZCreE2MZpJA4Pqi7CSI-gM