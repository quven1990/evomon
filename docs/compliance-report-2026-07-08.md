# 合规与基础法律页面 — evomon.cc

## 1. 基本信息

- 项目：evomon.cc（Evomon Wiki）
- 域名：https://evomon.cc
- 当前阶段：04-compliance
- 日期：2026-07-08
- 状态：`[NEEDS_REVIEW]`（站点政策已落地；AdSense 尚未过审挂载；`ads.txt` publisher ID 待填；EEA 完整 CMP 未上）

## 2. 上游输入与假设

- 站点类型：静态风扇 wiki（无登录、无支付、无上传）
- 第三方：Plausible、GA4（G-HWEF9CC7Z7）、Clarity（xg9ddd1pvr）、Cloudflare Pages/CDN、邮件、计划接入 Google AdSense
- 素材：粉丝维基引用游戏精灵图等 — 需保留非官方免责声明
- 目标市场：英文全球 Roblox 玩家（含潜在 EU 访客）

## 3. 数据清单

| 类别 | 内容 | 存储方 |
|------|------|--------|
| 自动采集 | 页面浏览、基础设备/地区粗略信息 | Plausible / GA / Cloudflare |
| 会话诊断 | 热力图/回放类诊断 | Microsoft Clarity |
| 广告（计划） | Cookie、广告标识、页面上下文 | Google AdSense 等 |
| 用户提供 | 邮件正文与邮箱 | 邮箱系统 |
| URL 分享 | Team builder 编入 query，不落库 | 浏览器/链接 |

**不收集：** Roblox 账号密码、付费会员信息、游戏存档。

## 4. 第三方映射

| 服务 | Privacy 披露 | 退出方式 |
|------|--------------|----------|
| Plausible | ✅ | 浏览器拦截脚本 |
| Google Analytics | ✅ | 浏览器/Google 设置 |
| Microsoft Clarity | ✅ | 浏览器拦截 |
| Google AdSense（计划） | ✅ 已写 | Ads Settings + 区域同意 |
| Cloudflare | ✅ 托管说明 | N/A（交付必需） |
| Email | ✅ | 不再写信 |

## 5. 风险分级

- **P0：** 无（未擅自挂广告脚本、未做未授权支付）
- **P1：**
  - `ads.txt` 仍为 `REPLACE_WITH_PUBLISHER_ID` — 过审后必须替换
  - EEA/UK 个性化广告完整 CMP **未**接入（当前仅为告知型 CookieNotice）
  - Clarity 回放对青少年向游戏受众需持续克制
- **P2：** Terms/Refund 未做 Refund（无支付，合理省略）；补充 DMCA 邮箱流程可后续优化

## 6. 法律页 Route Contract

| Path | 状态 |
|------|------|
| `/privacy` | 已更新（广告+Cookie+第三方） |
| `/terms` | **新建** |
| `/cookies` | **新建** |
| `/about` | 已链到法律页 |
| Footer | Privacy / Terms / Cookies |
| sitemap | 三页已纳入 |
| `public/ads.txt` | 骨架已放 |

**Refund：** 本站无付费产品 → 不做 Refund 页（标 `[待确认]` 若以后加会员再补）。

## 7. 禁用表达（文案/SEO）

禁止或慎用：

- official / affiliated with Roblox or Evomon Devs（除非明确否定）
- 100% accurate / guaranteed working codes forever
- guaranteed income / earn with AdSense promises
- free Roblox accounts / cracks / cheats

应使用：independent fan wiki、not affiliated、codes may expire、community reported。

## 8. QA 合规验收点

- [ ] `/privacy` `/terms` `/cookies` 200 且 footer 可点
- [ ] Privacy 与真实埋点一致（三个 analytics + 计划广告）
- [ ] CookieNotice 可关闭并记住
- [ ] `https://evomon.cc/ads.txt` 可访问；过审后 publisher ID 正确
- [ ] 未在无 AdSense 审批前向用户暗示「已在展示个性化广告获利」不实陈述
- [ ] About 仍含 not affiliated

## 9. 下游交接摘要

### 当前结论
- 状态：`[NEEDS_REVIEW]`
- 一句话：合规法律页与广告披露已就绪，可申请 AdSense；挂脚本与填 `ads.txt`、EEA CMP 需 Owner 确认后执行。

### 给下游
- 前端：勿删法律页链接；挂 AdSense 时预留高度、延后加载
- SEO：法律页 priority 低，勿做主关键词落地
- Ops：AdSense 过审 → 替换 ads.txt → 可选自动广告 → 再评估 CMP

### 待确认
1. AdSense `pub-` ID  
2. 是否立即对 EEA 上完整 CMP  
3. 本次是否 push 部署  

## 10. 非法律意见声明

本文档与站点政策页仅为项目运营披露草稿，**不构成律师意见**。
