# OpenCode Theme

[OpenCode](https://opencode.ai/) TUI 主题合集。每个文件夹一个主题，支持深色和浅色模式。

| 主题 | 风格 |
| --- | --- |
| [ubuntu](ubuntu/) | Ubuntu 橙、茄子红、暖灰 |
| [fedora](fedora/) | Fedora 蓝系 |
| [2077](2077/) | 赛博朋克霓虹 |

---

## 中文 / Chinese

### 主题

#### Ubuntu

以 Ubuntu 官方橙、茄子红和暖灰为主的配色，包含深色和浅色两种模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json \
  -o ~/.config/opencode/themes/ubuntu.json
```

#### Fedora

基于 Fedora 当前蓝色调的配色，包含深色和浅色两种模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

赛博朋克 2077 风格霓虹配色，高对比深色和浅色模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

### 安装方式

OpenCode 主题从本地 JSON 文件加载，主题文件需要放到 OpenCode 主题目录中才会出现在主题选择列表里。

**全局安装（推荐）：**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json -o ~/.config/opencode/themes/2077.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
```

**仅当前项目使用：**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json -o .opencode/themes/2077.json
```

### 激活主题

**方式一：** 在 `tui.json` 中设置主题名（`ubuntu`、`fedora` 或 `2077`）：

```json
{ "theme": "ubuntu" }
```

**方式二：** 启动 OpenCode 后，输入 `/theme` 打开主题选择界面，选择对应主题即可。

### 卸载

删除对应主题文件即可：

```bash
rm ~/.config/opencode/themes/ubuntu.json
rm ~/.config/opencode/themes/fedora.json
rm ~/.config/opencode/themes/2077.json
```

---

## English

### Themes

#### Ubuntu

Ubuntu-inspired orange, aubergine, and warm grey palette with dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json \
  -o ~/.config/opencode/themes/ubuntu.json
```

#### Fedora

Fedora-inspired blue palette with carefully matched dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

Cyberpunk 2077 neon palette with high-contrast dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

### Installation

OpenCode loads themes from local JSON files. Theme files must be placed in the OpenCode themes directory to appear in the theme picker.

**Global install (recommended):**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json -o ~/.config/opencode/themes/2077.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
```

**Project-only install:**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/themes/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/themes/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/themes/2077.json -o .opencode/themes/2077.json
```

### Activate the theme

**Option A:** Set the theme name in `tui.json` (`ubuntu`, `fedora`, or `2077`):

```json
{ "theme": "ubuntu" }
```

**Option B:** Start OpenCode, type `/theme`, and select your preferred theme from the list.

### Uninstall

Remove the theme files:

```bash
rm ~/.config/opencode/themes/ubuntu.json
rm ~/.config/opencode/themes/fedora.json
rm ~/.config/opencode/themes/2077.json
```

---

## Repository Structure

```
opencode-theme-zzh/
├── ubuntu/
│   ├── themes/ubuntu.json
│   ├── scripts/validate.mjs
│   └── package.json
├── fedora/
│   ├── themes/fedora.json
│   ├── scripts/validate.mjs
│   └── package.json
├── 2077/
│   ├── themes/2077.json
│   ├── scripts/validate.mjs
│   └── package.json
├── README.md
├── LICENSE
└── .gitignore
```

## Development

Each theme folder includes a validation script:

```bash
cd ubuntu
npm test

cd fedora
npm test

cd 2077
npm test
```

## Credits

- **Ubuntu** theme inspired by [Ubuntu colour palette](https://design.ubuntu.com/brand/colour-palette). Not affiliated with Canonical Ltd.
- **Fedora** theme inspired by Fedora website and logo assets. Not affiliated with the Fedora Project or Red Hat.
- **2077** theme inspired by the visual style of *Cyberpunk 2077*. Not affiliated with CD Projekt Red.

## License

[MIT](LICENSE)
