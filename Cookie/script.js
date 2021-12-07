// function setCookie(cname,cvalue,exdays){
// 	var d = new Date();
// 	d.setTime(d.getTime()+(exdays*24*60*60*1000));
// 	var expires = "expires="+d.toGMTString();
// 	document.cookie = cname+"="+cvalue+"; "+expires;
// }//ค่าคุกกี้ Setter ครั้งแรกที่เราสร้างฟังก์ชั่นสำหรับการจัดเก็บชื่อของผู้เข้าชม

// function getCookie(cname){
// 	var name = cname + "="; //ชื่อพารามิเตอร์คุกกี้เป็น CNAME
// 	var ca = document.cookie.split(';'); //สร้างตัวแปรข้อความจะถูกใช้ในการดึงคุกกี้ที่ระบุ: + CNAME "="
// 	for(var i=0; i<ca.length; i++) {
// 		var c = ca[i].trim();//แล้วอ่านแต่ละค่าในอาร์เรย์และการกำจัดของช่องว่างต่อท้ายนี้
// 		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
// 	}
// 	return "";//หากคุณพบคุกกี้ (c.indexOf (ชื่อ) == 0), ส่งกลับค่าคุกกี้ (c.substring (name.length, c.length)ถ้าคุณไม่พบคุกกี้กลับ "."
// }

// function checkCookie(){
// 	var user=getCookie("username");
// 	if (user!=""){
// 		alert("Welcome again " + user);
// 	}
// 	else {
// 		user = prompt("Please enter your name:","");
//   		if (user!="" && user!=null){
//     		setCookie("username",user,30);
//     	}
// 	}
// }

function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++)
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
}
return "";
}

function checkCookie()
{
var user=getCookie("username");
if (user!="")
  {
  alert("Welcome again " + user);
  }
else
  {
  user = prompt("Please enter your name:","");
  if (user!="" && user!=null)
    {
    setCookie("username",user,365);
    }
  }
}
