
// ----------- SVG ICONS -----------
const icons = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M2.25 2.25l1.5 2.25A2.25 2.25 0 005.812 6h12.183a2.25 2.25 0 012.092 3.02l-2.368 6.32a4.5 4.5 0 01-4.225 2.96H8.5a4.5 4.5 0 01-4.357-3.319L3.067 8.194a.75.75 0 01.683-.944z"/><circle cx="9" cy="20" r="1.5"/><circle cx="15" cy="20" r="1.5"/></svg>`,
  chat: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M8.25 9A.75.75 0 019 8.25h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" /><path stroke-linecap="round" stroke-width="2" d="M22 15a2 2 0 01-2 2H6l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  party: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M5.5 6A2.5 2.5 0 013 3.5m0 0A2.5 2.5 0 016.5 6m0 0A2.5 2.5 0 013 3.5m15.5-1A3.5 3.5 0 0119 7m0 0A3.5 3.5 0 0115.5 2m0 0A3.5 3.5 0 0119 7M12 7v10m-5 5l2.5-2.5M21 21l-2.5-2.5" /></svg>`
};

const steps = [
  {
    icon: icons.cart,
    title: '1. Select Package',
    desc: 'Choose your DSTV package and click "Buy".'
  },
  {
    icon: icons.chat,
    title: '2. Fill Details',
    desc: 'Fill your IUC number (and name if you want), then hit "Proceed to WhatsApp".',
  },
  {
    icon: icons.party,
    title: '3. Enjoy Service',
    desc: 'Your subscription is activated in less than 5 minutes!',
  }
];

  const packageData = [
      {
        id: 'premium',
        name: 'Premium',
        price: 'GH₵300',
        priceSuffix: 'pm',
        badge: 'Most Popular',
        badgeColor: 'bg-blue-700',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/DStv_logo.svg',
        channels: ['SuperSport', 'M-Net', '142+'],
        benefits: [
          '2 anywhere streams + 1 mobile stream',
          'All the sports, series + movies you love',
          'Showmax at no extra cost'
        ],
        theme: 'ring-blue-700 bg-slate-900'
      },
      {
        id: 'compact-plus',
        name: 'Compact Plus',
        price: 'GH₵200',
        priceSuffix: 'pm',
        badge: 'Best Value',
        badgeColor: 'bg-green-700',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/DStv_logo.svg',
        channels: ['Sports', 'Movies', '129+'],
        benefits: [
          '2 anywhere streams + 1 mobile stream',
          'Local + international football + movies',
          'Showmax at a discount'
        ],
        theme: 'ring-green-700 bg-slate-900'
      },
      {
        id: 'compact',
        name: 'Compact',
        price: 'GH₵150',
        priceSuffix: 'pm',
        badge: '',
        badgeColor: '',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/DStv_logo.svg',
        channels: ['Moja Love', '124+'],
        benefits: [
          '2 anywhere streams + 1 mobile stream',
          'Best local entertainment + reality TV',
          'Showmax at a discount'
        ],
        theme: 'ring-yellow-700 bg-slate-900'
      }
    ];

const phone = '233249152736';

// ----------- STEP RENDER -----------
function renderSteps() {
  const $steps = document.getElementById('steps');
  steps.forEach(step => {
    const card = document.createElement('div');
    card.className = "bg-slate-800 border border-slate-700 rounded-2xl flex flex-col items-center p-8 min-h-[220px] shadow-xl";
    card.innerHTML = `
      <div class="mb-4">${step.icon}</div>
      <h4 class="text-lg font-extrabold text-blue-200 mb-2">${step.title}</h4>
      <p class="text-slate-100 text-center">${step.desc}</p>
    `;
    $steps.appendChild(card);
  });
  anime({
    targets: '#steps > div',
    opacity: [0,1],
    translateY: [40,0],
    scale: [0.92,1],
    delay: anime.stagger(250),
    easing: 'easeOutBack'
  });
}

// ----------- PACKAGE CARDS -----------
function renderPackages() {
  const $plans = document.getElementById('plans');
  packageData.forEach(pkg => {
    const badgeSpan = pkg.badge ? `<span class="absolute top-6 right-8 ${pkg.badgeColor} text-white text-xs px-3 py-1 rounded-lg font-bold">${pkg.badge}</span>` : '';
    const channelSpans = (pkg.channels || []).map(
      channel => `<span class="bg-slate-800 text-white text-xs rounded-full px-2 py-1">${channel}</span>`
    ).join(' ');
    const benefitLis = (pkg.benefits || []).map(b => `<li class="flex items-start gap-2"><span class="text-green-400 pt-0.5">✔</span>${b}</li>`).join('');
    const card = document.createElement('li');
    card.className = `relative ${pkg.theme} rounded-2xl shadow-xl ring-2 flex flex-col justify-between p-8 min-h-[480px] opacity-0`;
    card.innerHTML = `
      <div class="flex items-center mb-4 space-x-3">
        <img src="${pkg.logo}" class="h-9 w-auto" alt="DSTV ${pkg.name}">${badgeSpan}
      </div>
      <div class="mb-4">
        <h4 class="text-2xl font-bold text-white mb-2">${pkg.name}</h4>
        <div class="flex items-end space-x-2">
          <span class="text-slate-100 text-lg mb-1">from</span>
          <span class="text-3xl font-extrabold text-blue-400 mb-1">${pkg.price}<span class="text-lg font-normal text-slate-400">${pkg.priceSuffix}</span></span>
        </div>
        <div class="flex space-x-2 mt-2">${channelSpans}</div>
      </div>
      <ul class="flex-1 mb-6 mt-4 space-y-4 text-slate-200">${benefitLis}</ul>
      <div class="mt-auto flex flex-col gap-4">
        <button class="bg-blue-700 text-white font-bold py-3 rounded-xl shadow hover:bg-blue-800 transition buy-btn" data-package="${pkg.name}">Buy Now</button>
      </div>
    `;
    $plans.appendChild(card);
  });
  anime({
    targets: '#plans li',
    opacity: [0,1],
    scale: [0.93,1],
    translateY: [80,0],
    easing: 'easeOutExpo',
    delay: anime.stagger(220, {start: 750})
  });
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

  // Handle buy button clicks (event delegation for dynamic rendering)
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


anime.timeline()
  .add({
    targets: '#hero h2',
    opacity: [0,1],
    translateY: [-60, 0],
    easing: 'easeOutExpo',
    duration: 600
  })
  .add({
    targets: '#hero p',
    opacity: [0,1],
    translateY: [-20,0],
    easing: 'easeOutExpo',
    duration: 300
  }, '-=300')
  .add({
    targets: '#hero-badges',
    opacity: [0,1],
    translateY: [-20,0],
    easing: 'easeOutExpo',
    duration: 500
  }, '-=200')
  .add({
    targets: '.hero-cta',
    opacity: [0,1],
    scale: [0.85, 1],
    easing: 'easeOutBack',
    duration: 400
  }, '-=200');
