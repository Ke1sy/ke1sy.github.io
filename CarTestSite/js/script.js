function showNav() {
    var nav = document.getElementById('navigation');
    if(nav.classList.contains('showNav')) {
        nav.classList.remove('showNav');
    } else {
        nav.classList.add('showNav');
    }
}

function showMenu() {
    var menu = document.getElementById('menu-list');
    if(menu.classList.contains('showMenu')) {
       menu.classList.remove('showMenu');
    } else {
        menu.classList.add('showMenu');
    }
}

//filters removing
function removeFilters() {
    var selectFilters = document.getElementsByClassName('filter-select');
    var priceFrom = document.getElementById('price-from');
    var priceUntil = document.getElementById('price-until');
    for(var i=0; i<selectFilters.length; i++) {
        selectFilters[i].value = '1';
    }
    priceFrom.value ='';
    priceUntil.value ='';

}

var priceFrom = document.getElementById('price-from');
var priceUntil = document.getElementById('price-until');
function markInput(elem){
    var afterDiv = elem.parentNode.children[1];
    afterDiv.style.background = 'orange';
}
function cleanInput(elem){
    var afterDiv = elem.parentNode.children[1];
    afterDiv.style.background = '';
}

priceFrom.onfocus = function () {
    markInput(this);
};
priceFrom.onblur = function () {
    cleanInput(this);
};
priceUntil.onfocus = function () {
    markInput(this);
};
priceUntil.onblur = function () {
    cleanInput(this);
};



//background for pop-ups
function showCover() {
    var coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
}
function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
}

//login and inputs validation
function login() {
    var loginForm = document.getElementById('login-form');
    var loginContainer = document.getElementById('login-container');
    var closeButton = document.getElementById('close-login-popup');
    loginContainer.style.display = 'flex';
    loginForm.elements.email.focus();
    showCover();
    var emailValue = loginForm.elements.email.value;
    emailValue ='';
    closeButton.onclick = function () {
        cancelLogin();
    };

    document.onkeydown = function(e) {
        if (e.keyCode == 27) { // escape
            cancelLogin();
        }
    };

    function cancelLogin() {
        var loginContainer = document.getElementById('login-container');
        hideCover();
        loginContainer.style.display = 'none';
        document.onkeydown = null;
    };
    
    loginForm.onsubmit = function () {
        var emailValue = loginForm.elements.email.value;
        var passLength = loginForm.elements.password.value.length;
        var r = emailValue.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        if (!r){
            loginForm.elements.email.style.borderColor ='red';
            return false;
        }
        if (passLength < 4 ) {
            loginForm.elements.password.style.borderColor ='red';
            return false;
        }
    }

}
//search
function findThis() {
    var search = document.getElementById('search');
    var searchBut = document.getElementById('search-button');
    var searchContainer = document.getElementById('search-form-container');
    if(search.value.length < 2) {
        addError();
        setTimeout(removeError,500);
    }
    function addError() {
        searchContainer.style.outline = "1px solid red";
        searchBut.style.outline = "1px solid red";
    }
    function removeError() {
        searchContainer.style.outline = "none";
        searchBut.style.outline = "none";
    }

}

//subscribe validation
var mailForm =  document.getElementById('subscribe-form');
var x = mailForm.elements.email;
x.onfocus = function () {
    mailForm.elements.email.style.background ='';
};

mailForm.onsubmit = function () {
    var successPopup = document.getElementById('email-popup');
    var emailVal = mailForm.elements.email.value;
    var r = emailVal.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (!r){
        mailForm.elements.email.style.background ='#fcb5af';
        setTimeout(function () {
            mailForm.elements.email.style.background ='';
        },500);
        return false;
    }
    successPopup.style.display = 'block';

    function removePopup() {
        successPopup.style.display = '';
    }
    setTimeout(removePopup,1000);
    mailForm.elements.email.value = '';
    return false;
};

//price validation (only numbers)
document.getElementById('price-from').onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
};
document.getElementById('price-until').onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
};

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }
    return null;
}

document.getElementById('price-from').onpaste = function () {
    return false;
};
document.getElementById('price-until').onpaste = function () {
    return false;
};

//phone scripts

$(function(){
    $("#phone").mask("+38(099) 999-99-99");
});

function callMe() {
    var phoneForm = document.getElementById('phone-popup-form');
    var phoneContainer = document.getElementById('phone-popup-container');
    var closeButton = document.getElementById('close-phone-popup');
    phoneContainer.style.display = 'block';
    phoneForm.elements.phoneInput.focus();
    showCover();

    closeButton.onclick = function () {
        cancelCall();
    };

    document.onkeydown = function(e) {
        if (e.keyCode == 27) { // escape
            cancelCall();
        }
    };

    function cancelCall() {
        hideCover();
        phoneContainer.style.display = 'none';

    }

    phoneForm.onsubmit = function () {

        var phoneLength = phoneForm.elements.phoneInput.value.length;
        if (phoneLength != 18 ) {
            return false;
        }
    }

}

//Changing of filters tabs

var filterTabs = document.getElementById('filter-tabs');
filterTabs.onclick = function (e) {
    var target = e.target;
    var firstTab = document.getElementById('firstTab');
    var secondTab = document.getElementById('secondTab');
    var hiddenFilters = document.getElementsByClassName('first-tab-filter');
    var isSelected;
    while(target != this) {
        if(target.id == 'firstTab' ){
            if(target.classList.contains('selected-button')) return;
            target.classList.add('selected-button');
            secondTab.classList.remove('selected-button');
            showHiddenFilters();
        }
        if(target.id == 'secondTab' ){
            if(target.classList.contains('selected-button')) return;
            target.classList.add('selected-button');
            firstTab.classList.remove('selected-button');
            removeHiddenFilters();
        }
        target = target.parentNode;
    }
    function showHiddenFilters() {
        for (var i=0; i<hiddenFilters.length; i++){
            hiddenFilters[i].classList.add('showFilter');
        }
    }
    function removeHiddenFilters() {
        for (var i=0; i<hiddenFilters.length; i++){
            hiddenFilters[i].classList.remove('showFilter');
        }
    }

};