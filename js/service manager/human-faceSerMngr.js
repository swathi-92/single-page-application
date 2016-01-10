function fnShowHumanFace() {
    location.hash = "human-face";
}

function fnGetHumanFaceFromServer() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/human-face/view/human-face.html');
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
