var nav=document.createElement('nav')
nav.setAttribute('id','nav1')
document.body.append(nav)

const nav2=document.getElementById('nav1')

let link=document.createElement('a')
link.setAttribute('href','https://www.google.com')
let word=document.createTextNode('google')
link.appendChild(word)
nav2.appendChild(link).style.paddingRight = "50px";


let link2=document.createElement('a')
link2.setAttribute('href','https://www.bing.com')
let word2=document.createTextNode('bing')
link2.appendChild(word2)
nav2.appendChild(link2).style.paddingRight = "50px";

var h=document.createElement('h1')
h.textContent= 'Welcome to my first website'
document.body.appendChild(h)


var newP = document.createElement('p')
newP.textContent = 'This project involves me writing my own web page using only javascript.'
document.body.appendChild(newP)


var o=document.createElement('ol')
o.setAttribute('id','ol')
document.body.appendChild(o)




var a=document.createElement('li')
a.textContent = 'first webpage'
var b=document.createElement('li')
b.textContent = 'created with javascript'
var c=document.createElement('li')
c.textContent = 'fullstack web development'
const i=document.getElementById('ol')
i.appendChild(a)
i.appendChild(b)
i.appendChild(c)



var footer=document.createElement('footer')
footer.textContent='This is my footer'
document.body.append(footer)
