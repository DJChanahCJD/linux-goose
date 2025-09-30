# 🐧 Linux Goose

一个闯关式学习平台，纯前端实现。
> 所有课程和题目存储在`data`目录下，欢迎贡献PR。
> 配置入口：[data/index.ts](data/index.ts)
> 图片建议直接引用URL，本地保存可上传到`public/assets`目录下，然后引用`/assets/${filename}`。

## 技术栈
- Next.js
- TypeScript
- Tailwind CSS
- Radix UI

## 快速开始
```bash
npm install
npm run dev
```

## TODO
- [ ] 支持分科目
- [ ] 支持用户登录(基于Cloudfare KV？Supabase? 和 Auth0)
- [ ] 优化题目类型，支持图片选项，单选题直接提交？统一完成后再提交？（下一题能否优化？自动下一题？）（AI PPT？总之需要优化学习体验）
- [ ] 收邮件Cloudfare的邮箱路由，发邮件可以用resend的免费API