# OpenCode Theme

[OpenCode](https://opencode.ai/) TUI 主题合集。每个文件夹一个主题，支持深色和浅色模式。

| 主题 | 风格 |
| --- | --- |
| [ubuntu](ubuntu/) | Ubuntu 橙、茄子红、暖灰 |
| [fedora](fedora/) | Fedora 蓝与 Four Foundations 官方色 |
| [2077](2077/) | 军用红、冷青、品牌黄 |
| [china](china/) | 石青、石绿、明黄、米白 |
| [claude-code](claude-code/) | Anthropic 陶土橙、暖黑、米白 |

---

## 中文 / Chinese

### 主题

#### Ubuntu

以 Ubuntu 官方橙、茄子红和暖灰为主的配色，包含深色和浅色两种模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json \
  -o ~/.config/opencode/themes/ubuntu.json
```

#### 中国风 (China)

朱砂红、鎏金、青竹绿、墨色、宣纸白，传统色彩与现代终端相结合。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json \
  -o ~/.config/opencode/themes/china.json
```

#### Claude Code

基于 Anthropic 官方 Clay、Slate、Ivory 与 Cloud 色板的暖色终端主题。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json \
  -o ~/.config/opencode/themes/claude-code.json
```

#### Fedora

基于 Fedora 当前蓝色调的配色，包含深色和浅色两种模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

赛博朋克 2077 风格霓虹配色，高对比深色和浅色模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

### 安装方式

OpenCode 主题从本地 JSON 文件加载，主题文件需要放到 OpenCode 主题目录中才会出现在主题选择列表里。

**全局安装（推荐）：**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o ~/.config/opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o ~/.config/opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o ~/.config/opencode/themes/claude-code.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\china.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\claude-code.json"
```

**仅当前项目使用：**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o .opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o .opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o .opencode/themes/claude-code.json
```

### 激活主题

**方式一：** 在 `tui.json` 中设置主题名（`ubuntu`、`fedora`、`2077`、`china` 或 `claude-code`）：

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
rm ~/.config/opencode/themes/china.json
rm ~/.config/opencode/themes/claude-code.json
```

---

## English

### Themes

#### Ubuntu

Ubuntu-inspired orange, aubergine, and warm grey palette with dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json \
  -o ~/.config/opencode/themes/ubuntu.json
```

#### China

Traditional Chinese color palette: Zhu Sha red (朱砂), Liu Jin gold (鎏金), Qing Zhu green (青竹), Mo Se ink (墨色) with rice paper white background.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json \
  -o ~/.config/opencode/themes/china.json
```

#### Claude Code

Warm terminal palette based on Anthropic's official Clay, Slate, Ivory, and Cloud swatches.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json \
  -o ~/.config/opencode/themes/claude-code.json
```

#### Fedora

Fedora-inspired blue palette with carefully matched dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

Cyberpunk 2077 neon palette with high-contrast dark and light variants.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

### Installation

OpenCode loads themes from local JSON files. Theme files must be placed in the OpenCode themes directory to appear in the theme picker.

**Global install (recommended):**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o ~/.config/opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o ~/.config/opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o ~/.config/opencode/themes/claude-code.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\china.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\claude-code.json"
```

**Project-only install:**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o .opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o .opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o .opencode/themes/claude-code.json
```

### Activate the theme

**Option A:** Set the theme name in `tui.json` (`ubuntu`, `fedora`, `2077`, `china`, or `claude-code`):

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
rm ~/.config/opencode/themes/china.json
rm ~/.config/opencode/themes/claude-code.json
```

---

## Repository Structure

```
opencode-theme-zzh/
├── ubuntu/
│   ├── ubuntu.json
│   └── README.md
├── fedora/
│   ├── fedora.json
│   └── README.md
├── 2077/
│   ├── 2077.json
│   └── README.md
├── china/
│   ├── china.json
│   └── README.md
├── claude-code/
│   ├── claude-code.json
│   └── README.md
├── README.md
├── LICENSE
└── .gitignore
```

## Credits

- **Ubuntu** theme inspired by [Ubuntu colour palette](https://design.ubuntu.com/brand/colour-palette).
- **Fedora** theme inspired by Fedora website and logo assets.
- **2077** theme inspired by the visual style of *Cyberpunk 2077*.
- **China** theme inspired by traditional Chinese painting, porcelain, and classical color names.
- **Claude Code** theme based on Anthropic's official web brand swatches.

## License

[MIT](LICENSE)
