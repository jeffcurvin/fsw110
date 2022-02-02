var h=document.createElement('h1')
h.textContent= 'Welcome to my js site'
document.body.appendChild(h)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with javascript'
document.body.appendChild(newP)

var o=document.createElement('ol')
o.setAttribute('id','ol')
document.body.appendChild(o)

var a=document.createElement('li')
a.textContent = 'I am first'
var b=document.createElement('li')
b.textContent = 'I am second'
var c=document.createElement('li')
c.textContent = 'I am third'
const i=document.getElementById('ol')
i.appendChild(a)
i.appendChild(b)
i.appendChild(c)