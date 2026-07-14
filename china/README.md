# China 故宫红金 Theme

以中性背景承载故宫宫墙朱红、琉璃瓦金黄和暖象牙白点缀的 OpenCode TUI 主题。

## Design Inspiration 设计方案

主题从故宫建筑而不是泛化的“传统色大全”出发：

- Palace Red `#9D2933`：浅色模式主色，接近宫墙与门窗的沉稳朱红
- Vermilion `#C23531`：标准朱红锚点
- Imperial Gold `#F2C14E`：深色模式主色、标题、函数和活跃边框
- Glazed Gold `#FFD166`：模拟阳光下的黄色琉璃瓦
- Warm charcoal `#171513` / `#211E1B` / `#2C2723`：不抢主题色的暖黑背景
- Warm Ivory `#F4E9D7` / `#FBF7F0`：汉白玉、宣纸和暖色日光
- Jade Green、Glazed Blue：只作为少量成功与信息色，不抢红金主体

宫墙红与琉璃金只用于标题、关键字、函数、焦点和边框点缀；背景保持暖黑或象牙白，避免大面积红色带来的压迫感。

## Color Scheme 配色方案

| 角色 | 深色模式 | 浅色模式 |
| --- | --- | --- |
| Background | `#171513` | `#FBF7F0` |
| Panel | `#211E1B` | `#F4EDE2` |
| Element | `#2C2723` | `#EAE0D2` |
| Primary | `#F2C14E` | `#9D2933` |
| Secondary | `#FF8A80` | `#7A5200` |
| Accent | `#FFD166` | `#A3362F` |
| Text | `#F4E9D7` | `#2A1715` |

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

- [故宫博物院：朱砂](https://www.dpm.org.cn/lemmas/245199.html)
- [故宫博物院：王希孟千里江山图卷](https://www.dpm.org.cn/collection/paint/228354.html)

## License

[MIT](../LICENSE)
