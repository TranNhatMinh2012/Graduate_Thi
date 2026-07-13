// ==========================================
// DATA
// ==========================================
const FRIENDS = [
  {
    id: 1, name: "Mai", emoji: "🌸", gradient: "linear-gradient(135deg,#ff9a9e,#fad0c4)", accent: "linear-gradient(180deg,#ff9a9e,#fad0c4)",
    chibiMeme: "images/chibi_meme/Mai.png", chibiImg: "images/chibi/Mai.png", audioSrc: "voices/Mai.mp3",
    wish: "Thi ơiii cuối cùng m đã tốt nghiệp rồiiii, t vẫn luôn nói là 3 năm cấp 3 được ngồi chung với m là điều t rất là trân quý. Đúng là chớp mắt 1 cái thì tụi mình đã trở thành người lớn, nhưng mà t biết rằng là tụi mình cũng vẫn chỉ là 1 đứa con nít đang tập lớn thôi. Rất là tự hào khi mà m đã hoàn thành xuất sắc 1 chặng đường thật dài ở Đại Học. T cũng biết rằng là m đã trải qua rất nhiều cảm xúc lẫn lộn ở đó vì đã có đôi lần m tâm sự với t nhma tất cả t nghĩ đều là những bài học đáng giá và nó cuối cùng nó đã qua rồi. Hành trình sắp tới t mong m luôn vững tin dù có gì xảy ra đi nữa và vẫn câu nói cũ của t là mong m sẽ trở thành tất cả những gì mà m muốn trong đời. Lần nữa chúc mừng Thi Dun tốt nghiệp nhaaaa. 恭喜 Thi Dun 顺利毕业！祝你早日月薪一亿越南盾，赚大钱！🎓💰"
  },
  {
    id: 2, name: "Vi", emoji: "⚡", gradient: "linear-gradient(135deg,#a1c4fd,#c2e9fb)", accent: "linear-gradient(180deg,#a1c4fd,#c2e9fb)",
    chibiMeme: "images/chibi_meme/Vi.png", chibiImg: "images/chibi/Vi.png", audioSrc: "voices/Vi.m4a",
    wish: "\"con quỷ Vi\" cái câu mà lên đh tui nhớ nhứt của bà đó Thi. Tui nhớ cái sự thành thật và cái sự lo lắng của bà dành cho all member trong nhóm, tui rất là trân trọng điều đó lun. Bước ra cánh cửa đh chỉ là một cột mốc th và sau này còn phải đánh dấu nhiều cột mốc nữa với cô gái nhìu hoài bão dúng Thi Dun. Tui mong bà luôn giữ được cái đầu lạnh và trái tim nóng trước mọi tình huống dù là thăng hay trầm. Mong cuộc sống vẫn chừa sự nhẹ nhàng và âu yếm \"vệ sĩ của Ame\", dù ở VN hay đi du học, tụi tui vẫn rất nhớ bà và sẽ luôn là điểm tựa cho bà khi cần nhé. Loving u 🎉💕"
  },
  {
    id: 3, name: "Bích", emoji: "🌻", gradient: "linear-gradient(135deg,#f6d365,#fda085)", accent: "linear-gradient(180deg,#f6d365,#fda085)",
    chibiMeme: "images/chibi_meme/Bích.png", chibiImg: "images/chibi/Bích.png", audioSrc: "voices/Bích.m4a",
    wish: "Chúc mừng tình yêu của tụi tui đã tốt nghiệp nha. Chúc Thi chân cứng đá mềm chạm tới những mục tiêu và bầu trời mới phía trước. Tụi t biết là m có nhiều nỗi niềm với nhiều áp lực khó nói nhưng mà hãy nhớ là tụi t vẫn sẽ luôn bên cạnh đồng hành cùng m nha. T nghĩ là sự chân thành của m sẽ được đền đáp xứng đáng nên là đừng suy nghĩ gì quá sâu xa rồi làm bản thân mình buồn nha. Hành trình ở Huế của cổ đã rất rực rỡ rồi nên hãy làm cho chặng đường tiếp theo cũng rực rỡ như vậy nha. iu Thi jun nhiềuuu"
  },
  {
    id: 4, name: "Quỳnh", emoji: "🎀", gradient: "linear-gradient(135deg,#fbc2eb,#a6c1ee)", accent: "linear-gradient(180deg,#fbc2eb,#a6c1ee)",
    chibiMeme: "images/chibi_meme/Quỳnh.png", chibiImg: "images/chibi/Quỳnh.png", audioSrc: "voices/Quỳnh.m4a",
    wish: "Hello Thi Dương, chúc mừng Thi Dương đã tốt nghiệp nha, một hành trình đã khép lại rồi thì cũng sẽ có một hành trình mới mở ra và cái hành trình mới này nó sẽ theo chân tụi mình đến về sau này luôn nên là rất là vui và chúc thằng Thi Dương đã hoàn thành xuất sắc cái nhiệm vụ học tập của mình và mong rằng Thi Dương ở trên một cái đoạn đường mới sẽ luôn luôn vui vẻ, hạnh phúc và sẽ đạt được những gì mình mong muốn nè và sẽ luôn vui vẻ và tụi tui sẽ luôn luôn ở phía sau Thi Dương, sẽ luôn luôn chào đón gian rộng cánh tay để đón thiên dương trở về và mong rằng thì mình sẽ có một buổi gặp ở Gia Lai để có thể chúc mừng cho chúng ta đã hoàn thành xuất sắc những phần học tập của mình nha."
  },
  {
    id: 5, name: "Khôi", emoji: "🎸", gradient: "linear-gradient(135deg,#c471f5,#fa71cd)", accent: "linear-gradient(180deg,#c471f5,#fa71cd)",
    chibiMeme: "images/chibi_meme/Khôi.png", chibiImg: "images/chibi/Khôi.png", audioSrc: null,
    wish: "Tui biết là cô gái của tui sẽ làm được mè, luôn tin tưởng và tự hào về người bạn này. Chúc mừng bà đã tốt nghiệp nhéeeeee. Hành trình phía trước sẽ còn nhiều sự sung sướng và đáng để chờ đợi, nhưng mà tui biết Thi Jun sẽ làm được mè thui chưa kể là luôn có sự ủng hộ từ tụi tui thì không thì là không thể phải không nè. Rồi sẽ đến một ngày cô gái của chúng tui sẽ đi gặp idol của cổ, sẽ bao mấy nụ mấy chầu thật đã luôn. Chúc mừng Thi Jun tốt nghiệp và rực rỡ nhất nhé, love u"
  },
  {
    id: 6, name: "Minh", emoji: "🦋", gradient: "linear-gradient(135deg,#89f7fe,#66a6ff)", accent: "linear-gradient(180deg,#89f7fe,#66a6ff)",
    chibiMeme: "images/chibi_meme/Minh.png", chibiImg: "images/chibi/Minh.png", audioSrc: "voices/Minh.m4a",
    wish: "Chúc mừng Mom Thi đã chính thức tốt nghiệp nhaaa\nMột chặng đường đẹp đã khép lại và một hành trình mới cũng vừa bắt đầu. Mong rằng Mom sẽ luôn gặp thật nhiều may mắn, giữ được sự nhiệt huyết, niềm vui và sự tự tin để chinh phục những điều mình mong muốn.\nBiết là mom đang có nhiều áp lực, nhưng mom hãy luôn vững tin nha, vì lúc nào cũng có tụi tui ở bên để lắng nghe mom chia sẻ mọi điều\nChúc cho Mom Thi của chúng ta luôn hạnh phúc, thành công và sống thật rực rỡ theo cách của riêng mình\n毕业快乐，前程似锦！"
  }
];

const MEMORIES = [
  { img: "images/memory/12AB9A1D-9564-4668-A599-03F43BCF2E6C.jpg" },
  { img: "images/memory/1783772973855_1218572645093017134_1218572645093017134_eaff752a3f3efc90bb55871290d1089a.jpg" },
  { img: "images/memory/1783772974615_1218572645093017134_1218572645093017134_77ef7a6f9c47ea7433ac5800594f1ab5.jpg" },
  { img: "images/memory/1783772975384_1218572645093017134_1218572645093017134_5e31b4f77eafb0fbf72d2dddca40a2a9.jpg" },
  { img: "images/memory/1783772975792_1218572645093017134_1218572645093017134_802d3fa1d7ca40055f1a296984ce7a66.jpg" },
  { img: "images/memory/1783772976124_1218572645093017134_1218572645093017134_ae72b01a49d959a95e312681b18a874b.jpg" },
  { img: "images/memory/1783772976652_1218572645093017134_1218572645093017134_32dc6fd02f2372821a6a5355b644122f.jpg" },
  { img: "images/memory/1783772977020_1218572645093017134_1218572645093017134_3b2a693be70717613bf848bbae1e790c.jpg" },
  { img: "images/memory/1783772978128_1218572645093017134_1218572645093017134_434e8ab2624bcd42ca57ee869a305849.jpg" },
  { img: "images/memory/1783772978542_1218572645093017134_1218572645093017134_3d0dc55466c49bbf8100507c0dc8d157.jpg" },
  { img: "images/memory/1783772979419_1218572645093017134_1218572645093017134_131ef3fbacc0395b34d9e058034240ee.jpg" },
  { img: "images/memory/1783772980122_1218572645093017134_1218572645093017134_b96a5dcb4910fe72c277c2aade32b60a.jpg" },
  { img: "images/memory/1783772980487_1218572645093017134_1218572645093017134_f6cb6781f65cd4e4331ec007fd62258d.jpg" },
  { img: "images/memory/1783772982278_1218572645093017134_1218572645093017134_b3ea83e214176c404c6164fd5a56f7fd.jpg" },
  { img: "images/memory/1783772983690_1218572645093017134_1218572645093017134_9ec5cb1814bf0e90ad8ffab08bfcff7c.jpg" },
  { img: "images/memory/1783772984470_1218572645093017134_1218572645093017134_ed1275ea7a4384fed12761931335cc59.jpg" },
  { img: "images/memory/1783772985226_1218572645093017134_1218572645093017134_e482c74e91e36bb5df8ac5b837ce90c0.jpg" },
  { img: "images/memory/1783840720202_2161076217939959610_230303499720019701_d3a2f5b95b423f924d12538afbb4883e.jpg" },
  { img: "images/memory/1783840720325_2161076217939959610_230303499720019701_4ef140df2d4c64ecb5ecc0d0dbce7498.jpg" },
  { img: "images/memory/IMG_0423.JPG" },
  { img: "images/memory/IMG_0424.JPG" },
  { img: "images/memory/IMG_0425.JPG" },
  { img: "images/memory/IMG_3148.PNG" },
  { img: "images/memory/IMG_3149.PNG" },
  { img: "images/memory/IMG_3150.PNG" },
  { img: "images/memory/IMG_3995.PNG" },
  { img: "images/memory/IMG_4893.PNG" },
  { img: "images/memory/IMG_4895.PNG" },
  { img: "images/memory/IMG_4930.JPG" },
  { img: "images/memory/IMG_5050.PNG" },
  { img: "images/memory/IMG_5960.JPG" },
  { img: "images/memory/IMG_5999.PNG" },
  { img: "images/memory/IMG_8195.JPG" },
  { img: "images/memory/IMG_8196.JPG" },
  { img: "images/memory/IMG_8198.JPG" },
  { img: "images/memory/IMG_8202.JPG" },
  { img: "images/memory/IMG_8203.JPG" },
  { img: "images/memory/IMG_8745.JPG" },
  { img: "images/memory/IMG_8746.JPG" },
  { img: "images/memory/IMG_9186.JPG" },
  { img: "images/memory/IMG_9187.JPG" }
];

const HERO_NAME = "Dương Nguyễn Hoàng Thi"; // 👉 Tên người nhận

// ==========================================
// STATE
// ==========================================
let currentPage = 'hero';
let currentQuoteIndex = 0;
let guessedCorrectly = new Set();
let audioPlaying = false;
let autoNavTimer = null;
let particles = [];
let particleCtx, fireworkCtx;
let animFrameId;

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  playIntroSequence();
  initParticleSystem();
  initMouseSpotlight();
  renderQuote();
  renderFriendOptions();
  renderMemories();
  generateAudioBars();
});

// ==========================================
// CINEMATIC INTRO SEQUENCE
// ==========================================
function playIntroSequence() {
  const overlay = document.getElementById('introOverlay');

  // After intro animations finish, fade out overlay and start main experience
  setTimeout(() => {
    overlay.classList.add('fade-out');
    launchConfetti();
    startTypewriter();
    triggerRevealElements();
    animateCounters();

    // Dừng hiệu ứng pháo giấy sau 3 giây
    setTimeout(() => {
      document.getElementById('confettiContainer').innerHTML = '';
    }, 3000);

    // Remove overlay from DOM after transition
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 900);
  }, 3300);
}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================
function startTypewriter() {
  const el = document.getElementById('typewriterName');
  const text = HERO_NAME;
  let i = 0;

  function type() {
    if (i <= text.length) {
      el.innerHTML = `<span class="gold-text">${text.substring(0, i)}</span>`;
      i++;
      setTimeout(type, 100 + Math.random() * 80);
    }
  }

  setTimeout(type, 500);
}

// ==========================================
// ANIMATED COUNTERS
// ==========================================
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    setTimeout(() => requestAnimationFrame(update), 800);
  });
}

// ==========================================
// REVEAL ON PAGE ENTER (staggered)
// ==========================================
function triggerRevealElements() {
  const els = document.querySelectorAll('#page-hero .reveal-el');
  els.forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => el.classList.add('revealed'), 300 + delay);
  });
}

function revealPageElements(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;
  const els = page.querySelectorAll('.reveal-el');
  els.forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 100 + i * 120);
  });
}

// ==========================================
// PARTICLE SYSTEM (floating sparkles)
// ==========================================
function initParticleSystem() {
  const canvas = document.getElementById('particleCanvas');
  particleCtx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create particles
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 2.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -0.2 - Math.random() * 0.3,
      opacity: 0.1 + Math.random() * 0.3,
      hue: [45, 330, 270, 200][Math.floor(Math.random() * 4)], // gold, pink, purple, blue
    });
  }

  function animate() {
    particleCtx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Reset if out of bounds
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      // Draw glow
      particleCtx.beginPath();
      particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      particleCtx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
      particleCtx.shadowBlur = 8;
      particleCtx.shadowColor = `hsla(${p.hue}, 80%, 70%, ${p.opacity * 0.5})`;
      particleCtx.fill();
    });

    particleCtx.shadowBlur = 0;
    animFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// FIREWORKS
// ==========================================
let fireworks = [];
let fireworkParticles = [];
let fireworkFadeTimer = 0;

function launchFireworks() {
  const canvas = document.getElementById('fireworkCanvas');
  fireworkCtx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Launch 5 fireworks with stagger
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createFirework(canvas.width, canvas.height), i * 400);
  }

  fireworkFadeTimer = 0;
  animateFireworks();
}

function createFirework(w, h) {
  const x = w * 0.15 + Math.random() * w * 0.7;
  const targetY = h * 0.15 + Math.random() * h * 0.3;

  fireworks.push({
    x, y: h,
    targetY,
    speed: 4 + Math.random() * 3,
    hue: [45, 330, 270, 200, 150][Math.floor(Math.random() * 5)],
    trail: [],
  });
}

function explodeFirework(fw) {
  const count = 40 + Math.floor(Math.random() * 30);
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 1 + Math.random() * 3;
    fireworkParticles.push({
      x: fw.x, y: fw.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.015 + Math.random() * 0.015,
      hue: fw.hue + Math.random() * 30 - 15,
      size: 1.5 + Math.random() * 1.5,
    });
  }
}

function animateFireworks() {
  fireworkCtx.globalCompositeOperation = 'destination-out';
  fireworkCtx.fillStyle = 'rgba(0,0,0,0.15)';
  fireworkCtx.fillRect(0, 0, fireworkCtx.canvas.width, fireworkCtx.canvas.height);
  fireworkCtx.globalCompositeOperation = 'lighter';

  // Rising fireworks
  fireworks = fireworks.filter(fw => {
    fw.y -= fw.speed;
    fw.trail.push({ x: fw.x, y: fw.y });
    if (fw.trail.length > 8) fw.trail.shift();

    // Draw trail
    fw.trail.forEach((t, i) => {
      const alpha = i / fw.trail.length * 0.5;
      fireworkCtx.beginPath();
      fireworkCtx.arc(t.x, t.y, 2, 0, Math.PI * 2);
      fireworkCtx.fillStyle = `hsla(${fw.hue}, 80%, 70%, ${alpha})`;
      fireworkCtx.fill();
    });

    if (fw.y <= fw.targetY) {
      explodeFirework(fw);
      return false;
    }
    return true;
  });

  // Exploded particles
  fireworkParticles = fireworkParticles.filter(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.03; // gravity
    p.life -= p.decay;

    fireworkCtx.beginPath();
    fireworkCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    fireworkCtx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.life})`;
    fireworkCtx.fill();

    return p.life > 0;
  });

  if (fireworks.length > 0 || fireworkParticles.length > 0) {
    fireworkFadeTimer = 0;
    requestAnimationFrame(animateFireworks);
  } else {
    fireworkFadeTimer++;
    if (fireworkFadeTimer < 40) {
      // Continue fading for 40 more frames to ensure smooth trail disappearance
      requestAnimationFrame(animateFireworks);
    } else {
      // Force complete clear
      fireworkCtx.clearRect(0, 0, fireworkCtx.canvas.width, fireworkCtx.canvas.height);
    }
  }
}

function triggerCelebrationFireworks() {
  const canvas = document.getElementById('fireworkCanvas');
  for (let i = 0; i < 8; i++) {
    setTimeout(() => createFirework(canvas.width, canvas.height), i * 300);
  }
  animateFireworks();
}

// ==========================================
// MOUSE SPOTLIGHT
// ==========================================
function initMouseSpotlight() {
  const spot = document.getElementById('spotlight');
  document.addEventListener('mousemove', (e) => {
    spot.style.left = e.clientX + 'px';
    spot.style.top = e.clientY + 'px';
    if (!spot.classList.contains('active')) spot.classList.add('active');
  });
  document.addEventListener('mouseleave', () => spot.classList.remove('active'));
}

// ==========================================
// CONFETTI
// ==========================================
function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#ffd036', '#ff85b3', '#b39dff', '#6bb5ff', '#96fbc4', '#ff9a9e', '#fda085'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const size = 6 + Math.random() * 6;
      const dur = 2.5 + Math.random() * 3;
      c.style.left = `${Math.random() * 100}%`;
      c.style.width = `${size}px`;
      c.style.height = Math.random() > 0.5 ? `${size}px` : `${size * 1.5}px`;
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      if (Math.random() > 0.5) c.style.borderRadius = '50%';
      c.style.setProperty('--fall-duration', `${dur}s`);
      c.style.setProperty('--rotation', `${360 + Math.random() * 720}deg`);
      container.appendChild(c);
      setTimeout(() => {
        if (c.parentNode) c.parentNode.removeChild(c);
      }, (dur + 1) * 1000);
    }, i * 60);
  }
}

// ==========================================
// NAVIGATION
// ==========================================
function navigateTo(page, data = null) {
  // Clear celebration effects immediately when navigating away
  document.getElementById('confettiContainer').innerHTML = '';

  if (autoNavTimer) { clearTimeout(autoNavTimer); autoNavTimer = null; }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  if (page === 'wish' && data) showMagazinePage(data);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentPage = page;
  if (page !== 'wish') stopAudio();

  // Trigger reveal for new page
  revealPageElements(`page-${page}`);
}

// ==========================================
// MINI GAME
// ==========================================
function renderQuote() {
  const q = FRIENDS[currentQuoteIndex];
  document.getElementById('quoteNumber').textContent = `Câu đố #${currentQuoteIndex + 1}`;
  document.getElementById('memeImg').src = q.chibiMeme;
  document.getElementById('quotePager').textContent = `${currentQuoteIndex + 1} / ${FRIENDS.length}`;

  const statusEl = document.getElementById('quoteStatus');
  if (guessedCorrectly.has(q.id)) {
    statusEl.innerHTML = `
      <div style="margin-bottom:0.5rem;">🌟 Đã đoán - ${q.name}</div>
      <div style="display:flex;gap:0.5rem;justify-content:center;">
        <button class="btn btn-gold btn-sm" onclick="viewWish(${q.id})">Xem lời chúc</button>
      </div>
    `;
    statusEl.className = 'quote-status done';
  } else {
    statusEl.innerHTML = '';
    statusEl.className = 'quote-status';
  }

  document.getElementById('prevQuoteBtn').disabled = currentQuoteIndex === 0;
  document.getElementById('nextQuoteBtn').disabled = currentQuoteIndex === FRIENDS.length - 1;
  document.getElementById('gameFeedback').innerHTML = '';
  updateProgress();
}

function renderFriendOptions() {
  const container = document.getElementById('friendOptions');
  container.innerHTML = '';

  // Create a shuffled copy of the friends array
  const shuffledFriends = [...FRIENDS].sort(() => Math.random() - 0.5);

  shuffledFriends.forEach((friend, index) => {
    const opt = document.createElement('div');
    opt.className = 'friend-option cinematic-enter';
    // Add staggered delay for cinematic entrance
    opt.style.animationDelay = `${index * 0.1}s`;

    opt.dataset.friendId = friend.id;
    if (guessedCorrectly.has(friend.id)) opt.classList.add('guessed');

    opt.innerHTML = `
      <div class="friend-avatar-sm">
        ${friend.chibiImg ? `<img src="${friend.chibiImg}" alt="${friend.name}">` : friend.emoji}
      </div>
      <div class="friend-name">${friend.name}</div>
    `;
    opt.addEventListener('click', () => handleGuess(friend.id, opt));
    container.appendChild(opt);
  });
}

function handleGuess(friendId, element) {
  const cur = FRIENDS[currentQuoteIndex];
  const fb = document.getElementById('gameFeedback');

  // If the clicked friend is already guessed, let them view that friend's wish again
  if (guessedCorrectly.has(friendId)) {
    const f = FRIENDS.find(x => x.id === friendId);
    fb.innerHTML = `
      <p class="feedback-text correct">Bạn đã đoán đúng ${f.name} rồi! 🌟</p>
      <div style="display:flex;gap:0.5rem;justify-content:center;margin-top:0.8rem;">
        <button class="btn btn-gold btn-sm" onclick="viewWish(${f.id})">
          Xem lại lời chúc
        </button>
      </div>
    `;
    return;
  }

  // If they click an un-guessed friend but the current quote is already guessed
  if (guessedCorrectly.has(cur.id)) {
    fb.innerHTML = `<p class="feedback-text correct">Câu này đã đoán rồi! Bấm mũi tên để qua câu khác nhé 🌟</p>`;
    return;
  }

  if (friendId === cur.id) {
    // ✅ CORRECT
    element.classList.add('correct');
    guessedCorrectly.add(friendId);

    // Celebration fireworks!
    launchConfetti();

    fb.innerHTML = `
      <p class="feedback-text correct">🎉 Chính xác! Đây là lời chúc của ${cur.name}!</p>
      <p style="font-size:0.85rem;color:var(--text-light);margin-top:0.5rem;">Đang chuyển sang trang lời chúc...</p>
      <div class="countdown-bar"><div class="countdown-fill"></div></div>
    `;

    updateProgress();

    autoNavTimer = setTimeout(() => {
      renderQuote();
      renderFriendOptions();

      navigateTo('wish', cur);
    }, 600);
  } else {
    // ❌ WRONG
    element.classList.add('wrong');
    fb.innerHTML = `<p class="feedback-text wrong">❌ Không phải rồi! Thử lại nhé~</p>`;
    setTimeout(() => element.classList.remove('wrong'), 600);
  }
}

function changeQuote(dir) {
  const n = currentQuoteIndex + dir;
  if (n >= 0 && n < FRIENDS.length) {
    currentQuoteIndex = n;
    renderQuote();
    renderFriendOptions();
  }
}

function nextUnguessedQuote() {
  if (guessedCorrectly.size === FRIENDS.length) {
    showCompletion();
    return;
  }

  let found = false;
  for (let i = 1; i <= FRIENDS.length; i++) {
    const nextIdx = (currentQuoteIndex + i) % FRIENDS.length;
    if (!guessedCorrectly.has(FRIENDS[nextIdx].id)) {
      currentQuoteIndex = nextIdx;
      found = true;
      break;
    }
  }
  if (found) {
    renderQuote();
    renderFriendOptions();
  }
  navigateTo('game');
}

function updateProgress() {
  const t = FRIENDS.length, d = guessedCorrectly.size, p = Math.round((d / t) * 100);
  document.getElementById('progressLabel').textContent = `Đã đoán đúng: ${d}/${t}`;
  document.getElementById('progressPercent').textContent = `${p}%`;
  document.getElementById('progressFill').style.width = `${p}%`;
}

function viewWish(friendId) {
  const f = FRIENDS.find(x => x.id === friendId);
  if (f) navigateTo('wish', f);
}

// ==========================================
// MAGAZINE WISH PAGE
// ==========================================
function showMagazinePage(friend) {
  const visual = document.getElementById('magazineVisual');
  visual.style.background = friend.gradient;

  const spread = document.getElementById('magazineSpread');
  spread.querySelector('.magazine-content').style.setProperty('--friend-accent', friend.accent);

  // Trigger cinematic entrance
  spread.classList.remove('animate');
  void spread.offsetWidth; // force reflow
  spread.classList.add('animate');

  const chibiEl = document.getElementById('magazineChibi');
  chibiEl.innerHTML = friend.chibiImg
    ? `<img src="${friend.chibiImg}" alt="Chibi ${friend.name}">`
    : `<span class="placeholder-icon">${friend.emoji}</span><span>Ảnh chibi ${friend.name}</span>`;

  document.getElementById('magazineNameVisual').textContent = friend.name;
  document.getElementById('magazineFrom').textContent = `Lời chúc từ ${friend.name} ${friend.emoji}`;
  document.getElementById('magazineWishText').textContent = friend.wish;

  const audioEl = document.getElementById('wishAudio');
  const audioContainer = document.getElementById('magazineAudio');
  if (friend.audioSrc) {
    audioEl.src = friend.audioSrc;
    audioContainer.style.display = 'flex';
    // Auto-play audio after animation starts
    setTimeout(() => {
      if (audioEl.src) toggleAudio();
    }, 500);
  } else {
    audioEl.src = '';
    audioContainer.style.display = 'none';
  }

  const nextBtn = document.getElementById('nextWishBtn');
  if (nextBtn) {
    if (guessedCorrectly.size === FRIENDS.length) {
      nextBtn.innerHTML = `<span class="btn-icon">🎉</span> Hoàn thành`;
    } else {
      nextBtn.innerHTML = `<span class="btn-icon">✨</span> Đoán câu tiếp`;
    }
  }
}

// ==========================================
// AUDIO
// ==========================================
function generateAudioBars() {
  const wave = document.getElementById('audioWave');
  wave.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.setProperty('--bar-height', `${4 + Math.random() * 22}px`);
    bar.style.height = '3px';
    bar.style.animationDelay = `${Math.random() * 0.5}s`;
    wave.appendChild(bar);
  }
}

function toggleAudio() {
  const a = document.getElementById('wishAudio');
  const btn = document.getElementById('audioPlayBtn');
  const wave = document.getElementById('audioWave');

  if (!a.src || a.src === window.location.href) {
    showToast('🔊 Chưa có file audio — hãy thêm file MP3 vào thư mục audio/');
    return;
  }
  if (audioPlaying) {
    a.pause(); btn.textContent = '▶'; wave.classList.remove('playing'); audioPlaying = false;
  } else {
    a.play().catch(() => showToast('🔊 Không thể phát audio'));
    btn.textContent = '⏸'; wave.classList.add('playing'); audioPlaying = true;
  }
  a.onended = () => { btn.textContent = '▶'; wave.classList.remove('playing'); audioPlaying = false; };
}

function stopAudio() {
  const a = document.getElementById('wishAudio');
  if (a) { a.pause(); a.currentTime = 0; }
  const btn = document.getElementById('audioPlayBtn');
  const wave = document.getElementById('audioWave');
  if (btn) btn.textContent = '▶';
  if (wave) wave.classList.remove('playing');
  audioPlaying = false;
}

// ==========================================
// MEMORIES
// ==========================================
function renderMemories() {
  const grid = document.getElementById('memoriesGrid');
  grid.innerHTML = '';
  MEMORIES.forEach(m => {
    const card = document.createElement('div');
    card.className = 'memory-card'; // Removed reveal-el to show instantly
    card.innerHTML = `
      <div class="memory-img" ${m.img ? `onclick="openLightbox('${m.img}')"` : ''}>
        ${m.img
        ? `<img src="${m.img}" alt="Memory">`
        : `<span class="placeholder-icon">📷</span>`}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// LIGHTBOX / COMPLETION / TOAST
// ==========================================
function openLightbox(src) {
  document.getElementById('lightboxContent').innerHTML = `<img src="${src}" alt="Kỉ niệm">`;
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('lightbox').classList.remove('active');
}

function showCompletion() {
  document.getElementById('completionOverlay').classList.add('active');
  triggerCelebrationFireworks();
  launchConfetti();

  const list = document.getElementById('completionFriendsList');
  if (list) {
    list.innerHTML = '';
    FRIENDS.forEach(f => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.justifyContent = 'space-between';
      row.style.background = 'rgba(255,255,255,0.1)';
      row.style.padding = '0.5rem 1rem';
      row.style.borderRadius = '8px';
      row.style.marginBottom = '0.5rem';

      row.innerHTML = `
        <span style="font-weight:600; color:var(--text-dark)">${f.name} ${f.emoji}</span>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-gold btn-sm" onclick="closeCompletion(); viewWish(${f.id})">Xem</button>
        </div>
      `;
      list.appendChild(row);
    });
  }
}
function closeCompletion() { document.getElementById('completionOverlay').classList.remove('active'); }

function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.classList.add('hiding'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ==========================================
// KEYBOARD
// ==========================================
document.addEventListener('keydown', (e) => {
  if (currentPage === 'game') {
    if (e.key === 'ArrowLeft') changeQuote(-1);
    if (e.key === 'ArrowRight') changeQuote(1);
  }
  if (e.key === 'Escape') { closeLightbox(); closeCompletion(); }
});
