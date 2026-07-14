
(function(){
  const navToggle=document.getElementById('navToggle');
  const navMenu=document.getElementById('navMenu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click',()=>navMenu.classList.toggle('active'));
  }

  // Smooth scroll only for same-page # links.
  // IMPORTANT: tel:, mailto:, WhatsApp and normal page links are NOT blocked.
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target=this.getAttribute('href');
      if(!target || target==="#") return;
      const el=document.querySelector(target);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
        if(navMenu) navMenu.classList.remove('active');
      }
    });
  });

  // Extra safety: make all call links open the phone dialer.
  document.querySelectorAll('.call-link').forEach(link=>{
    link.addEventListener('click',function(e){
      const href=this.getAttribute('href') || '';
      if(href.startsWith('tel:')){
        window.location.href=href;
      }
    });
  });
})();
