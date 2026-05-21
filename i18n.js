const i18nData = {
  'zh-CN': {
    htmlLang: 'zh-CN',
    dir: 'ltr',
    title: 'QianPlayer - 轻量快速的 macOS 视频播放器 | 免费下载',
    metaDesc: 'QianPlayer 是一款轻量、快速、功能丰富的 macOS 原生视频播放器，支持硬件加速、HDR、DLNA 投屏、磁力链接边下边播、画中画等功能。免费开源，支持 Apple Silicon。',
    tagline: '轻量、快速、功能丰富的 macOS 原生视频播放器',
    downloadBtn: '下载最新版本',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · 免费轻量',
    screenshotTitle: '界面预览',
    screenshotAlt: 'QianPlayer 主界面',
    overviewTitle: '综合介绍',
    overviewSubtitle: 'QianPlayer 是一款为 macOS 设计的现代视频播放器，原生界面流畅美观，解码能力强大，兼顾极致性能与优雅体验。',
    overviewItems: [
      '原生界面，完美适配系统风格',
      '全格式支持，格式兼容无死角',
      '硬件加速解码，CPU 占用极低',
      'HDR 内容自动识别与渲染',
      'DLNA 投屏接收 / 局域网播放',
      '磁力链接边下边播',
      '画中画 (PiP) 支持',
      '智能文件源管理与播放列表'
    ],
    videoTitle: '视频特点',
    videoSubtitle: '专业级视频渲染能力，满足从日常观看到影音发烧的全场景需求',
    videoFeatures: [
      { title: '硬件加速解码', desc: '使用 macOS 硬件解码，支持 H.264/H.265/VP9/AV1 等编码格式，CPU 占用极低' },
      { title: 'HDR 自动适配', desc: '自动识别 HDR10/HLG 内容并启用 tone-mapping，在 SDR 显示器上也能正确还原色彩' },
      { title: '视频参数调节', desc: '亮度、对比度、饱和度、色相、伽马实时调整，支持灰度模式和画面旋转' },
      { title: '字幕系统', desc: '内置字幕轨道切换，支持 SRT/ASS/SSA/VTT 外挂字幕加载，字幕延迟微调' },
      { title: 'mpv 解码 · Metal 原生呈现', desc: '基于 mpv 核心解码引擎，通过 Metal 原生渲染管线直接输出画面，零拷贝上屏，延迟极低，充分发挥 Apple Silicon GPU 性能' }
    ],
    audioTitle: '音频特点',
    audioSubtitle: '高质量音频输出，精细化控制每一个细节',
    audioFeatures: [
      { title: '音频轨道管理', desc: '多音轨自由切换，支持视频内嵌的所有音频流选择' },
      { title: '空间音频', desc: '支持空间音频渲染，带来沉浸式环绕声体验' },
      { title: '格式全覆盖', desc: '支持 AAC/FLAC/Opus/DTS/AC3/TrueHD 等全部主流音频编码' }
    ],
    funcTitle: '功能特点',
    funcSubtitle: '围绕播放体验设计的实用功能集',
    funcFeatures: [
      { title: '文件源管理', desc: '添加本地文件夹作为视频源，自动扫描和索引，支持树形目录浏览和拼音搜索' },
      { title: 'DLNA / UPnP', desc: '作为 DLNA 渲染器接收投屏，手机/电视盒子可直接推送视频到 QianPlayer 播放' },
      { title: '磁力链接播放', desc: '粘贴磁力链接即可边下边播，实时显示下载进度、速率和连接状态' },
      { title: '简拼快搜', desc: '输入文件名拼音首字母即可快速定位视频，海量文件也能瞬间找到' },
      { title: '播放列表', desc: '创建和管理多个播放列表，支持添加、排序、重命名，自动记录播放历史' },
      { title: '画中画 (PiP)', desc: '一键进入系统画中画模式，浮窗置顶播放，边工作边看视频' }
    ],
    sysTitle: '系统要求 & 安装说明',
    sysSubtitle: '下载 DMG 后打开，将 QianPlayer 拖入 Applications 文件夹即可完成安装',
    reqTitle: '最低配置',
    reqItems: ['macOS 15.0 (Sequoia) 或更高版本', 'Apple Silicon 芯片 (M1 / M2 / M3 / M4)', '约 80 MB 磁盘空间'],
    secTitle: '首次打开提示安全性警告？',
    secItems: ['打开「系统设置」→「隐私与安全性」', '下滑到「安全性」部分', '点击「仍要打开」QianPlayer'],
    footerSource: 'GitHub 源码',
    footerSlogan: 'QianPlayer — 免费轻量，用爱发电'
  },
  'zh-TW': {
    htmlLang: 'zh-TW',
    dir: 'ltr',
    title: 'QianPlayer - 輕量快速的 macOS 影片播放器 | 免費下載',
    metaDesc: 'QianPlayer 是一款輕量、快速、功能豐富的 macOS 原生影片播放器，支援硬體加速、HDR、DLNA 投放、磁力連結邊下邊播、子母畫面等功能。',
    tagline: '輕量、快速、功能豐富的 macOS 原生影片播放器',
    downloadBtn: '下載最新版本',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · 免費輕量',
    screenshotTitle: '介面預覽',
    screenshotAlt: 'QianPlayer 主介面',
    overviewTitle: '綜合介紹',
    overviewSubtitle: 'QianPlayer 是一款為 macOS 設計的現代影片播放器，原生介面流暢美觀，解碼能力強大，兼顧極致效能與優雅體驗。',
    overviewItems: [
      '原生介面，完美適配系統風格',
      '全格式支援，格式相容無死角',
      '硬體加速解碼，CPU 佔用極低',
      'HDR 內容自動識別與渲染',
      'DLNA 投放接收 / 區域網路播放',
      '磁力連結邊下邊播',
      '子母畫面 (PiP) 支援',
      '智慧檔案來源管理與播放清單'
    ],
    videoTitle: '視訊特色',
    videoSubtitle: '專業級視訊渲染能力，滿足從日常觀看到影音發燒的全場景需求',
    videoFeatures: [
      { title: '硬體加速解碼', desc: '使用 macOS 硬體解碼，支援 H.264/H.265/VP9/AV1 等編碼格式，CPU 佔用極低' },
      { title: 'HDR 自動適配', desc: '自動識別 HDR10/HLG 內容並啟用 tone-mapping，在 SDR 顯示器上也能正確還原色彩' },
      { title: '視訊參數調節', desc: '亮度、對比度、飽和度、色相、伽瑪即時調整，支援灰階模式和畫面旋轉' },
      { title: '字幕系統', desc: '內建字幕軌道切換，支援 SRT/ASS/SSA/VTT 外掛字幕載入，字幕延遲微調' },
      { title: 'mpv 解碼 · Metal 原生呈現', desc: '基於 mpv 核心解碼引擎，透過 Metal 原生渲染管線直接輸出畫面，零拷貝上屏，延遲極低，充分發揮 Apple Silicon GPU 效能' }
    ],
    audioTitle: '音訊特色',
    audioSubtitle: '高品質音訊輸出，精細化控制每一個細節',
    audioFeatures: [
      { title: '音訊軌道管理', desc: '多音軌自由切換，支援影片內嵌的所有音訊串流選擇' },
      { title: '空間音訊', desc: '支援空間音訊渲染，帶來沉浸式環繞聲體驗' },
      { title: '格式全覆蓋', desc: '支援 AAC/FLAC/Opus/DTS/AC3/TrueHD 等全部主流音訊編碼' }
    ],
    funcTitle: '功能特色',
    funcSubtitle: '圍繞播放體驗設計的實用功能集',
    funcFeatures: [
      { title: '檔案來源管理', desc: '新增本機資料夾作為影片來源，自動掃描和索引，支援樹狀目錄瀏覽' },
      { title: 'DLNA / UPnP', desc: '作為 DLNA 渲染器接收投放，手機/電視盒可直接推送影片到 QianPlayer 播放' },
      { title: '磁力連結播放', desc: '貼上磁力連結即可邊下邊播，即時顯示下載進度、速率和連線狀態' },
      { title: '播放清單', desc: '建立和管理多個播放清單，支援新增、排序、重新命名，自動記錄播放歷史' },
      { title: '子母畫面 (PiP)', desc: '一鍵進入系統子母畫面模式，浮窗置頂播放，邊工作邊看影片' }
    ],
    sysTitle: '系統需求 & 安裝說明',
    sysSubtitle: '下載 DMG 後開啟，將 QianPlayer 拖入 Applications 資料夾即可完成安裝',
    reqTitle: '最低配置',
    reqItems: ['macOS 15.0 (Sequoia) 或更高版本', 'Apple Silicon 晶片 (M1 / M2 / M3 / M4)', '約 80 MB 磁碟空間'],
    secTitle: '首次開啟提示安全性警告？',
    secItems: ['開啟「系統設定」→「隱私權與安全性」', '下滑到「安全性」部分', '點選「仍要打開」QianPlayer'],
    footerSource: 'GitHub 原始碼',
    footerSlogan: 'QianPlayer — 免費輕量，用愛發電'
  },
  'en': {
    htmlLang: 'en',
    dir: 'ltr',
    title: 'QianPlayer - Lightweight & Fast macOS Video Player | Free Download',
    metaDesc: 'QianPlayer is a lightweight, fast, and feature-rich native video player for macOS with hardware acceleration, HDR, DLNA casting, magnet link streaming, and Picture-in-Picture.',
    tagline: 'A lightweight, fast, and feature-rich native video player for macOS',
    downloadBtn: 'Download Latest',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · Free & Lightweight',
    screenshotTitle: 'Preview',
    screenshotAlt: 'QianPlayer Main Interface',
    overviewTitle: 'Overview',
    overviewSubtitle: 'QianPlayer is a modern video player designed for macOS with a native, fluid interface, powerful decoding, and an elegant experience.',
    overviewItems: [
      'Native UI, perfectly matching system style',
      'Universal format support',
      'Hardware-accelerated decoding, minimal CPU usage',
      'Automatic HDR detection and rendering',
      'DLNA casting receiver / LAN playback',
      'Magnet link stream-while-download',
      'Picture-in-Picture (PiP) support',
      'Smart file source management & playlists'
    ],
    videoTitle: 'Video',
    videoSubtitle: 'Professional-grade video rendering for every scenario from casual viewing to enthusiast use',
    videoFeatures: [
      { title: 'Hardware-Accelerated Decoding', desc: 'Hardware decode H.264/H.265/VP9/AV1 with minimal CPU usage' },
      { title: 'Auto HDR Adaptation', desc: 'Detects HDR10/HLG content and applies tone-mapping, accurate color reproduction even on SDR displays' },
      { title: 'Video Parameter Controls', desc: 'Real-time brightness, contrast, saturation, hue, and gamma adjustment with grayscale and rotation' },
      { title: 'Subtitle System', desc: 'Multi-track switching, external SRT/ASS/SSA/VTT support, fine-tuned delay adjustment' },
      { title: 'mpv Decoding · Metal Native Rendering', desc: 'Powered by the mpv core engine with a Metal-native render pipeline for zero-copy display, ultra-low latency, and full Apple Silicon GPU utilization' }
    ],
    audioTitle: 'Audio',
    audioSubtitle: 'High-quality audio output with fine-grained control',
    audioFeatures: [
      { title: 'Audio Track Management', desc: 'Freely switch between all embedded audio streams' },
      { title: 'Spatial Audio', desc: 'Spatial audio rendering for an immersive surround sound experience' },
      { title: 'Universal Format Support', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD and more' }
    ],
    funcTitle: 'Features',
    funcSubtitle: 'Practical tools designed around the playback experience',
    funcFeatures: [
      { title: 'File Source Management', desc: 'Add local folders as video sources with automatic scanning, indexing, and tree-view browsing' },
      { title: 'DLNA / UPnP', desc: 'Acts as a DLNA renderer to receive casting from phones and TV boxes' },
      { title: 'Magnet Link Playback', desc: 'Paste a magnet link to stream while downloading with real-time progress and speed display' },
      { title: 'Playlists', desc: 'Create and manage multiple playlists with sorting, renaming, and automatic playback history' },
      { title: 'Picture-in-Picture (PiP)', desc: 'System-level floating window for always-on-top playback while you work' }
    ],
    sysTitle: 'System Requirements & Installation',
    sysSubtitle: 'Open the downloaded DMG and drag QianPlayer into the Applications folder',
    reqTitle: 'Minimum Requirements',
    reqItems: ['macOS 15.0 (Sequoia) or later', 'Apple Silicon (M1 / M2 / M3 / M4)', '~80 MB disk space'],
    secTitle: 'Security warning on first launch?',
    secItems: ['Open System Settings → Privacy & Security', 'Scroll down to Security', 'Click "Open Anyway" for QianPlayer'],
    footerSource: 'GitHub Source',
    footerSlogan: 'QianPlayer — Free & Lightweight'
  },
  'fr': {
    htmlLang: 'fr',
    dir: 'ltr',
    title: 'QianPlayer - Lecteur vidéo macOS léger et rapide | Téléchargement gratuit',
    metaDesc: 'QianPlayer est un lecteur vidéo natif macOS léger, rapide et riche en fonctionnalités avec accélération matérielle, HDR, DLNA, liens magnet et Picture-in-Picture.',
    tagline: 'Un lecteur vidéo natif macOS léger, rapide et riche en fonctionnalités',
    downloadBtn: 'Télécharger',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · Gratuit et léger',
    screenshotTitle: 'Aperçu',
    screenshotAlt: 'Interface principale de QianPlayer',
    overviewTitle: 'Présentation',
    overviewSubtitle: 'QianPlayer est un lecteur vidéo moderne conçu pour macOS avec une interface native fluide, un décodage puissant et une expérience élégante.',
    overviewItems: [
      'Interface native, parfaitement intégrée au système',
      'Prise en charge universelle des formats',
      'Décodage accéléré par le matériel, faible utilisation CPU',
      'Détection et rendu HDR automatiques',
      'Récepteur DLNA / lecture en réseau local',
      'Streaming via lien magnet pendant le téléchargement',
      'Mode Picture-in-Picture (PiP)',
      'Gestion intelligente des sources et listes de lecture'
    ],
    videoTitle: 'Vidéo',
    videoSubtitle: 'Rendu vidéo de qualité professionnelle pour tous les usages',
    videoFeatures: [
      { title: 'Décodage accéléré par le matériel', desc: 'Décodage matériel H.264/H.265/VP9/AV1 avec utilisation CPU minimale' },
      { title: 'Adaptation HDR automatique', desc: 'Détection du contenu HDR10/HLG avec tone-mapping automatique, couleurs fidèles même sur écran SDR' },
      { title: 'Réglages vidéo', desc: 'Ajustement en temps réel de la luminosité, du contraste, de la saturation, de la teinte et du gamma' },
      { title: 'Système de sous-titres', desc: 'Changement multi-pistes, prise en charge SRT/ASS/SSA/VTT externe, ajustement fin du délai' },
      { title: 'Décodage mpv · Rendu natif Metal', desc: 'Moteur mpv avec pipeline de rendu Metal natif, affichage zéro-copie, latence ultra-faible, exploitation maximale du GPU Apple Silicon' }
    ],
    audioTitle: 'Audio',
    audioSubtitle: 'Sortie audio haute qualité avec un contrôle précis',
    audioFeatures: [
      { title: 'Gestion des pistes audio', desc: 'Sélection libre parmi tous les flux audio intégrés' },
      { title: 'Audio spatial', desc: 'Rendu audio spatial pour une expérience sonore surround immersive' },
      { title: 'Formats universels', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD et plus encore' }
    ],
    funcTitle: 'Fonctions',
    funcSubtitle: 'Outils pratiques conçus autour de l\'expérience de lecture',
    funcFeatures: [
      { title: 'Gestion des sources', desc: 'Ajout de dossiers locaux avec analyse et indexation automatiques, navigation arborescente' },
      { title: 'DLNA / UPnP', desc: 'Fonctionne comme récepteur DLNA pour la diffusion depuis téléphones et boîtiers TV' },
      { title: 'Liens magnet', desc: 'Collez un lien magnet pour lire en streaming pendant le téléchargement' },
      { title: 'Listes de lecture', desc: 'Création, gestion et tri des listes avec historique de lecture automatique' },
      { title: 'Picture-in-Picture (PiP)', desc: 'Fenêtre flottante système toujours au premier plan' }
    ],
    sysTitle: 'Configuration requise & Installation',
    sysSubtitle: 'Ouvrez le DMG téléchargé et glissez QianPlayer dans le dossier Applications',
    reqTitle: 'Configuration minimale',
    reqItems: ['macOS 15.0 (Sequoia) ou version ultérieure', 'Apple Silicon (M1 / M2 / M3 / M4)', '~80 Mo d\'espace disque'],
    secTitle: 'Avertissement de sécurité au premier lancement ?',
    secItems: ['Ouvrez Réglages Système → Confidentialité et sécurité', 'Descendez jusqu\'à Sécurité', 'Cliquez sur « Ouvrir quand même » pour QianPlayer'],
    footerSource: 'Code source GitHub',
    footerSlogan: 'QianPlayer — Gratuit et léger'
  },
  'de': {
    htmlLang: 'de',
    dir: 'ltr',
    title: 'QianPlayer - Leichtgewichtiger & schneller macOS Video-Player | Kostenloser Download',
    metaDesc: 'QianPlayer ist ein leichtgewichtiger, schneller und funktionsreicher nativer Video-Player für macOS mit Hardwarebeschleunigung, HDR, DLNA, Magnet-Links und Bild-in-Bild.',
    tagline: 'Ein leichtgewichtiger, schneller und funktionsreicher nativer Video-Player für macOS',
    downloadBtn: 'Herunterladen',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · Kostenlos & Leichtgewichtig',
    screenshotTitle: 'Vorschau',
    screenshotAlt: 'QianPlayer Hauptoberfläche',
    overviewTitle: 'Überblick',
    overviewSubtitle: 'QianPlayer ist ein moderner Video-Player für macOS mit nativer, flüssiger Oberfläche, leistungsstarker Dekodierung und elegantem Erlebnis.',
    overviewItems: [
      'Native Oberfläche, perfekt an den Systemstil angepasst',
      'Universelle Formatunterstützung',
      'Hardwarebeschleunigte Dekodierung, minimale CPU-Auslastung',
      'Automatische HDR-Erkennung und -Rendering',
      'DLNA-Empfänger / LAN-Wiedergabe',
      'Magnet-Link-Streaming während des Downloads',
      'Bild-in-Bild (PiP) Unterstützung',
      'Intelligente Dateiquellenverwaltung & Wiedergabelisten'
    ],
    videoTitle: 'Video',
    videoSubtitle: 'Professionelles Video-Rendering für jeden Anwendungsfall',
    videoFeatures: [
      { title: 'Hardwarebeschleunigte Dekodierung', desc: 'Hardware-Dekodierung von H.264/H.265/VP9/AV1 bei minimaler CPU-Auslastung' },
      { title: 'Automatische HDR-Anpassung', desc: 'Erkennung von HDR10/HLG-Inhalten mit automatischem Tone-Mapping, farbgetreue Darstellung auch auf SDR-Displays' },
      { title: 'Video-Parametersteuerung', desc: 'Echtzeit-Anpassung von Helligkeit, Kontrast, Sättigung, Farbton und Gamma' },
      { title: 'Untertitelsystem', desc: 'Mehrspurumschaltung, externe SRT/ASS/SSA/VTT-Unterstützung, Feineinstellung der Verzögerung' },
      { title: 'mpv-Dekodierung · Natives Metal-Rendering', desc: 'mpv-Kern mit nativer Metal-Render-Pipeline, Zero-Copy-Anzeige, ultraniedrige Latenz, volle Apple Silicon GPU-Nutzung' }
    ],
    audioTitle: 'Audio',
    audioSubtitle: 'Hochwertige Audioausgabe mit feiner Steuerung',
    audioFeatures: [
      { title: 'Audiospur-Verwaltung', desc: 'Freie Auswahl aller eingebetteten Audiostreams' },
      { title: 'Spatial Audio', desc: 'Räumliches Audio-Rendering für ein immersives Surround-Sound-Erlebnis' },
      { title: 'Universelle Formatunterstützung', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD und mehr' }
    ],
    funcTitle: 'Funktionen',
    funcSubtitle: 'Praktische Werkzeuge für das beste Wiedergabeerlebnis',
    funcFeatures: [
      { title: 'Dateiquellenverwaltung', desc: 'Lokale Ordner hinzufügen mit automatischem Scannen, Indexieren und Baumansicht' },
      { title: 'DLNA / UPnP', desc: 'Fungiert als DLNA-Renderer zum Empfang von Übertragungen von Smartphones und TV-Boxen' },
      { title: 'Magnet-Link-Wiedergabe', desc: 'Magnet-Link einfügen, um während des Downloads zu streamen' },
      { title: 'Wiedergabelisten', desc: 'Erstellen und Verwalten von Wiedergabelisten mit Sortierung und automatischem Verlauf' },
      { title: 'Bild-in-Bild (PiP)', desc: 'Schwebendes Systemfenster für Wiedergabe im Vordergrund' }
    ],
    sysTitle: 'Systemanforderungen & Installation',
    sysSubtitle: 'Öffnen Sie das DMG und ziehen Sie QianPlayer in den Ordner „Programme"',
    reqTitle: 'Mindestanforderungen',
    reqItems: ['macOS 15.0 (Sequoia) oder neuer', 'Apple Silicon (M1 / M2 / M3 / M4)', '~80 MB Speicherplatz'],
    secTitle: 'Sicherheitswarnung beim ersten Start?',
    secItems: ['Öffnen Sie Systemeinstellungen → Datenschutz & Sicherheit', 'Scrollen Sie zu Sicherheit', 'Klicken Sie auf „Trotzdem öffnen" für QianPlayer'],
    footerSource: 'GitHub Quellcode',
    footerSlogan: 'QianPlayer — Kostenlos & Leichtgewichtig'
  },
  'ja': {
    htmlLang: 'ja',
    dir: 'ltr',
    title: 'QianPlayer - 軽量・高速な macOS 動画プレーヤー | 無料ダウンロード',
    metaDesc: 'QianPlayer は軽量・高速・多機能な macOS ネイティブ動画プレーヤーです。ハードウェアアクセラレーション、HDR、DLNA、マグネットリンク再生、ピクチャ・イン・ピクチャに対応。',
    tagline: '軽量・高速・多機能な macOS ネイティブ動画プレーヤー',
    downloadBtn: '最新版をダウンロード',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · 無料・軽量',
    screenshotTitle: 'プレビュー',
    screenshotAlt: 'QianPlayer メイン画面',
    overviewTitle: '概要',
    overviewSubtitle: 'QianPlayer は macOS 向けに設計されたモダンな動画プレーヤーです。ネイティブで滑らかなインターフェース、強力なデコード、洗練された体験を兼ね備えています。',
    overviewItems: [
      'ネイティブ UI、システムスタイルに完全適合',
      'ユニバーサルフォーマット対応',
      'ハードウェアアクセラレーション、CPU 負荷最小',
      'HDR コンテンツの自動検出とレンダリング',
      'DLNA キャスト受信 / LAN 再生',
      'マグネットリンクでダウンロードしながら再生',
      'ピクチャ・イン・ピクチャ (PiP) 対応',
      'スマートファイルソース管理とプレイリスト'
    ],
    videoTitle: '映像',
    videoSubtitle: 'カジュアルからエンスージアストまで、あらゆるシーンに対応するプロ級映像レンダリング',
    videoFeatures: [
      { title: 'ハードウェアアクセラレーション', desc: 'H.264/H.265/VP9/AV1 をハードウェアデコード、CPU 負荷最小' },
      { title: 'HDR 自動適応', desc: 'HDR10/HLG コンテンツを検出しトーンマッピングを適用、SDR ディスプレイでも正確な色再現' },
      { title: '映像パラメータ調整', desc: '明るさ・コントラスト・彩度・色相・ガンマをリアルタイム調整、グレースケール・回転対応' },
      { title: '字幕システム', desc: 'マルチトラック切替、外部 SRT/ASS/SSA/VTT 対応、遅延微調整' },
      { title: 'mpv デコード・Metal ネイティブレンダリング', desc: 'mpv コアエンジンと Metal ネイティブパイプラインでゼロコピー表示、超低遅延、Apple Silicon GPU を最大活用' }
    ],
    audioTitle: '音声',
    audioSubtitle: '高品質オーディオ出力と精密な制御',
    audioFeatures: [
      { title: 'オーディオトラック管理', desc: '内蔵されたすべてのオーディオストリームを自由に切替' },
      { title: '空間オーディオ', desc: '空間オーディオレンダリングによる没入型サラウンド体験' },
      { title: 'ユニバーサルフォーマット対応', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD など多数対応' }
    ],
    funcTitle: '機能',
    funcSubtitle: '再生体験を中心に設計された実用ツール群',
    funcFeatures: [
      { title: 'ファイルソース管理', desc: 'ローカルフォルダを追加し自動スキャン・インデックス作成、ツリービューで閲覧' },
      { title: 'DLNA / UPnP', desc: 'DLNA レンダラーとしてスマートフォンや TV ボックスからのキャストを受信' },
      { title: 'マグネットリンク再生', desc: 'マグネットリンクを貼り付けてダウンロードしながらストリーミング再生' },
      { title: 'プレイリスト', desc: '複数のプレイリストを作成・管理・並べ替え、再生履歴を自動記録' },
      { title: 'ピクチャ・イン・ピクチャ (PiP)', desc: 'システムレベルのフローティングウィンドウで常に最前面再生' }
    ],
    sysTitle: 'システム要件 & インストール',
    sysSubtitle: 'ダウンロードした DMG を開き、QianPlayer を Applications にドラッグ',
    reqTitle: '最低要件',
    reqItems: ['macOS 15.0 (Sequoia) 以降', 'Apple Silicon (M1 / M2 / M3 / M4)', '約 80 MB のディスク空間'],
    secTitle: '初回起動時にセキュリティ警告が出た場合',
    secItems: ['システム設定 → プライバシーとセキュリティを開く', 'セキュリティまでスクロール', '「このまま開く」をクリック'],
    footerSource: 'GitHub ソースコード',
    footerSlogan: 'QianPlayer — 無料・軽量'
  },
  'es': {
    htmlLang: 'es',
    dir: 'ltr',
    title: 'QianPlayer - Reproductor de vídeo macOS ligero y rápido | Descarga gratuita',
    metaDesc: 'QianPlayer es un reproductor de vídeo nativo para macOS: ligero, rápido y repleto de funciones con aceleración por hardware, HDR, DLNA, enlaces magnet y Picture-in-Picture.',
    tagline: 'Un reproductor de vídeo nativo para macOS: ligero, rápido y repleto de funciones',
    downloadBtn: 'Descargar',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · Gratuito y ligero',
    screenshotTitle: 'Vista previa',
    screenshotAlt: 'Interfaz principal de QianPlayer',
    overviewTitle: 'Descripción general',
    overviewSubtitle: 'QianPlayer es un reproductor de vídeo moderno diseñado para macOS con interfaz nativa fluida, decodificación potente y una experiencia elegante.',
    overviewItems: [
      'Interfaz nativa, perfectamente integrada con el sistema',
      'Compatibilidad universal de formatos',
      'Decodificación acelerada por hardware, uso mínimo de CPU',
      'Detección y renderizado HDR automático',
      'Receptor DLNA / reproducción en red local',
      'Streaming mediante enlace magnet durante la descarga',
      'Compatible con Picture-in-Picture (PiP)',
      'Gestión inteligente de fuentes y listas de reproducción'
    ],
    videoTitle: 'Vídeo',
    videoSubtitle: 'Renderizado de vídeo de nivel profesional para todos los escenarios',
    videoFeatures: [
      { title: 'Decodificación acelerada por hardware', desc: 'Decodificación por hardware de H.264/H.265/VP9/AV1 con uso mínimo de CPU' },
      { title: 'Adaptación HDR automática', desc: 'Detecta contenido HDR10/HLG y aplica tone-mapping automático, colores precisos en pantallas SDR' },
      { title: 'Controles de parámetros de vídeo', desc: 'Ajuste en tiempo real de brillo, contraste, saturación, tono y gamma' },
      { title: 'Sistema de subtítulos', desc: 'Cambio entre múltiples pistas, soporte externo SRT/ASS/SSA/VTT, ajuste fino del retraso' },
      { title: 'Decodificación mpv · Renderizado nativo Metal', desc: 'Motor mpv con pipeline de renderizado Metal nativo, zero-copy, latencia ultrabaja y aprovechamiento total de la GPU Apple Silicon' }
    ],
    audioTitle: 'Audio',
    audioSubtitle: 'Salida de audio de alta calidad con control detallado',
    audioFeatures: [
      { title: 'Gestión de pistas de audio', desc: 'Selección libre entre todos los flujos de audio integrados' },
      { title: 'Audio espacial', desc: 'Renderizado de audio espacial para una experiencia envolvente inmersiva' },
      { title: 'Compatibilidad universal', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD y más' }
    ],
    funcTitle: 'Funciones',
    funcSubtitle: 'Herramientas prácticas diseñadas para la mejor experiencia de reproducción',
    funcFeatures: [
      { title: 'Gestión de fuentes de archivos', desc: 'Añade carpetas locales con escaneo e indexación automáticos y navegación en árbol' },
      { title: 'DLNA / UPnP', desc: 'Funciona como receptor DLNA para recibir transmisiones desde teléfonos y decodificadores' },
      { title: 'Enlaces magnet', desc: 'Pega un enlace magnet para reproducir mientras se descarga' },
      { title: 'Listas de reproducción', desc: 'Crea y gestiona listas con ordenación y historial automático' },
      { title: 'Picture-in-Picture (PiP)', desc: 'Ventana flotante del sistema siempre visible en primer plano' }
    ],
    sysTitle: 'Requisitos del sistema & Instalación',
    sysSubtitle: 'Abre el DMG descargado y arrastra QianPlayer a la carpeta Aplicaciones',
    reqTitle: 'Requisitos mínimos',
    reqItems: ['macOS 15.0 (Sequoia) o posterior', 'Apple Silicon (M1 / M2 / M3 / M4)', '~80 MB de espacio en disco'],
    secTitle: '¿Aviso de seguridad en el primer inicio?',
    secItems: ['Abre Ajustes del Sistema → Privacidad y seguridad', 'Desplázate hasta Seguridad', 'Haz clic en «Abrir de todos modos» para QianPlayer'],
    footerSource: 'Código fuente en GitHub',
    footerSlogan: 'QianPlayer — Gratuito y ligero'
  },
  'ar': {
    htmlLang: 'ar',
    dir: 'rtl',
    title: 'QianPlayer - مشغّل فيديو macOS خفيف وسريع | تحميل مجاني',
    metaDesc: 'QianPlayer مشغّل فيديو أصلي لنظام macOS — خفيف وسريع وغني بالميزات مع تسريع العتاد وHDR وDLNA وروابط Magnet وصورة داخل صورة.',
    tagline: 'مشغّل فيديو أصلي لنظام macOS — خفيف وسريع وغني بالميزات',
    downloadBtn: 'تحميل أحدث إصدار',
    downloadMeta: 'Apple Silicon · macOS 15.0+ · مجاني وخفيف',
    screenshotTitle: 'معاينة',
    screenshotAlt: 'واجهة QianPlayer الرئيسية',
    overviewTitle: 'نظرة عامة',
    overviewSubtitle: 'QianPlayer مشغّل فيديو حديث مصمم لنظام macOS بواجهة أصلية سلسة وقدرات فك تشفير قوية وتجربة أنيقة.',
    overviewItems: [
      'واجهة أصلية متوافقة تمامًا مع نمط النظام',
      'دعم شامل لجميع التنسيقات',
      'فك تشفير بتسريع العتاد واستهلاك شبه معدوم للمعالج',
      'اكتشاف وعرض HDR تلقائي',
      'استقبال بث DLNA / تشغيل عبر الشبكة المحلية',
      'تشغيل أثناء التحميل عبر روابط Magnet',
      'دعم صورة داخل صورة (PiP)',
      'إدارة ذكية لمصادر الملفات وقوائم التشغيل'
    ],
    videoTitle: 'الفيديو',
    videoSubtitle: 'عرض فيديو احترافي لجميع سيناريوهات الاستخدام',
    videoFeatures: [
      { title: 'فك التشفير بتسريع العتاد', desc: 'فك تشفير H.264/H.265/VP9/AV1 عبر العتاد مع استهلاك شبه معدوم للمعالج' },
      { title: 'تكيّف HDR تلقائي', desc: 'اكتشاف محتوى HDR10/HLG وتطبيق tone-mapping تلقائي، ألوان دقيقة حتى على شاشات SDR' },
      { title: 'التحكم بمعلمات الفيديو', desc: 'ضبط فوري للسطوع والتباين والتشبع ودرجة اللون وغاما' },
      { title: 'نظام الترجمة', desc: 'تبديل متعدد المسارات، دعم ملفات SRT/ASS/SSA/VTT خارجية، ضبط دقيق للتأخير' },
      { title: 'فك تشفير mpv · عرض Metal أصلي', desc: 'محرك mpv مع أنبوب عرض Metal أصلي، عرض بدون نسخ، زمن استجابة فائق الانخفاض، واستغلال كامل لـ GPU Apple Silicon' }
    ],
    audioTitle: 'الصوت',
    audioSubtitle: 'إخراج صوتي عالي الجودة مع تحكم دقيق',
    audioFeatures: [
      { title: 'إدارة مسارات الصوت', desc: 'اختيار حر من جميع مسارات الصوت المدمجة' },
      { title: 'الصوت المكاني', desc: 'عرض صوت مكاني لتجربة محيطية غامرة' },
      { title: 'دعم شامل للتنسيقات', desc: 'AAC/FLAC/Opus/DTS/AC3/TrueHD والمزيد' }
    ],
    funcTitle: 'الوظائف',
    funcSubtitle: 'أدوات عملية مصممة حول تجربة التشغيل',
    funcFeatures: [
      { title: 'إدارة مصادر الملفات', desc: 'إضافة مجلدات محلية مع فحص وفهرسة تلقائية وتصفح شجري' },
      { title: 'DLNA / UPnP', desc: 'يعمل كمستقبِل DLNA لبث الشاشة من الهواتف وأجهزة التلفزيون' },
      { title: 'روابط Magnet', desc: 'الصق رابط Magnet للتشغيل أثناء التحميل' },
      { title: 'قوائم التشغيل', desc: 'إنشاء وإدارة وترتيب القوائم مع سجل تشغيل تلقائي' },
      { title: 'صورة داخل صورة (PiP)', desc: 'نافذة عائمة على مستوى النظام تبقى دائمًا في المقدمة' }
    ],
    sysTitle: 'متطلبات النظام والتثبيت',
    sysSubtitle: 'افتح ملف DMG واسحب QianPlayer إلى مجلد التطبيقات',
    reqTitle: 'الحد الأدنى للمتطلبات',
    reqItems: ['macOS 15.0 (Sequoia) أو أحدث', 'Apple Silicon (M1 / M2 / M3 / M4)', '~80 ميغابايت مساحة قرصية'],
    secTitle: 'تحذير أمني عند التشغيل الأول؟',
    secItems: ['افتح إعدادات النظام ← الخصوصية والأمان', 'مرّر للأسفل حتى قسم الأمان', 'انقر على «فتح على أي حال» لـ QianPlayer'],
    footerSource: 'الكود المصدري على GitHub',
    footerSlogan: 'QianPlayer — مجاني وخفيف'
  }
};

function detectLanguage() {
  const langs = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
  for (const lang of langs) {
    const code = lang.toLowerCase();
    if (code.startsWith('zh-tw') || code.startsWith('zh-hant') || code === 'zh-hk' || code === 'zh-mo') return 'zh-TW';
    if (code.startsWith('zh')) return 'zh-CN';
    if (code.startsWith('ja')) return 'ja';
    if (code.startsWith('fr')) return 'fr';
    if (code.startsWith('de')) return 'de';
    if (code.startsWith('es')) return 'es';
    if (code.startsWith('ar')) return 'ar';
    if (code.startsWith('en')) return 'en';
  }
  return 'en';
}

function applyI18n() {
  const lang = detectLanguage();
  const t = i18nData[lang];
  if (!t) return;

  document.documentElement.lang = t.htmlLang;
  document.documentElement.dir = t.dir;
  document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  const sections = document.querySelectorAll('.section');
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.querySelector('.tagline').textContent = t.tagline;
    hero.querySelector('.download-btn').textContent = t.downloadBtn;
    hero.querySelector('.download-meta').textContent = t.downloadMeta;
  }

  const screenshots = document.querySelector('.screenshots');
  if (screenshots) {
    screenshots.querySelector('h2').textContent = t.screenshotTitle;
    const img = screenshots.querySelector('img');
    if (img) img.alt = t.screenshotAlt;
  }

  // Overview section (index 0)
  if (sections[0]) {
    sections[0].querySelector('h2').textContent = t.overviewTitle;
    sections[0].querySelector('.subtitle').textContent = t.overviewSubtitle;
    const items = sections[0].querySelectorAll('.overview-item p');
    t.overviewItems.forEach((text, i) => { if (items[i]) items[i].textContent = text; });
  }

  // Video section (index 1)
  if (sections[1]) {
    sections[1].querySelector('h2').textContent = t.videoTitle;
    sections[1].querySelector('.subtitle').textContent = t.videoSubtitle;
    const cards = sections[1].querySelectorAll('.feature-card');
    t.videoFeatures.forEach((f, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = f.title;
        cards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  // Audio section (index 2)
  if (sections[2]) {
    sections[2].querySelector('h2').textContent = t.audioTitle;
    sections[2].querySelector('.subtitle').textContent = t.audioSubtitle;
    const cards = sections[2].querySelectorAll('.feature-card');
    t.audioFeatures.forEach((f, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = f.title;
        cards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  // Features section (index 3)
  if (sections[3]) {
    sections[3].querySelector('h2').textContent = t.funcTitle;
    sections[3].querySelector('.subtitle').textContent = t.funcSubtitle;
    const cards = sections[3].querySelectorAll('.feature-card');
    t.funcFeatures.forEach((f, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = f.title;
        cards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  // System requirements section (index 4)
  if (sections[4]) {
    sections[4].querySelector('h2').textContent = t.sysTitle;
    sections[4].querySelector('.subtitle').textContent = t.sysSubtitle;
    const reqBoxes = sections[4].querySelectorAll('.requirements');
    if (reqBoxes[0]) {
      reqBoxes[0].querySelector('h3').textContent = t.reqTitle;
      const lis = reqBoxes[0].querySelectorAll('li');
      t.reqItems.forEach((text, i) => { if (lis[i]) lis[i].textContent = text; });
    }
    if (reqBoxes[1]) {
      reqBoxes[1].querySelector('h3').textContent = t.secTitle;
      const lis = reqBoxes[1].querySelectorAll('li');
      t.secItems.forEach((text, i) => { if (lis[i]) lis[i].textContent = text; });
    }
  }

  // Footer
  const footer = document.querySelector('footer');
  if (footer) {
    const link = footer.querySelector('a');
    if (link) link.textContent = t.footerSource;
    footer.querySelector('p').innerHTML = `<a href="https://github.com/qianplayer/qianplayer">${t.footerSource}</a> · ${t.footerSlogan}`;
  }
}

document.addEventListener('DOMContentLoaded', applyI18n);
