function fnShowHover() {
    location.hash = "hover";
}

function fnGetHoverImage() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/hover/view/image.html');
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
