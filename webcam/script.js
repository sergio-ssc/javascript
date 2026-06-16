var video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play()
})
.catch(error => {
    console.log(error);
})

document.querySelector('button').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth

    var content = canvas.getContext('2d');
    content.drawImage(video, 0, 0);

    var link = document.createElement('a');
    link.download = 'webcam.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Download image';
    document.body.appendChild(link);
}) 