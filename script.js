const loveConfig = {
  herName: 'Kee',
  myName: 'Sr',
  anniversary: 'always & forever',
  birthdayDate: '2026-09-20T00:00:00',
  counterMessage: 'Nalla purinjiko, enoda life la enakku kedacha oru gift na adhu nee dhaan 🎁💗. Evlovo persons life la cross panni vandhirukkaanga, aana unkooda irukkumbothu kedaikkira comfort feel vera yaar koodayum irukkumbothu varala 🤍. Enoda heart la irukkura unoda place ah life la yaaralum replace panna mudiyadhu. Nee dhaan enoda only best person uh! 🫶✨. Unna evlovo times hurt pannirukken dhana? Sorry 🥺. Ini unna hurt panna maaten. Life la endha situation layum nee enna vittu poira koodadhu 🫂💞',
  finalQuestion: 'Will you be mine?',
  finalMessage: `Unnoda enakku life full aa travel pannanum nu romba aasai 🛣️💗. Unakku enna pudikkum, enna pudikkaadhu nu enakku innum full aa theriyama irukkalam, aana parava illa… adhellam unnata ketu konjam konjam aa therinjukittu, un wishes um dreams um purinjuka aasai padren 🌙✨.

Hey, nee enna paakura maari naan unna paakalayae… naan pesum kaadhal vasanam unakku thaan kekalayae… 😭🤌💕. Andha maari dhaan, en feelings ellam unakku puriyudha illaya nu enakku theriyadhu… aana naan feel panradhu mattum romba genuine.

Nee en mela kovapadura ovvoru time-um enakkulla edho oru maari feel aagum 🥺. Adha exact aa words la sollanum na… Sidu sidu endralum Dhinam enai kondralum En kadhal marathadi Vidu vidu endralum Vizhagida sonnalum En kadhal theerathadi 🤌. Aana oru vishayam mattum clear aa theriyum: nee en life la romba important person 🤍.

Namma relationship ku enna name vechurukkom, future la enna nadakkum nu enakku theriyadhu. Aana ippo irukkura bond ah genuine aa value panren 🫶. Unakku happy aa irukkanum, un dreams achieve pannanum, nee edha wish pannalum adha achieve panna naan mudinja alavukku support pannanum nu aasai 🌷.

Life la evlo changes vandhaalum, namma rendu perum orutharukku oruthar respect, understanding, care oda irukkanum. Unakku thevaiyana nerathula support aa irundhu, un happiness ku genuine aa care panra oru person aa irukkanum nu dhaan en aasai 💞.

Unakku ego adhigam nu enakku theriyum, but parava illa… naa adjust panikkiren 😌. Aana enna vittu mattum poogadha. You are the only reason for my happiness. Ethana peru en life la vandhuttu ponaalum seri, unna mattum dhaan enakku pudikkum. You have a special place in my heart, always ❤️.

Maybe en feelings aa perfect aa express panna enakku words kedaikkama irukkalam… but one thing is true: you matter to me more than I know how to explain 💌. And onnu sollavaa… Neeyum naanum ore pulli ore kodu Neeyum naanum vazha pogum andha idam ore veedu thaa....🤌.

Enakku vanthu un kooda epdi vazhanum nu theriyumaa? Like this: 
"Aasaiya izhama mayakkathil
Muththatha kodukkaiyil anba kodukkanum
Narppathu varusam kadanthappodhum
Kaiya pidipathil kaadhal irukkanum
Varusha kanakka
Azhagu sanda pottu😁
Nenjam purinjikka thodangum😌"😭🤌. Romba years aanaalum, namma life la love, understanding, care ellam same aa irukkanum nu dhaan aasai. Sanda vandhaalum, kovam vandhaalum, misunderstandings vandhaalum, at the end namma rendu perum orutharukku oruthar purinjikittu irukkanum 😌❤️.

In my World, நீ என் உலக அழகியே, உன்னை போல் ஒருத்தி இல்லையே 😫💗.

Once again, happiest birthday to the girl I may not have met yet, but whom I have come to love so much. To the person who will always have a special space in my heart, until my last breath 🎂🎀💗.

Sollatha aasai ellam nee thaaney penneyyy 🫴🏻💗🫵.

Unakku enna sollanum nu theriyama pala neram words thedi iruppen… aana evlo yosichalum, kadaisila en heart la irukkura ore feeling dhaan varum nee romba special. Unna pathi innum neraya therinjukanum, un wishes ai purinjukanum, un dreams ku support aa irukkanum, un kooda neraya memories create pannanum nu aasai.

Last aa onney onnu solren "Ada nee enakku venumadi Thangamae thangam thangam Naa vecha kannu vaangavillaThangamae thangam thangam😭🫣"

So once again… Happiest Birthdayyy my Butterbiscuit yeee 😘🎂🎀💗. Unakku pidicha maari, unakku pudicha life ah, romba happy aa live pannanum. And whatever happens, indha birthday la naan solla virumburadhu onnu dhaan  you will always have a very special place in my heart❤️
`,
  videoUrl: 'assets/kee-birthday.mp4.mp4',
  musicUrl: ''
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function applyConfig() {
  $$('[data-config]').forEach((element) => {
    const value = loveConfig[element.dataset.config];
    if (value !== undefined) element.textContent = value;
  });
  const audio = $('#loveSong');
  if (loveConfig.musicUrl) audio.src = loveConfig.musicUrl;
  const video = $('#loveVideo');
  if (loveConfig.videoUrl) video.src = loveConfig.videoUrl;
}

function createBackgroundDetails() {
  const stars = $('#starField');
  for (let index = 0; index < 55; index += 1) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    stars.appendChild(star);
  }
  const hearts = $('#floatingHearts');
  const addHeart = () => {
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = Math.random() > .3 ? '♥' : '♡';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${9 + Math.random() * 9}s`;
    heart.style.fontSize = `${.7 + Math.random() * 1.1}rem`;
    hearts.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  };
  for (let index = 0; index < 9; index += 1) setTimeout(addHeart, index * 900);
  setInterval(addHeart, 2300);
}

function typeImportantLine() {
  const line = $('#typeLine');
  const text = line.dataset.text;
  let index = 0;
  const write = () => {
    line.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) setTimeout(write, 42);
  };
  write();
}

function createConfetti() {
  const symbols = ['♥', '✦', '·', '♡'];
  for (let index = 0; index < 90; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = symbols[index % symbols.length];
    piece.style.color = ['#ff6fae', '#ffd1e5', '#c99cff', '#ffffff'][index % 4];
    piece.style.setProperty('--x', `${(Math.random() - .5) * 115}vw`);
    piece.style.setProperty('--y', `${(Math.random() - .7) * 105}vh`);
    piece.style.setProperty('--r', `${(Math.random() - .5) * 900}deg`);
    piece.style.animationDelay = `${Math.random() * .35}s`;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function setupBirthdayCountdown() {
  const countdown = $('#countdown');
  const label = $('#countdownLabel');
  let target = new Date(loveConfig.birthdayDate);
  const refresh = () => {
    if (target.getTime() <= Date.now()) {
      target = new Date(target);
      target.setFullYear(target.getFullYear() + 1);
    }
    const remaining = Math.max(0, target.getTime() - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining / 3600000) % 24);
    const minutes = Math.floor((remaining / 60000) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);
    $('#countDays').textContent = String(days).padStart(2, '0');
    $('#countHours').textContent = String(hours).padStart(2, '0');
    $('#countMinutes').textContent = String(minutes).padStart(2, '0');
    $('#countSeconds').textContent = String(seconds).padStart(2, '0');
    label.textContent = `until ${target.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, your day`;
  };
  refresh();
  setInterval(refresh, 1000);
  countdown.addEventListener('click', () => $('#birthday').scrollIntoView({ behavior: 'smooth' }));
}

function setupBirthdayNotes() {
  const message = $('#reasonMessage');
  $$('.reason-card').forEach((card) => {
    card.addEventListener('click', () => {
      $$('.reason-card').forEach((item) => item.classList.remove('selected'));
      card.classList.add('selected');
      message.textContent = card.dataset.reason;
      message.classList.remove('show');
      requestAnimationFrame(() => message.classList.add('show'));
      createConfetti();
    });
  });
}

function setupVideo() {
  const video = $('#loveVideo');
  const frame = $('#videoFrame');
  const fileInput = $('#videoFile');
  const matchVideoRatio = () => {
    if (!video.videoWidth || !video.videoHeight) return;
    frame.style.setProperty('--video-ratio', `${video.videoWidth} / ${video.videoHeight}`);
    frame.classList.add('has-video');
  };
  video.addEventListener('loadedmetadata', matchVideoRatio);
  video.addEventListener('loadeddata', matchVideoRatio);
  video.addEventListener('error', () => {
    frame.classList.remove('has-video');
    $('#videoStatusTitle').textContent = 'One tiny video fix needed';
    $('#videoStatus').innerHTML = 'This file plays in VLC, but browsers need H.264 MP4 video with AAC audio.<br />Export it in that format and replace the file ♡';
  });
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (video.dataset.objectUrl) URL.revokeObjectURL(video.dataset.objectUrl);
    const objectUrl = URL.createObjectURL(file);
    video.dataset.objectUrl = objectUrl;
    video.src = objectUrl;
    video.load();
    video.play().catch(() => {});
  });
}

function setupInteractions() {
  const opening = $('#opening');
  $('#openHeart').addEventListener('click', (event) => {
    const button = event.currentTarget;
    for (let index = 0; index < 14; index += 1) {
      const burst = document.createElement('span');
      burst.className = 'confetti';
      burst.textContent = '♥';
      burst.style.color = '#ff8fbd';
      burst.style.setProperty('--x', `${(Math.random() - .5) * 15}rem`);
      burst.style.setProperty('--y', `${(Math.random() - .5) * 15}rem`);
      burst.style.setProperty('--r', `${Math.random() * 360}deg`);
      button.appendChild(burst);
      burst.addEventListener('animationend', () => burst.remove());
    }
    opening.classList.add('opened');
    setTimeout(() => $('#counter').scrollIntoView({ behavior: 'smooth' }), 430);
  });

  $('#revealMessage').addEventListener('click', (event) => {
    $('#hiddenMessage').classList.toggle('is-visible');
    event.currentTarget.innerHTML = $('#hiddenMessage').classList.contains('is-visible') ? 'keep this one close <span>♥</span>' : 'There is something I want to tell you <span>→</span>';
  });

  const messages = ['Do you know how special you are?', 'You make ordinary days feel beautiful.', 'Every little moment with you means something to me.', "And there is one thing I have been wanting to ask..."];
  let currentMessage = 0;
  const renderMessage = (nextIndex) => {
    currentMessage = (nextIndex + messages.length) % messages.length;
    const stage = $('#messageStage');
    stage.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(10px)' }], { duration: 180, fill: 'forwards' }).finished.then(() => {
      $('#messageNumber').textContent = `0${currentMessage + 1} / 04`;
      $('#sequenceMessage').textContent = messages[currentMessage];
      $$('#progressDots button').forEach((dot, index) => dot.classList.toggle('active', index === currentMessage));
      stage.animate([{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 420, fill: 'forwards' });
    });
  };
  $('#nextMessage').addEventListener('click', () => renderMessage(currentMessage + 1));
  $('#prevMessage').addEventListener('click', () => renderMessage(currentMessage - 1));
  $$('#progressDots button').forEach((dot, index) => dot.addEventListener('click', () => renderMessage(index)));

  $('#maybeButton').addEventListener('click', () => {
    const note = $('#choiceNote');
    note.textContent = note.textContent.includes('take your time') ? 'No pressure. Just my whole heart.' : `Aarum ketka edhu ondrai
Edhuondrai naan ketten unnai..
Adhai thanthal nandri
Pidivaatham indri
Nee thanthal nandri
Thuli thulirae..eehh
Thuli kaalam ketten
Thuli kaadhal ketten 😭`;
  });
  $('#yesButton').addEventListener('click', () => {
    createConfetti();
    $('#celebrationMessage').classList.add('is-visible');
    $('#choiceNote').textContent = 'I knew my heart chose well.';
    $('#yesButton').setAttribute('aria-label', 'You said yes');
  });

  const audio = $('#loveSong');
  const musicButton = $('#musicToggle');
  musicButton.addEventListener('click', async () => {
    if (!loveConfig.musicUrl) {
      $('#choiceNote').textContent = 'Add your favorite song in loveConfig.musicUrl to turn the soundtrack on.';
      return;
    }
    if (audio.paused) await audio.play(); else audio.pause();
    const playing = !audio.paused;
    musicButton.classList.toggle('is-playing', playing);
    musicButton.setAttribute('aria-pressed', String(playing));
    musicButton.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
  });
}

function setupReveals() {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.id === 'typeLine') typeImportantLine();
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .18 });
  $$('.reveal, #typeLine').forEach((element) => observer.observe(element));
}

applyConfig();
createBackgroundDetails();
setupInteractions();
setupReveals();
setupBirthdayCountdown();
setupBirthdayNotes();
setupVideo();
