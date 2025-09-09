# ShorLink - Acortador de URLs

Un acortador de enlaces moderno y eficiente construido con React y Vite, diseñado para convertir URLs largas en enlaces cortos y fáciles de compartir.

## 🚀 Características

- **Acortamiento rápido**: Convierte URLs largas en enlaces cortos instantáneamente
- **Interfaz moderna**: Diseño limpio y responsivo con Tailwind CSS
- **Copiar al portapapeles**: Copia enlaces acortados con un solo clic
- **Historial de enlaces**: Mantén un registro de tus URLs acortadas
- **Estadísticas**: Visualiza el número de clics en tus enlaces
- **Validación de URLs**: Verifica automáticamente la validez de las URLs
- **Responsive**: Funciona perfectamente en dispositivos móviles y desktop

## 🛠️ Tecnologías

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Linting**: ESLint 9.33.0
- **Compilador**: SWC (Super fast JavaScript/TypeScript compiler)

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/shorlink-front.git
cd shorlink-front
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🏗️ Estructura del Proyecto

```
shorlink-front/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Uso

1. **Acortar una URL**:
   - Pega tu URL larga en el campo de entrada
   - Haz clic en "Acortar"
   - Copia el enlace corto generado

2. **Gestionar enlaces**:
   - Ve tu historial de enlaces acortados
   - Consulta estadísticas de clics
   - Elimina enlaces que ya no necesites

## 🔗 API Backend

Este frontend está diseñado para trabajar con una API backend. Asegúrate de configurar las siguientes variables de entorno:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### Vercel
```bash
npm run build
# Conecta tu repositorio con Vercel
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para desplegar desde la carpeta dist/
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- React team por el excelente framework
- Vite por la herramienta de build ultrarrápida
- Tailwind CSS por el sistema de diseño
- Comunidad open source por las librerías utilizadas

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor:

1. Revisa los [Issues existentes](https://github.com/tu-usuario/shorlink-front/issues)
2. Crea un [nuevo Issue](https://github.com/tu-usuario/shorlink-front/issues/new)
3. Contacta al equipo de desarrollo

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!# shorlink-front
