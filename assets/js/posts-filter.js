(()=>{const g=document.getElementById('k-grid');if(!g)return;
 const items=[...g.querySelectorAll('.k-item')];
 const all=new Set(items.flatMap(i=>(i.dataset.tags||'').split(',').map(s=>s.trim()).filter(Boolean)));
 const panel=document.getElementById('k-filter'); all.forEach(t=>{
   const b=document.createElement('button'); b.className='k-tag'; b.textContent='#'+t; b.dataset.t=t;
   b.addEventListener('click',()=>{items.forEach(x=>x.style.display=(x.dataset.tags.includes(t)?'block':''));});
   panel.appendChild(b);
 });
 const reset=document.createElement('button'); reset.className='k-tag'; reset.textContent='All'; 
 reset.addEventListener('click',()=>{items.forEach(x=>x.style.display='block');});
 panel.prepend(reset);
})();
