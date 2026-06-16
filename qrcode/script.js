function GerarQRcode() {
    var inputUsuario = document.querySelector('textarea').value;

    if (!inputUsuario.trim()) {
        alert('Digite algo para gerar o QR Code!');
        return;
    }

    var container = document.querySelector('#QRcodeimage');
    container.innerHTML = ''; // Limpa QR Code anterior

    new QRCode(container, {
        text: inputUsuario,
        width: 300,
        height: 300
    });
}