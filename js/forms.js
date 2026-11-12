(function(){var ENDPOINT='';/* Set to your form service URL, e.g. https://formspree.io/f/xxxx */
var f=document.getElementById('cf'),s=document.getElementById('fs'),sv=document.getElementById('service');
var m={ghostwriting:'Ghostwriting',editing:'Editing & Proofreading',publishing:'Book Publishing','book-design':'Book Cover & Interior Design',marketing:'Book Marketing',distribution:'Global Distribution'};
var p=new URLSearchParams(location.search).get('service');if(p&&m[p])sv.value=m[p];
f.addEventListener('submit',function(e){e.preventDefault();var bad=0;
f.querySelectorAll('.bad').forEach(function(x){x.remove()});
f.querySelectorAll('[required]').forEach(function(i){var v=i.value.trim(),ok=v&&(i.type!=='email'||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));i.setAttribute('aria-invalid',!ok);
if(!ok){bad++;var d=document.createElement('span');d.className='bad';d.textContent=i.type==='email'?'Enter a valid email address.':'This field is required.';i.parentNode.appendChild(d)}});
if(bad){s.textContent='Please fix '+bad+' highlighted field'+(bad>1?'s':'')+'.';s.className='err';return}
if(!ENDPOINT){s.textContent='Form is valid, but no form service is connected yet, so nothing was sent. See README.';s.className='err';return}
fetch(ENDPOINT,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw 0;f.reset();s.textContent='Thank you. Your enquiry has been sent.';s.className=''}).catch(function(){s.textContent='Sending failed. Please try again or email us directly.';s.className='err'})})})();
