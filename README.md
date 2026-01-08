# 🚗 Repuestos Chevrolet - Aplicación Web y Móvil

![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-12.7.0-ffca28?style=for-the-badge&logo=firebase)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952b3?style=for-the-badge&logo=bootstrap)

Aplicación completa de e-commerce para repuestos originales Chevrolet, desarrollada con React y desplegada en plataformas web y móvil (Android).

---

## 📋 Descripción del Proyecto

Sistema integral de gestión de productos, autenticación de usuarios y contacto para repuestos de vehículos Chevrolet que incluye:

- 🛒 **Catálogo de productos** con carrito de compras funcional
- 💰 **Precios en pesos chilenos (CLP)** con formato local
- 🔐 **Sistema de autenticación** con Firebase (Login/Register/Logout)
- 📧 **Formulario de contacto** con validaciones y almacenamiento en Firebase Firestore
- 📱 **Versión móvil** (APK para Android)
- 🌐 **Versión web** lista para deploy en Netlify
- 🖼️ **Imágenes reales** de repuestos automotrices

---

## 🎯 Ejercicios Implementados - Examen Final

### **Ejercicio 1: Carrito de Compras** ✅
- Componente padre (`ProductList`) que renderiza lista de productos
- Componente hijo (`ProductItem`) para cada producto individual
- Comunicación padre-hijo mediante `props`
- Comunicación hijo-padre mediante `callbacks`
- Gestión de estado con `this.state` y `this.setState()`
- Uso de `map()` para renderizar dinámicamente
- **Formato de moneda chilena (CLP)** con separadores de miles

**Componentes:**
- `ProductList.jsx` - Lista de productos con grid responsive
- `ProductItem.jsx` - Tarjeta de producto individual con precios en CLP
- `Cart.jsx` - Carrito de compras con cálculo de total en CLP

### **Ejercicio 2: Formulario con Firebase** ✅
- Formulario de contacto con validaciones en tiempo real
- Integración con `simple-react-validator`
- Conexión a Firebase Firestore
- Almacenamiento de datos en tiempo real
- Manejo de errores y mensajes de éxito

**Componente:**
- `ContactForm.jsx` - Formulario completo con validaciones

### **Ejercicio 3: Deploy y APK** ✅
- Estilos profesionales con Bootstrap 5
- Firebase Authentication habilitado e implementado
- Firebase Firestore Database activa
- Firebase Storage configurado
- Build de producción optimizado
- APK de Android generado con Cordova
- APK firmado listo para distribución

---

## ⭐ Características Adicionales Implementadas

### 🔐 **Sistema de Autenticación Completo**
- **Registro de usuarios** con email y contraseña
- **Inicio de sesión** con validación de credenciales
- **Cierre de sesión** seguro
- **Detección automática** de sesión activa
- **Manejo de errores** en español
- **Persistencia de sesión** al recargar la página

**Componente:**
- `AuthComponent.jsx` - Sistema completo de autenticación

### 🖼️ **Imágenes Reales de Productos**
- Imágenes reales de repuestos automotrices
- Optimizadas para web (formato JPG)
- Almacenadas localmente en el proyecto
- Tamaño optimizado para carga rápida

### 💰 **Sistema de Precios en Pesos Chilenos**
- Formato local chileno (`$12.990`)
- Separador de miles con punto
- Sin decimales (formato estándar CL)
- Función `formatPrice()` reutilizable

---

## 💰 Catálogo de Productos

| Producto | Código | Categoría | Precio CLP |
|----------|--------|-----------|------------|
| Filtro de Aceite | CHV-FOA-001 | Motor | $12.990 |
| Pastillas de Freno | CHV-PFR-002 | Frenos | $45.990 |
| Amortiguador Delantero | CHV-AMD-003 | Suspensión | $89.990 |
| Batería 12V | CHV-BAT-004 | Eléctrico | $129.990 |
| Bujías (Set 4 und) | CHV-BUJ-005 | Motor | $35.990 |
| Correa de Distribución | CHV-CDT-006 | Motor | $65.990 |
| Discos de Freno (Par) | CHV-DFR-007 | Frenos | $99.990 |
| Termostato Motor | CHV-TRM-008 | Refrigeración | $25.990 |

**Total productos:** 8 repuestos originales Chevrolet

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **React 19.2.3** - Biblioteca JavaScript para interfaces de usuario
- **Bootstrap 5.3.8** - Framework CSS para diseño responsive
- **CSS3** - Estilos personalizados y animaciones
- **JavaScript ES6+** - Sintaxis moderna

### **Backend/Servicios**
- **Firebase Authentication** - Sistema de autenticación de usuarios
- **Firebase Firestore Database** - Base de datos en tiempo real
- **Firebase Storage** - Almacenamiento de archivos (configurado)

### **Validaciones**
- **simple-react-validator 1.6.2** - Validación de formularios

### **Herramientas de Desarrollo**
- **Node.js 18+** - Entorno de ejecución
- **npm** - Gestor de paquetes
- **Create React App** - Configuración inicial del proyecto

### **Mobile**
- **Apache Cordova** - Framework para apps móviles
- **Android SDK** - Kit de desarrollo Android
- **Gradle** - Sistema de build para Android

### **Deployment**
- **Netlify** - Hosting para aplicación web
- **APK** - Aplicación nativa Android

---

## 📂 Estructura del Proyecto

```
proyecto-final/
├── apk/
│   ├── RepuestosChevrolet-debug.apk       # APK para pruebas
│   └── RepuestosChevrolet-release.apk     # APK firmado
├── build/                                  # Build de producción
├── cordova-app/                            # Proyecto Cordova
│   ├── platforms/android/
│   ├── www/
│   └── config.xml
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── productos/                  # Imágenes de repuestos
│   │           ├── filtro-aceite.JPG
│   │           ├── pastillas-freno.JPG
│   │           ├── amortiguador.JPG
│   │           ├── bateria.JPG
│   │           ├── bujias.JPG
│   │           ├── correa.JPG
│   │           ├── discos-freno.JPG
│   │           └── termostato.JPG
│   ├── components/
│   │   ├── AuthComponent.jsx              # Autenticación
│   │   ├── Cart.jsx                       # Carrito con formato CLP
│   │   ├── ContactForm.jsx                # Formulario de contacto
│   │   ├── ProductItem.jsx                # Tarjeta de producto con CLP
│   │   └── ProductList.jsx                # Lista de productos
│   ├── firebase/
│   │   └── firebaseConfig.js              # Configuración Firebase
│   ├── styles/
│   │   └── main.css                       # Estilos personalizados
│   ├── App.js                             # Componente principal
│   ├── App.css                            # Estilos del App
│   ├── index.js                           # Punto de entrada
│   └── index.css                          # Estilos globales
├── .gitignore
├── package.json                            # Dependencias del proyecto
├── package-lock.json
└── README.md                               # Este archivo
```

---

## 🚀 Instalación y Ejecución

### **Prerequisitos**
- Node.js v18 o superior
- npm (incluido con Node.js)
- Cuenta de Firebase (gratuita)

### **1. Clonar el repositorio**
```bash
git clone https://github.com/felipemillan/repuestos-chevrolet.git
cd repuestos-chevrolet
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Configurar Firebase**

#### **3.1 Crear proyecto en Firebase Console**
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en "Agregar proyecto"
3. Nombre: `repuestos-chevrolet`
4. Sigue los pasos y crea el proyecto

#### **3.2 Habilitar servicios**

**Authentication:**
1. Menú lateral > Authentication
2. Click en "Comenzar"
3. Sign-in method > Email/Password
4. Activar y guardar

**Firestore Database:**
1. Menú lateral > Firestore Database
2. Click en "Crear base de datos"
3. Modo: "Empezar en modo de prueba"
4. Ubicación: `southamerica-east1` (São Paulo)
5. Habilitar

**Storage:**
1. Menú lateral > Storage
2. Click en "Comenzar"
3. Modo: "Empezar en modo de prueba"
4. Ubicación: misma que Firestore
5. Listo

#### **3.3 Obtener credenciales**
1. Click en ⚙️ > Configuración del proyecto
2. Scroll a "Tus apps"
3. Selecciona tu app web
4. Copia la configuración

#### **3.4 Actualizar firebaseConfig.js**
Edita `src/firebase/firebaseConfig.js` con tus credenciales:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### **4. Ejecutar en desarrollo**
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### **5. Generar build de producción**
```bash
npm run build
```

El build optimizado se genera en la carpeta `build/`

---

## 📱 Generar APK de Android

### **Prerequisitos adicionales**
- Apache Cordova instalado globalmente
- Android SDK configurado
- Java JDK 8 o superior

### **1. Instalar Cordova**
```bash
npm install -g cordova
```

### **2. Crear build de React**
```bash
npm run build
```

### **3. Copiar build a Cordova**

**Windows PowerShell:**
```powershell
Remove-Item -Recurse -Force .\cordova-app\www
Copy-Item -Recurse .\build .\cordova-app\www
```

**Linux/Mac:**
```bash
rm -rf cordova-app/www
cp -r build cordova-app/www
```

### **4. Construir APK**
```bash
cd cordova-app
cordova build android
```

### **5. Ubicar la APK generada**
```
cordova-app/platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### **6. Copiar APK al directorio principal**
```bash
# Desde cordova-app/
cp platforms/android/app/build/outputs/apk/debug/app-debug.apk ../apk/RepuestosChevrolet.apk
```

---

## 🌐 Deploy en Netlify

### **Opción 1: Deploy automático desde GitHub**

1. **Sube el proyecto a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/repuestos-chevrolet.git
git push -u origin main
```

2. **Conecta con Netlify**
   - Ve a [Netlify](https://www.netlify.com/)
   - Click en "New site from Git"
   - Selecciona tu repositorio
   - Configuración:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click en "Deploy site"

3. **Configurar variables de entorno**
   - En Netlify: Site settings > Environment variables
   - Agrega tus variables de Firebase (si es necesario)

### **Opción 2: Deploy manual (Drag & Drop)**

1. Crea el build:
```bash
npm run build
```

2. Ve a [Netlify Drop](https://app.netlify.com/drop)

3. Arrastra la carpeta `build/` a la zona de drop

4. Tu sitio estará disponible en segundos

---

## 💡 Características Técnicas Destacadas

### **Formato de Moneda Chilena**
```javascript
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
};

// Uso:
formatPrice(12990); // Resultado: "$12.990"
```

### **Sistema de Autenticación**
```javascript
// Registro
await auth.createUserWithEmailAndPassword(email, password);

// Login
await auth.signInWithEmailAndPassword(email, password);

// Logout
await auth.signOut();

// Detectar cambios de sesión
auth.onAuthStateChanged((user) => {
  if (user) {
    // Usuario logueado
  } else {
    // Sin sesión
  }
});
```

### **Gestión de Estado del Carrito**
```javascript
// Agregar producto
handleAddToCart = (product) => {
  const existingItem = this.state.cart.find(item => item.id === product.id);
  
  if (existingItem) {
    // Incrementar cantidad
    return {
      cart: this.state.cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    };
  } else {
    // Agregar nuevo item
    return {
      cart: [...this.state.cart, { ...product, quantity: 1 }]
    };
  }
}
```

---

## 🧪 Pruebas de Funcionalidad

### **Testing Manual Checklist**

**Autenticación:**
- [ ] Registrar nuevo usuario
- [ ] Iniciar sesión con usuario existente
- [ ] Cerrar sesión
- [ ] Verificar persistencia de sesión al recargar
- [ ] Probar errores (contraseña incorrecta, usuario no existe)

**Carrito de Compras:**
- [ ] Agregar producto al carrito
- [ ] Incrementar cantidad de producto existente
- [ ] Eliminar producto del carrito
- [ ] Verificar cálculo correcto del total
- [ ] Verificar formato de precios en CLP

**Formulario de Contacto:**
- [ ] Enviar formulario con datos válidos
- [ ] Verificar validaciones (campos vacíos, email inválido)
- [ ] Confirmar que datos lleguen a Firestore
- [ ] Verificar mensajes de éxito/error

**Responsive Design:**
- [ ] Probar en móvil (320px - 768px)
- [ ] Probar en tablet (768px - 1024px)
- [ ] Probar en desktop (1024px+)

---

## 📊 Métricas del Proyecto

- **Líneas de código:** ~1,500
- **Componentes React:** 5
- **Productos en catálogo:** 8
- **Imágenes:** 8 optimizadas
- **Tamaño del build:** ~500 KB (comprimido)
- **Tiempo de carga:** < 3 segundos
- **Compatibilidad móvil:** ✅ 100%

---

## 🔐 Seguridad

### **Reglas de Firestore (Producción)**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /consultas/{document} {
      // Permitir crear consultas
      allow create: if request.resource.data.keys().hasAll(
        ['nombre', 'email', 'telefono', 'vehiculo', 'mensaje']
      );
      // Solo administradores pueden leer/modificar
      allow read, update, delete: if false;
    }
  }
}
```

### **Reglas de Storage (Producción)**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.resource.size < 5 * 1024 * 1024;
    }
  }
}
```

### **Mejores Prácticas Implementadas**
- ✅ Credenciales de Firebase en archivo separado
- ✅ Validación de inputs en el cliente
- ✅ Manejo de errores con mensajes claros
- ✅ Sanitización de datos antes de enviar a Firebase
- ✅ HTTPS en producción (Netlify/Cordova)

---

## 📝 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests (si están configurados)
npm test

# Eject de Create React App (no recomendado)
npm run eject
```

---

## 🐛 Solución de Problemas Comunes

### **Error: Module not found**
**Problema:** No encuentra un módulo o archivo
**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### **Error: Firebase not initialized**
**Problema:** Firebase no se inicializa correctamente
**Solución:**
- Verifica las credenciales en `firebaseConfig.js`
- Asegúrate de haber habilitado los servicios en Firebase Console

### **Error: Cannot find image**
**Problema:** No encuentra las imágenes de productos
**Solución:**
- Verifica que las imágenes estén en `src/assets/images/productos/`
- Verifica que las extensiones coincidan (`.JPG` vs `.jpg`)

### **APK no instala en Android**
**Problema:** APK no se puede instalar
**Solución:**
- Habilita "Fuentes desconocidas" en Android
- Verifica que la APK esté firmada correctamente

---

## 🔄 Historial de Versiones

### **v1.0.0** (Enero 2026)
- ✅ Implementación inicial del carrito de compras
- ✅ Integración con Firebase (Firestore, Auth, Storage)
- ✅ Formulario de contacto con validaciones
- ✅ Sistema de autenticación completo
- ✅ Precios en pesos chilenos
- ✅ Imágenes reales de productos
- ✅ APK de Android generada
- ✅ Diseño responsive con Bootstrap 5

---

## 🙏 Agradecimientos

- **IPLACEX Enovus** - Institución educativa
- **Profesor** - Guía durante el desarrollo
- **React Documentation** - Documentación oficial
- **Firebase Documentation** - Documentación oficial
- **Bootstrap** - Framework CSS
- **Apache Cordova** - Framework móvil

---

## 👨‍💻 Autor

**Felipe Millán Flores**  
Programación de Componentes - IPLACEX  
Enero 2026

📧 Email: felipemillan2865@gmail.com  
🎓 Institución: IPLACEX Enovus  
📚 Asignatura: Programación de Componentes  
📅 Fecha: Enero 2026

---

## 📄 Licencia

Este proyecto fue desarrollado con fines **académicos** para el examen final de Programación de Componentes.

**Uso educativo:** ✅ Permitido  
**Uso comercial:** ❌ No permitido sin autorización

---

## 📞 Soporte

Si tienes preguntas sobre este proyecto:

1. Revisa la documentación en este README
2. Consulta los comentarios en el código
3. Contacta al autor por email

---

## 🎯 Objetivos Cumplidos

- [x] **Ejercicio 1:** Carrito de compras con comunicación padre-hijo
- [x] **Ejercicio 2:** Formulario con Firebase y validaciones
- [x] **Ejercicio 3:** Deploy, APK y servicios Firebase habilitados
- [x] **Extra:** Sistema de autenticación completo
- [x] **Extra:** Precios en pesos chilenos
- [x] **Extra:** Imágenes reales de productos
- [x] **Extra:** Diseño profesional y responsive

---

## 🚀 Próximas Mejoras (Opcional)

- [ ] Panel de administración para gestionar productos
- [ ] Historial de pedidos por usuario
- [ ] Integración con pasarela de pago
- [ ] Sistema de búsqueda de productos
- [ ] Filtros por categoría y precio
- [ ] Wishlist (lista de deseos)
- [ ] Notificaciones push
- [ ] Modo oscuro

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

Desarrollado con ❤️ por Felipe Millán Flores

</div>
