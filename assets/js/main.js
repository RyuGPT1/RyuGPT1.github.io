(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const translations = {
    ko: {
      'nav.home': 'Home',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'hero.eyebrow': 'PORTFOLIO',
      'hero.title': '류동현    AI & Safety Engineer',
      'hero.lead': '현장과 생활 문제를 이해하고, AI와 데이터로 해결 방법을 만드는 엔지니어',
      'hero.summary1': '안전-도시-복지-생활 데이터로 문제를 정의하고 서비스 구조로 연결',
      'hero.summary2': 'Python, FastAPI, Streamlit, YOLO, OpenAI API로 대시보드-AI 에이전트-탐지 시스템 구현',
      'hero.resume': 'Resume',
      'sections.skills': 'Skills',
      'sections.projects': 'Projects',
      'sections.experience': 'Experience',
      'skills.tools': 'Tools & Integration',
      'links.details': 'Details',
      'projects.subscribe.title': '구독 관리 에이전트',
      'projects.subscribe.desc': 'Discord 봇과 대시보드로 구독 결제일, 월 지출, 알림 관리',
      'projects.subscribe.li1': '자연어 입력에서 구독명-금액-결제주기 추출',
      'projects.subscribe.li2': '채팅 입력과 웹 대시보드를 연결한 흐름 구현',
      'projects.ppe.title': '건설현장 PPE 탐지',
      'projects.ppe.desc': '건설현장 이미지에서 안전모와 안전조끼 착용 여부 탐지',
      'projects.ppe.li1': 'Person, Hardhat, Safety Vest 등 PPE 클래스 구성',
      'projects.ppe.li2': '오탐 개선과 현장 적용 가능성 검토',
      'projects.loopbin.desc': 'AIoT 센서와 예측 모델로 의류 수거함 포화 상태와 수거 우선순위 관리',
      'projects.loopbin.li1': '팀장으로 백엔드, DB, 시스템 구조 설계 담당',
      'projects.loopbin.li2': 'AI 서버, 공공데이터, 지도 기반 UI 연결 구조 설계',
      projectType: '프로젝트',
      contestType: '공모전',
      showAll: '전체보기',
      collapse: '접기',
      experienceTitles: [
        '서울 범죄 통계 대시보드',
        'EnergyCostPlatform',
        '아이들의 한 끼 지도',
        '숨은 청소년 찾기, 레이더+',
        'SafeRoad',
        '퇴사 전 생존지수',
        'Reconnect',
        'AI Hospital',
        '새벽 응급 이동 가이드',
        '안심 바우처+',
        '인천 공공데이터 AI 서비스',
        '문득, 문화',
      ],
      experienceDescriptions: [
        '서울시 범죄 데이터를 지역, 유형, 시간대 기준으로 분석하고 지도와 차트로 위험 흐름 시각화',
        '에너지 가격 변동과 사용 비용 데이터를 바탕으로 비용 부담 예측과 관리 화면 구현',
        '아동급식카드 가맹점, 학교, 지역아동센터 데이터를 결합해 식사 접근성 격차 시각화',
        '청소년 고립 위험 신호를 공공 AI 데이터로 포착하고 선제 발굴과 지원 연결 흐름 설계',
        '범죄, 불안, 보행 환경 데이터를 활용해 최단거리보다 안심할 수 있는 이동 경로 추천',
        '고용과 지역 데이터를 기반으로 이직 위험 신호 분석, 지역별 노동 환경 리포트 구성',
        '고립 청년의 상태를 점검하고 회복 단계에 맞는 공공 지원과 상담 자원 연결',
        '야간 소아 진료 공백을 지역별로 탐지하고 대체 진료 가능 경로 안내',
        '국토교통 데이터를 활용해 심야와 새벽 시간대 응급 이동 수단과 경로 선택 지원',
        '식의약 공공데이터를 활용해 바우처 사용처의 식품 안전, 가격, 영양 정보 연결',
        '인천 지역 공공데이터를 활용해 생활 문제를 정의하고 AI 기반 조회, 추천 구조 정리',
        '문화 공공데이터를 활용해 사용자 상황과 취향에 맞는 문화 활동 추천 흐름 설계',
      ],
    },
    en: {
      'nav.home': 'Home',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'hero.eyebrow': 'PORTFOLIO',
      'hero.title': 'Donghyeon Ryu    AI & Safety Engineer',
      'hero.lead': 'Engineer building AI and data-driven solutions for field and everyday problems',
      'hero.summary1': 'Define safety, city, welfare, and daily-life problems with data and connect them to service flows',
      'hero.summary2': 'Build dashboards, AI agents, and detection systems with Python, FastAPI, Streamlit, YOLO, and OpenAI API',
      'hero.resume': 'Resume',
      'sections.skills': 'Skills',
      'sections.projects': 'Projects',
      'sections.experience': 'Experience',
      'skills.tools': 'Tools & Integration',
      'links.details': 'Details',
      'projects.subscribe.title': 'Subscription Management Agent',
      'projects.subscribe.desc': 'Discord bot and dashboard for subscription billing dates, monthly spending, and reminders',
      'projects.subscribe.li1': 'Extract subscription name, amount, and billing cycle from natural language',
      'projects.subscribe.li2': 'Connect chat input with a web dashboard workflow',
      'projects.ppe.title': 'Construction Site PPE Detection',
      'projects.ppe.desc': 'Detect hardhat and safety vest usage from construction site images',
      'projects.ppe.li1': 'Define PPE classes such as Person, Hardhat, and Safety Vest',
      'projects.ppe.li2': 'Review false-positive cases and field applicability',
      'projects.loopbin.desc': 'AIoT platform for clothing collection bin fill-level prediction and pickup priority management',
      'projects.loopbin.li1': 'Led backend, database, and system architecture design',
      'projects.loopbin.li2': 'Designed integration among AI server, public data, and map-based UI',
      projectType: 'Project',
      contestType: 'Competition',
      showAll: 'Show all',
      collapse: 'Collapse',
      experienceTitles: [
        'Seoul Crime Statistics Dashboard',
        'EnergyCostPlatform',
        "Children's Meal Map",
        'Radar+ for At-Risk Youth',
        'SafeRoad',
        'Pre-Resignation Survival Index',
        'Reconnect',
        'AI Hospital',
        'Early-Morning Emergency Mobility Guide',
        'Safe Voucher+',
        'Incheon Public Data AI Service',
        'Mundeuk Culture',
      ],
      experienceDescriptions: [
        'Analyzed Seoul crime data by district, type, and time, then visualized risk patterns with maps and charts',
        'Built a cost burden prediction and management dashboard based on energy price and usage data',
        'Combined meal-card merchants, schools, and community-center data to visualize children’s meal access gaps',
        'Designed a workflow to detect youth isolation risk signals and connect early support resources',
        'Recommended safer routes using crime, anxiety, and pedestrian environment data',
        'Analyzed job-change risk signals and built regional labor environment reports with employment and local data',
        'Checked isolated youth status and connected public support and counseling resources by recovery stage',
        'Detected regional gaps in nighttime pediatric care and guided alternative care routes',
        'Designed emergency mobility support for late-night and early-morning transport decisions',
        'Connected food safety, price, and nutrition information for voucher-available stores',
        'Structured an AI-based public data service for local living issues in Incheon',
        'Designed a culture activity recommendation flow based on user context and preferences',
      ],
    },
  };

  function getStoredLanguage() {
    try {
      return localStorage.getItem('portfolioLang');
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem('portfolioLang', lang);
    } catch (error) {
      // Language switching still works for the current page when storage is unavailable.
    }
  }

  let currentLang = getStoredLanguage() || 'ko';

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'ko';
    const copy = translations[currentLang];
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    });

    document.querySelectorAll('.project-item .timeline-type, .project-item .status-pill').forEach((element) => {
      element.textContent = copy.projectType;
    });

    document.querySelectorAll('.contest-item .timeline-type').forEach((element) => {
      element.textContent = copy.contestType;
    });

    document.querySelectorAll('#experience .timeline-item h3').forEach((element, index) => {
      if (copy.experienceTitles[index]) element.textContent = copy.experienceTitles[index];
    });

    document.querySelectorAll('#experience .timeline-item > div > p:not(.timeline-type)').forEach((element, index) => {
      if (copy.experienceDescriptions[index]) element.textContent = copy.experienceDescriptions[index];
    });

    const label = document.querySelector('[data-lang-label]');
    if (label) label.textContent = currentLang === 'ko' ? 'EN' : 'KO';

    const experienceList = document.querySelector('[data-experience-list]');
    const experienceToggleLabel = document.querySelector('[data-experience-toggle] span');
    if (experienceList && experienceToggleLabel) {
      experienceToggleLabel.textContent = experienceList.classList.contains('is-collapsed') ? copy.showAll : copy.collapse;
    }

    storeLanguage(currentLang);
  }

  const langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });
  }

  applyLanguage(currentLang);

  const navLinks = Array.from(document.querySelectorAll('.primary-nav a'));
  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  function updateActiveNav() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 96) current = section;
    }

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  }

  if (sections.length) {
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);
  }

  const emailModal = document.querySelector('[data-email-modal]');
  const emailOpeners = document.querySelectorAll('[data-email-open]');
  const emailClosers = document.querySelectorAll('[data-email-close]');
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const copyStatus = document.querySelector('[data-copy-status]');

  function openEmailModal() {
    if (!emailModal) return;
    emailModal.classList.add('open');
    emailModal.setAttribute('aria-hidden', 'false');
    if (copyStatus) copyStatus.textContent = '';
  }

  function closeEmailModal() {
    if (!emailModal) return;
    emailModal.classList.remove('open');
    emailModal.setAttribute('aria-hidden', 'true');
  }

  emailOpeners.forEach((button) => button.addEventListener('click', openEmailModal));
  emailClosers.forEach((button) => button.addEventListener('click', closeEmailModal));

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        if (copyStatus) copyStatus.textContent = `${email} copied.`;
      } catch (error) {
        if (copyStatus) copyStatus.textContent = email;
      }
    });
  });

  const imageModal = document.querySelector('[data-image-modal]');
  const imageModalImg = document.querySelector('[data-image-modal-img]');
  const imageModalCaption = document.querySelector('[data-image-modal-caption]');
  const imageClosers = document.querySelectorAll('[data-image-close]');
  const projectVisuals = Array.from(document.querySelectorAll('.project-visual'));

  function openImageModal(figure) {
    if (!imageModal || !imageModalImg) return;
    const image = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');
    if (!image) return;

    imageModalImg.src = image.currentSrc || image.src;
    imageModalImg.alt = image.alt || '';
    if (imageModalCaption) imageModalCaption.textContent = caption ? caption.textContent : image.alt || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
  }

  function closeImageModal() {
    if (!imageModal || !imageModalImg) return;
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModalImg.removeAttribute('src');
  }

  projectVisuals.forEach((figure) => {
    figure.setAttribute('role', 'button');
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('aria-label', 'Open larger project image');
    figure.addEventListener('click', () => openImageModal(figure));
    figure.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImageModal(figure);
      }
    });
  });

  imageClosers.forEach((button) => button.addEventListener('click', closeImageModal));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeEmailModal();
      closeImageModal();
    }
  });

  const projectTabs = Array.from(document.querySelectorAll('[data-project-tab]'));
  const projectPanels = Array.from(document.querySelectorAll('[data-project-panel]'));

  function activateProject(name) {
    if (!name || !projectTabs.length) return;
    const exists = projectTabs.some((tab) => tab.dataset.projectTab === name);
    if (!exists) return;

    projectTabs.forEach((tab) => {
      const active = tab.dataset.projectTab === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    projectPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.projectPanel === name);
    });
  }

  if (projectTabs.length) {
    projectTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.projectTab;
        activateProject(name);
        history.replaceState(null, '', '#' + name);
      });
    });

    const initial = decodeURIComponent(window.location.hash.slice(1)) || projectTabs[0].dataset.projectTab;
    activateProject(initial);
  }

  const experienceList = document.querySelector('[data-experience-list]');
  const experienceToggle = document.querySelector('[data-experience-toggle]');

  if (experienceList && experienceToggle) {
    experienceToggle.addEventListener('click', () => {
      const isCollapsed = experienceList.classList.toggle('is-collapsed');
      experienceToggle.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
      experienceToggle.querySelector('span').textContent = isCollapsed
        ? translations[currentLang].showAll
        : translations[currentLang].collapse;
    });
  }

  const pdfDownload = document.querySelector('[data-pdf-download]');
  if (pdfDownload) {
    function downloadPdfBlob(blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = pdfDownload.getAttribute('download') || 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    function base64ToBlob(base64, type) {
      const bytes = atob(base64);
      const chunks = [];
      for (let index = 0; index < bytes.length; index += 8192) {
        const slice = bytes.slice(index, index + 8192);
        const values = new Uint8Array(slice.length);
        for (let i = 0; i < slice.length; i += 1) values[i] = slice.charCodeAt(i);
        chunks.push(values);
      }
      return new Blob(chunks, { type });
    }

    pdfDownload.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        const embeddedPdf = document.getElementById('resume-pdf-data');
        const base64 = window.RESUME_PDF_BASE64 || (embeddedPdf && embeddedPdf.textContent.trim());
        if (base64) {
          downloadPdfBlob(base64ToBlob(base64, 'application/pdf'));
          return;
        }

        const response = await fetch(pdfDownload.href);
        if (!response.ok) throw new Error('PDF download failed');

        const blob = await response.blob();
        downloadPdfBlob(blob);
      } catch (error) {
        window.location.href = pdfDownload.href;
      }
    });
  }
})();
