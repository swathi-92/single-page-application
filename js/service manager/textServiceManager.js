function fnTextShow() {
    location.hash = "textformat";
}

function fnGetTextFormat() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/firstpara/view/textformat.html');
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
