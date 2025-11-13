// ----------- SVG ICONS -----------
const icons = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M2.25 2.25l1.5 2.25A2.25 2.25 0 005.812 6h12.183a2.25 2.25 0 012.092 3.02l-2.368 6.32a4.5 4.5 0 01-4.225 2.96H8.5a4.5 4.5 0 01-4.357-3.319L3.067 8.194a.75.75 0 01.683-.944z"/><circle cx="9" cy="20" r="1.5"/><circle cx="15" cy="20" r="1.5"/></svg>`,
  chat: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M8.25 9A.75.75 0 019 8.25h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" /><path stroke-linecap="round" stroke-width="2" d="M22 15a2 2 0 01-2 2H6l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  party: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M5.5 6A2.5 2.5 0 013 3.5m0 0A2.5 2.5 0 016.5 6m0 0A2.5 2.5 0 013 3.5m15.5-1A3.5 3.5 0 0119 7m0 0A3.5 3.5 0 0115.5 2m0 0A3.5 3.5 0 0119 7M12 7v10m-5 5l2.5-2.5M21 21l-2.5-2.5" /></svg>`
};

// ----------- STEPS DATA -------------
const steps = [
  {
    icon: icons.cart,
    title: '1. Select Package',
    desc: 'Choose your DSTV package and click "Subscribe".'
  },
  {
    icon: icons.chat,
    title: '2. Fill Details',
    desc: 'Enter your IUC number (and name, if you wish), then proceed.'
  },
  {
    icon: icons.party,
    title: '3. Enjoy Service',
    desc: "Your subscription is activated in less than 5 minutes!"
  }
];

// ----------- PACKAGES DATA ----------
const packageData = [
  {
    id: 'premium',
    name: 'Premium',
    oldPrice: 'GH₵865',
    newPrice: 'GH₵400',
    channels: ['SuperSport', 'M-Net', '142+'],
    theme: 'ring-blue-700 bg-slate-900'
  },
  {
    id: 'compact-plus',
    name: 'Compact Plus',
    oldPrice: 'GH₵570',
    newPrice: 'GH₵300',
    channels: ['Sports', 'Movies', '129+'],
    theme: 'ring-green-700 bg-slate-900'
  },
  {
    id: 'compact',
    name: 'Compact',
    oldPrice: 'GH₵380',
    newPrice: 'GH₵200',
    channels: ['Moja Love', '124+'],
    theme: 'ring-yellow-700 bg-slate-900'
  },
  {
    id: 'family',
    name: 'Family',
    oldPrice: 'GH₵190',
    newPrice: 'GH₵100',
    channels: ['Family', 'Kids', '100+'],
    theme: 'ring-pink-700 bg-slate-900'
  },
  {
    id: 'access',
    name: 'Access',
    oldPrice: 'GH₵90',
    newPrice: 'GH₵60',
    channels: ['Access', '67+'],
    theme: 'ring-teal-700 bg-slate-900'
  },
  {
    id: 'padi',
    name: 'Padi',
    oldPrice: 'GH₵59',
    newPrice: 'GH₵40',
    channels: ['Basic', '40+'],
    theme: 'ring-indigo-700 bg-slate-900'
  }
];

const phone = '233249152736';

// ----------- STEP RENDER -----------
function renderSteps() {
  const $steps = document.getElementById('steps');
  $steps.innerHTML = '';
  steps.forEach(step => {
    const card = document.createElement('div');
    card.className = `
      bg-white/10 border border-blue-900 rounded-xl flex flex-col items-center text-center
      p-5 shadow-lg min-h-[160px] transition-all hover:shadow-2xl hover:-translate-y-1
    `;
    card.innerHTML = `
      <div class="mb-2 flex items-center justify-center text-3xl">${step.icon}</div>
      <h4 class="text-base font-bold text-blue-200 mb-1">${step.title}</h4>
      <p class="text-slate-200 text-sm leading-relaxed">${step.desc}</p>
    `;
    $steps.appendChild(card);
  });
  if (window.anime) {
    anime({
      targets: '#steps > div',
      opacity: [0,1],
      translateY: [18,0],
      scale: [0.96,1],
      delay: anime.stagger(160),
      easing: 'easeOutBack'
    });
  }
}

// ----------- PACKAGE CARDS -----------
function renderPackages() {
  const $plans = document.getElementById('plans');
  $plans.innerHTML = '';
  packageData.forEach(pkg => {
    const channelSpans = (pkg.channels || []).map(
      channel => `<span class="bg-slate-800 text-white text-xs rounded-lg px-2 py-0.5">${channel}</span>`
    ).join(' ');
    const card = document.createElement('li');
    card.className = `
      relative ${pkg.theme} ring-2 rounded-2xl shadow-lg flex flex-col items-center p-5 min-h-[210px] transition-all hover:ring-blue-400
    `;
    card.innerHTML = `
      <div class="w-full flex flex-col items-center mb-3">
        <div class="flex flex-col items-center gap-2 mb-1">
          <span class="text-xs text-slate-400 line-through">${pkg.oldPrice}</span>
          <span class="text-2xl font-extrabold text-blue-400">${pkg.newPrice}/mo</span>
        </div>
        <h4 class="text-base font-bold text-white mb-1 text-center">${pkg.name}</h4>
        <div class="flex flex-wrap gap-1 justify-center mb-1">${channelSpans}</div>
      </div>
      <button class="bg-blue-700 text-white font-bold py-2 rounded-lg shadow hover:bg-blue-800 transition buy-btn w-full mt-auto" data-package="${pkg.name}">Subscribe</button>
    `;
    $plans.appendChild(card);
  });
  if (window.anime) {
    anime({
      targets: '#plans li',
      opacity: [0,1],
      scale: [0.97,1],
      translateY: [16,0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100, {start: 100})
    });
  }
}

// ----------- MODAL LOGIC (Focus Trap, close on ESC) -----------
function trapFocus(modal) {
  const focusable = modal.querySelectorAll('input,button,[tabindex]:not([tabindex="-1"])');
  const first = focusable[0], last = focusable[focusable.length-1];
  modal.addEventListener('keydown', function(e){
    if (e.key === "Tab") {
      if (e.shiftKey) { if (document.activeElement === first) { last.focus(); e.preventDefault(); }}
      else { if (document.activeElement === last) { first.focus(); e.preventDefault(); }}
    }
  });
}
function setupModal() {
  const dialog = document.getElementById('buy-dialog');
  const closeBtn = document.getElementById('close-dialog');
  closeBtn.onclick = () => dialog.classList.add('hidden');
  document.addEventListener('keydown', (e) => {
    if (!dialog.classList.contains('hidden') && e.key === "Escape") dialog.classList.add('hidden');
  });
  trapFocus(dialog);
}

// ----------- MAIN LOGIC -----------
document.addEventListener('DOMContentLoaded', () => {
  renderSteps();
  renderPackages();
  setupModal();

  // Buy button click (event delegation)
  document.getElementById('plans').addEventListener('click', function(e) {
    const btn = e.target.closest('.buy-btn');
    if (btn) {
      document.getElementById('dialog-package').value = btn.getAttribute('data-package');
      document.getElementById('buy-dialog').classList.remove('hidden');
      setTimeout(() => { document.getElementById('iuc').focus(); }, 150);
    }
  });

  // WhatsApp integration
  document.getElementById('whatsapp-form').onsubmit = function(e) {
    e.preventDefault();
    const iuc = document.getElementById('iuc').value.trim();
    const pack = document.getElementById('dialog-package').value.trim();
    const name = document.getElementById('name').value.trim();
    let msg = `Hi\nI am interested in the Dstv ${pack} package\n\nmy IUC is ${iuc}\n`;
    if (name) msg += `\nName: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    document.getElementById('buy-dialog').classList.add('hidden');
  };
});
