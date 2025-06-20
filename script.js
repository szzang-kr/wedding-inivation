const texts = {
  "intro_quote": {
    "ko": "사랑하는 사람 앞에서는 그저 웃음만 나는 바보가 된다",
    "ja": "愛する人の前では、ただ笑ってしまうバカになる"
  },
  "intro_quote_author": {
    "ko": "– 나태주, 《꽃을 보듯 너를 본다》 중",
    "ja": "– ナ・テジュ『花を見るように君を見る』より"
  },
  "intro_1": {
    "ko": "서로를 바라보며",
    "ja": "お互いを見つめ合いながら"
  },
  "intro_2": {
    "ko": "순수한 마음으로 웃을 수 있는 사람을 만났습니다.",
    "ja": "純粋な心で笑い合える人に出会いました。"
  },
  "intro_3": {
    "ko": "이제 저희 두 사람이 인생이라는 길을",
    "ja": "これから二人で人生という道を"
  },
  "intro_4": {
    "ko": "함께 걸어가려 합니다.",
    "ja": "一緒に歩んでいきます。"
  },
  "intro_5": {
    "ko": "그 첫 자리에 함께해 주세요.",
    "ja": "その最初の場にぜひお越しください。"
  },
  "date": {
    "ko": "2025. 10. 12 SUN",
    "ja": "2025年 10月 12日 日曜日"
  },
  "time": {
    "ko": "14:00 PM",
    "ja": "14:00 PM"
  },
  "time_with_date": {
    "ko": "Sunday 2PM",
    "ja": "Sunday 2PM"
  },
  "groom_name_title": {
    "ko": "신랑",
    "ja": "新郎"
  },
  "groom_name": {
    "ko": "안상훈",
    "ja": "アン・サンフン"
  },
  "bride_name_title": {
    "ko": "신부",
    "ja": "新婦"
  },
  "bride_name": {
    "ko": "세키 나미리",
    "ja": "関 南里"
  },
  "place": {
    "ko": "💒 르비르모어",
    "ja": "💒 ルビルモア"
  },
  "location": {
    "ko": "서울 강남구 테헤란로 406 (서울 강남구 대치동 889-5)",
    "ja": "ソウル江南区テヘラン路406(ソウル江南区大峙洞889-5)"
  },
  "subway": {
    "ko": "🚇 지하철",
    "ja": "🚇 地下鉄"
  },
  "subway_description": {
    "ko": "2호선 및 분당선, 선릉역 1번 출구와 바로 연결",
    "ja": "2号線及び盆唐線ソンルン駅１番出口と直結"
  },
  "bus": {
    "ko": "🚌 버스",
    "ja": "🚌 バース"

  },
  "bus_station": {
    "ko": "선릉역 하차",
    "ja": "ソンルン駅"
  },
  "copy_url": {
    "ko": "URL 복사",
    "ja": "URLコピー"
  },
  "copy_success": {
    "ko": "복사되었습니다!",
    "ja": "コピーしました！"
  },
  "copy_fail": {
    "ko": "복사 실패!",
    "ja": "コピー失敗！"
  }
};

let lang = 'ko';

function renderTexts() {
  document.getElementById('intro_quote').textContent = texts.intro_quote[lang];
  document.getElementById('intro_quote_author').textContent = texts.intro_quote_author[lang];
  document.getElementById('intro_1').textContent = texts.intro_1[lang];
  document.getElementById('intro_2').textContent = texts.intro_2[lang];
  document.getElementById('intro_3').textContent = texts.intro_3[lang];
  document.getElementById('intro_4').textContent = texts.intro_4[lang];
  document.getElementById('intro_5').textContent = texts.intro_5[lang];
  document.getElementById('date').textContent = texts.date[lang];
  document.getElementById('groom_name_title').textContent = texts.groom_name_title[lang];
  document.getElementById('groom_name').textContent = texts.groom_name[lang];
  document.getElementById('bride_name_title').textContent = texts.bride_name_title[lang];
  document.getElementById('bride_name').textContent = texts.bride_name[lang];
  document.getElementById('place').textContent = texts.place[lang];
  document.getElementById('location').textContent = texts.location[lang];
  document.getElementById('subway').textContent = texts.subway[lang];
  document.getElementById('subway-description').textContent = texts.subway_description[lang];
  document.getElementById('bus').textContent = texts.bus[lang];
  document.getElementById('bus-station').textContent = texts.bus_station[lang];
  // URL 복사 버튼
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) copyBtn.textContent = texts.copy_url[lang];
}

function setupLangSwitch() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langIcon = document.getElementById('lang-toggle-icon');

  langToggleBtn.onclick = function () {
    lang = lang === 'ko' ? 'ja' : 'ko';
    langIcon.src = lang === 'ko' ? 'images/lang_ja.svg' : 'images/lang_ko.svg';
    renderTexts();
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const fab = document.getElementById('floating-action-btn');

  renderTexts();
  setupLangSwitch();
  // Extra toggle button functionality
  const extraBtn = document.getElementById('extra-toggle-btn');
  const extraIcon = document.getElementById('extra-toggle-icon');
  if (extraBtn && extraIcon) {
    extraBtn.addEventListener('click', () => {
      lang = lang === 'ko' ? 'ja' : 'ko';
      extraIcon.src = lang === 'ko' ? 'images/lang_ja.svg' : 'images/lang_ko.svg';
      renderTexts();
    });
  }

  const bgmBtn = document.getElementById('bgm-toggle');
  const appEl = document.getElementById('app');
  if (bgmBtn && appEl) {
    const updateBtnPosition = () => {
      const rect = appEl.getBoundingClientRect();
      const offsetRight = window.innerWidth - rect.right;
      bgmBtn.style.right = `${Math.max(offsetRight + 20, 20)}px`;
    };
    updateBtnPosition();
    window.addEventListener('resize', updateBtnPosition);
    window.addEventListener('scroll', updateBtnPosition);
  }

  // 네이버 지도 고정 표시
  if (window.naver && document.getElementById('naver-map')) {
    var map = new naver.maps.Map('naver-map', {
      center: new naver.maps.LatLng(37.504422, 127.049704),
      zoom: 16,
      minZoom: 16,
      maxZoom: 16,
      zoomControl: false,
      draggable: false,
      scrollWheel: false,
      disableDoubleClickZoom: true
    });
  }

  const targetDate = new Date("2025-10-12T14:00:00");
  const countdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  };
  setInterval(countdown, 1000);
  countdown();

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('bgm-toggle');
    if (!btn) return;

    btn.classList.remove('hidden');
    const fab = document.getElementById('floating-action-btn');
    if (fab) fab.classList.remove('hidden');

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      btn.classList.add('hidden');
      if (fab) fab.classList.add('hidden');
    }, 1300);
  });
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

// URL 복사 기능
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        showToast(texts.copy_success ? texts.copy_success[lang] : '복사되었습니다!');
      })
      .catch(() => {
        showToast(texts.copy_fail ? texts.copy_fail[lang] : '복사 실패!');
      });
  });
}

// 갤러리 확대 뷰어 기능
const galleryImgs = Array.from(document.querySelectorAll('.gallery-img'));
const viewer = document.getElementById('gallery-viewer');
const viewerDim = document.getElementById('gallery-dim');
const viewerImg = document.getElementById('gallery-large-img');
const viewerPrev = document.getElementById('gallery-prev');
const viewerNext = document.getElementById('gallery-next');
const viewerClose = document.getElementById('gallery-close');

let currentGalleryIdx = 0;

function openGalleryViewer(idx) {
  currentGalleryIdx = idx;
  viewerImg.src = galleryImgs[idx].src;
  viewer.classList.remove('hidden');
  viewer.style.pointerEvents = 'auto';
}
function closeGalleryViewer() {
  viewer.classList.add('hidden');
  viewer.style.pointerEvents = 'none';
}
function showPrevImg() {
  currentGalleryIdx = (currentGalleryIdx - 1 + galleryImgs.length) % galleryImgs.length;
  viewerImg.src = galleryImgs[currentGalleryIdx].src;
}
function showNextImg() {
  currentGalleryIdx = (currentGalleryIdx + 1) % galleryImgs.length;
  viewerImg.src = galleryImgs[currentGalleryIdx].src;
}

galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', () => openGalleryViewer(idx));
});
viewerPrev.addEventListener('click', showPrevImg);
viewerNext.addEventListener('click', showNextImg);
viewerClose.addEventListener('click', closeGalleryViewer);
viewerDim.addEventListener('click', closeGalleryViewer);

document.addEventListener('keydown', (e) => {
  if (viewer.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeGalleryViewer();
  if (e.key === 'ArrowLeft') showPrevImg();
  if (e.key === 'ArrowRight') showNextImg();
}); 

// 유튜브 BGM 플레이어
let player;
let isPlaying = false;

// YouTube API에서 호출하는 글로벌 함수 등록
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('bgm-player', {
    height: '0',
    width: '0',
    videoId: '4fjqMq_nPAo',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: '4fjqMq_nPAo'
    },
    events: {
      'onReady': onPlayerReady
    },
    host: 'https://www.youtube.com',
    origin: window.location.origin
  });
};

function onPlayerReady() {
  const btn = document.getElementById('bgm-toggle-icon');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (isPlaying) {
      player.pauseVideo();
      btn.src = 'images/megaphone_off.svg';
    } else {
      player.playVideo();
      btn.src = 'images/megaphone_on.svg';
    }
    isPlaying = !isPlaying;
  });
}

// YouTube API 스크립트 동적 로딩
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);