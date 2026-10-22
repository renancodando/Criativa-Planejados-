const tabs=[...document.querySelectorAll('.room-tabs button')];
const title=document.querySelector('#roomTitle');
const text=document.querySelector('#roomText');
const num=document.querySelector('#roomNum');

tabs.forEach((tab,index)=>tab.addEventListener('click',()=>{
  tabs.forEach(item=>item.classList.remove('active'));
  tab.classList.add('active');
  title.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:420,easing:'ease-out'});
  title.textContent=tab.dataset.room;
  text.textContent=tab.dataset.text;
  num.textContent=String(index+1).padStart(2,'0')+' / '+String(tabs.length).padStart(2,'0');
}));

document.querySelector('#year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});
    observer.unobserve(entry.target);
  });
},{threshold:.14});

document.querySelectorAll('.manifesto>div,.spaces-head h2,.process-intro,.steps article,.detail-card,.contact h2').forEach(el=>observer.observe(el));

if(matchMedia('(pointer:fine)').matches){
  const photo=document.querySelector('.hero-photo');
  addEventListener('mousemove',event=>{
    const x=(event.clientX/innerWidth-.5)*8;
    const y=(event.clientY/innerHeight-.5)*5;
    photo.style.transform=`scale(1.04) translate(${x}px,${y}px)`;
  },{passive:true});
}