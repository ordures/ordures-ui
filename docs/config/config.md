---
order: 1
nav:
  order: 1
  title: 配置项
toc: menu
---

# 配置参考

## .ordures.config.js

`.ordures.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@ordures/ui` 自动加载。

这个文件应该导出一个包含了选项的对象：

```js
// .ordures.config.js
module.exports = {
  // 选项...
};
```

### enabled

- Type: `boolean`
- Default: `true`

是否启用`@ordures/ui`。

将值修改为 `false` 即可关闭`@ordures/ui`。

### theme

- Type: `string`
- Default: `default`

使用`@ordures/ui`的主题，目前`@ordures/ui`只有 `default` 一个主题，未来会推出更多主题，敬请期待。

### include

- Type: `Array`
- Default: `undefined`

是否包含某个组件，如果您只想引入`@ordures/ui`中的某个组件，就将其写入 ` include`。

`include `的优先级比`exclude`高，如果配置了`include`则`exclude` 不生效。

> 例如，只想覆盖 `antd` 的 `Button` 组件，将 `include` 修改为`['button']`即可。

### exclude

- Type: `Array`
- Default: `undefined`

是否排除某个组件，如果您想排除`@ordures/ui`中的某个组件，就将其写入 ` exclude`。

`include `的优先级比`exclude`高，如果配置了`include`则`exclude` 不生效。

> 例如，不想覆盖 `antd` 的 `Button` 组件，将 `exclude` 修改为`['button']`即可。

### vars

- Type: `Object`
- Default: `{}`

修改`@ordures/ui`中的变量，用法与 `less-loader` 中的 `modifyVars` 类似。

注意，`key` 值不包含`@`符号。

```javascript
// eg:
module.exports = {
  // 略
  vars: {
    'table-header-bg': 'red'
  }
};
```
