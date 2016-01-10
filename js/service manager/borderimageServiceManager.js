function fnShowBorderImage() {
    location.hash = "border";
}

function fnGetBorderImage() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/borderimage/view/pbod.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
        
    };
    oXhr.send();
}
