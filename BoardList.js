window.onload = init;

function init()
{
    var btntoWrite = document.getElementById('btntoWrite');
    btntoWrite.onclick = btntoWrite_Click;

    var btnLogout = document.getElementById('btnLogout');
    btnLogout.onclick = btnLogout_Click;
}

function btntoWrite_Click(e)
{
  location.href="file:///E:/STUDY/WEB/HTML/BOARD/BoardWrite.html";
}

function btnLogout_Click(e)
{
  alert("로그아웃!!");
  location.replace("file:///E:/STUDY/WEB/HTML/BOARD/Login.html");
}
