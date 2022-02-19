const square = document.getElementById('square')

square.addEventListener('click', function(){

})

square.addEventListener('mouseover',function(){
  square.style.backgroundColor="green"
})
//square.addEventListener('load',function(){
  //  square.style.backgroundColor = "black"
//})


square.addEventListener('mousedown',function(){
    square.style.backgroundColor="yellow"
  })

  square.addEventListener('mouseup',function(){
    square.style.backgroundColor="blue"
  })

  square.addEventListener('dblclick',function(){
    square.style.backgroundColor="red"
  })

  square.addEventListener('wheel',function(){
    square.style.backgroundColor="purple"
  })

  document.addEventListener('keydown',function(event){
    switch(event.code){
        case'KeyR':
            square.style.backgroundColor="red"
            break;
            case'KeyP':
            square.style.backgroundColor="purple"
            break;
            case'KeyG':
            square.style.backgroundColor="green"
            break;
            case'KeyB':
            square.style.backgroundColor="black"
            break;
            case'KeyY':
            square.style.backgroundColor="yellow"
            break;
  }})

  document.body.onload = function load(){
    square.style.backgroundColor="black";
}
  