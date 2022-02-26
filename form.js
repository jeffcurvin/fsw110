
var box= document.getElementById("box");
box.classList.add("box")
var button= document.getElementById("button")
button.classList.add("button");
    function buttonSubmit(){
        document.getElementsByName("form")[0];
        form.submit();
        form.reset();
        return false;
    }
    const form= document.form;
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        alert(`
        the street you  entered: ${form.street.value}
        city: ${form.city.value}
        state: ${form.state.value}
        `)
    })
