var time = 1000;

function changeImg() {
    var arr = new Array();
    var str = "../img/";
    arr[0] = str + "tubaLogo.webp";
    arr[1] = str + "the sky.avif";
    arr[2] = str + "mozila_logo.png";
    arr[3] = str + "tubaLogo.webp";
    arr[4] = str + "the sky.avif";
    var i = Math.round(Math.random() * arr.length);
    document.getElementById("image").src = arr[i];
    setTimeout("changeImg()", time);
}

function stopChangeImg() {
    clearTimeout(time);
}
