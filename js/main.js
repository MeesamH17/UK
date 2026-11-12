document.documentElement.classList.add('js');
(function(){var b=document.querySelector('.burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}});
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var t=document.querySelectorAll('.tl button');t.forEach(function(x){x.addEventListener('click',function(){t.forEach(function(k){k.setAttribute('aria-selected',k===x)});
document.querySelectorAll('.tp').forEach(function(p){p.hidden=p.dataset.i!==x.dataset.i})});x.addEventListener('mouseenter',function(){x.click()})});
document.querySelectorAll('.more').forEach(function(m){m.addEventListener('click',function(){var d=m.nextElementSibling,o=d.hidden;d.hidden=!o;m.setAttribute('aria-expanded',o);m.textContent=o?'Hide':'Details'})});
})();
