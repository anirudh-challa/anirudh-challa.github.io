// Intersection reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); }});
},{threshold:0.08});
document.querySelectorAll('.card,.step,.logo').forEach(el=>{
  el.style.opacity = 0; el.style.transform = 'translateY(8px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; observer.observe(el);
});
const style = document.createElement('style'); style.innerHTML = `.in{opacity:1!important;transform:translateY(0)!important}`; document.head.appendChild(style);