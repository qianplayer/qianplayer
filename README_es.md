> 🌐 [English](README.md) | [简体中文](README_zh-Hans.md) | [繁體中文](README_zh-Hant.md) | [Français](README_fr.md) | [Deutsch](README_de.md) | [日本語](README_ja.md) | [العربية](README_ar.md)

# <img src="imgs/appicon.svg" width="36" height="36" alt="icon"> QianPlayer

Un reproductor de vídeo nativo para macOS: ligero, rápido y repleto de funciones.

![Interfaz principal](imgs/main.png)

## Características

### Vídeo

- **Decodificación acelerada por hardware** — Decodificación por hardware de H.264/H.265/VP9/AV1 con un uso mínimo de CPU
- **Adaptación HDR automática** — Detecta contenido HDR10/HLG y aplica tone-mapping automático
- **Controles de parámetros de vídeo** — Ajuste en tiempo real de brillo, contraste, saturación, tono y gamma; modos de escala de grises y rotación
- **Sistema de subtítulos** — Cambio entre múltiples pistas, soporte externo SRT/ASS/SSA/VTT, ajuste fino del retraso
- **Decodificación mpv · Renderizado nativo Metal** — Motor de decodificación mpv con pipeline de renderizado Metal nativo, visualización zero-copy, latencia ultrabaja y aprovechamiento completo de la GPU Apple Silicon

### Audio

- **Selección de múltiples pistas** — Selección libre entre todos los flujos de audio integrados
- **Audio espacial** — Renderizado de audio espacial para una experiencia envolvente inmersiva
- **Decodificación universal** — AAC/FLAC/Opus/DTS/AC3/TrueHD y más

### Funciones

- **Gestión de fuentes de archivos** — Añade carpetas locales con escaneo e indexación automáticos, navegación en vista de árbol
- **DLNA / UPnP** — Funciona como receptor para recibir transmisiones desde teléfonos y decodificadores de TV
- **Enlaces magnet** — Pega un enlace magnet para reproducir mientras se descarga, con progreso y velocidad en tiempo real
- **Picture-in-Picture (PiP)** — Ventana flotante del sistema siempre visible en primer plano
- **Listas de reproducción** — Crea, gestiona y ordena listas con historial de reproducción automático

## Requisitos del sistema

- macOS 15.0 (Sequoia) o posterior
- Apple Silicon (M1 / M2 / M3 / M4)

## Instalación

Descarga la [última versión](https://github.com/qianplayer/qianplayer.github.io/releases), abre el DMG y arrastra QianPlayer a Aplicaciones.

> Si macOS bloquea el primer inicio: abre Ajustes del Sistema → Privacidad y seguridad → desplázate hasta Seguridad → haz clic en «Abrir de todos modos» para QianPlayer.

## Licencia

Gratuito y ligero
