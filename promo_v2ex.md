# [分享创造] QianPlayer — 给 macOS 写了一个原生视频播放器

## 介绍

做了一个 macOS 原生视频播放器，底层 mpv 解码 + Metal 渲染管线，追求零拷贝、低延迟的播放体验。

![](https://qianplayer.github.io/imgs/main.webp)

## 主要特性

- **硬件解码** — H.264/H.265/VP9/AV1 全硬解，CPU 几乎零占用
- **HDR 自适应** — 自动识别 HDR10/HLG 并 tone-mapping
- **Metal 原生渲染** — 零拷贝显示，充分利用 Apple Silicon GPU
- **字幕系统** — 多轨切换 + 外挂 SRT/ASS/SSA/VTT
- **空间音频** — 沉浸式环绕声体验
- **DLNA/UPnP** — 手机投屏接收端
- **磁力链接** — 粘贴即播，边下边看
- **画中画** — 系统级悬浮窗

## 系统要求

- macOS 15.0+
- Apple Silicon (M1/M2/M3/M4)

## 下载

主页：https://qianplayer.github.io
Release：https://github.com/qianplayer/qianplayer.github.io/releases

免费使用，欢迎反馈。
