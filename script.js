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

// Scroll-reveal for elements marked .reveal
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();

// Lightbox for screenshot previews (.shot-img)
(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  if (!lightbox || !lightboxImg || !closeBtn) return;

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  document.addEventListener('click', function (e) {
    const img = e.target.closest('.shot-img');
    if (img) {
      open(img.currentSrc || img.src, img.alt);
      return;
    }
    if (e.target === lightbox || e.target === closeBtn || closeBtn.contains(e.target)) {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
})();
