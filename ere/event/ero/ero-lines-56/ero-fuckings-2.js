const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  ask_action,
} = require('#/event/ero/common-lines/snippets');
const {
  common_continue_fucking_kitaru,
} = require('#/event/ero/ero-lines-56/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.ask_fuck] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_fuck ? part_enum.virgin : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait(['想……']);
      await attacker.say_and_wait(['欸！']);
      await attacker.print_and_wait([
        '立即捂住了嘴，几乎自己都不敢相信身为神社巫女的自己能说出这样的话，简直……简直像是被不知道什么东西夺舍了一样。',
      ]);
      await attacker.print_and_wait([
        '回过神来，自己丰腴柔软的双腿已经自觉地分了开来，黏腻的穴瓣间拉起了浓厚的银线，入口处还正寂寞地一张一合。',
      ]);
      await attacker.print_and_wait([
        '唔……真是色情呢，自己的身体，但是，有着厉害肉棒的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 能理解的吧……',
      ]);
      await attacker.say_and_wait(['插进来吧……']);
      await attacker.print_and_wait([
        '用右手的食指和中指稍稍用力把反射着晶莹光辉的阴唇分开，将内部正叫渴的粉嫩穴肉向 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 展示出来，补上了名为祈求插入这一动作的最后一块碎片。',
      ]);
      await attacker.say_and_wait(['为了今日份的大吉……请插进来吧。']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  };

  handlers[ero_hooks.cowgirl] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '双手放在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的胸膛上，居高临下的盯着他的脸。',
      ]);
      await attacker.print_and_wait(['有种自己占上风的感觉呢。']);
      await attacker.print_and_wait([
        '那么，接下来该怎么让身下这个总是喜欢欺负自己的家伙乖乖求饶呢？',
      ]);
      await attacker.print_and_wait(['左右？上下？还是转圈似的扭腰？或者……']);
      await attacker.say_and_wait(['咿呀！～❤️']);
      await attacker.print_and_wait([
        '趁着别人思考的时候突然动起来什么的，太犯规了呀！',
      ]);
      await attacker.print_and_wait([
        '不要动！呃❤️！明明……❤️咿呀～❤️我在上面❤️！',
      ]);
      await attacker.say_and_wait(['唔呃～好棒❤️！']);
      await attacker.print_and_wait(['失态的呻吟从张开的嘴中不断漏出。']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  };

  handlers[ero_hooks.stimulate_glans_by_virgin] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '总是让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 单方面努力的话，感觉有些稍稍愧疚呢。',
      ]);
      await attacker.print_and_wait([
        '毕竟，两人三足的法则，就算是在做爱这一对于现役赛马娘和训练员来说是背德的行为也一样吧。',
      ]);
      await attacker.say_and_wait(['哈……❤️']);
      await attacker.print_and_wait([
        '在充血胀的硬邦邦肉棒下一次撞进来的时候试着深呼吸，「啾」的让缠人的小穴吮吸起顶到子宫颈的充血龟头。',
      ]);
      await attacker.say_and_wait(['呃啊啊啊啊……']);
      await attacker.print_and_wait([
        '正缠绞着灼热肉棒的穴内，传来了几乎要让自己瞬间昏过去的快感',
      ]);
      await attacker.print_and_wait([
        '肉棒跳的更厉害了呢，所以，我也算帮上忙了吧，',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await attacker.print_and_wait(['不妙不妙不妙……']);
      await attacker.print_and_wait([
        '本来只是想试着配合上 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 节奏的自己, 却颇为掉链子的忘了深处的穴肉会有多么的敏感。',
      ]);
      await attacker.print_and_wait([
        '似乎是察觉到了缠绞力度的放松，抵在了子宫口前的龟头对准前方挺起的软肉开始了蛮横无礼的冲刺。',
      ]);
      await attacker.print_and_wait([
        '方才还能时不时反攻几下肉棒的穴肉，被粗翘滚烫的肉棒完全碾开，粗大的龟头狠狠撞在了自己的子宫颈上。',
      ]);
      await attacker.print_and_wait(['去了……要去了……']);
    } else {
      await attacker.print_and_wait(['深呼吸……深呼吸……']);
      await attacker.print_and_wait([
        '想要尽力配合, 但自己都不知道有没有完整的做完一次动作, 只要塞在体内的肉棒稍稍抽动一下，被快感塞满的大脑就会一片空白, 从嘴里咿咿呀呀的吐出下流的呻吟。',
      ]);
      await attacker.print_and_wait([
        '不过，听着噗嗤噗嗤的下流声响，黏糊糊的小穴应该有好好的服侍 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉棒吧.',
      ]);
    }
  };

  handlers[ero_hooks.ask_stimulate_g_spot] = handlers[
    ero_hooks.ask_stimulate_womb
  ] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_stimulate_g_spot
            ? part_enum.virgin
            : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait(
        '能感受到自己穴内的性感带被肉棒蹭过时，让自己上瘾般的快感。',
      );
      await attacker.say_and_wait('所以……');
      await attacker.say_and_wait('拜托了……');
      await attacker.print_and_wait(
        `身为${attacker.get_uma_sex_title()}，这也太丢人了不是吗……`,
      );
      await attacker.print_and_wait([
        '但是完全没法忍耐住——留着口水在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 耳边轻喃着乞求快感。',
      ]);
      await attacker.print_and_wait('因为就是很想要啊——');
      await attacker.print_and_wait(
        '想要子宫的里面，被厉害地肉棒给，厉害地，粗暴地，用力地……',
      );
      await attacker.print_and_wait('「啾——的一下顶到最里面❤️');
      await attacker.print_and_wait('让身体「咻」地蜷起来——');
      await attacker.print_and_wait('变成世界上最舒服的小穴——');
      await attacker.print_and_wait(
        `所以拜托了……在那之后，就算之后被白兴大人怪罪也无所谓了`,
      );
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await common_continue_fucking_kitaru(defender, attacker);
    } else {
      await attacker.say_and_wait('慢，啊哈❤️，慢一点❤️～!');
      await attacker.print_and_wait(
        '尽管已经如此乞求了，肉棒依旧能用短促而精准地命中着自己的弱点，浑浊眼瞳在敏感带带来的快感下泛起几乎将橙色驱尽的粉红。',
      );
      await attacker.print_and_wait([
        '被驯化的完美贴合 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 形状的蜜穴，报恩般的而用柔和的收缩蠕动来取悦着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那根为自己的身体带来无尽快感的火热肉杆。',
      ]);
    }
  };
};
