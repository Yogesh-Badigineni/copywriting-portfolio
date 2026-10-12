/**
 * Editorial Copywriting Portfolio - Client Interactions
 * Handles: Filtering, search, clipboard copying, theme toggling, mobile nav, and expanders
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFiltersAndSearch();
  initCopyButtons();
  initMobileNav();
  initApproachExpanders();
  initEmailSubjectSelectors();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   THEME TOGGLING (Editorial Light / Dark)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('cp_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cp_theme', next);
      updateThemeIcon();
      showToast(`Switched to ${next} editorial theme`);
    });
  }
}

function updateThemeIcon() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeToggle.innerHTML = isDark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

/* ==========================================================================
   CATEGORY FILTERING & SEARCH
   ========================================================================== */
function initFiltersAndSearch() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('portfolio-search');
  const groups = document.querySelectorAll('.portfolio-group');
  const cards = document.querySelectorAll('.sample-card, .email-card');

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let matchCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || '';
      const text = card.textContent.toLowerCase();
      
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = !searchQuery || text.includes(searchQuery.toLowerCase());

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Check visibility of group sections
    groups.forEach(group => {
      const visibleChildren = group.querySelectorAll('.sample-card:not([style*="display: none"]), .email-card:not([style*="display: none"])');
      if (visibleChildren.length === 0) {
        group.style.display = 'none';
      } else {
        group.style.display = '';
      }
    });

    // Handle no results message
    let emptyNotice = document.getElementById('no-results-notice');
    if (matchCount === 0) {
      if (!emptyNotice) {
        emptyNotice = document.createElement('div');
        emptyNotice.id = 'no-results-notice';
        emptyNotice.className = 'container';
        emptyNotice.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-md); margin-top: 1.5rem;">
            <p style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">No writing samples match your filter.</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Try adjusting your search terms or select "All Samples".</p>
          </div>
        `;
        document.getElementById('portfolio-container').appendChild(emptyNotice);
      }
      emptyNotice.style.display = 'block';
    } else if (emptyNotice) {
      emptyNotice.style.display = 'none';
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

/* ==========================================================================
   CLIPBOARD COPYING & TOAST NOTIFICATION
   ========================================================================== */
function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-btn');
    if (!copyBtn) return;

    const targetSelector = copyBtn.dataset.copyTarget;
    let textToCopy = '';

    if (targetSelector) {
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        textToCopy = targetElement.innerText.trim();
      }
    } else if (copyBtn.dataset.copyText) {
      textToCopy = copyBtn.dataset.copyText;
    } else {
      // Find closest sample card text
      const card = copyBtn.closest('.sample-card, .email-card');
      if (card) {
        const contentEl = card.querySelector('.sample-caption-content, .product-prose, .email-message-body');
        if (contentEl) textToCopy = contentEl.innerText.trim();
      }
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        copyBtn.style.color = 'var(--forest-green)';
        showToast('Writing sample copied to clipboard!');
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          copyBtn.style.color = '';
        }, 2200);
      }).catch(err => {
        showToast('Failed to copy to clipboard.');
      });
    }
  });

  // Copy Email button in contact
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email || 'your.email@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email (${email}) copied to clipboard!`);
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${message}</span>`;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    });
  });
}

/* ==========================================================================
   PRODUCT WRITING STRATEGY ACCORDION
   ========================================================================== */
function initApproachExpanders() {
  document.querySelectorAll('.approach-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isExpanded = btn.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', isExpanded);
      if (content) {
        content.classList.toggle('show', isExpanded);
      }
    });
  });
}

/* ==========================================================================
   EMAIL SUBJECT LINE SELECTOR
   ========================================================================== */
function initEmailSubjectSelectors() {
  document.querySelectorAll('.email-card').forEach(card => {
    const choices = card.querySelectorAll('.subject-choice');
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        choices.forEach(c => {
          c.classList.remove('selected');
          const radio = c.querySelector('input[type="radio"]');
          if (radio) radio.checked = false;
        });
        choice.classList.add('selected');
        const radio = choice.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
  });
}

/* ==========================================================================
   BACK TO TOP & SMOOTH SCROLL
   ========================================================================== */
function initBackToTop() {
  const topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
