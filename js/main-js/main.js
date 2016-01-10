window.onhashchange = fnHasChange;


function fnDoLoad() {
    alert('page loaded');
 fnMenuLoad();
    fnHasChange();

}

function fnHasChange(oEv) {
    var sNewToken = location.hash

    switch (sNewToken) {
        case '#human-face':
            fnGetHumanFaceFromServer();
            break;
        case '#hover':
            fnGetHoverImage();
            break;
        case '#textformat':
            fnGetTextFormat();
            break;
        case '#circularimage':
            fnGetCircularImage();
            break;
        case '#rotation':
            fnGetRibbonImage();
            break;
        case '#formatempty':
            fnGetEmpty();
            break;
        case '#shape':
            fnGetTalkBubbleImage();
            break;
        case '#button':
            fnGetButton();
            break;
        case '#first':
            fnGetFirstLetter();
            break;
        case '#column':
            fnGetThreeColumn();
            break;
        case '#ffooter':
            fnGetFooter();
            break;
        case '#blurtext':
        fnGetBlurText();
            break;
        case '#border':
        fnGetBorderImage();
            break;
        case '#content':
        fnGetTextIndent() ;
            break;
        case '#threeboxes':
        fnGetThreeBoxes();
            break;
        case '#about':
            fnGetAbout();
            break;
        default:
            break;
    }

}
