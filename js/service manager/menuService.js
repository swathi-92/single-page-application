function fnMenuLoad() {
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/menu1/view/menu.html');
    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('menuID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    };
    oXhr.send();
};
