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
