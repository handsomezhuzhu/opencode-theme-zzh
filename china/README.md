# China 中国风 Theme

中国传统色主题，以朱砂、鎏金、青竹、墨色为核心，深色和浅色双模式，适配 OpenCode TUI。

## Design Inspiration 设计灵感

色彩名称与来源均取自中国传统色体系（参考《中国传统色》等资料）：

- **朱砂 (Zhū Shā) `#C23531`** — 朱砂红，矿物颜料，常见于印泥、宫殿大门、春联。用作 primary 之一，代表喜庆与权威。
- **鎏金 (Liú Jīn) `#D4A537`** — 鎏金工艺的黄金色，用于佛像与装饰边框。作为 primary（暗色）与 borderActive，在深色模式中有"镀金"质感。
- **青竹 (Qīng Zhú) `#5B8C5A`** — 竹子的青绿色，代表生机与雅致。用于代码字符串、成功状态。
- **靛青 (Diàn Qīng) `#2F4554`** — 靛蓝染色后的深青色，作为 secondary 提供沉稳的东方感。
- **墨色 (Mò Sè) `#1A1A2E`** — 浓墨的深蓝黑，作为深色模式背景，比纯黑更有宣纸渗墨的韵味。
- **宣纸 (Xuān Zhǐ) `#F4EDE4`** — 宣纸米白色，作为深色模式下的文本色与浅色模式的底色，模拟古籍翻页质感。
- **黛紫 (Dài Zǐ) `#7C3A8C`** — 古代仕女画常用的暗紫色，用于语法关键字（syntaxKeyword），增添文人气。
- **翡翠绿 (Fěi Cuì Lǜ) `#5F9EA0`** — 近似翡翠的青绿色，作为 accent，在深色模式下尤其温润。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
|------|----------|----------|
| **背景 / background** | 墨色 `#1A1A2E` | 宣纸白 `#FBF6EF` |
| **面板 / backgroundPanel** | `#1E1E2F` | `#F0E8DA` |
| **元素 / backgroundElement** | `#2A2A3E` | `#E8DCCB` |
| **主色 / primary** | 鎏金 `#D4A537` | 朱砂 `#C23531` |
| **副色 / secondary** | 靛青 `#2F4554` | 靛青 `#2F4554` |
| **强调 / accent** | 翡翠绿 `#5F9EA0` | 翡翠绿 `#5F9EA0` |
| **正文 / text** | 宣纸 `#E8DCCB` | 墨灰 `#2C2C40` |
| **syntax keyword** | 黛紫 | 暗紫 `#6B2E7C` |
| **syntax function** | 鎏金 | 朱砂 |
| **syntax string** | 青竹 | 青绿 `#3E6B3E` |
| **syntax number** | 翡翠绿 | 暗青 `#1B7C80` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json \
  -o ~/.config/opencode/themes/china.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/china/china.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\china.json"
```

在 `tui.json` 中启用：

```json
{ "theme": "china" }
```

或在 OpenCode 中输入 `/theme` 选择 `china`。

## License

[MIT](../LICENSE)
