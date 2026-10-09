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
