function fnFirstShow() {
    location.hash = "first";
}

function fnGetFirstLetter() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/firstletter/view/first.html');
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
