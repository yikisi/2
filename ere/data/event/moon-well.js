const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

class MoonWell {
  // 泡一次秘汤的标准价格
  #cost = 200;

  // 秘汤的冷却时间
  cd = 12;

  get #obj() {
    return (
      era.get('flag:月亮井') ||
      era.set('flag:月亮井', { cooldown: this.cd, times: 1 })
    );
  }

  // 每多招募一个 -75 马币，两个都招募只收 50
  get cost() {
    return (
      this.#cost -
      ((era.get('cflag:350:招募状态') === recruit_flags.yes) +
        (era.get('cflag:351:招募状态') === recruit_flags.yes)) *
        75
    );
  }

  // 秘汤使用次数最大值，同时也是秘汤的冷却速度
  get limit() {
    return (
      1 +
      (era.get('cflag:350:招募状态') === recruit_flags.yes) +
      (era.get('cflag:351:招募状态') === recruit_flags.yes)
    );
  }

  // 秘汤的剩余冷却时间
  get cooldown() {
    return this.#obj.cooldown;
  }

  set cooldown(v) {
    this.#obj.cooldown = v;
  }

  // 秘汤的剩余使用次数
  get times() {
    return this.#obj.times;
  }

  set times(v) {
    this.#obj.times = v;
  }
}

const moon_well = new MoonWell();

module.exports = moon_well;
