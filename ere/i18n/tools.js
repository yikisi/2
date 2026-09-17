/**
 * @file i18n 衍生工具
 */

const era = require('#/era-electron');

module.exports = {
  /**
   * js 包装器，使其具有加载后的 kojo 类似的容错性
   * @Template T
   * @param {T} kojo
   * @return {T}
   */
  proxy_kojo_js(kojo) {
    const path = (new Error().stack || '')
      .split('\n')
      .filter((l) => l.trim())[2]
      .trim();
    return new Proxy(kojo, {
      get(t, k) {
        if (k in t) {
          return t[k];
        }
        const f = () => {
          era.print('口上缺失');
          return ['文本构造器缺失'];
        };
        f.toString = () => '文本缺失';
        console.error(`口上内容缺失：${k} ${path}`);
        return f;
      },
    });
  },
};
