// !code by Silent_Coder
var modal=document.getElementsByClassName('modalMain')[0];
var openBtn=document.getElementById('open_btn');
var closeBtn=document.getElementById('closeBtn');
var pro_pic=document.getElementById('pro-pic');

openBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
//*click outside
window.addEventListener('click',clickOutside);

pro_pic.addEventListener('click',showMe);

function openModal(){
   modal.style.display="block";
}

function closeModal(){
   modal.style.display="none";
}

//*Click outside to close modal
function clickOutside(e){
   if(e.target==modal){
    modal.style.display="none";
      
   }
   // else{

   // }
}


