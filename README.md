# Go Conference 2023

Static generated site for [Go Conference 2023](https://gocon.jp/2023).

## Getting Started

### 0. Clone this repository

```zsh
git clone git@github.com:GoCon/2023.git
```

```zsh
cd 2023
```

### 1. Install Node.js

Install Node.js specified version with [`.node-version`](./.node-version).

### 2. Enable to use yarn v1

```zsh
corepack enable yarn
```

or

```zsh
npm install -g yarn
```

### 3. Install dependencies

```zsh
yarn install
```

### 4. Run the development server

#### 4.1 Next.js

Run the script to check entire of the application.

```zsh
yarn dev
```

Open [http://localhost:3000/2023](http://localhost:3000/2023) with your browser to see the application.

#### 4.2 Storybook

Run the script to check each component.

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the components catalog.

## Deploy

Auto-deploy runs when merged into main.

if GitHub secrets `ENV` is set as below, password lock is enabled.

```
NEXT_PUBLIC_AUTH_PASSWORD="password"
```
