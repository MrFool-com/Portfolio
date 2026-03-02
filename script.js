// ── Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
function closeMobileNav(){
  hamburgerBtn.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow='';
}
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mobileNav.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => setTimeout(closeMobileNav, 150));
});

// ── Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if(savedTheme === 'light') document.body.classList.add('light');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// ── CV Download (direct, no redirect)
const CV_B64 = "data:application/pdf;base64,JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNCAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YxIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKMyAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0Jhc2VGb250IC9aYXBmRGluZ2JhdHMgL05hbWUgL0YzIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNSAwIG9iago8PAovQ29udGVudHMgOSAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCA4IDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9QYWdlTW9kZSAvVXNlTm9uZSAvUGFnZXMgOCAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL0F1dGhvciAoUmFuamFuIEJhcm1hbikgL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDMwMTA0MzQwMSswMCcwMCcpIC9DcmVhdG9yIChhbm9ueW1vdXMpIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDMwMTA0MzQwMSswMCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpIAogIC9TdWJqZWN0ICh1bnNwZWNpZmllZCkgL1RpdGxlIChSYW5qYW4gQmFybWFuIFwyMDQgUmVzdW1lKSAvVHJhcHBlZCAvRmFsc2UKPj4KZW5kb2JqCjggMCBvYmoKPDwKL0NvdW50IDEgL0tpZHMgWyA1IDAgUiBdIC9UeXBlIC9QYWdlcwo+PgplbmRvYmoKOSAwIG9iago8PAovRmlsdGVyIFsgL0FTQ0lJODVEZWNvZGUgL0ZsYXRlRGVjb2RlIF0gL0xlbmd0aCAzODM2Cj4+CnN0cmVhbQpHYiIvKjk2OGlJJyMqWzVpM1x1QTslVl9RJyY6c1lbW18jI1tTckpTV04iJG9WSihlbTdCL20uU2xHKjxoWmNZNzhEMG0tLig7Y1FRTGdNWEZTRkMjRjk7cTslZkBYR3BMb0szYVYpOUstXHRVK11MLj9eTmc9YEM/JmdUXl47a1pPcyIpYHJYOmFGJ2ZdTjtCOjlZOlw1WGdZIklOQENfJCYkMi5CIzdzVzdANDhoI3M6KD9POHIzRzRbIzw1bS5pajhlU24tL21MazBuaGY0QCM6SV5fdGxKV3VJJmFbWSs/MyNpaTYuKzdrNScmSDAjbWg9SHBdLE8/JytsQUdBKVZLYUMqNEY3KnRvYUdkTFs2akhxJ05kVSZbPlYxYnRIQVlWLnQrPilsKW41XltHcmRnMW4yKUpSRDRVKkxiSig2K3BUazRTVGA3SkIlWzp1WmAuW3AwakBlbSM7MC5KJTVuPjcwc2ZWZ250WjM9cnVebFFiPFtZXShXKyJIPmVvOm02T24oLk1UciZnRS1vVV8xY1FLNltyTVxFPiVmYV5aJS41Vk82cCFVNmdoLU50QWRQYUZodVU9JSlIZDhwUTY3M0UkQFNJblFNNVIzZ2RDVmdINUVNdWkqIkhDZGkoOzc3QnEjckBiVF1OQk1aNUIrSWEwKHBVMyMnW2YzJFtub2o5Y0ZMMGVeTTw/PG8wMlZvcl9zIU1nQU80Z1A9XjdhTW5fYGFKMD5CITt0JDdNb1Uvcl9pUyksXGxfTnBRVS1AVjtFVXBlLDZzTFIhZjpJZ1RdPWIpLig7Pi85TiYhaSkoXkJoIUsnayRfcXM7aiNmdHUvMDVfU0tjLlIhV20xTVk4LDtrTFhpLTssYGYxN2tublltMVo8QmVeWztxIUlhTWsvKWJkKDRdKl4nb09iPVUwaFMoI0siRyczVmw1XUU3MjVaJCwhIiteXUNMKnEzYDdpUVBqM1o3RSxwRlo2RVo/O2FMbFhUZ1BIUFNdJDVBJ05faWAyJCFYdUxCamBkWV5DWSwxITFqaSY1PCRfOG1jNl1QWy1dKStZZygrdT0qZmlAOC1TKkBmZW1JTXR1X2w6VytBXE8mbFFQL0dPcmswaUFaNWFlTD1KVDZgXnRSSEolJ0cqJmJGb1pvIWMsPlA6RFpZXHEpQ2BTRUxFbmBlZXE6cCk+c2sybV0wJ1A8Q21tKjhObyxmWlghMmZXQmIlaXJhQzo8MXNXTFYyNDouQDxsT0MhVCE6RCRYPjJqUlNfZFVZOkc4KCteWC4/aFxcPVM+XjQwLzwxLkRmNjxiJj1vPj1OblkvYXEmNklkcmVIKlleayM9Z05fKSw/WSw8a1lsa2UtRy8qXEdUJ1wzMCMhWlBdS0hbdVVUZClQLzJhJileOyQpS1Q9dXE3OnBqWTZBOCg/JkE1TFYjRTEzb1hVdGhXaDpgdVApRjpVUFVFaSFQa3EmdDswWDtRQmw3Ii0oWWQkLmBzOjxHP0lgYiMoaEdWIVcrJEJELEoiQmk+cXMvckQhL2RsTEsqXF06VlhyTyxCVjgvLTImOy1mKF9BcW5HYldtS3E7dHUkX2VrWFNaXFhZQlcuT2tpNiVPX1FyL1AvNVxrKCpjZlxXUkYkS1FbRCJXVkk4PykpVy5uTmFOWENqXFhTWjgzOTxMMkZvbmsjVm9VTFgoNXNSYXFRRjNSc1hAc0JYRmFDITNjXy0rSjhmUiUzUVdSaTtqQjslMCxrZSVzYEVpVy5YRipRIy5DbVZGVT4zX0EqJmgvV0FgKlVPal49N1xFYSk6aWoyNztmODgiOyRdIVUhbEdjXy5bZDQ0XipKPWIxSlZHQWhkJEgoWmxqQkMqUlZjYDtANTQ7W3Q1KmxYMU0sbDZ0TTVncUYmK2snPkIqUWs3UjI0XEMwbkxQOXAzdWJpWStRcSVUQiw/KSgxc2Y3Lm4qV1RRT0FNZjlkWDw2LFhQIilrZnJaJStrQ242KzRLLD5OISNUXmQpTmxrQVVXZz0kKGpMbChKQl06W0RibWpKZDhIOVNeSTYpL3AuWGprU3EzcENpJ19qXyZYb3BILDVIRVFzcDV1KVI6OlhjZTIuWkQqWVQoWGEybzNHVERvS09VOkM6J3I1WCk6aFVYOjxEMVZtVkA8Z0RvUmo6VD1EV2NYYkwwPTdRLzVLaVZsSFRaQklvbmEuMVQ9Y0FNRCoyOVooK2ZeXUJONmwyPWooLjg9ayhTM1hqVjpbPzZMYiZkPkRRO3JmM3RTXkhCVDxvUVQyQ1w6WVAqTGc0RzxqW2U4XFJlYk88bEo+Uic6N3VOanBNb2tYIWNlUkhwWXU1aj8vb0JbJHBAW11qIiwjLlgrLE1PJStJMyU6PWI9RSsuXXUuN0NkSjlcNlZFQHJAQ0BaQ2pyJydWTCtsNlovO2hpVyw1NGklPiQ0PzZFL15GbDpZVTMsYCIyPjc3S0tJLlI5JCElbXVmKV1QOXEvXkhdIyhDLkU4PCcnWkxFQzYrWkprMjhRdFtAMlBSJ01aUz51XkNTUXMkVWwhVWdRQGgpT2Jdc0xaKkhpIUVIdHE6Pi9dcjQzQlozZG50T2lOOFg3NTduO245RUNVTlwwU2xKNCJdKklmQlhOPlclN01SbHVtPkNnNyoqIiJUKltRJW9mVTsqYXJJJyInSHU7QywlcDA/Z2FhViQ/bSE2YytCRU9QX1ppdWhSVzN0VyZiLihSPzJLQTlScU4rJVJbO3BOUHFYJykhXVNFPjZfL0FddEFoYEBsN0taOSFaUE1PWGNVOSIxNi4pRTxCb0w2YTg8L1hOanNvVWYjREdSM1hwUmZsZS40OCctbyUqKi9AczddS1A9Ui07bkFoYWVsbFVbLyNzM1oyLV9McWopUCpbWCxsPywtT1txO2pgbyVtblxPYU4kVisjPmVgPDBDa0gkVys5ajRgbjZZVUpjSS5sYXEiYmQ7L1UpUl10cEtUTSFAIWY4P05fa291LUY6ME0qM1IjOjszQGRIZ1k4cms9KGksZCJANW0jWSUsIy1hOi1zQklJYFVOZ2ZLdCIza2A2ZjZhRFljbnBXQkIuKiJFZlIoPmpzQ189S1JnImpTUyYhPFxkTCRuTHVCKUwxQ1AjRjFFUFltZyZbcVVmZFRiVkFKcV1iSEZYTDcqIydmOlpmKE5MVzReSjNKaHE9Ii9WISIxMzgpNUtfTTkwTFVWOkcyK0xsR2AnSU1qTGxna2ZPOXNCKDhkZWl1a1FcI10pK0gwYzJeNjcsIk9BcD9QTzY4QSFoSyxELTAmL1paaVEuK21ZUGRhQTRMPzBTI0RhTzJxIkhCRUFyUj88QDwsTWFLRlFESD00Q01JQSUrdFspKUlHY2NoR2ldW2ZQT1ldS0whbmhiZXRIaGtuYmlIYWNqK2FZIiVpYG0sPS9vKiQ8V2U3W2pkIlFnOEMvOyR0Olg4UXBuIWpQZ2QkXjlvUlo+VS9eR247JHBVMCNXZTI6KzUlIz1LLEAzPEFsMzpzQVdgOl1YWmw3K2I6JU4zaFIpc2RnOzMlSyVvRjdMKmR0OTM7VEpoSmxWUF9QJ05cJTs7OUc5JFNuXTlSK2R1O10pK2xLXkZoM148TGJVcW1QXE9KVThjcFFEMW4uRCw3c1kyRyY0PEc6LzRwQUsuK1FhJ1YkSSFHKTVWbz1TKD4wYTMiaSVyTVdRTz41Y0lPNkYoZ248VD4+VGNWVVhlby43TDQlJSZGbEstb0lCZDwoa2ktQyltX1o3VFZyK0s0OVpBX1AxI2Q4K1psJitLZ2pHSGY6PUZRayEiP2gjcWNVP1NBLjwxIXVLQV4vQCEtVm09QTFuLT5IZiFkZ1pSUkJkc05JVUkpa2dpOmhCWFRwQ0ZGKSFESFdKKWUpQ1slOSpYYjRUbGYlJmJaZXVGOj5Fc2hTVjVAUiM2WSU0Vmo/TXBXWFZQQCpeZjozb1dsWGNSbmc3LE9hbFQ1YE0qMURnPUZrYCRANkEtRFE2UlM0JXFUUjZyUy5iTFpVPTE2Pjo1ckN1KVFcKGtPZmg1MDNaJ287WShmW10vV2hSTU5LY2UnZS4hMCRFSylPKyRiYicwRkZZayotQV9RdUg0Y189V2prLS1IaGhGKmwqXzROVC5gPzVFJD1cPG5nal5PNjZEXUcoT0lkZm8+bisqNCEocGVYKV8lNmMkJSZeWUQ6NC5rO1Y0cmBhaEVhV1xoRG02JC1JSTBMOlhLTlI+My9lXj1WImRaazxab1cpLnNVJi9MUUZGaFY3R004QyQraU8kI0k5ZmJqQ0ZxPGlRLjpaaDtUQjFKYDAuJGZoYSFJV14yJzFBZmQ2Sz5JSiJZRXI4SWwnb1w7cGJvYzFUazclWT8tVS8wU1k2Z0wrOypjdVE4MEdkYWEqRUR0Zj82MCFbY2ZOQXFANiRMTEUmZyJGOChCODxUO0AmLGtPUz9FZWlOVFRmXmZVUFQnOT1UMTo/XTk3QG1NIVtlZTteOkNAI1QtQl4lMk45LlouQStdQzQxLk8tYT09NT1AQEonNSo9X1o0MjVBQDxOZWpnQjxfYi50LGAzWlpUalVvXjQxIjJeYj9RWjV1TjZwLC5gRDxedSNNLEhjMT0mbnA/SVZ1X00yVXE7Zlt1VCVwO00lSzo9OXVZcFJCL3VoNUQ+PVpaK2ZCb0FudXRBci8uM0Yoaz5GN2NGPlQ3YV1qQ24lUTtJL2JJYDJbalpvJ11UT14pPz9JcDoyRT1EJER0NkExP1kmYCE3cF1TaG5rTFQncE5dVkNyTnE/Jyx0OVw0KWxIOipmTG1sMElkV1xyQFU2b1xMISc9clxkc105LSJWTW48Njg/QkgkKFU/VDhHQ0ElTClHYydXI2Y6VGE5Njooay8rR2Y6Mlc+Qk47Z1plL1UnX28/OD9lUiRAZzZtNFBJdWhfRF5yPSFcXDNWMVcyZCxbRCdMY3I9R2VAQD48RTluIl90LmZyR1JpUmRrXz8+Tzp1YilRQV0yQ3VZXj40WlNAKm5daUBdPiZMdCUySiUlbU1GU0hMVlQzb2h1LjtrTmhGNSVycGM8ZVsvMFg2Jmo2MElaRlxeUTRRMD5VKTFMQllOVydJITQ1ckx+PmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDEwCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDA2MSAwMDAwMCBuIAowMDAwMDAwMTEyIDAwMDAwIG4gCjAwMDAwMDAyMTkgMDAwMDAgbiAKMDAwMDAwMDMzMSAwMDAwMCBuIAowMDAwMDAwNDE0IDAwMDAwIG4gCjAwMDAwMDA2MTcgMDAwMDAgbiAKMDAwMDAwMDY4NSAwMDAwMCBuIAowMDAwMDAwOTY3IDAwMDAwIG4gCjAwMDAwMDEwMjYgMDAwMDAgbiAKdHJhaWxlcgo8PAovSUQgCls8NWVkMzFjYjQ1YWY3OTczYTEzYWY3YWMzNmQ2MWEwZTE+PDVlZDMxY2I0NWFmNzk3M2ExM2FmN2FjMzZkNjFhMGUxPl0KJSBSZXBvcnRMYWIgZ2VuZXJhdGVkIFBERiBkb2N1bWVudCAtLSBkaWdlc3QgKG9wZW5zb3VyY2UpCgovSW5mbyA3IDAgUgovUm9vdCA2IDAgUgovU2l6ZSAxMAo+PgpzdGFydHhyZWYKNDk1MwolJUVPRgo=";

function downloadCV() {
  const a = document.createElement('a');
  a.href = CV_B64;
  a.download = 'Ranjan_Barman_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('📄 Downloading Resume...');
}

const navCvBtn = null; // removed from nav
const heroCvBtn = document.getElementById('heroCvBtn');
const mobileCvBtn = document.getElementById('mobileCvBtn');
if(heroCvBtn) heroCvBtn.addEventListener('click', function(e){ e.preventDefault(); downloadCV(); });
if(mobileCvBtn) mobileCvBtn.addEventListener('click', function(e){ e.preventDefault(); downloadCV(); });

// Toast notification
function showToast(msg) {
  const existing = document.getElementById('toast');
  if(existing) existing.remove();
  const t = document.createElement('div');
  t.id = 'toast';
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--bg3); border:1px solid var(--border);
    color:var(--text); padding:.8rem 1.5rem; border-radius:6px;
    font-size:.8rem; font-family:'Poppins',sans-serif; font-weight:500;
    box-shadow:0 8px 30px rgba(0,0,0,.3); z-index:9999;
    opacity:0; transition:all .35s cubic-bezier(.4,0,.2,1);
    border-left:3px solid var(--red); white-space:nowrap;
  `;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; }, 10);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(10px)'; setTimeout(()=>t.remove(),350); }, 3500);
}
const cur=document.getElementById('cur'),ring=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function loop(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.13;ry+=(my-ry)*.13;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(loop);
})();

// ── Nav scroll & active
const nav=document.getElementById('nav');
const allA=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('s',window.scrollY>60);
  let c='';
  document.querySelectorAll('section[id]').forEach(s=>{
    if(window.scrollY>=s.offsetTop-160)c=s.id;
  });
  allA.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+c));
});

// ── Typing animation
const roles=['Full-Stack Developer','Backend Developer','AI Explorer','Web Developer','Problem Solver'];
let ri=0,ci=0,del=false;
const typed=document.getElementById('typed');
function typeLoop(){
  const word=roles[ri];
  if(!del){
    typed.textContent=word.slice(0,ci+1);
    ci++;
    if(ci===word.length){del=true;setTimeout(typeLoop,1800);return}
  }else{
    typed.textContent=word.slice(0,ci-1);
    ci--;
    if(ci===0){del=false;ri=(ri+1)%roles.length}
  }
  setTimeout(typeLoop,del?60:100);
}
setTimeout(typeLoop,1500);

// ── Scroll reveal
const obs=new IntersectionObserver(es=>{
  es.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*60);obs.unobserve(e.target)}
  });
},{threshold:0.08});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));

// ── Mobile card scroll animations
const isTouchDevice = () => window.matchMedia('(hover:none),(pointer:coarse)').matches;
if(isTouchDevice()){
  // Wait for page to fully load before observing
  // rootMargin: only center 35% of screen is active zone — one card at a time
  const cardObs = new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
      } else {
        e.target.classList.remove('in-view');
      }
    });
  },{
    rootMargin: '-32% 0px -32% 0px',
    threshold: 0
  });

  // Small delay so page renders before observer fires
  setTimeout(()=>{
    document.querySelectorAll('.srv-card,.sk-card,.proj-card,.cdet,.cert-card').forEach(el=>{
      cardObs.observe(el);
    });
  }, 300);
}

// ── Form
document.getElementById('cform').addEventListener('submit',function(e){
  e.preventDefault();

  // ── Custom Validation
  const name    = this.querySelector('input[type="text"]');
  const email   = this.querySelector('input[type="email"]');
  const message = this.querySelector('textarea');

  // Clear previous errors
  [name, email, message].forEach(el => {
    el.style.borderColor = '';
    el.style.boxShadow = '';
  });

  let valid = true;

  if(!name.value.trim()){
    markError(name, 'Name is required');
    valid = false;
  }
  if(!email.value.trim()){
    markError(email, 'Email is required');
    valid = false;
  } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
    markError(email, 'Enter a valid email');
    valid = false;
  }
  if(!message.value.trim()){
    markError(message, 'Message is required');
    valid = false;
  }

  if(!valid) return;

  // ── Submit
  const btn = this.querySelector('.fbtn');
  const ok  = document.getElementById('fok');
  btn.disabled = true;
  btn.querySelector('span').textContent = 'Sending...';
  setTimeout(() => {
    btn.disabled = false;
    btn.querySelector('span').textContent = 'Send Message →';
    ok.style.display = 'block';
    this.reset();
    showToast('✓ Message sent!');
    setTimeout(() => { ok.style.display = 'none'; }, 5000);
  }, 1200);
});

function markError(el, msg){
  el.style.borderColor = '#e84a4a';
  el.style.boxShadow   = '0 0 0 2px rgba(232,74,74,.2)';
  el.placeholder = msg;
  // Remove error on focus
  el.addEventListener('focus', function(){
    this.style.borderColor = '';
    this.style.boxShadow   = '';
  }, {once: true});
}