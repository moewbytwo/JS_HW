function update(previewPic) {
    console.log("Event triggered!");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");
    imageDiv.innerText = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
