# 2077 Theme

高饱和 Cyberpunk 2077 风格主题，以官方品牌黄、霓虹青和危险粉红为核心。

## Design Inspiration 设计方案

主题重点是第一眼就能认出 2077，而不是复刻一套克制的企业 UI：

- Neon Yellow `#FCEE0A`：主色、标题、类型和列表标记
- Neon Pink `#FF003C`：副色、关键字和强强调
- Neon Cyan `#00F0FF`：链接、函数、操作符和焦点边框
- Neon Purple `#BD00FF`：数字、diff hunk 和斜体
- Neon Green `#39FF14`：霓虹辅助色；语义成功使用更柔和的绿色
- Dark Base `#08080C`：近黑冷色背景

黄色、粉色和青色有意以较高频率同时出现，形成夜之城广告牌和 HUD 的强烈视觉冲击。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#08080C` | `#F5F5FA` |
| Panel | `#10101A` | `#EAEAF2` |
| Element | `#181826` | `#E0E0EA` |
| Primary | `#FCEE0A` | `#7A5C00` |
| Secondary | `#FF003C` | `#B82E5A` |
| Accent | `#00F0FF` | `#176A8C` |
| Number / Purple | `#BD00FF` | `#7A1FA2` |

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

## Source

- [Cyberpunk 2077 official website](https://www.cyberpunk.net/)

This is an unofficial fan theme and is not affiliated with CD PROJEKT RED.

## License

[MIT](../LICENSE)
