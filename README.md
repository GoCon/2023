# 2023
Go Conference 2023

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## storybook

```bash
yarn storybook
```

## deploy

Auto-deploy runs when merged into main.

if GitHub secrets `ENV` is set as below, password lock is enabled.

```
NEXT_PUBLIC_AUTH_PASSWORD="password"
```
