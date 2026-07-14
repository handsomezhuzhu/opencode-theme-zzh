# Claude Code Theme

基于 Anthropic 官方网站与 Claude Code 产品页当前品牌色板的 OpenCode TUI 主题。

## Design Inspiration 设计方案

官方网页 CSS 提供了一套明确的自然材料色板：

- Claude Clay `#D97757`：Claude 最具识别度的陶土橙
- Slate Dark `#141413`：暖黑色背景与品牌正文
- Ivory Medium `#F0EEE6`：暖米白背景与深色正文
- Cloud `#87867F` / `#B0AEA5` / `#D1CFC5`：边框、次级文字和层级
- Fig `#C46686`：紫红辅助色
- Heather `#CBCADB`：冷紫灰信息色
- Kraft `#D4A27F`：暖棕强调色
- Olive `#788C5D`：成功与新增内容

深色模式直接使用官方 Clay、Slate、Ivory 与 Cloud。亮色模式中的陶土橙、Fig、Olive 等前景色经过加深，以保证在 Ivory 和白色背景上的正文对比度。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#141413` | `#F0EEE6` |
| Panel | `#222220` | `#FFFFFF` |
| Element | `#292927` | `#E8E6DC` |
| Primary | `#D97757` | `#A7472A` |
| Secondary | `#D990AA` | `#8A3858` |
| Accent | `#D4A27F` | `#7D573B` |
| Text | `#F0EEE6` | `#141413` |
| Muted text | `#B0AEA5` | `#5E5D59` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json \
  -o ~/.config/opencode/themes/claude-code.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/claude-code/claude-code.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\claude-code.json"
```

在 OpenCode 中输入 `/theme` 并选择 `claude-code`。

## Sources

- [Anthropic official website](https://www.anthropic.com/)
- [Claude Code official product page](https://claude.com/product/claude-code)
- [Claude Code documentation](https://code.claude.com/docs/en/overview)

This is an unofficial community theme and is not affiliated with Anthropic.

## License

[MIT](../LICENSE)
