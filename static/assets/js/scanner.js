const html5QrCode  = new Html5Qrcode("qr-reader");
const config       = { fps: 10, qrbox: 250 };

const urlreg       = /^https:\/\/.*\.xc9\.fr(:[0-9]{0,5})?\/show\.html\?id=[A-Za-z0-9._-]{10,60}$/;

var camOrient      = ['environment', 'user'];
var camOrientIndex = 0;


function qrCodeFound(message)
{
    $('#qr-reader-results').text("Found: " + message);

    if (!message.match(urlreg))
        return;

    $('#qr-reader-results').text('Redirecting to ' + message);
    document.location = message;
}


function startQrCode()
{
    html5QrCode.start({ facingMode: camOrient[camOrientIndex] }, config, qrCodeFound);
}


function initQrCode()
{
    $('#qr-reader-switch').click(function() {
        camOrientIndex = (camOrientIndex + 1) % 2;
        startQrCode();
    });

    $('#qr-reader-stop').click(function() {
        if ($('#qr-reader-stop').text() == "Start")
        {
            startQrCode();
            $('#qr-reader-stop').text("Stop");
        }
        else
        {
            html5QrCode.stop();
            $('#qr-reader-stop').text("Start");
        }
    });

    //startQrCode();
}

$('body').ready(function(){
    initQrCode();
});
