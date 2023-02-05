![project logo](apps/web/src/assets/logo.svg)

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&&style=flat)
![TurboRepo Badge](https://img.shields.io/badge/Turborepo-EF4444?logo=turborepo&logoColor=fff&&style=flat)
![Rails Badge](https://img.shields.io/badge/Ruby%20on%20Rails-CC0000?logo=RubyonRails&logoColor=fff&&style=flat)
![Storybook Badge](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff&&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&&style=flat)
![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&&style=flat)
![pnpm Badge](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff&&style=flat)

- [About Project](#about-project-img-srchttpsemojipedia-uss3dualstackus-west-1amazonawscomthumbs240twitter322shibuyae50apng-altsauropod-styleheight1emwidth1emmargin0-005em-0-01emvertical-align-01em)
- [Quick Start](#quick-start-img-srchttpsemojipedia-uss3amazonawscomsourcemicrosoft-teams337sauropod1f995png-altsauropod-styleheight1emwidth1emmargin0-005em-0-01emvertical-align-01em)
  - [Environment](#environment)
  - [Set environment variables](#set-environment-variables)
  - [Boot development](#boot-development)

## About Project <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/shibuya_e50a.png" alt="sauropod" style="height:1em;width:1em;margin:0 0.05em 0 0.1em;vertical-align:-0.1em;"/>

CA-11 OP-E (カリオペ) は音声による画像生成を行うWebアプリケーションです。

## Quick Start <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sauropod_1f995.png" alt="sauropod" style="height:1em;width:1em;margin:0 0.05em 0 0.1em;vertical-align:-0.1em;"/>

### Environment

![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge)![Node.js Badge](https://img.shields.io/badge/>=18-000?&style=for-the-badge)

### Initial setup

```shell
cp .env.example .env.local
# RAILS_MASTER_KEYはapps/api/config/master.keyと同じ値にする
pnpm api:build
pnpm i
```

#### for Mac/Linux

```shell
chmod +x apps/api/bin/docker-entrypoint
```

### Boot development

```shell
pnpm dev #front
pnpm api #backend
```

## License

[MIT](https://mit-license.org/)
