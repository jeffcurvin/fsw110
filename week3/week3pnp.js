var i
const names=['Jeff','Bob','Tom','Billy','Sarah']
for (i=0;i<names.length;i++) {
    var newh=document.createElement('h2')
    newh.textContent = names[i]
    newh.setAttribute('id','a')
    newh.classList.add('border')
    newh.style.fontSize= '20px';
    newh.style.fontWeight= 'lighter';
    newh.style.fontFamily= 'sans-serif';
    newh.style.color= 'cornflowerblue'
    document.body.appendChild(newh)
}



