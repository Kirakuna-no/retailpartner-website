'use strict';
const button=document.querySelector('.btn-menu');
const nav=document.querySelector('#mainnav');
if(button&&nav){
 button.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));});
 nav.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');}});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');}});
}
const header=document.querySelector('.site-header');
function updateHeader(){if(header)header.classList.toggle('float-header',window.scrollY>70);}
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
