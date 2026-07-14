# Ubuntu Theme

基于 Canonical 官方 Ubuntu 品牌色板的 OpenCode TUI 主题，提供深色与浅色模式。

## Design Inspiration 设计方案

主题直接采用 Ubuntu 官方 Orange、Aubergine 与 Warm Grey 色阶，而不是重新调制一套近似色：

- Ubuntu Orange `#E95420`：品牌识别与活跃边框
- Dark Aubergine `#2C001E`：深色背景
- Dark Aubergine 90%/80% tint：`#411934`、`#56334B`，形成面板层级
- Orange 50% tint `#F4AA90`：深色模式的正文级强调色
- Warm Grey 10% tint `#F6F6F5`：深色正文与浅色面板
- Cool Grey `#333333`：浅色正文

精确品牌橙在部分茄子色面板上不适合作为小字号文字，因此标题与函数使用官方浅橙色阶，品牌橙保留给焦点与装饰角色。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#2C001E` | `#FFFFFF` |
| Panel | `#411934` | `#F6F6F5` |
| Element | `#56334B` | `#EEEDEB` |
| Primary | `#F4AA90` | `#B33608` |
| Active border | `#EB6536` | `#E95420` |
| Text | `#F6F6F5` | `#333333` |

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

在 OpenCode 中输入 `/theme` 并选择 `ubuntu`。

## Sources

- [Ubuntu official colour palette](https://design.ubuntu.com/brand/colour-palette)
- [Ubuntu accessibility guidance](https://design.ubuntu.com/accessibility/)
- [Canonical Vanilla color settings](https://vanillaframework.io/docs/settings/color-settings)

## License

[MIT](../LICENSE)
