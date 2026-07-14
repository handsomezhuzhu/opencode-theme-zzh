# China 中国风 Theme

以中国国家标准传统色色名、故宫矿物颜料研究和青绿山水为依据的 OpenCode TUI 主题。

## Design Inspiration 设计方案

V2 以现行国家标准 `GB/T 31430-2015 中国传统色色名及色度特性` 为色彩锚点，并参考故宫博物院对石青、石绿、朱砂和《千里江山图》的研究。

标准发布的是 D65 条件下的色度坐标，不直接提供 HEX。下列数值是用于屏幕显示的 sRGB 近似值，不声称是唯一的“历史真实色”：

- 朱 `#C03530`
- 明黄 `#F9BA2C`
- 杏黄 `#FF954B`
- 石青 `#63BBC8`
- 石绿 `#74BC9C`
- 紫 `#605D9D`
- 藏蓝 `#1C4A5C`
- 米白 `#E9E3D4`

主题采用青绿山水的“石青、石绿、米白、藏蓝”作为主体，朱与明黄只承担错误、警告和强调角色，避免把互不相关的传统色名称拼成一套泛中国风色板。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#171B24` | `#F6F1E8` |
| Panel | `#202731` | `#EDE6D9` |
| Element | `#29333D` | `#E4DDCF` |
| Primary / 石青 | `#63BBC8` | `#205F73` |
| Secondary / 紫 | `#AAA2DE` | `#56508A` |
| Accent / 明黄 | `#F9BA2C` | `#765607` |
| Success / 石绿 | `#74BC9C` | `#2C684C` |
| Text / 米白墨色 | `#E9E3D4` | `#35322E` |

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

在 OpenCode 中输入 `/theme` 并选择 `china`。

## Sources

- [GB/T 31430-2015 中国传统色色名及色度特性](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=6EE6FE2D911C427227830938D027D447)
- [故宫博物院：朱砂](https://www.dpm.org.cn/lemmas/245199.html)
- [故宫博物院：王希孟千里江山图卷](https://www.dpm.org.cn/collection/paint/228354.html)
- [故宫博物院院刊：传统矿物颜料石青色度研究](https://www.dpm.org.cn/journal/255394.html)

## License

[MIT](../LICENSE)
