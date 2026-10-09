/* =========================================================
   Sudarshan portfolio — vanilla JS interactions
   ========================================================= */

// --------- Welcome Popup (show once per visitor) ---------
(function welcomePopup(){
  const overlay   = document.getElementById('welcomeOverlay');
  const closeX    = document.getElementById('popupClose');
  const closeOk   = document.getElementById('popupCloseOk');
  if(!overlay) return;

  const SEEN_KEY = 'lc_welcome_seen_v1';

  // Hide popup initially
  overlay.style.display = 'none';

  function closePopup(){
    try { localStorage.setItem(SEEN_KEY, '1'); } catch(e) {}
    overlay.classList.add('hidden');
    setTimeout(()=>{ overlay.style.display='none'; }, 400);
  }

  // Only show if visitor hasn't seen it before
  let seen = false;
  try { seen = localStorage.getItem(SEEN_KEY) === '1'; } catch(e) {}
  if(!seen){
    setTimeout(()=>{
      overlay.style.display = '';
    }, 1800);
  }

  if(closeX)  closeX.addEventListener('click', closePopup);
  if(closeOk) closeOk.addEventListener('click', closePopup);
  // also close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.style.display !== 'none' && !overlay.classList.contains('hidden')){
      closePopup();
    }
  });
})();

// --------- Typewriter ---------
(function typewriter(){
  const target = document.getElementById('typed');
  if(!target) return;
  const roles = ["Developer","Designer","Student","Creator"];
  let idx=0, text="", deleting=false;
  function tick(){
    const cur = roles[idx];
    if(!deleting){
      text = cur.slice(0, text.length + 1);
      target.textContent = text;
      if(text === cur){ setTimeout(()=>{deleting=true; tick();}, 1500); return; }
      setTimeout(tick, 100);
    } else {
      text = cur.slice(0, text.length - 1);
      target.textContent = text;
      if(text === ""){ deleting=false; idx=(idx+1)%roles.length; }
      setTimeout(tick, 50);
    }
  }
  tick();
})();
