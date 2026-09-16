/* ==========================================================================
   FIREBASE REALTIME DATABASE SERVICE - CV WEBSITE
   ========================================================================== */

const FIREBASE_CONFIG_KEY = "firebase_cv_config_v1";

// Ambil Konfigurasi Firebase dari LocalStorage atau default
function getFirebaseConfig() {
  const saved = localStorage.getItem(FIREBASE_CONFIG_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Gagal membaca konfigurasi Firebase dari LocalStorage", e);
    }
  }
  return {
    apiKey: window.ENV_FIREBASE_API_KEY || "",
    authDomain: window.ENV_FIREBASE_AUTH_DOMAIN || "",
    databaseURL: window.ENV_FIREBASE_DATABASE_URL || "",
    projectId: window.ENV_FIREBASE_PROJECT_ID || ""
  };
}

// Simpan Konfigurasi Firebase Baru
function saveFirebaseConfig(cfg) {
  const config = {
    apiKey: (cfg.apiKey || "").trim(),
    authDomain: (cfg.authDomain || "").trim(),
    databaseURL: (cfg.databaseURL || "").trim(),
    projectId: (cfg.projectId || "").trim()
  };
  localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(config));
  initFirebaseClient();
  return config;
}

// Inisialisasi Firebase App & Realtime Database Client
let firebaseApp = null;
let firebaseDb = null;

function initFirebaseClient() {
  const cfg = getFirebaseConfig();
  if (cfg.apiKey && cfg.databaseURL && window.firebase) {
    try {
      if (!window.firebase.apps || !window.firebase.apps.length) {
        firebaseApp = window.firebase.initializeApp(cfg);
      } else {
        firebaseApp = window.firebase.app();
      }
      firebaseDb = window.firebase.database();
      console.log("🔥 Firebase Realtime Database Berhasil Diinisialisasi!");
    } catch (err) {
      console.error("Gagal menginisialisasi Firebase Client:", err);
      firebaseDb = null;
    }
  } else {
    firebaseDb = null;
  }
  return firebaseDb;
}

// Ambil Data CV Terbaru dari Firebase Realtime DB
async function fetchCloudCVData() {
  if (!firebaseDb) {
    initFirebaseClient();
  }

  if (!firebaseDb) {
    console.log("ℹ️ Database Firebase belum dikonfigurasi. Menggunakan penyimpanan lokal.");
    return null;
  }

  try {
    const snapshot = await firebaseDb.ref("cv_store/default").once("value");
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("🔥 Data CV berhasil dimuat dari Firebase Cloud DB!");
      return data;
    }
  } catch (err) {
    console.error("Error koneksi ke Firebase Realtime DB:", err);
  }

  return null;
}

// Simpan/Perbarui Data CV ke Firebase Realtime DB
async function saveCloudCVData(cvData) {
  if (!firebaseDb) {
    initFirebaseClient();
  }

  if (!firebaseDb) {
    return { success: false, reason: "no_config" };
  }

  try {
    await firebaseDb.ref("cv_store/default").set(cvData);
    console.log("🔥 Data CV berhasil disinkronkan ke Firebase Cloud DB!");
    return { success: true };
  } catch (err) {
    console.error("Gagal menyimpan data ke Firebase Cloud DB:", err);
    return { success: false, error: err.message };
  }
}

// Export global helpers
window.getFirebaseConfig = getFirebaseConfig;
window.saveFirebaseConfig = saveFirebaseConfig;
window.initFirebaseClient = initFirebaseClient;
window.fetchCloudCVData = fetchCloudCVData;
window.saveCloudCVData = saveCloudCVData;
