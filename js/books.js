(function(){var q=document.getElementById('q'),g='',cs=document.querySelectorAll('.bk-card'),bs=document.querySelectorAll('.filters button');
function f(){var v=q.value.trim().toLowerCase(),n=0;cs.forEach(function(c){var ok=(!g||c.dataset.genre===g)&&c.dataset.t.indexOf(v)>-1;c.hidden=!ok;if(ok)n++});document.getElementById('none').hidden=n>0}
q.addEventListener('input',f);bs.forEach(function(b){b.addEventListener('click',function(){g=b.dataset.g;bs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});f()})})})();
