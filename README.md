# React + TypeScript + Vite + ESLint + Prettier + VSCode

This template provides a minimal setup to get React working in Vite with HMR and some ESLint and Prettier rules.

## Install

```bash
$> pnpm install
```

<details>
<summary>Lint and format</summary>

### Install prettier and eslint extensions

- Go to the extensions section of VSCode
- Select **_recommended_** extensions
- Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Add settings

- In your settings add the `editor.defaultFormatter` and `editor.formatOnSave` properties.
- Additionally you

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

</details>

## Start project

In the project directory, you can run:

```bash
$> pnpm start
```

