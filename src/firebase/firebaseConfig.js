import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxyCMzeRoCIiMCmGar-bdrp_y5eVTpm9g", 
  authDomain: "proyecto-final-52c49.firebaseapp.com", 
  projectId: "proyecto-final-52c49", 
  storageBucket: "proyecto-final-52c49.appspot.com", 
  messagingSenderId: "704072821404",
  appId: "1:704072821404:web:810e29e3adddb4be471b59"
};

// Inicializar Firebase solo si no existe
if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase inicializado correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
  }
} else {
  console.log('ℹ️ Firebase ya estaba inicializado');
}

// Exportar servicios
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

// Verificación de que Firestore está disponible
if (process.env.NODE_ENV === 'development') {
  console.log('🔥 Firestore DB:', db);
  console.log('📊 Método collection disponible:', typeof db.collection === 'function');
  
  // Verificación adicional: intentar acceder a Firestore
  db.collection('_test_connection_')
    .limit(1)
    .get()
    .then(() => {
      console.log('✅ Conexión a Firestore exitosa');
    })
    .catch((error) => {
      console.warn('⚠️ Verifica las reglas de Firestore:', error.message);
    });
}

export default firebase;