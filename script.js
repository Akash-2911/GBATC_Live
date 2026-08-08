(function () {
  const btn = document.getElementById('bookmarkBtn');
  const popover = document.getElementById('bookmarkPopover');
  const closeBtn = document.getElementById('popoverClose');
  const instructionEl = document.getElementById('popoverInstruction');

  function getInstruction() {
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/.test(ua);
    const isAndroid = /Android/.test(ua);
    const isMac = /Macintosh/.test(ua) && !isIOS;

    if (isIOS) {
      return 'Tap the Share icon below, then choose "Add to Home Screen".';
    }
    if (isAndroid) {
      return 'Open the browser menu (⋮) and choose "Add to Home screen" or "Install app".';
    }
    if (isMac) {
      return 'Press Cmd+D to bookmark this page.';
    }
    return 'Press Ctrl+D to bookmark this page.';
  }

  function openPopover() {
    instructionEl.textContent = getInstruction();
    popover.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closePopover() {
    popover.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (popover.classList.contains('open')) {
      closePopover();
    } else {
      openPopover();
    }
  });

  closeBtn.addEventListener('click', closePopover);

  document.addEventListener('click', function (e) {
    if (!popover.contains(e.target) && e.target !== btn) {
      closePopover();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopover();
  });
})();
