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









var footer=document.createElement('footer')
footer.textContent='This is my footer'
document.body.append(footer)
