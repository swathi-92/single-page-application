function fnCircularImageShow() {
    location.hash = "circularimage";
}

function fnGetCircularImage() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/circularimage/view/circular.html');
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
