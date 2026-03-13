/**
 * @file 凯旋芭蕾 - 调教
 * @author ALEX
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} varia
   * @param {CharaTalk} you
   * @param {PrintedSpan} call_v
   */
  async rape_standing(varia, you, call_v) {
    await you.print_and_wait(
      '有着不错柔韧性与平衡的舞者，正在自己面前展示着躯体。',
    );
    await you.print_and_wait([
      '果然，赛',
      varia.uma_sex_title,
      '都有着不错的柔韧性与平衡性呢。',
    ]);
    await you.print_and_wait(
      '仅让足尖点地，大腿内侧肌肉拉伸，右腿再慢慢抬到水平位置。',
    );
    await you.print_and_wait([
      '尽力做着侧抬腿姿势的 ',
      call_v,
      ' 就这样将纤细腰肢与诱人侧臀暴露在了自己眼前。',
    ]);
    if (era.get('cflag:117:阴毛') >= 1) {
      await you.print_and_wait('被阴毛遮掩的小穴正随着紧绷的动作一开一合。');
    } else {
      await you.print_and_wait('光洁可爱的小穴正随着紧绷的动作一开一合。');
    }
    await varia.say_and_wait('满意了吧……人渣！');
    await you.print_and_wait([
      '看来还没到极限，于是自觉伸手纠正动作，将保持在水平高度的右腿慢慢托起，直到垂直朝上与左腿保持在一条直线。',
    ]);
    await varia.say_and_wait('别、别碰我……');
    await you.print_and_wait(
      '肉茎径直插入，狭窄软柔的腔穴被强行撑开，滚烫的龟冠无视层层叠叠蠕动收绞的腔肉，撞在了花心。',
    );
    await varia.say_and_wait('……哦咕❤️！！');
  },
};
