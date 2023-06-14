// youtube statistics
// get elements from HTML
let numOfSub = document.getElementById('num-of-sub');
let numOfViewer = document.getElementById('num-of-viewer');
let numOfVideos = document.getElementById('num-of-videos');


// api
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
        numOfViewer.innerHTML = viewerNum;
        numOfVideos.innerHTML = videosNum;
    }
}

// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2N76ed4n_t5wiUTSIFvlZA&key=AIzaSyDuvEShjHpRcZCreE2MZpJA4Pqi7CSI-gM

// tiktik statistics

//https://open.tiktokapis.com/v2/user/info/