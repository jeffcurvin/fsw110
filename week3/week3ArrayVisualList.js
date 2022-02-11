/*var newh=document.createElement('h1')
newh.textContent = 'Hello World'
document.body.appendChild(newh)*/
var i

for (i=0;i<=9;i++) {
    var newh=document.createElement('h1')
    newh.textContent = 'Hello World'
    newh.setAttribute('id','a')
    newh.style.fontStyle='italic'
    document.body.appendChild(newh)
}



const names = ['steve', 'larry','joe', 'shirley', 'steph', 'nate', 'rick', 'emily']


let o
for (o=0;o<=names.length;o++){
    var p=document.createElement('p')
    p.textContent=names[o]
    document.body.appendChild(p)
}