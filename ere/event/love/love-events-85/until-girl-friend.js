const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const Love85UtilFuckBuddy = require('#/event/love/love-events-85/until-fuck-buddy');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

const ruby_color = get_chara_color(85);

async function say_by_mother(_content) {
  const content = _content instanceof Array ? _content : [_content];
  return era.printAndWait(
    [{ content: '荻野贵女', fontWeight: 'bold' }, '「', ...content, '」'],
    {
      color: ruby_color,
    },
  );
}

module.exports = class extends Love85UtilFuckBuddy {
  async 74(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return super[74](ruby, me, callname, stage, extra_flag, event_object);
    }
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('母亲的消息', ruby);
    await ruby.print_and_wait([
      '那是某个休息日发生的故事，',
      ruby.get_colored_name(),
      ' 的母亲告诉她有重要的消息。',
    ]);
    await ruby.print_and_wait(
      '华丽一族的马娘，除了比赛成果，还被要求着其他东西。',
    );
    await ruby.print_and_wait('比如……');
    await ruby.print_and_wait('尽可能多地生下、培育马娘，让血脉延续下去。');
    await ruby.print_and_wait(
      '为此，必须尽快结婚。鼓励造孩子也是理所当然的事情。',
    );
    await ruby.print_and_wait(
      '即使是所谓的政治联姻，即使甚至未曾知晓对方的相貌与为人。',
    );
    await ruby.print_and_wait([
      '对于 ',
      ruby.get_colored_name(),
      ' 来说，一族选定的对象，本就没有拒绝的选择。',
    ]);
    await ruby.say_and_wait('是什么样的男性？');
    await ruby.print_and_wait('大概是还有所抵抗吧，自然地提问了。');
    await say_by_passer_by_and_wait(
      '母亲',
      '是个非常棒的人哦？我擅自提出申请，对方好像很犹豫。',
    );
    await say_by_passer_by_and_wait(
      '母亲',
      '但是，作为一族之长与你的母亲，我认为会是很棒的婚事。',
    );
    await ruby.print_and_wait(
      '婚姻生活多半和幸福相去甚远，本应自豪的一族的血液此刻颇为讨厌。',
    );
    await ruby.print_and_wait(
      '要说没有憧憬过美妙的婚姻，那是骗人的。不帅也可以，温柔、诚实，互相尊敬的男性……',
    );
    await ruby.print_and_wait([
      '突然，',
      ruby.get_colored_name(),
      ' 想起了 ',
      callname,
      ' 的脸。',
    ]);
    await ruby.print_and_wait(
      '虽然一开始有点不可靠，但作为自己的拐杖，作为指引自己的灯火。',
    );
    await ruby.print_and_wait([
      '为了让自己这块原石绽放出最耀眼的光辉，不断磨炼的重要的 ',
      callname,
      '……',
    ]);
    await ruby.print_and_wait(['心爱的 ', callname, '。']);
    await ruby.print_and_wait([
      '和 ',
      callname,
      ' 一起度过的时间，已经成为了 ',
      ruby.get_colored_name(),
      ' 最珍贵的回忆。',
    ]);
    await ruby.print_and_wait([
      '如果有选择的自由，',
      ruby.get_colored_name(),
      ' 想和 ',
      callname,
      ' 在一起。',
    ]);
    await ruby.print_and_wait('但是，这种玷污家族名声的行为是绝对不被允许的。');
    await ruby.print_and_wait([
      '然后，回过神来的时候，',
      ruby.get_colored_name(),
      ' 已经来到了 ',
      callname,
      ' 身边。',
    ]);
    era.drawLine();
    await ruby.say_and_wait('单刀直入地说，我要和其他人结婚了。');
    await era.printAndWait([
      '没等 ',
      me.get_colored_name(),
      ' 开口，',
      ruby.get_colored_name(),
      ' 继续说下去。',
    ]);
    await ruby.say_and_wait('刚才母亲大人提到了我的婚事，我决定接受。');
    await ruby.say_and_wait(
      '作为华丽一族的马娘，必须尽可能多地让生命在这个身体里寄养。',
    );
    await ruby.say_and_wait('但是……');
    await ruby.say_and_wait('只要一会儿，一会儿就可以……我希望能属于你……');
    await era.printAndWait('一直压抑的思念溢出，化作泪水洒落。');
    await era.printAndWait([me.get_colored_name(), '……']);
    era.printButton('「对不起，这种不负责任的事情，我做不到。」', 1);
    era.print('（沾血的小纸条「啊啊啊……露比……如果我没有推开你的话……」）', {
      color: buff_colors[3],
      offset: 1,
      width: 23,
    });
    era.printButton('吻下去（升级关系）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait('预想到的答案，即使理解，心也会不断作痛。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 带着悲痛的表情，垂下脑袋。',
      ]);
      await ruby.say_and_wait('很抱歉向您提出了无理的要求，请忘记这件事。');
      await era.printAndWait([
        '她离开了 ',
        me.get_colored_name(),
        ' 的训练员室。',
      ]);
      await era.printAndWait([
        '在回家的车里，',
        ruby.get_colored_name(),
        ' 久违地像个孩子一样哭泣。',
      ]);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        ' 当然注意到了，担当那简直像是把「救救我」挂在脸上的表情。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 收到了 ',
        ruby.get_colored_name(),
        ' 管家发来的私信。',
      ]);
      await era.printAndWait('要查看吗？');
      era.printButton('删除（拒绝关系）', 1);
      era.print('【若选择此项，一切将无可挽回！请确认是否保存了存档！】', {
        offset: 1,
        width: 23,
        color: buff_colors[3],
      });
      era.printButton('查看（升级关系）', 2);
      if ((await era.input()) === 1) {
        era.set('flag:强制BE', 85);
        return;
      } else {
        await ruby.used_to_say_and_wait('我们……约好了……一起……');
        await ruby.used_to_say_and_wait('所以……');
        await ruby.used_to_say_and_wait('呜呜……！');
        await ruby.used_to_say_and_wait('我……宝贵的……');
        await ruby.used_to_say_and_wait('啊啊啊……');
        await era.printAndWait('该做什么已经决定了。');
        era.printButton('「拨通荻野贵女的电话。」', 1);
        await era.input();
        era.printButton('「请把令爱交给我。」', 1);
        await era.input();
        await say_by_mother('……啊啦啊啦，是心灵感应吗？');
        await say_by_mother('还是……那孩子对你说了些什么？');
        await say_by_mother('哈啊……');
        await say_by_mother('请来府上一趟吧，我安排其他的管家去接你。');
        era.drawLine();
        await era.printAndWait([
          '前往 ',
          ruby.get_colored_name(),
          ' 房间时，',
          me.get_colored_name(),
          ' 遇上了负责照看她的管家。',
        ]);
        await era.printAndWait('管家「大小姐就拜托您了。」');
        await era.printAndWait([me.get_colored_name(), ' 点头示意。']);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 不可置信地看着出现在房间门口的 ',
          me.get_colored_name(),
          '。',
        ]);
        era.printButton('「可以进去说话吗？」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          ' 的爱马低下脑袋，但 ',
          me.get_colored_name(),
          ' 还是可以看出她小幅度点了下头。',
        ]);
        await era.printAndWait([
          '进入房间的同时，',
          me.get_colored_name(),
          ' 牵起来了 ',
          ruby.get_colored_name(),
          ' 的小手。',
        ]);
        await era.printAndWait([
          me.get_couple_title(),
          ' 并排坐在豪华的大床边缘。',
        ]);
        await era.printAndWait([
          '看着在身旁战战兢兢的 ',
          ruby.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 无奈地将她拥入怀中。',
        ]);
      }
    } else {
      await era.printAndWait([
        '训练员室成了 ',
        me.get_couple_title(),
        ' 今天挥洒汗水锻炼的场所。',
      ]);
    }
    await era.printAndWait([
      '在客厅的沙发上，',
      me.get_colored_name(),
      '和 ',
      ruby.get_colored_name(),
      ' 开始了火热的前戏。',
    ]);
    await era.printAndWait('容貌俏丽的少女乌发蓬乱，看上去可爱诱人。');
    await era.printAndWait([
      '校服被 ',
      me.get_colored_name(),
      '解了开来，让大片雪肤裸露在外。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的皮肤纤嫩娇柔，彷佛初动新雪。',
    ]);
    await era.printAndWait([
      '尽管 ',
      ruby.get_colored_name(),
      ' 的身材比较娇小，可她不会给 ',
      me.get_colored_name(),
      '一种弱不禁风的感觉。',
    ]);
    await era.printAndWait('上身那件蕾丝胸衣，被发育良好的乳房撑得张鼓鼓的。');
    await era.printAndWait(
      '暴露出来的柔嫩肚皮和纤细腰身上，能看到清晰的马甲线。',
    );
    await era.printAndWait([
      '她的手臂很细，但在 ',
      me.get_colored_name(),
      '的训练下不失柔美的肌肉线条。',
    ]);
    await era.printAndWait([
      '比身体的所有部位都更让 ',
      me.get_colored_name(),
      '着迷的大腿，健美显示出力量的曲线。',
    ]);
    await ruby.say_and_wait('嗯……等等。门……没锁。');
    era.printButton('「谁让我的爱马这么可爱，忍不住了，没事。」', 1);
    await era.input();
    await ruby.say_and_wait('就这么喜欢刺激吗，孩 子 她 爸？');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 是扶着 ',
      me.get_colored_name(),
      '的肉棒，对着 ',
      me.get_colored_name(),
      '龟头说的。',
    ]);
    await era.printAndWait([
      '热乎乎的少女气息吹拂在 ',
      me.get_colored_name(),
      '的鸡巴上，给 ',
      me.get_colored_name(),
      '一种酥酥的体感。',
    ]);
    await era.printAndWait([
      '最让 ',
      me.get_colored_name(),
      '心动的，是爱马的那一声「孩子她爸」。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '的鸡巴被柔软湿润的香唇包住了。',
    ]);
    await era.printAndWait([
      '俯视 ',
      ruby.get_colored_name(),
      ' 痴迷的样子，',
      me.get_colored_name(),
      '一阵恍惚。',
    ]);
    await era.printAndWait([
      '她现在只属于 ',
      me.get_colored_name(),
      '，只有 ',
      me.get_colored_name(),
      '一个人可以享受美丽娇妻的风情万种。',
    ]);
    begin_and_init_ero(0, 85);
    era.set('tcvar:0:发情', era.set('tcvar:85:发情', 1));
    const cache = era.get('abl:85:阴道耐性');
    era.set('abl:85:阴道耐性', 5);
    update_ero_status(85);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    if (era.get('talent:85:处女')) {
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 深吸了好几口 ',
        me.get_colored_name(),
        ' 下体的雄臭味。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 掀起决胜服的下裙，用嘴唇咬住。',
      ]);
      await era.printAndWait(
        '她两手摸向裙底的大腿间，在湿透了的饱满阴阜上，于白丝裤袜裆部扯开一道入口。',
      );
      await era.printAndWait('直接拨开湿了的蕾丝系带内裤，露出幼茓。');
      await era.printAndWait(
        '雪白无暇的阴阜和饱满的阴唇白白嫩嫩，似乎轻轻一戳就会凹陷进去。',
      );
      await era.printAndWait(
        '中间便是勃起后重见天日的殷红阴蒂，与处女樱粉色的肉缝。',
      );
      await era.printAndWait('小穴正徐徐向外溢出一缕淫液。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 半跪在 ',
        me.get_colored_name(),
        ' 胯间，高高提起圆润的丝袜美臀。',
      ]);
      await era.printAndWait([
        '左手尽可能地拨开少女紧致的肉唇，右手扶住了 ',
        me.get_colored_name(),
        ' 青筋迸发的肉棒。',
      ]);
      await era.printAndWait(
        '龟头对准了位置，慢慢撑开狭窄的肉洞展开征服之旅。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 发出含糊的呻吟，她希望 ',
        me.get_colored_name(),
        ' 能一览无遗地目睹夺走她处女的过程，因为这是她生来最美妙的回忆。',
      ]);
      era.printButton('摸头安慰。', 1);
      era.printButton('抱住她。', 2);
      await era.input();
      await era.printAndWait(
        '起身的同时，敏感的龟头已经艰难挺进了一处紧俏到极致的火热肉壶中。',
      );
      await era.printAndWait(
        '腔道内细密繁多的肉皱子无规则地蠕动，随着插入一圈圈收绞、聚隆成环。',
      );
      await era.printAndWait([
        '龟头被一层层得研磨，无与伦比的挤压榨取感几乎让 ',
        me.get_colored_name(),
        ' 一泻千里。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 下意识地停下了起身的动作。',
      ]);
      await era.printAndWait(
        '一动不动注视着肉棒撑开少女的下体，慢慢被小穴吞没。',
      );
      await era.printAndWait([
        '不久，',
        me.get_colored_name(),
        ' 感觉触碰到了一层纤薄柔韧的嫩膜。',
      ]);
      await era.printAndWait([
        '现在，从 ',
        ruby.get_colored_name(),
        ' 的幼茓里退出，',
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 的关系可以回到从前。',
      ]);
      await era.printAndWait('伦理道德观。');
      await era.printAndWait('阴暗情愫中的窃喜。');
      await era.printAndWait('对爱马的疼爱。');
      await era.printAndWait('破罐子破摔的想法。');
      await era.printAndWait('被上脑精虫击溃的理智。');
      era.printButton(`「${m_call_r}，我爱你。」`, 1);
      era.printButton('「我会好好陪伴着你的。」', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 精致如花的眉眼间瞬间洋溢起幸福的神色，娇小的酮体坐了下去。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的鸡巴轻易撕裂了中学女生的处女膜，破开那淫虐着 ',
        me.get_colored_name(),
        ' 的层层肉环，顶到了守护秘密花园的子宫口。',
      ]);
      await ruby.say_and_wait(['终于……和 ', callname, '……好幸福，呜呼……']);
      await era.printAndWait([
        '心灵上的满足无法掩过开苞的剧痛，',
        ruby.get_colored_name(),
        ' 稚气尚存的小脸因痛苦扭曲。',
      ]);
      await era.printAndWait([
        '美丽的 ',
        ruby.get_colored_name(),
        ' 色眸子止不住地上翻，甚至只见眼白，眼角开始泛出泪花。',
      ]);
      await era.printAndWait(
        '漂亮的睫毛被打湿，鼻涕和口水本能地流出，不受控制。',
      );
      await era.printAndWait(
        '两只白丝小脚的圆润足趾不停地蜷缩、松开，仍是舒缓不了半点。',
      );
      await era.printAndWait(
        '一丝丝混着处女血的淫水，将白丝裤袜和蕾丝内裤染成浅浅的樱红。',
      );
      await era.printAndWait([me.get_colored_name(), ' 产生了变态的满足感。']);
      await era.printAndWait('只一刹那，心神震动间。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 无比紧凑的小穴猛地挤压，随之而来的还有子宫口若有若无的嘬吸榨取。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 感觉脊髓发麻，山崩般的快感顺着脊柱充上脑髓。',
      ]);
      await era.printAndWait(
        '大股大股的精液直接顶着子宫口射进了爱马的稚嫩孕袋内。',
      );
      await era.printAndWait([
        '那用来孕育 ',
        me.get_couple_title(),
        ' 后代的纯洁之地，此刻便被 ',
        me.get_colored_name(),
        ' 彻底地玷污。',
      ]);
      await ruby.say_and_wait('嗯嗯嗯嗯嗯嗯嗯————！！！');
      await era.printAndWait([
        '青涩的幼女子宫无比敏感，被 ',
        me.get_colored_name(),
        ' 的腥臭精液一波波正面喷射，',
        ruby.get_colored_name(),
        ' 更是翻起白眼紧咬裙摆。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 鼻腔发出悠长的呻吟，腰肢弓起到极限。',
      ]);
      await era.printAndWait([
        '决胜服内的幼嫩酮体痉挛抽搐，与 ',
        me.get_colored_name(),
        ' 一起达到了高潮。',
      ]);
      await era.printAndWait([
        '温热的处女阴精哗啦啦地洗刷 ',
        me.get_colored_name(),
        ' 劳累的男根。',
      ]);
      await era.printAndWait([
        '几十秒后，爱马瘫软在 ',
        me.get_colored_name(),
        ' 胸膛上。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 涕泪横流的标致脸蛋上，痴痴地露出满足的色气笑颜',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 射精后不见疲软的肉棒依旧把紧实的小穴撑得满满当当。',
      ]);
      await era.printAndWait([
        '娇嫩的子宫颈肉环随着 ',
        me.get_couple_title(),
        ' 的呼吸在 ',
        me.get_colored_name(),
        ' 龟头上磨来磨去，为 ',
        me.get_colored_name(),
        ' 带来触电般的酥麻感。',
      ]);
      await ruby.say_and_wait([callname, '，对我幻灭了吗？']);
      await era.printAndWait([
        '哪怕是 ',
        me.get_colored_name(),
        ' 也知道刚破处的女孩子比较多愁善感。',
      ]);
      era.printButton(
        `「怎么会！无论是平时的 ${m_call_r} 还是色色的 ${m_call_r} 我都最喜欢了。」`,
        1,
      );
      era.printButton('「我们一起下地狱吧。」', 2);
      await era.input();
      await end_ero_and_train();
    } else {
      await print_ero_page(85);
      await end_ero_and_show_result(true);
    }
    era.set('abl:85:阴道耐性', cache);
    era.drawLine();
    await era.printAndWait([
      '云收雨歇，',
      ruby.get_colored_name(),
      ' 依偎在 ',
      me.get_colored_name(),
      '怀里，用她细嫩的手指在 ',
      me.get_colored_name(),
      '胸口轻轻摩挲、戳点。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 抬起俏脸，眼神中带着玩味暧昧的神色。',
    ]);
    await ruby.say_and_wait('我可以给你生个孩子的……');
    await era.printAndWait([
      me.get_colored_name(),
      '当然不会放跑到手的小马驹，轻轻捏了捏 ',
      ruby.get_colored_name(),
      ' 勃起的娇红蓓蕾。',
    ]);
    era.printButton('「不要瞎想了，我不会让你嫁给别的男人。」', 1);
    await era.input();
    await me.say_and_wait('无论是谁……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 心头一颤，很明显 ',
      me.get_colored_name(),
      '的话里有话，',
      me.get_colored_name(),
      '也清楚自己这么说是什么意思。',
    ]);
    era.printButton(
      `「不用那么害怕，我也知道 ${m_call_r} 和 ${m_call_r} 妈妈的立场。」`,
      1,
    );
    await era.input();
    era.printButton(
      `「结婚的事情我会和荻野贵女女士协商的，${m_call_r} 做自己该做的事就可以。」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      callname,
      '……谢谢。听你这么说，我的心变轻松了一些……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '不几天到了周末，为了和婚约对象见面，',
      ruby.get_colored_name(),
      ' 去了某家酒店。',
    ]);
    await era.printAndWait('也许是因为这些日子哭着入睡的缘故，神色有点黯然。');
    await era.printAndWait([
      me.get_colored_name(),
      '看着来到指定房间的 ',
      ruby.get_colored_name(),
      '。',
    ]);
    era.printButton('「初次见面，红宝石女士。」', 1);
    await era.input();
    await ruby.say_and_wait(['为什么，', callname, ' 会在这里……？']);
    await say_by_mother('真是感慨啊，露比。这个场景实在是似曾相识。');
    await era.printAndWait([
      '母亲好像注意到了 ',
      ruby.get_colored_name(),
      ' 对自己专属训练员的感情。',
    ]);
    await era.printAndWait([
      '而且在担任祖母与母亲训练员的男性退休的现在，不可能放 ',
      me.get_colored_name(),
      '这么优秀的人才逃跑。',
    ]);
    await say_by_mother('没有提前和你说清楚，真是对不起。');
    await era.printAndWait([
      '对于母亲道歉的话语，',
      ruby.get_colored_name(),
      ' 完全生气不起来。',
    ]);
    await era.printAndWait(
      '在一族面对的财政界压力下，把女儿的幸福放在优先级更高的地方是有相当的觉悟吧。',
    );
    await ruby.say_and_wait('我这么仰慕你，你竟然什么都不跟我说。');
    await era.printAndWait([
      '吐着甜蜜的气息，',
      ruby.get_colored_name(),
      ' 抱了上来。',
    ]);
    await era.printAndWait([
      '考虑到马娘的力量，即使将来的岳母在一旁玩味地注视，',
      me.get_colored_name(),
      '也放弃了挣扎。',
    ]);
    era.printButton(
      '「我会成为华丽一族继承人的丈夫。你的人生，我来保证。」',
      1,
    );
    await era.input();
    await sys_love_uma_in_event(85);
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async date(ruby, me) {
    await print_event_name('约会', ruby);
    await era.printAndWait('管家「打扰了，训练员大人。」');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的管家拜访了 ',
      me.get_colored_name(),
      ' 的训练员室，访问的理由大概是 ',
      ruby.get_colored_name(),
      ' 吧。',
    ]);
    await era.printAndWait('管家「大小姐在宅邸的泳池里游泳，我来送您过去。」');
    await era.printAndWait([
      '管家先生走出房间后，',
      me.get_colored_name(),
      ' 把调教 ',
      ruby.get_colored_name(),
      ' 用的工具装进运动包，跟了出去。',
    ]);
    await era.printAndWait([
      '在月光照射下的露天泳池里，',
      ruby.get_colored_name(),
      ' 在以人鱼般的美艳姿态畅游。',
    ]);
    era.printButton('「这么晚还锻炼真是辛苦了。」', 1);
    await era.input();
    await ruby.say_and_wait('不敢当，所以，你是来带我回去的？');
    era.printButton('「不，我有点话要跟你说。」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 放下运动包坐在泳池边。']);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 从水里探出脸来，靠近 ',
      me.get_colored_name(),
      ' 的时候，胸口也映入眼帘。',
    ]);
    await era.printAndWait('肉棒被生殖欲望驱使，不知不觉就勃起了。');
    await ruby.say_and_wait('但是，很不凑巧。我突然很想继续游泳。');
    await ruby.say_and_wait('如果想和我交谈的话，请来这边……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 向 ',
      me.get_colored_name(),
      ' 伸出手。',
    ]);
    await ruby.say_and_wait('现在这里只有你和我，我不介意你的裸体。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 在 ',
      ruby.get_colored_name(),
      ' 面前脱了衣服，把半勃起的生殖器暴露出来。',
    ]);
    await era.printAndWait([
      '当 ',
      ruby.get_colored_name(),
      ' 的脸从游刃有余的表情变成直到自己要被雄性征服的表情时。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的肉棒上浮现出血管、青筋。',
    ]);
    await era.printAndWait(
      '然后，故意上下会动的下体进入泳池，抓住送到眼前的肥肉。',
    );
    await era.printAndWait([
      '把完全勃起的肉棒压到肚子上，粗暴地夺走了 ',
      ruby.get_colored_name(),
      ' 的嘴唇。',
    ]);
    await era.printAndWait([
      '强行撬开 ',
      ruby.get_colored_name(),
      ' 的嘴，用舌头蹂躏口腔。',
    ]);
    await era.printAndWait('不留余地地来回舔舐，吸走舌头上的唾液。');
    await era.printAndWait('再把舌头拉进嘴里，互相缠绕着交换唾液。');
    await era.printAndWait([
      '当如性交般浓厚的激吻结束时，',
      ruby.get_colored_name(),
      ' 的余裕已经荡然无存了。',
    ]);
    await ruby.say_and_wait('好过分……');
    era.printButton('「那么，接下来要做什么？」', 1);
    await era.input();
    await ruby.say_and_wait('听我说话啊。');
    era.printButton('「你不说的话，我可什么都不知道。」', 1);
    await era.input();
    await ruby.say_and_wait('请，温柔一点……');
    await era.printAndWait('这样说着，她从游泳池爬上去，把手贴在墙上。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 把她的泳衣移开，开始温柔的爱抚。',
    ]);
    await era.printAndWait('用指尖触摸连最低限度的阴毛都打理整齐的雌穴。');
    await era.printAndWait('虽然动作很温柔，但肉棒的存在本身就是粗暴的。');
    era.printButton('「好下流的声音啊，华丽一族就不能有点品味吗？」', 1);
    era.printButton('「这样的话，比起马娘，说你是母猪反而更合适。」', 2);
    await era.input();
    await ruby.say_and_wait('那是因为你……');
    era.printButton('「你想说是我的错？」', 1);
    era.printButton(
      '「被叫成母猪，淫水还滴滴答答地喷个不停。真是贱猪啊。」',
      2,
    );
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 一只手把手指塞进 ',
      ruby.get_colored_name(),
      ' 的屁穴里，让 ',
      ruby.get_colored_name(),
      ' 抬起腰。',
    ]);
    await era.printAndWait('另一只手放肆地拍打华丽的屁股。');
    await era.printAndWait([
      '也许是受虐癖被激发了，',
      ruby.get_colored_name(),
      ' 扭动着身体，将潮水盛大地喷洒在地上。',
    ]);
    await ruby.say_and_wait('啊……我，知道了。');
    await ruby.say_and_wait('我是，您的母猪。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 把手从 ',
      ruby.get_colored_name(),
      ' 的屁股上挪开，她的姿势当场崩溃。',
    ]);
    await era.printAndWait('沉浸在潮吹的余韵中，时不时还会发出下流的呻吟。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 从运动包里拿出带绳子的项圈，把它套在 ',
      ruby.get_colored_name(),
      ' 的脖子上。',
    ]);
    await era.printAndWait('这样有点像家畜了，但还有不自然的地方。');
    await ruby.say_and_wait('您，您还要做什么？');
    await era.printAndWait('是哪里不协调呢？');
    era.printButton('她现在是想被我推倒，注入种子。', 1);
    era.printButton('「哪有穿衣服的畜生啊。」', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 命令 ',
      ruby.get_colored_name(),
      ' 把衣服脱下。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的表情有点反抗，但 ',
      me.get_colored_name(),
      ' 用肉棒抽了她脸几下，动作马上就快起来了。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的脚下形成了雌汁早就的水洼。',
    ]);
    await era.printAndWait('她蹲下身张开双腿，摆出露出腋下的色情蹲踞姿势。');
    await era.printAndWait('随后张嘴伸出粉嫩的舌头，轻轻地吐息了一下。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 把肉棒塞进 ',
      ruby.get_colored_name(),
      ' 的喉咙深处，她的脸上浮现出呕吐般痛苦的表情。',
    ]);
    await era.printAndWait(
      '一边忍受着舌头、食道被侵犯的感觉，一边努力服务挤出精液。',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 随意抓住 ',
      ruby.get_colored_name(),
      ' 的头发，拍打腰部。',
    ]);
    await era.printAndWait([
      '即使把根完全挤进去，',
      ruby.get_colored_name(),
      ' 也会让脸颊凹陷认真地口交。',
    ]);
    await era.printAndWait('射了！');
    await era.printAndWait(
      '在最深处射精的话，即使不愿意，精液也会直接注入胃里。',
    );
    await era.printAndWait([
      '射精结束时，',
      ruby.get_colored_name(),
      ' 的胃像使用过的避孕套一样膨胀。',
    ]);
    await era.printAndWait('从外面看，肚子也明显得鼓起。');
    await ruby.say_and_wait('您这样，就满足了吗？');
    await era.printAndWait([me.get_colored_name(), ' 把爱马侵犯了一整晚。']);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.abuse),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }
};
