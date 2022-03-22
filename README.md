# eslint-config-react-recommended-ts

一个包含 prettier，eslint 的 react typescript 配置文件合集, 全部启用推荐配置。

```
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ]
```

eslint-config-react-recommended-ts 中关闭的配置和一些额外配置

```
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/no-explicit-any': 0,
  'react/display-name': 0,
  'react/prop-types': 0,
  'no-empty': [1, { allowEmptyCatch: true }],

  'react/self-closing-comp': 2,
  'react/jsx-boolean-value': 2,
  'no-debugger': 2,
```

## 安装

```bash
npm i eslint-config-react-recommended-ts --save-dev
yarn add eslint-config-react-recommended-ts -D
```

## 使用

`.eslintrc.js`

```js
module.exports = {
  extends: ['react-recommended-ts'],

  rules: {
    // your rules
  },
};
```

```

- 安装 Eslint 插件

- 保存代码即可修复错误和格式化代码

## FAQ

- 代码检查或者保存代码时格式化未生效
  - 是否安装 `prettier` 
  - vs code 的 EsLint 插件版本 >= 2.2.0
  - 安装依赖配置完成之后，重启 vscode
  - 检查 EsLint 插件配置是否开启 `source.fixAll.eslint": true`
