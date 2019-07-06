window.onload = init;

function init()
{
    var btnRegSign = document.getElementById('btnRegSign');
    btnRegSign.onclick = btnRegSign_Click;

    var btnBacktoLogin = document.getElementById('btnBacktoLogin');
    btnBacktoLogin.onclick = btnBacktoLogin_Click;

    //var txtPassCk = document.getElementById('txtPassCk');
    //txtPassCk.onChange = txtPassCk_Change;
}

function txtPassCk_Change()
{
  var inPass = document.getElementById('txtPass').value;
  var inPassCk = document.getElementById('txtPassCk').value;

  if(inPass == inPassCk)
  {
    document.getElementById('pnPassCk').innerHTML = '비밀번호 일치';
    document.getElementById('pnPassCk').style.color = 'blue';
  }
  else
  {
    document.getElementById('pnPassCk').innerHTML = '비밀번호 불일치';
    document.getElementById('pnPassCk').style.color = 'red';
  }


}

function btnRegSign_Click(e)
{
  var inId = document.getElementById('txtUserId').value;
  var inPass = document.getElementById('txtPass').value;
  var inPassCk = document.getElementById('txtPassCk').value;
  var inName = document.getElementById('txtName').value;

  if(inId == null || inId == "")
  {
    alert("잘못된 ID 입니다.");
    return;
  }
  if(inPass == null || inPass == "")
  {
    alert("잘못된 비밀번호 입니다.");
    return;
  }
  if(inPassCk == null || inPassCk == "")
  {
    alert("잘못된 비밀번호 입니다.");
    return;
  }
  if(inName == null || inName == "")
  {
    alert("잘못된 이름 입니다.");
    return;
  }

  // DB - 회원 정보 저장 구현

  alert(inName + "님 가입을 축하합니다! 로그인 화면으로 돌아갑니다.");
  location.href="file:///E:/STUDY/WEB/HTML/BOARD/Login.html";
}

function btnBacktoLogin_Click(e)
{
    location.href="file:///E:/STUDY/WEB/HTML/BOARD/Login.html";
}
