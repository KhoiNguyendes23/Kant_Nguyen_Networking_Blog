(()=>{const els=[...document.querySelectorAll('.post-list .post-entry, .archive-entry')];
let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
els.forEach(el=>io.observe(el));})();
