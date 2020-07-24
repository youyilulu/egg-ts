# egg-ts

使用 typescript 开发 eggjs 插件

## 插件最小化

在 package.json 中添加如下节点，即声明了该包是一个 egg 插件

```json
  "eggPlugin": {
    "name": "ts"
  },
```

## 插件扩展

在插件中进行扩展（extend），会合并到主程序上去对象中去，例如：在插件中扩展helper，方法会注入到主程序中去，如果主程序中有同样的方法，则插件中的方法会被覆盖


代码参考

*/app/extend/helper.ts*

```js
/**
 * 在helper扩展的方法中，this 是 helper 对象，该对象还包含有ctx和app的引用，可以使用主程序或者其他插件的方法
 */
export default {
    foo() {
        // this 是 主程序的helper 对象，所有插件的helper扩展都会在this中
        this['bar']();
        // this.ctx => context 对象
        this['ctx'].helper.bar();
        // this.app => application 对象
        console.log(this['app'].name);
        // 当前方法逻辑
        console.log('[egg-ts][extend:helper:foo] I am foo!');
    },
};

```