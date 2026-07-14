# Ubuntu Theme

突出 Ubuntu 官方橙与 Aubergine 茄子色的 OpenCode TUI 主题。

## Design Inspiration 设计方案

这套主题不追求把品牌橙调整成普通的高对比文本色，而是让 Ubuntu 的视觉身份直接出现在界面中：

- Ubuntu Orange `#E95420`：主色、标题、函数、列表标记和焦点边框
- Dark Aubergine `#2C001E`：深色背景
- Aubergine tint `#411934` / `#56334B`：面板和控件层级
- Light Aubergine `#77216F`、Mid Aubergine `#5E2750`：副色与浅色模式强调
- Warm Grey `#F6F6F5` / `#EEEDEB`：浅色界面与深色正文

深色模式采用经典 Ubuntu 登录界面的“橙色灯光照在茄子色背景上”的感觉；浅色模式则保留白底、暖灰和醒目的官方橙。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#2C001E` | `#FFFFFF` |
| Panel | `#411934` | `#F6F6F5` |
| Element | `#56334B` | `#EEEDEB` |
| Primary | `#E95420` | `#E95420` |
| Secondary | `#CFB1CC` | `#5E2750` |
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

## Source

- [Ubuntu official colour palette](https://design.ubuntu.com/brand/colour-palette)

## License

[MIT](../LICENSE)
