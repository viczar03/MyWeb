window.onscroll = function(){
   
   if (document.documentElement.scrollTop > 100) {
      document.querySelector('.contenedor_up')
      .classList.add('show');
   }else{
      document.querySelector('.contenedor_up')
      .classList.remove('show');
   }
}

document.querySelector('.contenedor_up')
.addEventListener('click', () ->{
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});