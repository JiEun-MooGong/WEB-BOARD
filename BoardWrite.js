window.onload = init;

function init()
{
    var btnRegWrite = document.getElementById('btnRegWrite');
    btnRegWrite.onclick = btnRegWrite_Click;

    var btnBacktoList = document.getElementById('btnBacktoList');
    btnBacktoList.onclick = btnBacktoList_Click;
}

function btnRegWrite_Click(e)
{
  var inSub = document.getElementById('txtSub').value;
  var inCont = document.getElementById('txtCont').value;
  var inFile = document.getElementById('txtFile').value;
  var inPass = document.getElementById('txtPass').value;

  if(inSub == null || inSub == "")
  {
    alert("제목을 입력해주세요.");
    return;
  }
  if(inCont == null || inCont == "")
  {
    alert("내용을 입력해주세요.");
    return;
  }
  if(inPass == null || inPass == "" || inPass.length != 4)
  {
    alert("비밀번호 4자리를 입력해주세요.");
    return;
  }

  alert("등록완료!!");
  location.href="file:///E:/STUDY/WEB/HTML/BOARD/BoardList.html";
}

function btnBacktoList_Click(e)
{
  location.href="file:///E:/STUDY/WEB/HTML/BOARD/BoardList.html";
}
