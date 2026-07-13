# 2077 Theme

赛博朋克 2077 风格霓虹主题，高对比度配色，适配 OpenCode TUI。

## Design Inspiration 设计灵感

灵感来自游戏 *Cyberpunk 2077* 的 UI 风格：夜之城的霓虹招牌、HUD 界面、故障艺术。

核心设计原则：

- **霓虹色主导** — 高饱和度的黄、粉、青、紫、绿，在纯黑背景上像发光字体
- **近黑背景** — `#08080C` 比纯黑稍偏冷，增加空间感
- **角色分工明确**：
  - **Neon Yellow `#FCEE0A`** — 主色（primary）、警告、标题，像老式 CRT 屏的黄色
  - **Neon Pink `#FF003C`** — 副色、关键字、强强调，像广告招牌的粉红灯光
  - **Neon Cyan `#00F0FF`** — 强调色、函数名、链接，经典霓虹蓝
  - **Neon Purple `#BD00FF`** — 数字、斜体，神秘感
  - **Neon Green `#39FF14`** — 字符串、成功状态，Matrix 般的荧光绿

浅色模式是"日间"霓虹版：同样的色相但降低饱和度、提高可读性，避免刺眼。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
|------|----------|----------|
| **背景 / background** | 纯黑蓝 `#08080C` | 浅紫灰 `#F5F5FA` |
| **面板 / backgroundPanel** | `#10101A` | `#EAEAF2` |
| **主色 / primary** | Neon Yellow `#FCEE0A` | 暗黄 `#7A5C00` |
| **副色 / secondary** | Neon Pink `#FF003C` | 暗粉 `#B82E5A` |
| **强调 / accent** | Neon Cyan `#00F0FF` | 暗青蓝 `#176A8C` |
| **语法 keyword** | Neon Pink | 暗粉 |
| **语法 function** | Neon Cyan | 暗青蓝 |
| **syntax number** | Neon Purple | 暗紫 |

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

在 `tui.json` 中启用：

```json
{ "theme": "2077" }
```

或在 OpenCode 中输入 `/theme` 选择 `2077`。

## License

[MIT](../LICENSE)
