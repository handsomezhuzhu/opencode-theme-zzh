# Transparent 2077 Theme

在 2077 霓虹配色基础上，将主界面背景设为透明，让宿主终端背景透出来。配色与 [2077](../2077/) 完全一致，仅替换背景相关字段。

## Design Inspiration 设计方案

沿用 2077 的品牌黄、霓虹青和危险粉红，背景改为透明：

- Neon Yellow `#FCEE0A`：主色、标题、类型和列表标记
- Neon Pink `#FF003C`：副色、关键字和强强调
- Neon Cyan `#00F0FF`：链接、函数、操作符和焦点边框
- Neon Purple `#BD00FF`：数字、diff hunk 和斜体
- Neon Green `#39FF14`：霓虹辅助色；语义成功使用更柔和的绿色
- Background：`transparent`，主界面、面板、元素均不铺底色
- Menu：`#08080C20`（深色）/ `#F5F5FA20`（浅色），菜单保留一层极轻托底

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `transparent` | `transparent` |
| Panel | `transparent` | `transparent` |
| Element | `transparent` | `transparent` |
| Menu | `#08080C20` | `#F5F5FA20` |
| Primary | `#FCEE0A` | `#7A5C00` |
| Secondary | `#FF003C` | `#B82E5A` |
| Accent | `#00F0FF` | `#176A8C` |
| Number / Purple | `#BD00FF` | `#7A1FA2` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json \
  -o ~/.config/opencode/themes/transparent-2077.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/transparent-2077/transparent-2077.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\transparent-2077.json"
```

在 OpenCode 中输入 `/theme` 并选择 `transparent-2077`。

## 注意事项

- 透明背景需要宿主终端本身支持透明 / 玻璃效果（如 Windows Terminal 丙烯背景、macOS 终端模糊背景等）才能看到效果。
- 本主题只负责让 OpenCode 不主动铺底色，无法改变宿主终端自身的背景。
- 如果界面下方仍然发黑，通常是宿主终端默认黑底导致，可在终端设置中调整背景透明度。

## Source

- 透明实现参考 [hongyue0721/opencode_transparent_theme](https://github.com/hongyue0721/opencode_transparent_theme)
- 配色来源 [2077 主题](../2077/)
- [Cyberpunk 2077 official website](https://www.cyberpunk.net/)

This is an unofficial fan theme and is not affiliated with CD PROJEKT RED.

## License

[MIT](../LICENSE)
