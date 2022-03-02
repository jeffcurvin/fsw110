document.form.addEventListener("submit",submission)

function submission(event){
    event.preventDefault()
    var radioValue= radio ();
    console.log (radioValue) 
    var checkbox1= checkbox();
    console.log(checkbox1)
    alert("name: " + document.getElementById("firstName" ).value + "\nAge " +  document.getElementById("lastName" ).value +
    " \nAge: " + document.getElementById("age" ).value + '\n' + radioValue + '\n' + checkbox1
    )
}


//need function for radio buttons
//need function for checkboxes


function radio(){
var element= document.form["visit"]
console.log (element.value)
return element.value
}



function checkbox(){
var element= document.getElementsByName('vehicle')
console.log(element)
var value=""
for (var i=0;i<element.length;i++){
    if (element[i].checked){
value+= element[i].value + " " 
    } 
}
return value
}



