import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyB7YStFu75rVaNjMuFw7X00dtJe_1Psj9s";
const genAI = new GoogleGenerativeAI(API_KEY);

const MEMORY_REPOSITORY = [
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0026(1).jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0032(1).jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0040.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0024.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0031(1).jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0030.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0035.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0034.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0022(1).jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0021.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0032.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0009.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0033.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0028.jpg",
  "https://ik.imagekit.io/kwujelxax/IMG-20260213-WA0013.jpg",
  "https://ik.imagekit.io/kwujelxax/New%20Folder/IMG-20260213-WA0019.jpg",
  "https://ik.imagekit.io/kwujelxax/New%20Folder/IMG-20260213-WA0037.jpg",
  "https://ik.imagekit.io/kwujelxax/New%20Folder/IMG-20260213-WA0041.jpg",
  "https://ik.imagekit.io/kwujelxax/New%20Folder/IMG-20260213-WA0042.jpg",
  "https://ik.imagekit.io/kwujelxax/New%20Folder/IMG-20260213-WA0017.jpg"
];

const SECTIONS = [
  {
    title: "How It All Began",
    content: "How We Met — And Everything After. It’s funny how the most important people in your life sometimes walk in so quietly. Janet and I met during a movie night in university. Nothing dramatic. No spotlight moment. We didn’t even talk that night. Just two people in the same room, watching the same film, completely unaware that something meaningful had just begun. It wasn’t until later that we really connected. One conversation turned into another. A hangout became a date. A date became consistency. And somewhere between laughter, late-night talks, and random moments that didn’t seem important at the time… something beautiful started forming. What I love about us is that it didn’t feel forced. It didn’t feel rushed. It felt natural. You came into my life gently, but you stayed intentionally."
  },
  {
    title: "What You Mean To Me",
    content: "Janet, you have this way of being present. You listen. You understand. You make things lighter without even trying. You’re soft but strong. Calm but expressive. Grounded but full of dreams. Being with you has been beautiful, not because everything is perfect, but because it’s real. And I appreciate that."
  },
  {
    title: "The Honest Part",
    content: "I’m still building. Still fixing parts of my life. Still working on my finances. Still becoming the man I know I can be. And because I respect you, and I respect what we have, I want to take things the right way. Slow. Intentional. Healthy. Not because I love you any less, but because I love you enough to want to build something solid. I don’t want to rush something that deserves care."
  },
  {
    title: "If You Ever Doubt Yourself",
    content: "If you ever doubt yourself, I hope you come back to this page. I hope you remember that there is someone who sees you clearly. Someone who admires your strength. Someone who notices your softness. Someone who values your mind, not just your beauty. You are not ordinary. And you are not unnoticed."
  }
];

const MLA_LETTER = {
  header: "Prof. Heart <br> Love & Growth 101",
  title: "A Letter to Janet",
  content: `Janet,<br><br>Happy Birthday, my love. There’s something about today that makes me pause a little longer and think a little deeper. Maybe it’s because birthdays aren’t just about growing older, they’re about celebrating the kind of person you are and the light you bring into the world. And you, Janet, bring so much light.<br><br>I still think about how simple everything started. No grand entrance. No dramatic moment. Just two people whose paths crossed quietly. And somehow, from that quiet beginning, something steady and beautiful has grown. Being with you feels calm. It feels intentional. It feels safe. You have this way of making me feel understood without trying too hard. Your laughter, your thoughts, your softness, even your stubborn moments, they all make you you. And I genuinely like you for who you are, not just for how you make me feel.<br><br>I won’t pretend I have everything figured out. I’m still building my life. Still working on my finances. Still becoming the man I know I need to be, for myself first, and for the future I want to have. But what I can promise is honesty. And intention. Even though I love you, I want us to take things slow. Not because I’m unsure, but because I’m serious. I want us to grow the right way. No pressure. No rushing. Just two people choosing each other carefully, patiently, and sincerely. You deserve something solid. Something thoughtful. Something real. And I’m grateful that right now, we’re walking this path together. On your birthday, I hope you feel celebrated. I hope you feel valued. I hope you feel deeply loved, not just by me, but by everyone lucky enough to know you.<br><br>Thank you for being Janet. Thank you for being you. Happy Birthday.`
};

const FINAL_MESSAGE = "Janet, this page is just words and pictures, but what I feel for you goes beyond anything I can design or write. We met in such a simple way, and somehow you’ve become someone deeply important to me. In this season where I’m still building, still learning, still fixing parts of my life… you’ve been warmth. You’ve been comfort. You’ve been peace. You are my calm. You are my choice. And yes… you are my oversized teddy bear, soft, safe, and somehow strong at the same time. I don’t want to rush us. I want to grow into something beautiful. Something intentional. Something that lasts because we built it carefully. And on your birthday, I just want you to know this, you are appreciated, you are valued, and you are loved gently. Happy Birthday, my oversized teddy bear. 💛";

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    loader: document.getElementById('scene-loading'),
    progressBar: document.getElementById('loader-progress'),
    loaderMsg: document.getElementById('loader-message'),
    sceneLocked: document.getElementById('scene-locked'),
    sceneIntro: document.getElementById('scene-intro'),
    sceneOverview: document.getElementById('scene-overview'),
    sceneGallery: document.getElementById('scene-gallery'),
    vaultDoor: document.getElementById('vault-door'),
    vaultWheel: document.getElementById('vault-wheel'),
    vaultGlow: document.getElementById('vault-glow'),
    focusOverlay: document.getElementById('focus-overlay'),
    introText: document.getElementById('intro-text'),
    moodCollage: document.getElementById('mood-collage'),
    galleryTrack: document.getElementById('horizontal-track'),
    closeGalleryBtn: document.getElementById('close-gallery'),
    mainCanvas: document.getElementById('ambient-canvas')
  };

  let isGalleryActive = false;
  let hasTransitioned = false;
  let dynamicPhrases = [];

  initParticleSystem(elements.mainCanvas);
  generateBalloons();

  async function materializeAssets() {
    elements.loaderMsg.innerText = "Consulting the stars for Janet...";
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = "Write 3 very short, soulful birthday wishes for Janet. Under 8 words each.";
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      dynamicPhrases = text.split('\n').filter(l => l.trim().length > 3).slice(0, 3);
    } catch (e) {
      dynamicPhrases = [
        "Happy Birthday, my beautiful Janet.",
        "To the girl who brings the light.",
        "Our story is my favorite journey."
      ];
    }
  }

  async function runNarrativeEngine(container, textArray) {
    for (const phrase of textArray) {
      container.textContent = ""; 
      const chars = Array.from(phrase.trim());
      for (let i = 0; i < chars.length; i++) {
        container.textContent += chars[i];
        await cinematicDelay(65);
      }
      await cinematicDelay(2500);
      if (textArray.indexOf(phrase) < textArray.length - 1) {
        for (let i = phrase.length; i >= 0; i--) {
          container.textContent = phrase.slice(0, i);
          await cinematicDelay(20);
        }
      }
    }
  }

  async function runBootloader() {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 90) progress += 0.5;
      elements.progressBar.style.width = `${progress}%`;
    }, 50);
    await materializeAssets();
    elements.progressBar.style.width = "100%";
    clearInterval(interval);
    setTimeout(() => transitionScene(elements.loader, elements.sceneLocked), 1000);
  }

  elements.focusOverlay.addEventListener('click', async () => {
    if (hasTransitioned) return;
    hasTransitioned = true;
    elements.focusOverlay.style.opacity = '0';
    setTimeout(() => elements.focusOverlay.style.display = 'none', 1000);
    
    await cinematicDelay(500);
    elements.vaultWheel.style.transform = 'rotate(1080deg)';
    await cinematicDelay(2000);
    elements.vaultDoor.style.transform = 'rotateY(-115deg)';
    elements.vaultGlow.style.opacity = '1';
    
    await cinematicDelay(2500);
    await transitionScene(elements.sceneLocked, elements.sceneIntro);
    await runNarrativeEngine(elements.introText, dynamicPhrases);
    await transitionScene(elements.sceneIntro, elements.sceneOverview);
    revealMosaicTiles();
  });

  async function transitionScene(from, to) {
    if (from) { from.classList.remove('visible'); await cinematicDelay(1000); from.classList.remove('active'); }
    if (to) { to.classList.add('active'); void to.offsetWidth; to.classList.add('visible'); await cinematicDelay(800); }
  }

  function createMosaicTile(data, index) {
    const tile = document.createElement('div');
    tile.className = 'mood-tile';
    if (data.type === 'visual') {
      tile.innerHTML = `<img src="${data.url}" loading="lazy">`;
      if (index === 7) { 
        const hiddenLine = document.createElement('div');
        hiddenLine.className = 'hidden-caption';
        hiddenLine.innerText = "This is the face I silently thank God for.";
        tile.appendChild(hiddenLine);
      }
    } else if (data.type === 'story') {
      tile.classList.add('text-tile');
      tile.innerHTML = `<div class="letter-tile"><span>${data.title}</span></div>`;
    } else if (data.type === 'final') {
        tile.classList.add('final-tile');
        tile.innerHTML = `<div class="letter-tile"><span>Happy Birthday, Teddy Bear</span></div>`;
    } else {
      tile.innerHTML = `<div class="letter-tile"><span>A Letter to Janet</span></div>`;
    }
    tile.addEventListener('click', () => openGalleryAt(index));
    return tile;
  }

  function createGallerySlide(data) {
    const slide = document.createElement('div');
    slide.className = 'memory-slide';
    if (data.type === 'story') {
        slide.innerHTML = `<div class="story-slide"><h3>${data.title}</h3><p>${data.content}</p></div>`;
    } else if (data.type === 'mla') {
        slide.innerHTML = `<div class="mla-card">
            <div class="mla-header">${MLA_LETTER.header}</div>
            <div class="mla-title">${MLA_LETTER.title}</div>
            <div class="mla-content">${MLA_LETTER.content}</div>
        </div>`;
    } else if (data.type === 'final') {
        slide.innerHTML = `<div class="final-message-card"><p>${FINAL_MESSAGE}</p><div class="wax-seal">💜</div></div>`;
    } else {
      slide.innerHTML = `<div class="slide-inner"><img src="${data.url}"></div>`;
    }
    return slide;
  }

  async function openGalleryAt(index) {
    isGalleryActive = true;
    await transitionScene(elements.sceneOverview, elements.sceneGallery);
    const slides = document.querySelectorAll('.memory-slide');
    const target = slides[index];
    if (target) {
      const scrollTarget = target.offsetLeft - (elements.galleryTrack.offsetWidth / 2) + (target.offsetWidth / 2);
      elements.galleryTrack.scrollTo({ left: scrollTarget, behavior: 'instant' });
      initGalleryParallax(slides);
    }
  }

  elements.closeGalleryBtn.addEventListener('click', () => {
    isGalleryActive = false;
    transitionScene(elements.sceneGallery, elements.sceneOverview);
  });

  function initGalleryParallax(slides) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.target.classList.toggle('focused', e.isIntersecting));
    }, { root: elements.galleryTrack, threshold: 0.5 });
    slides.forEach(s => observer.observe(s));
    
    elements.galleryTrack.addEventListener('scroll', () => {
      if (!isGalleryActive) return;
      const trackCenter = elements.galleryTrack.scrollLeft + (elements.galleryTrack.offsetWidth / 2);
      slides.forEach(slide => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = slideCenter - trackCenter;
        const normalizedDist = distance / (elements.galleryTrack.offsetWidth / 2);
        const rotY = distance * -0.03;
        const scaleVal = 1 - (Math.abs(normalizedDist) * 0.1);
        slide.style.transform = `rotateY(${rotY}deg) scale(${scaleVal})`;
        slide.style.opacity = 1 - Math.min(Math.abs(normalizedDist) * 0.6, 1);
      });
    });
  }

  function revealMosaicTiles() {
    document.querySelectorAll('.mood-tile').forEach((t, i) => {
      setTimeout(() => t.classList.add('spill-active'), i * 70);
    });
  }

  function initParticleSystem(canvas) {
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
    function render() {
      ctx.fillStyle = '#05010a'; ctx.fillRect(0,0,w,h);
      requestAnimationFrame(render);
    }
    render();
  }

  function generateBalloons() {
    const container = document.getElementById('balloon-container');
    const colors = ['rgba(251, 191, 36, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(236, 72, 153, 0.1)'];
    for(let i=0; i<25; i++) {
      const b = document.createElement('div');
      b.className = 'balloon';
      b.style.left = Math.random()*100 + 'vw';
      b.style.background = colors[Math.floor(Math.random()*colors.length)];
      b.style.animationDelay = Math.random()*15 + 's';
      container.appendChild(b);
    }
  }

  const finalContent = [];
  SECTIONS.forEach(s => finalContent.push({ type: 'story', ...s }));
  MEMORY_REPOSITORY.forEach(url => finalContent.push({ type: 'visual', url }));
  finalContent.push({ type: 'mla' });
  finalContent.push({ type: 'final' });

  finalContent.forEach((d, i) => {
    elements.moodCollage.appendChild(createMosaicTile(d, i));
    elements.galleryTrack.appendChild(createGallerySlide(d));
  });

  runBootloader();
});

function cinematicDelay(ms) { return new Promise(res => setTimeout(res, ms)); }