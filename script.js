// window.addEventListener('DOMContentLoaded',function (){
  let buttons = document.querySelectorAll('button');
  let btn_ota = document.querySelector('.card_button');
  let card = document.querySelectorAll('.card');


  function mymain(){
      card.forEach(item => {
         item.classList.add('none');
         item.classList.remove('show','fade');
      });
      buttons.forEach(item => {
        item.classList.remove('activ');
      });
}

function imain(i = 0){
  card[i].classList.add('show','fade');
  card[i].classList.remove('none');
  buttons[i].classList.add('activ');

}
mymain();
imain();
  
btn_ota.addEventListener('click',(event) =>{
  if(event.target && event.target.classList.contains('button')){
    buttons.forEach((item , i ) => {
       if(event.target == item){
        mymain();
        imain(i);
       }
    });
  }
});


// });