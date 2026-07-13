# Ubuntu Theme

Ubuntu 官方色彩体系主题，适配 OpenCode TUI，提供深色与浅色两种模式。

## Design Inspiration 设计灵感

源自 [Ubuntu Brand Colour Palette](https://design.ubuntu.com/brand/colour-palette)，以 Canonical 官方品牌色为核心：

- **Ubuntu Orange `#E95420`** — 标志性橙，用于 accent、高亮边框、标题
- **Aubergine 茄子色系** — 从深紫 `#2C001E` 到中紫 `#5E2750` 的层次递进，构成深色面板的背景层次
- **Warm Grey `#AEA79F`** — 暖灰用于柔和的 muted 文本与分隔线

整体风格偏向 2010 年代 Ubuntu 登录界面的"暖色调暗室"感觉，而非现代 GNOME 的冷灰。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
|------|----------|----------|
| **背景 / background** | Aubergine `#2C001E` | 纯白 `#FFFFFF` |
| **面板 / backgroundPanel** | `#411934` | 暖白纸 `#F6F6F5` |
| **元素 / backgroundElement** | `#56334B` | 浅暖灰 `#EEEDEB` |
| **主色 / primary** | 柔和橙 `#F4AA90` | 深橙 `#B33608` |
| **强调 / accent** | 青 `#72D1C8` | 浅茄子红 `#77216F` |
| **正文 / text** | 暖白 `#F6F6F5` | 冷灰 `#333333` |
| **代码 / syntax** | 紫、橙、青、绿的柔和色 | 对应的深色版 |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json \
  -o ~/.config/opencode/themes/ubuntu.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/ubuntu/ubuntu.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\ubuntu.json"
```

在 `tui.json` 中启用：

```json
{ "theme": "ubuntu" }
```

或在 OpenCode 中输入 `/theme` 选择 `ubuntu`。

## License

[MIT](../LICENSE)
