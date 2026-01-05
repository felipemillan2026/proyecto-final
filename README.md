# 🚗 Repuestos Chevrolet - Aplicación Web y Móvil

Aplicación completa de e-commerce para repuestos originales Chevrolet, desarrollada con React y desplegada en plataformas web y móvil (Android).

---

## 📋 Descripción del Proyecto

Sistema de gestión de productos y contacto para repuestos de vehículos Chevrolet que incluye:

- **Catálogo de productos** con carrito de compras funcional
- **Formulario de contacto** con validaciones y almacenamiento en Firebase
- **Autenticación de usuarios** (opcional para extensiones futuras)
- **Versión web** desplegada en Netlify
- **Aplicación Android** (APK) generada con Cordova

---

## 🎯 Ejercicios Implementados

### **Ejercicio 1: Carrito de Compras**
✅ Componente padre (`ProductList`) que renderiza lista de productos  
✅ Componente hijo (`ProductItem`) para cada producto individual  
✅ Comunicación padre-hijo mediante `props`  
✅ Comunicación hijo-padre mediante `callbacks`  
✅ Gestión de estado con `this.state` y `this.setState()`  
✅ Uso de `map()` para renderizar dinámicamente  

**Componentes:**
- `ProductList.js` - Lista de productos
- `ProductItem.js` - Tarjeta de producto individual
- `Cart.js` - Carrito de compras con total

### **Ejercicio 2: Formulario con Firebase**
✅ Formulario de contacto con validaciones  
✅ Integración con `simple-react-validator`  
✅ Conexión a Firebase Firestore  
✅ Almacenamiento de datos en tiempo real  

**Componentes:**
- `ContactForm.js` - Formulario con validaciones

### **Ejercicio 3: Deploy y APK**
✅ Estilos con Bootstrap  
✅ Firebase Authentication habilitado  
✅ Firebase Storage configurado  
✅ Build de producción optimizado  
✅ APK de Android generado con Cordova  
✅ APK firmado para distribución  

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- React 18
- Bootstrap 5
- CSS3

### **Backend/Servicios**
- Firebase Authentication
- Firebase Firestore Database
- Firebase Storage

### **Validaciones**
- simple-react-validator

### **Mobile**
- Apache Cordova
- Android SDK
- Gradle

### **Deployment**
- Netlify (Web)
- APK (Android)

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
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   ├── ContactForm.js
│   │   ├── ProductItem.js
│   │   └── ProductList.js
│   ├── firebase/
│   │   └── firebaseConfig.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Instalación y Ejecución

### **Prerequisitos**
- Node.js v18 o superior
- npm
- Cuenta de Firebase

### **1. Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/proyecto-final.git
cd proyecto-final
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Configurar Firebase**
1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Authentication (Email/Password)
3. Habilitar Firestore Database
4. Habilitar Storage
5. Copiar configuración en `src/firebase/firebaseConfig.js`

### **4. Ejecutar en desarrollo**
```bash
npm start
```
Abre [http://localhost:3000](http://localhost:3000)

### **5. Generar build de producción**
```bash
npm run build
```

---

## 📱 Generar APK de Android

### **1. Instalar Cordova**
```bash
npm install -g cordova
```

### **2. Crear build de React**
```bash
npm run build
```

### **3. Copiar build a Cordova**
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .\cordova-app\www
Copy-Item -Recurse .\build .\cordova-app\www
```

### **4. Construir APK**
```bash
cd cordova-app
cordova build android
```

APK generado en: `cordova-app/platforms/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🌐 Deploy en Netlify

### **Opción 1: Deploy desde GitHub**
1. Subir proyecto a GitHub
2. Ir a [Netlify](https://www.netlify.com/)
3. New site from Git → Seleccionar repositorio
4. Build command: `npm run build`
5. Publish directory: `build`
6. Deploy site

### **Opción 2: Deploy manual**
```bash
npm run build
# Arrastrar carpeta build/ a Netlify Drop
```

---

## 📸 Capturas de Pantalla

### **Web**
![Catálogo de Productos](screenshots/catalogo.png)
![Carrito de Compras](screenshots/carrito.png)
![Formulario de Contacto](screenshots/formulario.png)

### **Móvil (Android)**
![App Instalada](screenshots/app-instalada.png)
![App Funcionando](screenshots/app-funcionando.png)

---

## 🔗 Enlaces

- **Repositorio GitHub:** [https://github.com/TU_USUARIO/proyecto-final](https://github.com/TU_USUARIO/proyecto-final)
- **Versión Web (Netlify):** [https://repuestos-chevrolet.netlify.app](https://repuestos-chevrolet.netlify.app)
- **APK Android:** [Descargar APK](apk/RepuestosChevrolet-debug.apk)

---

## 👨‍💻 Autor

**Felipe**  
Programación de Componentes - IPLACEX  
Enero 2026

---

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos para el examen final de Programación de Componentes.

---

## 🙏 Agradecimientos

- IPLACEX Enovus
- Documentación de React
- Firebase Documentation
- Bootstrap
- Apache Cordova