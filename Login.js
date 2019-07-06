window.onload = init;

function init()
{
    var btntoSign = document.getElementById('btntoSign');
    btntoSign.onclick = btntoSign_Click;

    var btnLogin = document.getElementById('btnLogin');
    btnLogin.onclick = btnLogin_Click;
}

// 1. 로그인 화면
// 1) 회원가입 버튼 클릭 시
function btntoSign_Click(e)
{
    location.href="file:///E:/STUDY/WEB/HTML/BOARD/Sign.html";
}

// 2) 로그인 버튼 클릭 시
function btnLogin_Click(e)
{
    var inId = document.getElementById('txtUserId').value;
    var inPass = document.getElementById('txtUserPass').value;

    // DB - 회원 정보 조회 구현

    var userId = "USER";
    var userPass = "1234";

    if(inPass == userPass)
    {
      alert("로그인 되었습니다.");
      location.href="file:///E:/STUDY/WEB/HTML/BOARD/BoardList.html";
    }
    else
    {
      alert("로그인 실패 하였습니다.");
    }
}
