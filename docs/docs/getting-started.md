---
order: 0
nav:
  title: 指南
  order: 0
---

# 快速上手

Ordures UI 是 前端业务主题包，用于协助前端快速覆盖 antd 样式，高效完成视觉开发，减少重复劳动，专注于业务逻辑。（注意：Ordures UI 只局限于 css 样式的修改，没有深入到组件内部，因此无法替换 antd 的默认图标）。

> 在开始之前，你需要知道如何使用 antd，访问[链接](https://ant.design/docs/react/getting-started-cn)学习 antd 的基本用法。

### 在项目中使用

让我们一起来使用一下`@ordures/ui`，体验一下它带给我们的便利吧！


> 注意：可能在其他的支持 less-loader 的构建工具创建的项目中也可以使用`@ordures/ui`，如`vite`，但这需要您的探索。

1. 首先，在命令行工具中进入您的`项目根目录`，安装`@ordures/ui`和`@ordures/babel-plugin-import`

   ```bash
   yarn add @ordures/ui
   yarn add -D @ordures/babel-plugin-import
   ```

2. 打开您项目根目录中的`babel.config.js`文件(或其他 `babel` 配置文件)，如果您的项目已经配置了`babel-plugin-import`，请将 `babel-plugin-import` 从您的 `plugins` 配置中移除，然后增加配置：

   > 注意：如果您的 `babel` 配置在 `webpack` 的 `babel-loader` 中，请修改您的`babel-loader`配置，记得删除`babel-plugin-import`这个依赖，我们的`@ordures/babel-plugin-import`有同样的作用

   ```javascript
   module.exports = {
     // ... 略
     plugins: [
       // ... 略
       [
         '@ordures/babel-plugin-import',
         {
           libraryName: 'antd',
           libraryDirectory: 'es',
           // 注意：@ordures/ui的原理是修改antd的less文件，因此需要确保style为true，且项目中有less-loader
           style: true,
           polyfillPath: '@ordures/ui'
         }
       ]
     ]
   };
   ```

3. 修改您的 `less-loader` 配置，首先确认您的项目安装了 `less-loader` 和 `less` 依赖，然后在您的 `webpack` 配置中，增加对 `less-loader` 的配置

   ```javascript
   // ...略
   const { getOrduresLessVariablesSync } = require('@ordures/ui');

   module.exports = {
     module: {
       rules: [
         {
           test: /\.less$/i,
           include: /node_modules\/@ordures\/ui/,
           use: [
             {
               loader: 'less-loader',
               options: {
                 javascriptEnabled: true,
                 // 可能不需要 lessOptions，具体取决于您使用的less-loader版本
                 lessOptions: {
                   modifyVars: getOrduresLessVariablesSync()
                 }
               }
             }
           ]
         }
       ]
     }
   };
   ```

4. 打开您的项目，引入 `antd` 的组件，会发现样式已经修改成功！
