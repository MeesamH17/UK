(function(){var fs=document.querySelectorAll('#path fieldset'),i=0,btn=document.getElementById('next'),err=document.getElementById('err'),res=document.getElementById('res');
function val(n){var r=document.querySelector('input[name=q'+n+']:checked');return r&&r.value}
btn.addEventListener('click',function(){if(!val(i)){err.hidden=false;return}err.hidden=true;
if(i<fs.length-1){fs[i].hidden=true;i++;fs[i].hidden=false;if(i===fs.length-1)btn.textContent='See my path';return}
var s=val(0),goal=val(1),g=val(2),t,l;
if(s==='Just an idea'||s==='Partly written'){t='Ghostwriting or a development conversation';l='ghostwriting.html'}
else if(s==='Finished draft'){t='Editing & Proofreading before you publish';l='editing.html'}
else if(goal==='Reach more readers'){t='Book Marketing';l='marketing.html'}
else if(goal==='Sell internationally'){t='Global Distribution';l='distribution.html'}
else{t='Book Publishing';l='publishing.html'}
document.getElementById('path').hidden=true;res.hidden=false;
res.innerHTML='<h3>Suggested next step: '+t+'</h3><p>For your '+g.toLowerCase()+' project, we would start here.</p><a class="btn" href="'+l+'">Read about this service</a> <a class="btn solid" href="contact.html?service='+l.replace('.html','')+'">Enquire</a>'})})();
