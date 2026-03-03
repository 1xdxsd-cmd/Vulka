# 🛞 TireCore — Inventario de Llantas

App móvil para inventario de llantas. **100% offline** — la base de datos se guarda directamente en el dispositivo. Genera comprobantes PDF con garantía de 15 días y los comparte por WhatsApp.

---

## ✅ Características

- 📦 **Base de datos local** en el teléfono (IndexedDB — no necesita internet ni servidor)
- 🛞 **Inventario completo** — agregar, editar, eliminar llantas
- 💸 **Registrar ventas** con comprobante automático
- 📦 **Registrar compras** para actualizar stock
- 🧾 **Comprobante PDF** con:
  - Folio único
  - Datos del cliente
  - Detalle del producto
  - **Garantía de 15 días** con fecha de vencimiento
- 💬 **Compartir por WhatsApp** con un toque
- 📄 **Guardar PDF** directo en el teléfono
- 📍 **Mapa del almacén** con pines por zona
- 🚨 **Alertas** de stock bajo y agotado

---

## 📁 Archivos del proyecto

```
tirecore/
├── index.html              ← App completa (toda la lógica aquí)
├── manifest.json           ← Configuración PWA
├── service-worker.js       ← Cache offline
├── capacitor.config.ts     ← Config para compilar APK
├── package.json            ← Dependencias (solo Capacitor)
├── .gitignore
└── .github/
    └── workflows/
        └── build-apk.yml   ← GitHub Actions: genera el APK automático
```

---

## 🚀 Cómo obtener el APK (GitHub Actions — automático)

### Paso 1 — Subir a GitHub
```bash
git init
git add .
git commit -m "TireCore inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tirecore.git
git push -u origin main
```

### Paso 2 — Esperar el build
1. Ve a tu repositorio en GitHub
2. Click en la pestaña **"Actions"**
3. Verás el workflow **"Build APK — TireCore"** corriendo
4. Espera ~5-8 minutos

### Paso 3 — Descargar el APK
**Opción A — Releases (recomendado):**
1. En GitHub, ve a **"Releases"** (menú derecho)
2. Descarga `app-debug.apk`

**Opción B — Artifacts:**
1. En Actions → click en el workflow completado
2. Baja hasta "Artifacts"
3. Descarga **TireCore-APK**

---

## 📲 Instalar en Android

1. Descarga el APK en tu teléfono Android
2. Ve a **Configuración → Seguridad** (o Privacidad)
3. Activa **"Fuentes desconocidas"** o **"Instalar apps desconocidas"**
4. Abre el archivo APK descargado
5. Toca **"Instalar"**
6. ¡Listo! Abre **TireCore** desde tu pantalla de inicio

> 💡 En Android 8+: cuando abras el APK, el teléfono te pregunta si permites instalar desde esa app (Chrome/WhatsApp/etc.) — solo acepta.

---

## 💾 ¿Dónde se guardan los datos?

Los datos se guardan en **IndexedDB**, que es el almacenamiento interno del navegador/app del teléfono.

- ✅ No necesita internet
- ✅ No necesita servidor
- ✅ Los datos persisten aunque cierres la app
- ✅ Solo se borran si desinstallas la app o limpias datos manualmente

---

## 🧾 ¿Cómo funciona el comprobante?

Al registrar una venta:
1. Se genera automáticamente un comprobante con:
   - Número de folio único
   - Datos del cliente
   - Detalle de la llanta vendida
   - Total pagado
   - **Garantía de 15 días** con fecha exacta de vencimiento
2. Puedes tocar **"WhatsApp"** para enviar el comprobante en texto al cliente
3. Puedes tocar **"Guardar PDF"** para guardar el PDF en el teléfono y enviarlo por cualquier app

---

## 🔧 Ejecutar en el navegador (para probar)

Solo abre `index.html` en Chrome o cualquier navegador moderno. Funciona directamente sin instalar nada.
