# Fedora Theme

基于 Fedora Project 官方品牌色与 Four Foundations 辅助色的 OpenCode TUI 主题。

## Design Inspiration 设计方案

主题以三种官方 Fedora 蓝为骨架：

- New Fedora Blue `#51A2DA`
- Fedora Blue `#3C6EB4`
- Dark Fedora Blue `#294172`

V2 引入 Fedora 官方 Four Foundations 配色，替代原先偏通用的粉彩辅助色：

- Freedom Purple `#A07CBC`
- Friends Magenta `#DB3279`
- Features Orange `#E59728`
- First Green `#79DB32`

深色语法高亮使用这些官方颜色的发布浅色变体，例如 `#CFBDDD`、`#ED97BB`、`#F2CA92` 和 `#BBED97`，既保留 Fedora 身份，又能在深蓝面板上满足正文对比度。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#07111C` | `#FFFFFF` |
| Panel | `#0D1B2A` | `#F4F8FB` |
| Element | `#14263A` | `#E8EFF8` |
| Primary | `#51A2DA` | `#294172` |
| Secondary | `#CFBDDD` | `#7048A8` |
| Text | `#E8EFF8` | `#1D252E` |
| Muted text | `#8FAED9` | `#4C4C4C` |

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

在 OpenCode 中输入 `/theme` 并选择 `fedora`。

## Sources

- [Fedora Brand Guidelines](https://docs.fedoraproject.org/en-US/project/brand/)
- [Fedora Brand Book source](https://gitlab.com/fedora/design/team/logos/fedora-brand-book-website/-/blob/main/fedora-brand-book-webpage.adoc)
- [Fedora official color variants](https://gitlab.com/fedora/design/team/logos/fedora-brand-book-website/-/raw/main/images/different-variants.png)

## License

[MIT](../LICENSE)
