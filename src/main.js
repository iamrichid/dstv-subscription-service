
// Service data
const services = {
  dstv: {
    hero: {
      title: 'DSTV Subscription',
      desc: 'Instant DSTV activation. Secure payments. Expert support & promos.',
      badges: [
        {text: '1000+ Trusted Users', bg: 'bg-green-700/80 text-green-200'},
        {text: '24/7 Support', bg: 'bg-blue-700/80 text-blue-200'},
        {text: 'Secure Payment', bg: 'bg-yellow-700/80 text-yellow-200'}
      ],
    },
    packagesLabel: 'DSTV Packages & Savings',
    orderInstructions: 'Please fill the details below and we’ll direct you to WhatsApp.',
    iucLabel: 'IUC Number*',
    iucPlaceholder: 'Enter your IUC/Smart Card number',
    iucDesc: 'Your decoder number (IUC) is required for activation.',
    steps: [
      {icon: 'cart', title: '1. Select Package', desc: 'Choose your DSTV package and click "Subscribe".'},
      {icon: 'chat', title: '2. Fill Details', desc: 'Enter your IUC number (and name, if you wish), then proceed.'},
      {icon: 'party', title: '3. Enjoy Service', desc: 'Your subscription is activated in less than 5 minutes!'}
    ],
    packages: [
      { name: 'Premium', oldPrice: 'GH₵865', newPrice: 'GH₵400', channels: ['SuperSport','M-Net','142+'], theme: 'ring-blue-700 bg-slate-900' },
      { name: 'Compact Plus', oldPrice: 'GH₵570', newPrice: 'GH₵300', channels: ['Sports','Movies','129+'], theme: 'ring-green-700 bg-slate-900' },
      { name: 'Compact', oldPrice: 'GH₵380', newPrice: 'GH₵200', channels: ['Moja Love','124+'], theme: 'ring-yellow-700 bg-slate-900' },
      { name: 'Family', oldPrice: 'GH₵190', newPrice: 'GH₵100', channels: ['Family', 'Kids', '100+'], theme: 'ring-pink-700 bg-slate-900' },
      { name: 'Access', oldPrice: 'GH₵90', newPrice: 'GH₵60', channels: ['Access', '67+'], theme: 'ring-teal-700 bg-slate-900' },
      { name: 'Padi', oldPrice: 'GH₵59', newPrice: 'GH₵40', channels: ['Basic', '40+'], theme: 'ring-indigo-700 bg-slate-900' },
    ],
    orderBuilder: (user, pack, name) =>
      `Hi\nI am interested in the DSTV ${pack} package\n\nmy IUC is ${user}\n${name ? `\nName: ${name}` : ''}`
  },
  netflix: {
    hero: {
      title: 'Netflix Subscription',
      desc: 'Affordable Netflix plans, instant setup. Pay for what you need—no hidden fees.',
      badges: [
        {text: 'Personal & Shared', bg: 'bg-red-700/80 text-red-200'},
        {text: 'Instant Setup', bg: 'bg-blue-700/80 text-blue-200'},
        {text: 'Secure Payment', bg: 'bg-green-700/80 text-green-200'}
      ]
    },
    packagesLabel: 'Netflix Packages',
    orderInstructions: 'Please fill the details below and we’ll direct you to WhatsApp.',
    iucLabel: 'Email/Phone*',
    iucPlaceholder: 'Enter your Netflix email or phone',
    iucDesc: 'Your Netflix login is required for activation.',
    steps: [
      {icon: 'cart', title: '1. Choose Plan', desc: 'Select your preferred Netflix package above.'},
      {icon: 'chat', title: '2. Fill Details', desc: 'Enter your Netflix login/contact, then proceed.'},
      {icon: 'party', title: '3. Enjoy Streaming', desc: 'Your Netflix access is set up in minutes!'}
    ],
    packages: [
      { name: '1 Month', newPrice: 'GH₵50', channels: ['Personal'], theme: 'ring-red-700 bg-slate-900' },
      { name: '2 Months', newPrice: 'GH₵120', channels: ['Personal'], theme: 'ring-red-700 bg-slate-900' },
      { name: '3 Months', newPrice: 'GH₵200', channels: ['Personal'], theme: 'ring-red-700 bg-slate-900' },
      { name: 'Yearly (Shared)', newPrice: 'GH₵800', channels: ['Shared'], theme: 'ring-green-700 bg-slate-900' },
      { name: 'Yearly (Personal)', newPrice: 'GH₵1200', channels: ['Personal'], theme: 'ring-yellow-700 bg-slate-900' }
    ],
    orderBuilder: (user, pack, name) =>
      `Hi\nI am interested in the Netflix ${pack} plan\n\nMy login is: ${user}\n${name ? `Name: ${name}` : ''}`
  },
  prime: {
    hero: {
      title: 'Prime Video Subscription',
      desc: 'Unlock thousands of movies and series on Prime Video—Flexible plans, easy payment, instant activation.',
      badges: [
        {text: 'Personal & Shared', bg: 'bg-purple-700/80 text-purple-200'},
        {text: 'Instant Setup', bg: 'bg-blue-700/80 text-blue-200'},
        {text: 'Secure Payment', bg: 'bg-green-700/80 text-green-200'}
      ]
    },
    packagesLabel: 'Prime Video Packages',
    orderInstructions: 'Please fill the details below and we’ll direct you to WhatsApp.',
    iucLabel: 'Email/Phone*',
    iucPlaceholder: 'Enter your Prime Video email or phone',
    iucDesc: 'Your Prime Video login is required for activation.',
    steps: [
      {icon: 'cart', title: '1. Choose Plan', desc: 'Select your preferred Prime Video package above.'},
      {icon: 'chat', title: '2. Fill Details', desc: 'Enter your Prime login/contact, then proceed.'},
      {icon: 'party', title: '3. Enjoy Streaming', desc: 'Your Prime Video account is set up in minutes!'}
    ],
    packages: [
      { name: '1 Month', newPrice: 'GH₵45', channels: ['Personal'], theme: 'ring-blue-700 bg-slate-900' },
      { name: '2 Months', newPrice: 'GH₵90', channels: ['Personal'], theme: 'ring-blue-700 bg-slate-900' },
      { name: '3 Months', newPrice: 'GH₵150', channels: ['Personal'], theme: 'ring-blue-700 bg-slate-900' },
      { name: 'Yearly (Shared)', newPrice: 'GH₵400', channels: ['Shared'], theme: 'ring-teal-700 bg-slate-900' },
      { name: 'Yearly (Personal)', newPrice: 'GH₵500', channels: ['Personal'], theme: 'ring-yellow-700 bg-slate-900' }
    ],
    orderBuilder: (user, pack, name) =>
      `Hi\nI am interested in the Prime Video ${pack} plan\n\nMy login is: ${user}\n${name ? `Name: ${name}` : ''}`
  }
};
// SVG icons (same as before)
const svgIcons = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M2.25 2.25l1.5 2.25A2.25 2.25 0 005.812 6h12.183a2.25 2.25 0 012.092 3.02l-2.368 6.32a4.5 4.5 0 01-4.225 2.96H8.5a4.5 4.5 0 01-4.357-3.319L3.067 8.194a.75.75 0 01.683-.944z"/><circle cx="9" cy="20" r="1.5"/><circle cx="15" cy="20" r="1.5"/></svg>`,
  chat: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-width="2" d="M8.25 9A.75.75 0 019 8.25h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" /><path stroke-linecap="round" stroke-width="2" d="M22 15a2 2 0 01-2 2H6l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  party: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M5.5 6A2.5 2.5 0 013 3.5m0 0A2.5 2.5 0 016.5 6m0 0A2.5 2.5 0 013 3.5m15.5-1A3.5 3.5 0 0119 7m0 0A3.5 3.5 0 0115.5 2m0 0A3.5 3.5 0 0119 7M12 7v10m-5 5l2.5-2.5M21 21l-2.5-2.5" /></svg>`
};

const phone = '233249152736';

let serviceKey = 'dstv'; // default on page load

function renderHero(data) {
  document.getElementById('hero').innerHTML = `
    <h2 class="text-4xl md:text-5xl font-bold text-blue-200 mb-3 drop-shadow">${data.hero.title}</h2>
    <p class="text-lg text-blue-200 mb-8">${data.hero.desc}</p>
    <div class="flex justify-center gap-3 mb-6 flex-wrap">
      ${data.hero.badges.map(b => `<span class="inline-block ${b.bg} font-medium px-4 py-2 rounded-lg shadow">${b.text}</span>`).join('')}
    </div>
    <a href="#packages" class="bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-800 transition-all hero-cta inline-block">See Packages</a>
  `;
}
function renderPackages(data) {
  document.getElementById('packages-heading').textContent = data.packagesLabel;
  const $plans = document.getElementById('plans');
  $plans.innerHTML = '';
  data.packages.forEach(pkg => {
    const channelSpans = (pkg.channels || []).map(
      channel => `<span class="bg-slate-800 text-white text-xs rounded-lg px-2 py-0.5">${channel}</span>`
    ).join(' ');
    const card = document.createElement('li');
    card.className = `
      relative ${pkg.theme} ring-2 rounded-2xl shadow-lg flex flex-col items-center p-5 min-h-[210px] transition-all hover:ring-blue-400
    `;
    card.innerHTML = `
      <div class="w-full flex flex-col items-center mb-3">
        ${pkg.oldPrice ? `<span class="text-xs line-through text-slate-400">${pkg.oldPrice}</span>` : ''}
        <span class="text-2xl font-extrabold text-blue-400 mb-1">${pkg.newPrice||pkg.price||''}</span>
        <h4 class="text-base font-bold text-white mb-1 text-center">${pkg.name}</h4>
        <div class="flex flex-wrap gap-1 justify-center">${channelSpans}</div>
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
function renderSteps(data) {
  const $steps = document.getElementById('steps');
  $steps.innerHTML = '';
  data.steps.forEach(step => {
    const card = document.createElement('div');
    card.className = `
      bg-white/10 border border-blue-900 rounded-xl flex flex-col items-center text-center
      p-5 shadow-lg min-h-[160px] transition-all hover:shadow-2xl hover:-translate-y-1
    `;
    const icn = svgIcons[step.icon] || '';
    card.innerHTML = `
      <div class="mb-2 flex items-center justify-center text-3xl">${icn}</div>
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
function setTabs(active) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.service === active)
      btn.classList.add('text-blue-400','border-blue-400','border-b-2','bg-white/5');
    else
      btn.classList.remove('text-blue-400','border-blue-400','border-b-2','bg-white/5');
  });
}

// Modal
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
function setupModal(service) {
  // Service-specific labels and instructions
  document.getElementById('order-instructions').innerHTML = `<p class="text-slate-300 text-sm mb-3">${services[service].orderInstructions}</p>`;
  document.getElementById('iuc-label').textContent = services[service].iucLabel;
  document.getElementById('iuc').placeholder = services[service].iucPlaceholder;
  document.getElementById('iuc-desc').textContent = services[service].iucDesc;
}
document.addEventListener('DOMContentLoaded', () => {
  let active = serviceKey;
  // Initial render DSTV
  renderUI(active);

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      active = btn.dataset.service;
      renderUI(active);
      setTabs(active);
    };
  });
  setTabs(active);

  // Buy button logic
  document.getElementById('plans').addEventListener('click', function(e) {
    const btn = e.target.closest('.buy-btn');
    if (btn) {
      document.getElementById('dialog-package').value = btn.getAttribute('data-package');
      document.getElementById('buy-dialog').classList.remove('hidden');
      setupModal(active);
      setTimeout(() => { document.getElementById('iuc').focus(); }, 150);
    }
  });

  // Modal logic
  const dialog = document.getElementById('buy-dialog');
  document.getElementById('close-dialog').onclick = () => dialog.classList.add('hidden');
  document.addEventListener('keydown', (e) => {
    if (!dialog.classList.contains('hidden') && e.key === "Escape") dialog.classList.add('hidden');
  });
  trapFocus(dialog);

  // WhatsApp integration
  document.getElementById('whatsapp-form').onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById('iuc').value.trim();
    const pack = document.getElementById('dialog-package').value.trim();
    const name = document.getElementById('name').value.trim();
    const msg = services[active].orderBuilder(user, pack, name);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    dialog.classList.add('hidden');
  };

  function renderUI(key) {
    renderHero(services[key]);
    renderPackages(services[key]);
    renderSteps(services[key]);
  }
});
