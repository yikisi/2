/**
 * @file 春乌拉拉 - 调教
 * @author 99
 */
const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[52];

module.exports = class extends CustomizedEro {
  async zero_stamina(urara, me) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……啊……啊……');
      await era.printAndWait([
        '仿佛被玩坏的洋娃娃，昏迷的 ',
        urara.get_colored_name(),
        ...(!era.get('flag:主导权')
          ? ['在 ', me.get_colored_name(), ' 怀中']
          : []),
        '不住地痉挛着',
      ]);
    } else {
      await urara.say_and_wait('……');
      await era.printAndWait([
        '全身都瘫软着，',
        ...(!era.get('flag:主导权')
          ? ['被 ', me.get_colored_name(), ' 一番折磨后的 ']
          : []),
        urara.get_colored_name(),
        ' 似乎已经彻底晕过去了',
      ]);
    }
  }

  async prison(urara, me, callname, hook) {
    if (!era.get('exp:52:监禁次数')) {
      const in_urara = get_chara_talk(52, chara_colors[1]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait('唉，您啊……为什么会变成这样呢？');
      await in_urara.say_as_unknown_and_wait([
        '不过值得庆幸，乌拉拉不会对训练员',
        urara.get_uma_sex_title(),
        '（您）过于残酷，和别人不一样呢……',
      ]);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        ' 疑惑地从床上起，身下是陌生的床铺，眼前也只有阴暗的屋顶，但身边却持续着断断续续的呜咽声。',
      ]);
      await era.printAndWait([
        '察觉到 ',
        me.get_colored_name(),
        ' 的醒来，在床边缩成一团的小',
        urara.get_uma_sex_title(),
        '急忙无力地撑起耳朵，揉搓着哭红的小脸与 ',
        me.get_colored_name(),
        ' 背身相向。',
      ]);
      await urara.say_and_wait([
        '对不起，但是这一次就好！可以留下来吗？之后乌拉拉会变回好孩子的！所以……！',
      ]);
      await era.printAndWait([
        '即使泪水不停滴在蜷起的膝上，即使话语如不加掩饰的陷阱，',
        urara.get_teen_sex_title(),
        '依旧没能如愿变得「卑劣」。',
      ]);
      await era.printAndWait(['至少，密室半掩的大门并没有锁。']);

      era.println();

      await in_urara.say_as_unknown_and_wait([
        '……哈啊……那么训练员',
        me.get_adult_sex_title(),
        '（您）的选择是——',
      ]);
      era.printButton('留在这里', 1);
      era.printButton('转身离开', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '慢慢贴近小',
          urara.get_uma_sex_title(),
          '的背后，',
          me.get_colored_name(),
          ' 从身后握住了',
          urara.sex,
          '冰凉的小手。',
        ]);
        await urara.say_and_wait([
          '诶？',
          callname,
          ' 愿意留下来……真的吗？乌拉拉，真的可以做个坏孩子吗……？',
        ]);
        await era.printAndWait([
          '胡乱抹了抹哭花的脸颊，在泪水中露出笑颜的 ',
          urara.get_colored_name(),
          ' 反身将 ',
          me.get_colored_name(),
          ' 轻柔地扑倒在身下。',
        ]);
        await urara.say_and_wait([
          '那，今天、明天、后天也……不对，那样就太任性了，所以只要现在就好了，对吧……？',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait([
          '显而易见的，虽然您被带到这里，但',
          urara.sex,
          '没能下定决心，总之您好好享受即可。',
        ]);
        await in_urara.say_as_unknown_and_wait([
          '不过在离开时，把乌拉拉哄睡比较好哦？',
          urara.sex,
          '可是为今天哭了很久呢。',
        ]);
        era.println();
        const relation_delta =
          era.get('love:52') * (era.get('flag:极端行为限制') || 1) -
          era.get('relation:52:0') +
          10;
        if (relation_delta > 0 && sys_like_chara(52, 0, relation_delta)) {
          await era.waitAnyKey();
        }
      } else {
        await era.printAndWait([
          '没再看向 ',
          urara.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 默默站起身，头也不回地走向房间尽头的大门。',
        ]);
        await urara.say_and_wait([
          '……乌拉拉知道了，当坏孩子是不行的，对不起……但是，把 ',
          callname,
          ' 让给别人……',
        ]);
        await urara.say_and_wait([
          '但是，哪怕只是身边的一个位置……',
          callname,
          '，如果有下次、如果有下次的话……！',
        ]);
        await era.printAndWait([
          '随着被推开的厚重门扉那沉闷的回弹声，没能得到回应的小',
          urara.get_uma_sex_title(),
          '，被抛在了千疮百孔的昏暗中。',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait([
          '……是不是太好说话了？『下决心变得卑鄙』，对',
          urara.sex,
          '来说还是太难了……',
        ]);
        await in_urara.say_as_unknown_and_wait([
          '您也做得有点过了，您应该知道，乌拉拉以后真要做点什么，我一般不会站在您这边哦？',
        ]);
        era.set('exp:52:监禁次数', 1);
        hook.override = true;
        era.println();
        sys_like_chara(52, 0, -get_random_value(75, 125)) &&
          (await era.waitAnyKey());
      }
    }
  }
};
