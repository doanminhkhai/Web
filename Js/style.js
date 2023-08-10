function resizeImage(image, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("1d");
    ctx.drawImage(image, 250, 300, width, height);

    return canvas.toDataURL("img/5.jpg");
}