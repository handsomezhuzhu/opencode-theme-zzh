# 2077 Theme

基于 CD PROJEKT RED 游戏 UI 美术体系的 Cyberpunk 2077 风格 OpenCode 主题。

## Design Inspiration 设计方案

V2 不再采用等权重的黄、粉、青、紫、荧光绿“通用霓虹”方案，而是遵循游戏 UI Art Bible 的层级：

- UI Red `#F75049`：Neo-Militarist 系统主语气
- UI Cyan `#5EF6FF`：交互、导航与冷色高亮
- Darkest Blue `#0E0E17`：深色界面基底
- Content Grey `#D6D0D0`：主要信息
- Brand Yellow `#FCEE0A`：品牌与高价值强调
- Positive Mint `#1DED83`：成功与新增内容
- Warning Orange `#FB932E`：警告与数字
- Quest Gold `#F0B537`：字符串与代码内容

红色和青色承担日常 UI 层级，黄色只在强强调时出现，使主题更接近游戏界面而不是 Synthwave 调色板。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#0E0E17` | `#FFFFFF` |
| Panel | `#171720` | `#FFFDE7` |
| Element | `#20202B` | `#F4F1F1` |
| Primary | `#F75049` | `#98322B` |
| Secondary | `#5EF6FF` | `#006E76` |
| Accent | `#FCEE0A` | `#6A5200` |
| Text | `#D6D0D0` | `#0E0E17` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json \
  -o ~/.config/opencode/themes/2077.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/2077/2077.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\2077.json"
```

在 OpenCode 中输入 `/theme` 并选择 `2077`。

## Sources

- [Cyberpunk 2077 UI Art Bible, Part 1](https://www.behance.net/gallery/118663901/Cyberpunk-2077User-Interface-%28Part-1%29)
- [Cyberpunk 2077 UI Art Bible, Part 2](https://www.behance.net/gallery/133185623/Cyberpunk-2077User-Interface-%28Part-2%29)
- [Cyberpunk 2077 official website](https://www.cyberpunk.net/)

This is an unofficial fan theme and is not affiliated with CD PROJEKT RED.

## License

[MIT](../LICENSE)
