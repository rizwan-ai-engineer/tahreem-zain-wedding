(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) {e.target.classList.add('visible'); observer.unobserve(e.target);} }), {threshold:.08});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
  if (!reduceMotion) {
    const field = document.querySelector('.petal-field');
    let created=0;
    const addPetal=()=>{if(!field || document.hidden || created>=16)return;const el=document.createElement('span');el.className='petal';el.setAttribute('aria-hidden','true');el.textContent=['❀','✿','❁'][Math.floor(Math.random()*3)];el.style.left=Math.random()*100+'vw';el.style.setProperty('--duration',(9+Math.random()*6)+'s');el.style.setProperty('--drift',((Math.random()-.5)*210)+'px');el.style.setProperty('--size',(11+Math.random()*10)+'px');field.append(el);created++;el.addEventListener('animationend',()=>{el.remove();created--;},{once:true});};
    for(let i=0;i<5;i++) setTimeout(addPetal,700*i);
    setInterval(addPetal,1500);
  }
  const countdown = document.querySelector('#countdown');
  if(countdown){
    const eventTime = new Date('2026-11-12T00:00:00+05:00').getTime();
    const update=()=>{let remaining=Math.max(0,eventTime-Date.now());const vals={days:Math.floor(remaining/86400000),hours:Math.floor(remaining%86400000/3600000),minutes:Math.floor(remaining%3600000/60000),seconds:Math.floor(remaining%60000/1000)};Object.entries(vals).forEach(([unit,value])=>{const el=countdown.querySelector(`[data-unit="${unit}"]`);if(el)el.textContent=String(value).padStart(2,'0');});};
    update();setInterval(update,1000);
  }
  const form=document.querySelector('#rsvp-form');
  if(form)form.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#guest-name').value.trim();const chosen=form.querySelector('input[name="attendance"]:checked').value;const msg=`Assalam o Alaikum, ${name ? 'this is '+name+'. ' : ''}I would like to confirm that I am ${chosen === 'unable to attend' ? 'unable to attend' : 'attending '+chosen} for Tahreem Mukhtar and Zain’s wedding celebrations.`;window.open('https://wa.me/923042844248?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');});
})();


// Highlight the section currently in view while scrolling.
(() => {
  const links = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if (!visible.length) return;
    const id = visible[0].target.id;
    links.forEach(link => {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('current', active);
      if (active) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-20% 0px -50% 0px',threshold:[0,.1,.3,.5]});
  sections.forEach(section => observer.observe(section));
})();
