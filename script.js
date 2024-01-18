let cookieCount = 0;

function clickCookie() {
    cookieCount++;
    updateCookieCount();
}

function updateCookieCount() {
    document.getElementById('cookieCount').innerText = cookieCount;
}

