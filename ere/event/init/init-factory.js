const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[7] = require('#/event/init/init-7');
cons_dict[13] = require('#/event/init/init-13');
cons_dict[17] = require('#/event/init/init-17');
cons_dict[25] = require('#/event/init/init-25');
cons_dict[27] = require('#/event/init/init-27');
cons_dict[32] = require('#/event/init/init-32');
cons_dict[33] = require('#/event/init/init-33');
cons_dict[37] = require('#/event/init/init-37');
cons_dict[47] = require('#/event/init/init-47');
cons_dict[56] = require('#/event/init/init-56');
cons_dict[59] = require('#/event/init/init-59');
cons_dict[60] = require('#/event/init/init-60');
cons_dict[64] = require('#/event/init/init-64');
cons_dict[65] = require('#/event/init/init-65');
cons_dict[68] = require('#/event/init/init-68');
cons_dict[71] = require('#/event/init/init-71');
cons_dict[74] = require('#/event/init/init-74');
cons_dict[86] = require('#/event/init/init-86');
cons_dict[89] = require('#/event/init/init-89');
cons_dict[100] = require('#/event/init/init-100');
cons_dict[204] = require('#/event/init/init-204');
cons_dict[205] = require('#/event/init/init-205');
cons_dict[206] = require('#/event/init/init-206');
cons_dict[207] = require('#/event/init/init-207');
cons_dict[301] = require('#/event/init/init-301');
cons_dict[302] = require('#/event/init/init-302');
cons_dict[308] = require('#/event/init/init-308');
cons_dict[343] = require('#/event/init/init-343');
cons_dict[349] = require('#/event/init/init-349');
// GENERATED END

console.log(
  '角色初始化脚本注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} cid
   * @returns {function(boolean?)}
   */
  get_custom_init(cid) {
    if (cons_dict[cid]) {
      return new cons_dict[cid]().init;
    }
    return () => {};
  },
};
