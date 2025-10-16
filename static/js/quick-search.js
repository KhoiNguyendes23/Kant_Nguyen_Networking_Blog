(()=>{const i=document.querySelector('input[type="search"], #search-input');if(!i) return;
let data=[]; fetch('/index.json').then(r=>r.json()).then(j=>data=j).catch(()=>{});
i.addEventListener('input',()=>{const q=i.value.trim().toLowerCase();const box=document.querySelector('#search-results')||(()=>{const d=document.createElement('div');d.id='search-results';d.style.position='absolute';d.style.zIndex=30;d.style.background='var(--surface)';d.style.padding='12px';d.style.borderRadius='12px';d.style.boxShadow='var(--shadow)';i.parentElement.appendChild(d);return d;})(); box.innerHTML=''; if(q.length<2) return;
const hits=data.filter(p=>(p.title||'').toLowerCase().includes(q)).slice(0,8);
hits.forEach(p=>{const a=document.createElement('a');a.href=p.permalink;a.textContent=p.title;a.style.display='block';a.style.padding='6px 0';box.appendChild(a);});});})();
