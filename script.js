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
const CV_B64 = "./assets/Ranjan_Barman_Resume.pdf";

function downloadCV() {
  const a = document.createElement('a');
  a.href = CV_B64;
  a.download = 'Ranjan_Barman_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('📄 Downloading Resume...');
}

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

  fetch('https://formspree.io/f/xqeykwvk', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(this)
  })
  .then(res => {
    if(res.ok) {
      ok.style.display = 'block';
      this.reset();
      showToast('✓ Message sent!');
      setTimeout(() => { ok.style.display = 'none'; }, 5000);
    } else {
      showToast('Something went wrong. Try again.');
    }
  })
  .catch(() => showToast('Something went wrong. Try again.'))
  .finally(() => {
    btn.disabled = false;
    btn.querySelector('span').textContent = 'Send Message →';
  });
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