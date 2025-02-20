document.getElementById('vpnEncryptionSlider').addEventListener('input', function () {
    document.getElementById('vpnEncryptionValue').innerText = 'Шифрование: ' + this.value + '-bit';
});