# OpenCode Theme

[OpenCode](https://opencode.ai/) TUI 主题合集。每个文件夹一个主题，支持深色和浅色模式。除强调霓虹氛围的 2077 外，主题均使用中性背景，让品牌色只承担点缀与交互角色。

| 主题 | 风格 |
| --- | --- |
| [ubuntu](ubuntu/) | Ubuntu 橙、茄子红、暖灰 |
| [fedora](fedora/) | Fedora 蓝与 Four Foundations 官方色 |
| [2077](2077/) | 品牌黄、霓虹青、危险粉 |
| [transparent-2077](transparent-2077/) | 2077 霓虹配色 + 透明背景 |
| [china](china/) | 故宫红、琉璃金、暖象牙 |
| [claude-code](claude-code/) | Anthropic 陶土橙、暖黑、米白 |
| [wechat](wechat/) | WeUI 官方暗色、微信绿 |

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

以故宫宫墙朱红、黄色琉璃瓦和暖象牙白构成红金主题。

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

基于 Fedora 官方蓝色与 Four Foundations 紫、粉、橙、绿色板，包含深色和浅色模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

以 Cyberpunk 2077 品牌黄、霓虹青和危险粉构成高饱和深浅色模式。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

#### 透明 2077 (Transparent 2077)

在 2077 霓虹配色基础上将背景设为透明，让宿主终端背景透出，配色与 2077 完全一致。透明效果需宿主终端支持。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json \
  -o ~/.config/opencode/themes/transparent-2077.json
```

#### WeChat Dark

基于腾讯 WeUI 官方暗色令牌的固定暗色主题，使用 `#111111` 背景与 `#07C160` 微信绿。

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json \
  -o ~/.config/opencode/themes/wechat.json
```

### 安装方式

OpenCode 主题从本地 JSON 文件加载，主题文件需要放到 OpenCode 主题目录中才会出现在主题选择列表里。

**全局安装（推荐）：**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o ~/.config/opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json -o ~/.config/opencode/themes/transparent-2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o ~/.config/opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o ~/.config/opencode/themes/claude-code.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json -o ~/.config/opencode/themes/wechat.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\transparent-2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\china.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\claude-code.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\wechat.json"
```

**仅当前项目使用：**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o .opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json -o .opencode/themes/transparent-2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o .opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o .opencode/themes/claude-code.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json -o .opencode/themes/wechat.json
```

### 激活主题

**方式一：** 在 `tui.json` 中设置主题名（`ubuntu`、`fedora`、`2077`、`transparent-2077`、`china`、`claude-code` 或 `wechat`）：

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
rm ~/.config/opencode/themes/transparent-2077.json
rm ~/.config/opencode/themes/china.json
rm ~/.config/opencode/themes/claude-code.json
rm ~/.config/opencode/themes/wechat.json
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

Forbidden City-inspired red-and-gold palette based on vermilion walls, yellow glazed tiles, and warm ivory stone.

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

Fedora palette combining the official blues with the Four Foundations purple, magenta, orange, and green.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

#### 2077

High-saturation Cyberpunk 2077 palette centered on brand yellow, neon cyan, and danger pink.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

#### Transparent 2077

Transparent-background variant of the 2077 neon palette. Backgrounds are set to `transparent` so the host terminal shows through; all colors match 2077. Requires a terminal that supports transparency.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json \
  -o ~/.config/opencode/themes/transparent-2077.json
```

#### WeChat Dark

Fixed dark theme based on Tencent WeUI's official dark tokens: `#111111` surfaces and WeChat Green `#07C160`.

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json \
  -o ~/.config/opencode/themes/wechat.json
```

### Installation

OpenCode loads themes from local JSON files. Theme files must be placed in the OpenCode themes directory to appear in the theme picker.

**Global install (recommended):**

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o ~/.config/opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o ~/.config/opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o ~/.config/opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json -o ~/.config/opencode/themes/transparent-2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o ~/.config/opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o ~/.config/opencode/themes/claude-code.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json -o ~/.config/opencode/themes/wechat.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\transparent-2077.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\china.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\claude-code.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json" -OutFile "$env:USERPROFILE\.config\opencode\themes\wechat.json"
```

**Project-only install:**

```bash
mkdir -p .opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json -o .opencode/themes/ubuntu.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json -o .opencode/themes/fedora.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json -o .opencode/themes/2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json -o .opencode/themes/transparent-2077.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json -o .opencode/themes/china.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json -o .opencode/themes/claude-code.json
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json -o .opencode/themes/wechat.json
```

### Activate the theme

**Option A:** Set the theme name in `tui.json` (`ubuntu`, `fedora`, `2077`, `transparent-2077`, `china`, `claude-code`, or `wechat`):

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
rm ~/.config/opencode/themes/transparent-2077.json
rm ~/.config/opencode/themes/china.json
rm ~/.config/opencode/themes/claude-code.json
rm ~/.config/opencode/themes/wechat.json
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
├── transparent-2077/
│   ├── transparent-2077.json
│   └── README.md
├── china/
│   ├── china.json
│   └── README.md
├── claude-code/
│   ├── claude-code.json
│   └── README.md
├── wechat/
│   ├── wechat.json
│   └── README.md
├── README.md
├── LICENSE
└── .gitignore
```

## Credits

- **Ubuntu** theme inspired by [Ubuntu colour palette](https://design.ubuntu.com/brand/colour-palette).
- **Fedora** theme based on the Fedora Project Brand Book and official color variants.
- **2077** theme inspired by Cyberpunk 2077 branding and neon HUD visuals.
- **Transparent 2077** theme based on 2077 colors with transparent backgrounds, referencing [hongyue0721/opencode_transparent_theme](https://github.com/hongyue0721/opencode_transparent_theme).
- **China** theme inspired by the Forbidden City's vermilion walls and yellow glazed roofs.
- **Claude Code** theme based on Anthropic's official web brand swatches.
- **WeChat Dark** theme based on Tencent WeUI official dark tokens.

## License

[MIT](LICENSE)
