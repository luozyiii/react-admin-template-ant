## 使用 standard 配置
### `npm install eslint --save-dev` or `yarn add eslint -D`

### 配置
`eslint --init`

? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-standard@latest

### 问题
1. 通过import 引入的 'React' is defined but never used.  

.eslintrc.js rulus 增加  
`'no-unused-vars': 'off',`

2. Parsing error: Unexpected token =   
原因：开发环境与ESLint当前的解析功能不兼容  

`yarn add babel-eslint -D`
