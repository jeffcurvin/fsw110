document.getElementById("add").addEventListener("click",function display(){
 var num1=  Number(document.getElementById("num1").value)
 var num2=   Number(document.getElementById("num2").value)
 var sum= num1 + num2
document.getElementById('sum').innerText=sum
})

document.getElementById('1').style.backgroundColor="red"

document.getElementById("sub").addEventListener("click",function display(){
    var sub1=  Number(document.getElementById("sub1").value)
    var sub2=   Number(document.getElementById("sub2").value)
    var answer= sub1 - sub2
   document.getElementById('answer').innerText=answer
   })
   
 
document.getElementById('2').style.backgroundColor="blue" 

document.getElementById("mult").addEventListener("click",function display(){
    var mult1=  Number(document.getElementById("mult1").value)
    var mult2=   Number(document.getElementById("mult2").value)
    var multsum= mult1 * mult2
   document.getElementById('multsum').innerText=multsum
   })
   
 
document.getElementById('3').style.backgroundColor="purple" 


document.getElementById("div").addEventListener("click",function display(){
    var div1=  Number(document.getElementById("div1").value)
    var div2=   Number(document.getElementById("div2").value)
    var divsum= div1 / div2
   document.getElementById('divsum').innerText=divsum
   })
   
 
document.getElementById('4').style.backgroundColor="green" 