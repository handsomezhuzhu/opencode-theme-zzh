# WeChat Dark Theme

基于腾讯微信官方 WeUI 暗色令牌的 OpenCode TUI 主题。

## Design Inspiration 设计方案

背景和语义色直接采用 WeUI v2.6.26 官方暗色变量：

- Page background `#111111`
- Panel / cell / dialog `#191919`
- Interactive element `#2C2C2C`
- WeChat Brand `#07C160`
- Error `#FA5151`
- Warning `#CC9C00`
- Information `#10AEFF`
- Link `#7D90A9`

WeUI 的文字和分隔线使用半透明白色。OpenCode 主题格式只接受不透明颜色，因此本主题把这些官方透明度叠加到 `#111111` 后得到：

- Primary text `#CFCFCF`：官方白色 80%
- Muted text `#888888`：官方白色 50%
- Border `#646464`：Care Dark 白色 35%
- Subtle border `#353535`：官方白色 15%

这是固定暗色主题，OpenCode 处于 light 或 dark 外观时都使用同一套颜色。

## Color Scheme 配色方案

| 角色 | 颜色 |
| --- | --- |
| Background | `#111111` |
| Panel | `#191919` |
| Element | `#2C2C2C` |
| Primary / Success | `#07C160` |
| Text | `#CFCFCF` |
| Muted text | `#888888` |
| Error | `#FA5151` |
| Info | `#10AEFF` |

## Install

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json \
  -o ~/.config/opencode/themes/wechat.json
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\themes"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/handsomezhuzhu/opencode-theme-zzh/main/wechat/wechat.json" `
  -OutFile "$env:USERPROFILE\.config\opencode\themes\wechat.json"
```

在 OpenCode 中输入 `/theme` 并选择 `wechat`。

## Sources

- [Tencent WeUI](https://github.com/Tencent/weui)
- [WeUI v2.6.26 dark tokens](https://github.com/Tencent/weui/blob/560e2e571a3fa2a7173a21638dd9811de80eb410/src/style/base/theme/less-vars/dark.less)
- [WeChat Mini Program DarkMode guide](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)

This is an unofficial community theme and is not affiliated with Tencent or WeChat.

## License

[MIT](../LICENSE)
