const era = require('#/era-electron');

function require_and_proxy_kojo_js(kojo) {
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
      console.error(`口上内容缺失：${k} in ${path}`);
      return f;
    },
  });
}

module.exports = require_and_proxy_kojo_js;
