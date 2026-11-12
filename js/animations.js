(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var els=document.querySelectorAll('.sec h2,.svc,.card,.why li');
if(rm||!('IntersectionObserver' in window))return;
els.forEach(function(e){e.classList.add('rv')});
var io=new IntersectionObserver(function(a){a.forEach(function(i){if(i.isIntersecting){i.target.classList.add('in');io.unobserve(i.target)}})},{threshold:.15});
els.forEach(function(e){io.observe(e)});
if(matchMedia('(pointer:fine)').matches){var c=document.createElement('div');c.className='cur';document.body.appendChild(c);
addEventListener('mousemove',function(e){c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
document.querySelectorAll('a,button').forEach(function(a){a.addEventListener('mouseenter',function(){c.classList.add('big')});a.addEventListener('mouseleave',function(){c.classList.remove('big')})})}
})();
