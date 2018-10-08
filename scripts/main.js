var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/testimage.jpg') {
      myImage.setAttribute ('src','images/testimage2.jpg');
    } else {
      myImage.setAttribute ('src','images/testimage.jpg');
    }
}