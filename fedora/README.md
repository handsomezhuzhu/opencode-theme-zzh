# Fedora Theme

Fedora 品牌蓝色调主题，适配 OpenCode TUI，提供深色与浅色两种模式。

## Design Inspiration 设计灵感

灵感取自 [Fedora Project](https://getfedora.org/) 的视觉形象，以 Fedora 蓝系为核心：

- **Fedora Blue `#3C6EB4`** — 品牌正蓝，用于边框和中强强调
- **Fedora New Blue `#51A2DA`** — 较明亮的浅蓝，用于高亮、活跃元素
- **Fedora Dark Blue `#294172`** — 深蓝作为 secondary 的基调

深色模式采用极深海蓝 `#07111C` 为底，比纯黑更有呼吸感；浅色模式以蓝白为主，清爽干净。

语法高亮部分额外引入紫、粉、金、青等辅助色，在保持蓝色调统一的前提下，让长时间阅读代码时仍有良好的色彩区分。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
|------|----------|----------|
| **背景 / background** | 深海蓝 `#07111C` | 纯白 `#FFFFFF` |
| **面板 / backgroundPanel** | `#0D1B2A` | 浅蓝白 `#F4F8FB` |
| **元素 / backgroundElement** | `#14263A` | 淡蓝 `#E8F1F7` |
| **主色 / primary** | Fedora New Blue `#51A2DA` | 深蓝 `#35639F` |
| **边框 / border** | Fedora Blue `#3C6EB4` | `#7895AA` |
| **正文 / text** | 浅蓝白 `#EAF4FB` | 深蓝灰 `#182A3A` |
| **accent / 强调** | 天蓝 `#8DD7F7` | 亮蓝 `#0071B9` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json \
  -o ~/.config/opencode/themes/fedora.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/fedora/fedora.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\fedora.json"
```

在 `tui.json` 中启用：

```json
{ "theme": "fedora" }
```

或在 OpenCode 中输入 `/theme` 选择 `fedora`。

## License

[MIT](../LICENSE)
