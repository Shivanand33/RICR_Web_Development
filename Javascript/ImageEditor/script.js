let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;

const img = document.getElementById("image");

console.log(img.src);

if (img.src === "http://127.0.0.1:5500/Javascript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}

function uploadImage() {
  const file = document.getElementById("Upload").files[0];

  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
  applyFilter();
}

function applyFilter() {
  document.getElementById("image").style.filter = `brightness(${b})
     contrast(${c})
     grayscale(${g}%)
     sepia(${s}%)
     invert(${i}%)`;
}

function chnageBrightness() {
  const value = document.getElementById("Brightness").value;
  b = (value * 2) / 100;
  applyFilter();
}
function chnageContrast() {
  const value = document.getElementById("Contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}

function chnageGrayscale() {
  const value = document.getElementById("Grayscale").value;
  g = value;
  applyFilter();
}

function chnageSepia() {
  const value = document.getElementById("Sepia").value;
  s = value;
  applyFilter();
}

function chnageSaturate() {
  const value = document.getElementById("Saturate").value;
  document.getElementById("image").style.filter = `saturate(${
    (value * 2) / 100
  })`;
}

function chnageHueRotate() {
  const value = document.getElementById("HueRotate").value;
  document.getElementById("image").style.filter = `hueRotate(${
    (value * 2) / 100
  })`;
}

function chnageBlur() {
  const value = document.getElementById("Blur").value;
  document.getElementById("image").style.filter = `blur(${(value * 2) / 100})`;
}

function chnageInvert() {
  const value = document.getElementById("Invert").value;
  i = value;
  applyFilter();
}

function reset() {
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  i = 0;

  applyFilter();
  document.getElementById("Brightness").value = "50";
  document.getElementById("Contrast").value = "50";
  document.getElementById("Grayscale").value = "0";
  document.getElementById("Sepia").value = "0";
  document.getElementById("Invert").value = "0";
}

function download() {
  if (img.src === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html") {
    alert("Please Uplaod the Image First");
    return;
  }

  if (!img.complete) {
    alert("Image Upload is in Progress. Please wait....");
    return;
  }

  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d");

  //fetch the original width and height of the image
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filter = getComputedStyle(img).filter;

  ctx.filter = filter === "none" ? "none" : filter;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const dataURL = canvas.toDataURL("image/png");

  const anchorTag = document.createElement("a");

  anchorTag.href = dataURL;

  anchorTag.download = "editedImage.png";

  document.body.appendChild(anchorTag);
  anchorTag.click();
  document.body.removeChild(anchorTag);
}
