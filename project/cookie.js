// 쿠키 설정 함수
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// 쿠키 읽기 함수
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

// 사용자 상태 확인 함수
function checkUserStatus() {
    let status = getCookie("status");
    if (!status || status === "non-member") {
        setCookie("status", "non-member", 7); // 기본적으로 비회원으로 설정
        status = "non-member";
    }
    console.log("User status:", status);
    if (status === "member") {
        document.getElementById('memberSection').style.display = 'block';
    } else {
        document.getElementById('nonMemberSection').style.display = 'block';
    }
}

// 페이지 로드 시 사용자 상태 확인
document.addEventListener('DOMContentLoaded', (event) => {
    checkUserStatus();
});
