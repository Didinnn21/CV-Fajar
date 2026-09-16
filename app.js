/* ==========================================================================
   CV WEBSITE INTERACTIVE LOGIC - FAJAR NURCAHYA GUMILLAR
   ========================================================================== */

// Multi-Language Content Datasets (Full Translation for All Words & Content)
const CV_DATA_LANGUAGES = {
  id: {
    profile: {
      name: "Fajar Nurcahya Gumillar",
      title: "Pegawai Ritel & Software Engineer Student",
      bio: "Pekerja berpengalaman dalam operasional toko fisik, layanan kasir, pengelolaan stok gudang, dan administrasi penjualan. Memiliki ketelitian tinggi dalam rekapitulasi barang dan transaksi, terbiasa bekerja dengan tempo cepat, serta fokus pada kerapian dan kepuasan pelanggan. Siap memberikan kontribusi maksimal dan etos kerja yang disiplin.",
      email: "Nurcahya0402@gmail.com",
      phone: "+62 812-3456-7890",
      location: "Majalengka, Indonesia",
      instagram: "https://instagram.com/fajar_nurcahya",
      tiktok: "https://tiktok.com/@fajar_nurcahya",
      avatar: "avatar.png",
      stats: { experience: "0 Thn", skills: "10+", org: "1+" }
    },
    experiences: [
      {
        id: "exp-1",
        role: "Staf Operasional & Kasir Ritel",
        company: "Toko Ritel & Distribusi",
        period: "Januari 2022 - Sekarang",
        type: "Full-time",
        description: [
          "Mengelola transaksi kasir harian dan pencatatan kas keluar-masuk dengan akurasi 100%.",
          "Melakukan pengawasan stok gudang, rekapitulasi harian, dan penataan display produk sesuai standar visual merchandising.",
          "Memberikan pelayanan pelanggan yang cepat, ramah, dan solutif untuk meningkatkan kepuasan konsumen."
        ],
        tags: ["Operasional Ritel", "Layanan Kasir (POS)", "Manajemen Stok", "Pelayanan Pelanggan"]
      }
    ],
    education: [
      {
        id: "edu-1",
        institution: "Universitas / Sekolah Tinggi Informatika",
        degree: "S1 Teknik Informatika / Perdagangan Ritel",
        period: "2020 - 2024"
      }
    ],
    skills: [
      {
        id: "skill-cat-1",
        category: "Keahlian Ritel & Operasional",
        items: ["Manajemen Stok & Gudang", "Layanan Kasir (POS)", "Administrasi Penjualan", "Rekapitulasi Transaksi", "Visual Merchandising"]
      },
      {
        id: "skill-cat-2",
        category: "Kompetensi Teknis & Alat",
        items: ["Sistem Komputer Kasir", "Microsoft Excel / Spreadsheet", "HTML5 & CSS3", "JavaScript", "Git & GitHub"]
      },
      {
        id: "skill-cat-3",
        category: "Keahlian Interpersonal & Bahasa",
        items: ["Komunikasi & Layanan Pelanggan", "Kerja Sama Tim", "Kedisiplinan & Etos Kerja", "Bahasa Indonesia (Native)", "Bahasa Inggris"]
      }
    ],
    organizations: [
      {
        id: "org-1",
        role: "Anggota Divisi Logistik & Acara",
        organization: "Himpunan Mahasiswa / Komunitas Ritel",
        period: "2022 - 2023",
        description: "Bertanggung jawab atas ketersediaan perlengkapan, pencatatan inventaris acara, dan koordinasi tim lapangan."
      }
    ]
  },

  en: {
    profile: {
      name: "Fajar Nurcahya Gumillar",
      title: "Retail Associate & Software Engineer Student",
      bio: "Experienced worker in physical store operations, cashier services, warehouse inventory management, and sales administration. Possesses high precision in transaction reconciliation, thrives in fast-paced environments, and focuses on organization and customer satisfaction. Ready to deliver maximum contribution with a disciplined work ethic.",
      email: "Nurcahya0402@gmail.com",
      phone: "+62 812-3456-7890",
      location: "Majalengka, Indonesia",
      instagram: "https://instagram.com/fajar_nurcahya",
      tiktok: "https://tiktok.com/@fajar_nurcahya",
      avatar: "avatar.png",
      stats: { experience: "0 Yrs", skills: "10+", org: "1+" }
    },
    experiences: [
      {
        id: "exp-1",
        role: "Retail Operations & Cashier Associate",
        company: "Retail & Distribution Store",
        period: "January 2022 - Present",
        type: "Full-time",
        description: [
          "Managed daily cashier transactions and petty cash records with 100% financial accuracy.",
          "Supervised warehouse inventory, conducted daily stock counts, and organized product displays matching visual merchandising standards.",
          "Delivered fast, friendly, and solution-oriented customer service to boost client satisfaction."
        ],
        tags: ["Retail Operations", "POS Cashier Systems", "Inventory Control", "Customer Service"]
      }
    ],
    education: [
      {
        id: "edu-1",
        institution: "University / Institute of Technology",
        degree: "Bachelor of Computer Science / Retail Management",
        period: "2020 - 2024"
      }
    ],
    skills: [
      {
        id: "skill-cat-1",
        category: "Retail & Operational Skills",
        items: ["Inventory & Warehouse Management", "Point of Sale (POS) Systems", "Sales Administration", "Transaction Reconciliation", "Visual Merchandising"]
      },
      {
        id: "skill-cat-2",
        category: "Technical Tools & Software",
        items: ["POS Computer Systems", "Microsoft Excel / Spreadsheets", "HTML5 & CSS3", "JavaScript", "Git & GitHub"]
      },
      {
        id: "skill-cat-3",
        category: "Interpersonal Skills & Languages",
        items: ["Customer Service & Communication", "Team Collaboration", "Work Ethic & Discipline", "Indonesian (Native)", "English (Professional)"]
      }
    ],
    organizations: [
      {
        id: "org-1",
        role: "Logistics & Event Coordinator",
        organization: "Student Association / Retail Community",
        period: "2022 - 2023",
        description: "Responsible for equipment procurement, event inventory tracking, and field team coordination."
      }
    ]
  },

  jp: {
    profile: {
      name: "Fajar Nurcahya Gumillar",
      title: "小売店舗スタッフ & ソフトウェア工学専攻学生",
      bio: "実店舗の運営、レジ業務、倉庫在庫管理、および販売事務において豊かな経験を持つスタッフ。出納集計や商品管理で高い精度を発揮し、スピーディーな環境で効率的に対応します。整頓と顧客満足度向上に重点を置き、責任感を持って貢献します。",
      email: "Nurcahya0402@gmail.com",
      phone: "+62 812-3456-7890",
      location: "マジャレンカ、インドネシア",
      instagram: "https://instagram.com/fajar_nurcahya",
      tiktok: "https://tiktok.com/@fajar_nurcahya",
      avatar: "avatar.png",
      stats: { experience: "0 年", skills: "10+", org: "1+" }
    },
    experiences: [
      {
        id: "exp-1",
        role: "小売店舗運営 & レジスタッフ",
        company: "小売・流通ストア",
        period: "2022年1月 - 現在",
        type: "正社員",
        description: [
          "日次のレジ決済業務および出納記録を正確率100%で管理。",
          "倉庫在庫の監督、日次棚卸し、およびVMD基準に沿った商品陳列の実施。",
          "迅速で丁寧な顧客サービスを提供し、顧客満足度の向上に貢献。"
        ],
        tags: ["店舗運営", "POSレジ操作", "在庫管理", "カスタマーサービス"]
      }
    ],
    education: [
      {
        id: "edu-1",
        institution: "工科大学 / 情報専門学校",
        degree: "情報工学士 / 小売経営専攻",
        period: "2020年 - 2024年"
      }
    ],
    skills: [
      {
        id: "skill-cat-1",
        category: "小売・店舗運営スキル",
        items: ["在庫・倉庫管理", "POSレジシステム操作", "販売事務管理", "取引集計・照合", "ビジュアルマーチャンダイジング"]
      },
      {
        id: "skill-cat-2",
        category: "技術・ツールスキル",
        items: ["POSコンピューターシステム", "Microsoft Excel / スプレッドシート", "HTML5 & CSS3", "JavaScript", "Git & GitHub"]
      },
      {
        id: "skill-cat-3",
        category: "対人スキル・語学力",
        items: ["接客・カスタマーコミュニケーション", "チームワーク", "規律・勤勉さ", "インドネシア語（母国語）", "英語"]
      }
    ],
    organizations: [
      {
        id: "org-1",
        role: "ロジスティクス＆イベント統括",
        organization: "学生会 / 小売コミュニティ",
        period: "2022年 - 2023年",
        description: "イベント機器の調達、備品在庫の管理、現場チームの進行管理を担当。"
      }
    ]
  }
};

// Multi-Language Translation Dictionary (i18n)
const TRANSLATIONS = {
  id: {
    nav: { profile: "Profil", experience: "Pengalaman", education: "Pendidikan", skills: "Keahlian", organization: "Organisasi", contact: "Kontak", print: "Cetak ATS PDF" },
    hero: { badge: "Curriculum Vitae", contactBtn: "Hubungi Saya", status: "Status: Open to Opportunities", changePhoto: "Upload Foto", statExp: "Pengalaman", statSkills: "Keahlian", statOrg: "Organisasi" },
    sub: { exp: "Riwayat Karir & Praktik", edu: "Latar Belakang Akademis", skills: "Kompetensi Teknis", org: "Kepemimpinan & Komunitas", contact: "Mari Berkolaborasi" },
    title: { exp: "Pengalaman Kerja & Internships", edu: "Pendidikan & Kualifikasi", skills: "Keahlian & Spesialisasi", org: "Pengalaman Organisasi", contact: "Hubungi Saya" },
    contact: { emailLabel: "Email", phoneLabel: "Telepon / WA", locationLabel: "Lokasi", title: "Kirim Pesan", nameLabel: "Nama Anda", emailLabel: "Email Anda", subjectLabel: "Subjek", messageLabel: "Pesan", submitBtn: "Kirim Pesan" },
    toolbar: { edit: "Modus Edit", print: "Cetak ATS PDF", export: "Export JSON", reset: "Reset" },
    modal: { title: "Edit Data CV - Fajar Nurcahya Gumillar", note: "Ubah data lalu klik Simpan untuk memperbarui tampilan CV.", save: "Simpan & Perbarui CV" },
    tabs: { profile: "Profil Utama", exp: "Pengalaman", edu: "Pendidikan", skills: "Keahlian & Skill", org: "Organisasi" },
    footer: { rights: "Hak cipta dilindungi." }
  },
  en: {
    nav: { profile: "Profile", experience: "Experience", education: "Education", skills: "Skills", organization: "Organization", contact: "Contact", print: "Print ATS PDF" },
    hero: { badge: "Curriculum Vitae", contactBtn: "Contact Me", status: "Status: Open to Opportunities", changePhoto: "Upload Photo", statExp: "Experience", statSkills: "Skills", statOrg: "Organization" },
    sub: { exp: "Career History & Practical Work", edu: "Academic Background", skills: "Technical Competencies", org: "Leadership & Community", contact: "Let's Work Together" },
    title: { exp: "Work Experience & Internships", edu: "Education & Qualifications", skills: "Skills & Specializations", org: "Organizational Experience", contact: "Get in Touch" },
    contact: { emailLabel: "Email", phoneLabel: "Phone / WhatsApp", locationLabel: "Location", title: "Send Message", nameLabel: "Your Name", emailLabel: "Your Email", subjectLabel: "Subject", messageLabel: "Message", submitBtn: "Send Message" },
    toolbar: { edit: "Edit Mode", print: "Print ATS PDF", export: "Export JSON", reset: "Reset" },
    modal: { title: "Edit CV Data - Fajar Nurcahya Gumillar", note: "Modify data and click Save to update CV.", save: "Save & Update CV" },
    tabs: { profile: "Main Profile", exp: "Experience", edu: "Education", skills: "Skills & Tools", org: "Organization" },
    footer: { rights: "All rights reserved." }
  },
  jp: {
    nav: { profile: "プロフィール", experience: "職歴", education: "学歴", skills: "スキル", organization: "組織・活動", contact: "連絡先", print: "ATS PDF印刷" },
    hero: { badge: "履歴書 / CV", contactBtn: "お問い合わせ", status: "ステータス: 採用・案件受付中", changePhoto: "写真アップロード", statExp: "経験年数", statSkills: "スキル数", statOrg: "組織活動" },
    sub: { exp: "職歴・実務経験", edu: "学歴・資格", skills: "技術的コンピテンシー", org: "リーダーシップ・コミュニティ", contact: "お問い合わせ" },
    title: { exp: "職歴・インターンシップ", edu: "学歴・資格一覧", skills: "専門スキル・技術", org: "組織・活動経験", contact: "お問い合わせ" },
    contact: { emailLabel: "メール", phoneLabel: "電話番号 / WA", locationLabel: "所在地", title: "メッセージ送信", nameLabel: "お名前", emailLabel: "メールアドレス", subjectLabel: "件名", messageLabel: "本文", submitBtn: "送信する" },
    toolbar: { edit: "編集モード", print: "ATS PDF印刷", export: "JSON出力", reset: "リセット" },
    modal: { title: "CVデータ編集 - Fajar Nurcahya Gumillar", note: "データを変更し「保存」をクリックしてCVを更新します。", save: "保存してCVを更新" },
    tabs: { profile: "メインプロフィール", exp: "職歴", edu: "学歴", skills: "スキル・資格", org: "組織・活動" },
    footer: { rights: "無断転載を禁じます。" }
  }
};

let currentLang = localStorage.getItem("current_lang") || "id";

// Global State
let cvData = loadData();

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderAll();
  initTheme();
  setupEventListeners();
  syncDataFromCloud();
});

// Apply Selected Language & Update All Words & Content
function setLanguage(lang) {
  if (lang !== "en" && lang !== "id") lang = "id";
  currentLang = lang;
  localStorage.setItem("current_lang", lang);

  const langSelect = document.getElementById("lang-selector");
  if (langSelect) langSelect.value = lang;

  // 1. Translate static UI tags
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let val = TRANSLATIONS[lang];
    for (let p of parts) {
      if (val && val[p]) val = val[p];
      else { val = null; break; }
    }
    if (val) el.textContent = val;
  });

  // 2. Dynamic CV content data handling:
  // Preserve user's saved CV data if it exists in localStorage or has been edited
  const hasSavedData = localStorage.getItem("cv_data_fajar_v1");
  if (!hasSavedData && CV_DATA_LANGUAGES[lang]) {
    const currentName = cvData && cvData.profile ? cvData.profile.name : "Fajar Nurcahya Gumillar";
    const currentEmail = cvData && cvData.profile ? cvData.profile.email : "Nurcahya0402@gmail.com";
    const currentAvatar = cvData && cvData.profile ? cvData.profile.avatar : "avatar.png";

    cvData = JSON.parse(JSON.stringify(CV_DATA_LANGUAGES[lang]));
    if (currentName) cvData.profile.name = currentName;
    if (currentEmail) cvData.profile.email = currentEmail;
    if (currentAvatar) cvData.profile.avatar = currentAvatar;
  }

  renderAll();
}

function initLanguage() {
  setLanguage(currentLang);
  const langSelect = document.getElementById("lang-selector");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      showToast(`Bahasa diubah ke: ${e.target.value.toUpperCase()}`);
    });
  }
}

// Load Data from LocalStorage or Fallback to Language Default
function loadData() {
  const saved = localStorage.getItem("cv_data_fajar_v1");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved CV data", e);
    }
  }
  return JSON.parse(JSON.stringify(CV_DATA_LANGUAGES[currentLang] || CV_DATA_LANGUAGES.id));
}

// Async Cloud Sync on Load (Smart Bi-directional Sync)
async function syncDataFromCloud() {
  if (typeof fetchCloudCVData === "function") {
    try {
      const cloudData = await fetchCloudCVData();
      const localRaw = localStorage.getItem("cv_data_fajar_v1");
      let localData = null;
      if (localRaw) {
        try { localData = JSON.parse(localRaw); } catch(e) {}
      }

      if (cloudData && cloudData.profile) {
        const cloudTime = new Date(cloudData.updatedAt || 0).getTime();
        const localTime = new Date(localData?.updatedAt || 0).getTime();

        if (cloudData.updatedAt && cloudTime > localTime) {
          cvData = cloudData;
          localStorage.setItem("cv_data_fajar_v1", JSON.stringify(cvData));
          renderAll();
        } else if (localData && localData.profile && typeof saveCloudCVData === "function") {
          saveCloudCVData(localData);
        }
      } else if (localData && localData.profile && typeof saveCloudCVData === "function") {
        saveCloudCVData(localData);
      }
    } catch (err) {
      console.warn("Sinkronisasi cloud dilewati:", err);
    }
  }
}

// Save Data to LocalStorage & Firebase Realtime Database
function saveData() {
  cvData.updatedAt = new Date().toISOString();
  localStorage.setItem("cv_data_fajar_v1", JSON.stringify(cvData));
  renderAll();

  if (typeof saveCloudCVData === "function") {
    saveCloudCVData(cvData).then(res => {
      if (res && res.success) {
        showToast("Data CV Berhasil Disimpan ke Cloud DB!");
      }
    });
  }
}

// Render All Sections
function renderAll() {
  renderProfile();
  renderExperiences();
  renderEducation();
  renderSkills();
  renderOrganizations();
  renderContact();
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */

function renderProfile() {
  const p = cvData.profile;
  document.getElementById("hero-name").textContent = p.name;
  document.getElementById("hero-title").textContent = p.title;
  document.getElementById("hero-bio").textContent = p.bio;

  document.getElementById("pill-email").innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${p.email}`;
  document.getElementById("pill-email").href = `mailto:${p.email}`;

  document.getElementById("pill-phone").innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${p.phone}`;
  document.getElementById("pill-phone").href = `tel:${p.phone}`;

  document.getElementById("pill-location").innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${p.location}`;

  const linkInsta = document.getElementById("link-instagram");
  if (linkInsta) {
    linkInsta.href = p.instagram || "#";
  }

  const linkTiktok = document.getElementById("link-tiktok");
  if (linkTiktok) {
    linkTiktok.href = p.tiktok || "#";
  }

  // Avatar & Stats
  const avatarImg = document.getElementById("profile-avatar");
  const brandAvatarImg = document.getElementById("brand-avatar");
  if (avatarImg) avatarImg.src = p.avatar || "avatar.png";
  if (brandAvatarImg) brandAvatarImg.src = p.avatar || "avatar.png";

  document.getElementById("stat-experience").textContent = p.stats ? p.stats.experience : "0 Thn";
  document.getElementById("stat-skills").textContent = p.stats ? p.stats.skills : "10+";
  document.getElementById("stat-org").textContent = p.stats ? p.stats.org : "1+";
}

function renderExperiences() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  if (cvData.experiences.length === 0) {
    container.innerHTML = `<p class="empty-placeholder-text">Belum ada pengalaman kerja ditambahkan.</p>`;
    return;
  }

  container.innerHTML = cvData.experiences.map(exp => `
    <div class="card timeline-item">
      <div class="item-header">
        <div class="item-title-group">
          <h3>${escapeHtml(exp.role)}</h3>
          <div class="item-company">
            <span>${escapeHtml(exp.company)}</span>
            <span class="badge badge-primary">${escapeHtml(exp.type || "Full-time")}</span>
          </div>
        </div>
        <span class="item-date">${escapeHtml(exp.period)}</span>
      </div>
      <ul class="item-bullets">
        ${(exp.description || []).map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
      <div class="item-tags">
        ${(exp.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("education-list");
  if (!container) return;

  if (cvData.education.length === 0) {
    container.innerHTML = `<p class="empty-placeholder-text">Belum ada riwayat pendidikan.</p>`;
    return;
  }

  container.innerHTML = cvData.education.map(edu => `
    <div class="card timeline-item">
      <div class="item-header">
        <div class="item-title-group">
          <h3>${escapeHtml(edu.institution)}</h3>
          <div class="item-company">${escapeHtml(edu.degree)}</div>
        </div>
        <div class="item-meta">
          <span class="item-date">${escapeHtml(edu.period)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  if (cvData.skills.length === 0) {
    container.innerHTML = `<p class="empty-placeholder-text">Belum ada kelompok keahlian.</p>`;
    return;
  }

  container.innerHTML = cvData.skills.map(cat => `
    <div class="card skill-category-card">
      <h3>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        ${escapeHtml(cat.category)}
      </h3>
      <div class="skills-tags-container">
        ${(cat.items || []).map(s => `
          <span class="skill-chip">${escapeHtml(s)}</span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderOrganizations() {
  const container = document.getElementById("organization-list");
  if (!container) return;

  if (cvData.organizations.length === 0) {
    container.innerHTML = `<p class="empty-placeholder-text">Belum ada riwayat organisasi.</p>`;
    return;
  }

  container.innerHTML = cvData.organizations.map(org => `
    <div class="card timeline-item">
      <div class="item-header">
        <div class="item-title-group">
          <h3>${escapeHtml(org.role)}</h3>
          <div class="item-company">${escapeHtml(org.organization)}</div>
        </div>
        <span class="item-date">${escapeHtml(org.period)}</span>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-muted);">${escapeHtml(org.description)}</p>
    </div>
  `).join("");
}

function renderContact() {
  document.getElementById("contact-email-val").textContent = cvData.profile.email;
  document.getElementById("contact-phone-val").textContent = cvData.profile.phone;
  document.getElementById("contact-location-val").textContent = cvData.profile.location;
}

/* ==========================================================================
   MODAL & INTERACTIVE EDIT SYSTEM
   ========================================================================== */

function setupEventListeners() {
  const modalOverlay = document.getElementById("modal-editor");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const btnSaveModal = document.getElementById("btn-save-modal");

  // Open Modus Edit Dialog from any of the edit buttons
  const editButtons = ["btn-toggle-edit", "btn-nav-edit", "nav-link-edit", "btn-hero-edit"];
  editButtons.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        populateEditorForm();
        if (modalOverlay) modalOverlay.classList.add("active");
      });
    }
  });

  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      if (modalOverlay) modalOverlay.classList.remove("active");
    });
  }

  if (btnSaveModal) {
    btnSaveModal.addEventListener("click", () => {
      extractEditorFormData();
      saveData();
      if (modalOverlay) modalOverlay.classList.remove("active");
      showToast("Data CV Berhasil Disimpan!");
    });
  }

  // Firebase Database Config Modal Handlers
  const modalFirebase = document.getElementById("modal-firebase-config");
  const btnFirebaseConfig = document.getElementById("btn-firebase-config");
  const btnCloseFirebase = document.getElementById("btn-close-firebase-modal");
  const btnSaveFirebase = document.getElementById("btn-save-firebase-config");

  const inputFirebaseApiKey = document.getElementById("input-firebase-apikey");
  const inputFirebaseDbUrl = document.getElementById("input-firebase-dburl");
  const inputFirebaseProjectId = document.getElementById("input-firebase-projectid");
  const inputFirebaseAuthDomain = document.getElementById("input-firebase-authdomain");

  if (btnFirebaseConfig && modalFirebase) {
    btnFirebaseConfig.addEventListener("click", () => {
      const cfg = typeof getFirebaseConfig === "function" ? getFirebaseConfig() : {};
      if (inputFirebaseApiKey) inputFirebaseApiKey.value = cfg.apiKey || "";
      if (inputFirebaseDbUrl) inputFirebaseDbUrl.value = cfg.databaseURL || "";
      if (inputFirebaseProjectId) inputFirebaseProjectId.value = cfg.projectId || "";
      if (inputFirebaseAuthDomain) inputFirebaseAuthDomain.value = cfg.authDomain || "";
      modalFirebase.classList.add("active");
    });
  }

  if (btnCloseFirebase && modalFirebase) {
    btnCloseFirebase.addEventListener("click", () => {
      modalFirebase.classList.remove("active");
    });
  }

  if (btnSaveFirebase && modalFirebase) {
    btnSaveFirebase.addEventListener("click", () => {
      const apiKey = inputFirebaseApiKey?.value || "";
      const databaseURL = inputFirebaseDbUrl?.value || "";
      const projectId = inputFirebaseProjectId?.value || "";
      const authDomain = inputFirebaseAuthDomain?.value || "";

      if (!apiKey || !databaseURL) {
        alert("Silakan masukkan API Key dan Database URL Firebase dengan lengkap.");
        return;
      }
      if (typeof saveFirebaseConfig === "function") {
        saveFirebaseConfig({ apiKey, databaseURL, projectId, authDomain });
      }
      modalFirebase.classList.remove("active");
      showToast("Konfigurasi Firebase Disimpan! Menghubungkan ke Realtime DB...");
      syncDataFromCloud();
    });
  }

  // Real-time Input Synchronization for Modal Editor Tabs
  const modalTabArea = document.getElementById("modal-tab-content-area");
  if (modalTabArea) {
    modalTabArea.addEventListener("input", () => {
      extractEditorFormData();
    });
    modalTabArea.addEventListener("change", () => {
      extractEditorFormData();
    });
  }

  // Sidebar Tab Switching inside Modal
  document.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".modal-tab-btn");
    if (tabBtn) {
      extractEditorFormData();
      document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".modal-tab-pane").forEach(p => p.classList.remove("active"));

      tabBtn.classList.add("active");
      const targetPane = document.getElementById(tabBtn.dataset.tab);
      if (targetPane) targetPane.classList.add("active");
    }
  });

  // Mobile Navigation Drawer Toggle
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (btnMobileMenu && navLinks) {
    btnMobileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-container")) {
        navLinks.classList.remove("active");
      }
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Print PDF Buttons (Navbar, Hero Section, Floating Toolbar, Menu Links)
  const printButtons = ["btn-print", "btn-nav-print", "nav-link-print", "btn-hero-print"];
  printButtons.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const fabMenu = document.getElementById("fab-menu");
        const fabTrigger = document.getElementById("fab-trigger");
        if (fabMenu) fabMenu.classList.remove("active");
        if (fabTrigger) fabTrigger.classList.remove("active");
        window.print();
      });
    }
  });

  // Reset Data Button
  const btnReset = document.getElementById("btn-reset-data");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("Apakah Anda yakin ingin mengembalikan data ke data awal?")) {
        localStorage.removeItem("cv_data_fajar_v1");
        cvData = JSON.parse(JSON.stringify(CV_DATA_LANGUAGES[currentLang]));
        saveData();
        showToast("Data telah di-reset ke template awal.");
      }
    });
  }

  // Export JSON Button
  const btnExport = document.getElementById("btn-export-json");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `CV_Fajar_Nurcahya_Gumillar.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Contact Form Submission (Simulated)
  const contactForm = document.getElementById("cv-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Pesan Anda telah berhasil dikirim!");
      contactForm.reset();
    });
  }

  // Circular Floating Action Button (FAB) & Speed-Dial Menu Toggle
  const fabTrigger = document.getElementById("fab-trigger");
  const fabMenu = document.getElementById("fab-menu");

  if (fabTrigger && fabMenu) {
    fabTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = fabMenu.classList.toggle("active");
      fabTrigger.classList.toggle("active", isActive);
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".fab-wrapper")) {
        fabMenu.classList.remove("active");
        fabTrigger.classList.remove("active");
      }
    });

    fabMenu.querySelectorAll(".fab-menu-item").forEach(item => {
      item.addEventListener("click", () => {
        fabMenu.classList.remove("active");
        fabTrigger.classList.remove("active");
      });
    });
  }

  // Avatar Upload Handler (File Picker & FileReader Base64)
  const inputAvatarFile = document.getElementById("input-avatar-file");
  if (inputAvatarFile) {
    inputAvatarFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Silakan pilih berkas gambar yang valid (PNG, JPG, JPEG, WebP).");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          alert("Ukuran berkas gambar maksimal 5MB.");
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          const base64Img = evt.target.result;
          cvData.profile.avatar = base64Img;
          saveData();
          showToast("Foto profil berhasil diunggah!");
          
          // Update modal preview if open
          const previewImg = document.getElementById("edit-avatar-preview");
          if (previewImg) previewImg.src = base64Img;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Click Avatar Image Wrapper to Trigger File Upload Input
  const avatarWrapper = document.querySelector(".profile-avatar-wrapper");
  if (avatarWrapper) {
    avatarWrapper.addEventListener("click", () => {
      if (inputAvatarFile) inputAvatarFile.click();
    });
  }
}

// Global Avatar Upload Helpers for Modal Editor
window.triggerAvatarUpload = function() {
  const fileInput = document.getElementById("input-avatar-file");
  if (fileInput) fileInput.click();
};

window.resetAvatarToDefault = function() {
  cvData.profile.avatar = "avatar.png";
  saveData();
  showToast("Foto profil di-reset ke foto standar.");
  const previewImg = document.getElementById("edit-avatar-preview");
  if (previewImg) previewImg.src = "avatar.png";
};

// Populate Editor Form Tabs
function populateEditorForm() {
  const container = document.getElementById("modal-tab-content-area");
  if (!container) return;

  const p = cvData.profile;

  container.innerHTML = `
    <!-- TAB 1: PROFIL UTAMA -->
    <div id="tab-profile" class="modal-tab-pane active">
      <div class="editor-section-header">
        <h4>Profil & Informasi Utama</h4>
      </div>

      <!-- Foto Profil Upload Management Box -->
      <div class="item-edit-card" style="margin-bottom: 20px; align-items: center; text-align: center;">
        <label style="font-weight: 700; color: var(--primary);">Foto Profil (Upload Berkas / URL)</label>
        <div style="width: 90px; height: 90px; border-radius: 50%; overflow: hidden; border: 3px solid var(--primary); margin: 8px 0; box-shadow: var(--shadow-md);">
          <img id="edit-avatar-preview" src="${escapeHtml(p.avatar || 'avatar.png')}" alt="Preview Foto" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 8px;">
          <button type="button" class="btn btn-primary" style="font-size: 0.8rem; padding: 6px 14px;" onclick="triggerAvatarUpload()">
            📁 Upload Berkas Gambar (HP/Komputer)
          </button>
          <button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 14px;" onclick="resetAvatarToDefault()">
            ↺ Reset Foto Standar
          </button>
        </div>
      </div>
      
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input type="text" id="edit-name" class="form-control" value="${escapeHtml(p.name)}">
      </div>

      <div class="form-group">
        <label>Judul Spesialisasi / Subtitle</label>
        <input type="text" id="edit-title" class="form-control" value="${escapeHtml(p.title)}">
      </div>

      <div class="form-group">
        <label>Ringkasan Bio (About Me)</label>
        <textarea id="edit-bio" class="form-control" rows="3">${escapeHtml(p.bio)}</textarea>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="edit-email" class="form-control" value="${escapeHtml(p.email)}">
        </div>
        <div class="form-group">
          <label>Telepon / WhatsApp</label>
          <input type="text" id="edit-phone" class="form-control" value="${escapeHtml(p.phone)}">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Lokasi (Kota, Negara)</label>
          <input type="text" id="edit-location" class="form-control" value="${escapeHtml(p.location)}">
        </div>
        <div class="form-group">
          <label>URL Instagram</label>
          <input type="text" id="edit-instagram" class="form-control" value="${escapeHtml(p.instagram || '')}">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>URL TikTok</label>
          <input type="text" id="edit-tiktok" class="form-control" value="${escapeHtml(p.tiktok || '')}">
        </div>
        <div class="form-group">
          <label>Statistik Pengalaman</label>
          <input type="text" id="edit-stat-experience" class="form-control" value="${escapeHtml(p.stats?.experience || '0 Thn')}">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Statistik Keahlian</label>
          <input type="text" id="edit-stat-skills" class="form-control" value="${escapeHtml(p.stats?.skills || '10+')}">
        </div>
        <div class="form-group">
          <label>Statistik Organisasi</label>
          <input type="text" id="edit-stat-org" class="form-control" value="${escapeHtml(p.stats?.org || '1+')}">
        </div>
      </div>
    </div>

    <!-- TAB 2: PENGALAMAN KERJA -->
    <div id="tab-experiences" class="modal-tab-pane">
      <div class="editor-section-header">
        <h4>Pengalaman Kerja & Magang</h4>
        <button type="button" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addExperienceItem()">+ Tambah Pengalaman</button>
      </div>

      <div id="editor-exp-container" style="display: flex; flex-direction: column; gap: 16px;">
        ${cvData.experiences.map((exp, idx) => `
          <div class="item-edit-card" data-idx="${idx}">
            <div class="edit-card-title-row">
              <strong>Pengalaman #${idx + 1}</strong>
              <button type="button" class="btn-remove-item" onclick="removeExperienceItem(${idx})">Hapus</button>
            </div>
            
            <div class="form-grid-2">
              <div class="form-group">
                <label>Posisi / Jabatan</label>
                <input type="text" class="form-control exp-role" value="${escapeHtml(exp.role)}">
              </div>
              <div class="form-group">
                <label>Nama Perusahaan</label>
                <input type="text" class="form-control exp-company" value="${escapeHtml(exp.company)}">
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label>Periode Pekerjaan</label>
                <input type="text" class="form-control exp-period" value="${escapeHtml(exp.period)}">
              </div>
              <div class="form-group">
                <label>Tipe Pekerjaan</label>
                <input type="text" class="form-control exp-type" value="${escapeHtml(exp.type || 'Full-time')}">
              </div>
            </div>

            <div class="form-group">
              <label>Poin Deskripsi / Pencapaian (Satu per baris)</label>
              <textarea class="form-control exp-bullets" rows="3">${(exp.description || []).join("\n")}</textarea>
            </div>

            <div class="form-group">
              <label>Skill / Teknologi Tags (Dipisah koma)</label>
              <input type="text" class="form-control exp-tags" value="${(exp.tags || []).join(", ")}">
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- TAB 3: PENDIDIKAN -->
    <div id="tab-education" class="modal-tab-pane">
      <div class="editor-section-header">
        <h4>Riwayat Pendidikan</h4>
        <button type="button" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addEducationItem()">+ Tambah Pendidikan</button>
      </div>

      <div id="editor-edu-container" style="display: flex; flex-direction: column; gap: 16px;">
        ${cvData.education.map((edu, idx) => `
          <div class="item-edit-card" data-idx="${idx}">
            <div class="edit-card-title-row">
              <strong>Pendidikan #${idx + 1}</strong>
              <button type="button" class="btn-remove-item" onclick="removeEducationItem(${idx})">Hapus</button>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label>Nama Institusi / Universitas</label>
                <input type="text" class="form-control edu-institution" value="${escapeHtml(edu.institution)}">
              </div>
              <div class="form-group">
                <label>Gelar / Jurusan</label>
                <input type="text" class="form-control edu-degree" value="${escapeHtml(edu.degree)}">
              </div>
            </div>

            <div class="form-group">
              <label>Tahun Masuk - Lulus</label>
              <input type="text" class="form-control edu-period" value="${escapeHtml(edu.period)}">
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- TAB 4: ORGANISASI -->
    <div id="tab-organization" class="modal-tab-pane">
      <div class="editor-section-header">
        <h4>Pengalaman Organisasi</h4>
        <button type="button" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addOrganizationItem()">+ Tambah Organisasi</button>
      </div>

      <div id="editor-org-container" style="display: flex; flex-direction: column; gap: 16px;">
        ${cvData.organizations.map((org, idx) => `
          <div class="item-edit-card" data-idx="${idx}">
            <div class="edit-card-title-row">
              <strong>Organisasi #${idx + 1}</strong>
              <button type="button" class="btn-remove-item" onclick="removeOrganizationItem(${idx})">Hapus</button>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label>Jabatan / Peran</label>
                <input type="text" class="form-control org-role" value="${escapeHtml(org.role)}">
              </div>
              <div class="form-group">
                <label>Nama Organisasi</label>
                <input type="text" class="form-control org-name" value="${escapeHtml(org.organization)}">
              </div>
            </div>

            <div class="form-group">
              <label>Periode</label>
              <input type="text" class="form-control org-period" value="${escapeHtml(org.period)}">
            </div>

            <div class="form-group">
              <label>Deskripsi Peran & Kegiatan</label>
              <textarea class="form-control org-desc" rows="2">${escapeHtml(org.description)}</textarea>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- TAB 5: KEAHLIAN -->
    <div id="tab-skills" class="modal-tab-pane">
      <div class="editor-section-header">
        <h4>Kelompok Keahlian & Skill</h4>
        <button type="button" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addSkillCategory()">+ Tambah Kategori</button>
      </div>

      <div id="editor-skills-container" style="display: flex; flex-direction: column; gap: 16px;">
        ${cvData.skills.map((cat, idx) => `
          <div class="item-edit-card" data-idx="${idx}">
            <div class="edit-card-title-row">
              <strong>Kategori Skill #${idx + 1}</strong>
              <button type="button" class="btn-remove-item" onclick="removeSkillCategory(${idx})">Hapus</button>
            </div>

            <div class="form-group">
              <label>Nama Kategori</label>
              <input type="text" class="form-control skill-cat-name" value="${escapeHtml(cat.category)}">
            </div>

            <div class="form-group">
              <label>Daftar Keahlian / Chips (Dipisah koma)</label>
              <input type="text" class="form-control skill-cat-items" value="${(cat.items || []).join(", ")}">
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// Global Handlers for Add/Remove Items
window.addExperienceItem = function() {
  extractEditorFormData();
  cvData.experiences.push({
    id: "exp-" + Date.now(),
    role: "[ Posisi Pekerjaan Baru ]",
    company: "[ Nama Perusahaan ]",
    period: "[ Jan 2024 - Sekarang ]",
    type: "Full-time",
    description: ["[ Tanggung jawab utama atau pencapaian ]"],
    tags: ["Skill 1", "Skill 2"]
  });
  populateEditorForm();
  document.querySelector('[data-tab="tab-experiences"]')?.click();
};

window.removeExperienceItem = function(idx) {
  extractEditorFormData();
  cvData.experiences.splice(idx, 1);
  populateEditorForm();
  document.querySelector('[data-tab="tab-experiences"]')?.click();
};

window.addEducationItem = function() {
  extractEditorFormData();
  cvData.education.push({
    id: "edu-" + Date.now(),
    institution: "[ Universitas / Sekolah ]",
    degree: "[ Gelar / Jurusan ]",
    period: "[ Tahun Masuk - Lulus ]"
  });
  populateEditorForm();
  document.querySelector('[data-tab="tab-education"]')?.click();
};

window.removeEducationItem = function(idx) {
  extractEditorFormData();
  cvData.education.splice(idx, 1);
  populateEditorForm();
  document.querySelector('[data-tab="tab-education"]')?.click();
};

window.addSkillCategory = function() {
  extractEditorFormData();
  cvData.skills.push({
    id: "skill-cat-" + Date.now(),
    category: "[ Nama Kategori Baru ]",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  });
  populateEditorForm();
  document.querySelector('[data-tab="tab-skills"]')?.click();
};

window.removeSkillCategory = function(idx) {
  extractEditorFormData();
  cvData.skills.splice(idx, 1);
  populateEditorForm();
  document.querySelector('[data-tab="tab-skills"]')?.click();
};

window.addOrganizationItem = function() {
  extractEditorFormData();
  cvData.organizations.push({
    id: "org-" + Date.now(),
    role: "[ Peran / Jabatan ]",
    organization: "[ Nama Organisasi ]",
    period: "[ Tahun - Tahun ]",
    description: "[ Deskripsi peran ]"
  });
  populateEditorForm();
  document.querySelector('[data-tab="tab-organization"]')?.click();
};

window.removeOrganizationItem = function(idx) {
  extractEditorFormData();
  cvData.organizations.splice(idx, 1);
  populateEditorForm();
  document.querySelector('[data-tab="tab-organization"]')?.click();
};

// Extract Data from Active Form Tab Elements
function extractEditorFormData() {
  const nameEl = document.getElementById("edit-name");
  if (nameEl) cvData.profile.name = nameEl.value;

  const titleEl = document.getElementById("edit-title");
  if (titleEl) cvData.profile.title = titleEl.value;

  const bioEl = document.getElementById("edit-bio");
  if (bioEl) cvData.profile.bio = bioEl.value;

  const emailEl = document.getElementById("edit-email");
  if (emailEl) cvData.profile.email = emailEl.value;

  const phoneEl = document.getElementById("edit-phone");
  if (phoneEl) cvData.profile.phone = phoneEl.value;

  const locationEl = document.getElementById("edit-location");
  if (locationEl) cvData.profile.location = locationEl.value;

  const instagramEl = document.getElementById("edit-instagram");
  if (instagramEl) cvData.profile.instagram = instagramEl.value;

  const tiktokEl = document.getElementById("edit-tiktok");
  if (tiktokEl) cvData.profile.tiktok = tiktokEl.value;

  if (!cvData.profile.stats) cvData.profile.stats = {};
  const expStatEl = document.getElementById("edit-stat-experience");
  if (expStatEl) cvData.profile.stats.experience = expStatEl.value;

  const skillStatEl = document.getElementById("edit-stat-skills");
  if (skillStatEl) cvData.profile.stats.skills = skillStatEl.value;

  const orgStatEl = document.getElementById("edit-stat-org");
  if (orgStatEl) cvData.profile.stats.org = orgStatEl.value;

  // Extract Experiences
  const expContainer = document.getElementById("editor-exp-container");
  if (expContainer) {
    const expCards = expContainer.querySelectorAll(".item-edit-card");
    cvData.experiences = Array.from(expCards).map((card, idx) => ({
      id: cvData.experiences[idx]?.id || "exp-" + idx,
      role: card.querySelector(".exp-role")?.value || "",
      company: card.querySelector(".exp-company")?.value || "",
      period: card.querySelector(".exp-period")?.value || "",
      type: card.querySelector(".exp-type")?.value || "Full-time",
      description: (card.querySelector(".exp-bullets")?.value || "").split("\n").filter(b => b.trim() !== ""),
      tags: (card.querySelector(".exp-tags")?.value || "").split(",").map(t => t.trim()).filter(t => t !== "")
    }));
  }

  // Extract Education
  const eduContainer = document.getElementById("editor-edu-container");
  if (eduContainer) {
    const eduCards = eduContainer.querySelectorAll(".item-edit-card");
    cvData.education = Array.from(eduCards).map((card, idx) => ({
      id: cvData.education[idx]?.id || "edu-" + idx,
      institution: card.querySelector(".edu-institution")?.value || "",
      degree: card.querySelector(".edu-degree")?.value || "",
      period: card.querySelector(".edu-period")?.value || ""
    }));
  }

  // Extract Skills
  const skillsContainer = document.getElementById("editor-skills-container");
  if (skillsContainer) {
    const skillCards = skillsContainer.querySelectorAll(".item-edit-card");
    cvData.skills = Array.from(skillCards).map((card, idx) => ({
      id: cvData.skills[idx]?.id || "skill-cat-" + idx,
      category: card.querySelector(".skill-cat-name")?.value || "",
      items: (card.querySelector(".skill-cat-items")?.value || "").split(",").map(s => s.trim()).filter(s => s !== "")
    }));
  }

  // Extract Organizations
  const orgContainer = document.getElementById("editor-org-container");
  if (orgContainer) {
    const orgCards = orgContainer.querySelectorAll(".item-edit-card");
    cvData.organizations = Array.from(orgCards).map((card, idx) => ({
      id: cvData.organizations[idx]?.id || "org-" + idx,
      role: card.querySelector(".org-role")?.value || "",
      organization: card.querySelector(".org-name")?.value || "",
      period: card.querySelector(".org-period")?.value || "",
      description: card.querySelector(".org-desc")?.value || ""
    }));
  }
}

// Theme Switcher Initialization
function initTheme() {
  const btnTheme = document.getElementById("btn-theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const btnTheme = document.getElementById("btn-theme-toggle");
  if (!btnTheme) return;
  if (theme === "dark") {
    btnTheme.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    btnTheme.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// Utility Toast Message
function showToast(msg) {
  let toast = document.getElementById("custom-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "custom-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--text-main);
      color: var(--bg-main);
      padding: 10px 20px;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      box-shadow: var(--shadow-lg);
      z-index: 3000;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2500);
}

// Escape HTML helper
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
