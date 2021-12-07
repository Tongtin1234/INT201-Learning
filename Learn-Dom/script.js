// let myDiv = document.getElementById('myDiv');
// myDiv.innerHTML = 'Hello my world!!';

let listItem = document.getElementsByClassName('item');
listItem[0].innerHTML = listItem.length + ' items';
listItem[1].style['color'] = '#FF0000';
listItem[2].style['background-color'] = '#FF0000';
//เนื่องจากคำสั่ง document.getElementById(id) 
//จะอ้างอิงถึง Element ได้เพียงตัวเดียว ถ้าเราต้องการอ้างถึง 
//Element ครั้งละหลาย ๆ ตัวก็จำเป็นต้องเปลี่ยนไปใช้คำสั่ง 
//document.getElementsByClassName(class name) 
//หรือคำสั่ง document.getElementsByTagName(tag name) แทน ซึ่งจะคืนค่ากลับมาเป็นอาเรย์
let deleteButton= document.getElementById('deleteButton');
deleteButton.addEventListener('click', function() {
 alert('Click delete button!!!');
 let app = document.getElementById('app');
 let myDiv = document.getElementById('myDiv');
 app.removeChild(myDiv);
});

let insertButton = document.getElementById('insertButton');
insertButton.addEventListener('click', function() {
 alert('Click insert button!!!');
 let newItem = document.createElement("li");
 let text = document.createTextNode("new li item");
 newItem.appendChild(text);

 let myList = document.getElementById("myList");
 myList.appendChild(newItem);
});
/* ถัดจากการลบ Element แล้ว เราก็มาดูเหตุการณ์เพิ่ม Element 
ซึ่งก็ใช้หลักการเดียวกันกับการลบ Element นั่นคือ เราจะต้องอ้างอิงไปที่
 Element พ่อก่อน แล้วสั่งให้ Element พ่อทำการเพิ่ม Element ลูก 
 โดยเราสามารถสร้าง Element ลูกด้วยคำสั่ง document.createElement(element tag) 
 เพื่อสร้าง HTML Tag และคำสั่ง document.createTextNode(text) 
 เพื่อสร้างข้อความที่อยู่ใน HTML Tag นั้น แล้วจึงค่อยใช้คำสั่ง element.appendChild(element) 
 เพื่อเพิ่ม Element เข้าไปในอีก Element หนึ่ง*/
