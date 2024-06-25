const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} handlers */
module.exports = (handlers) => {
  handlers[47 + 32] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('得到的启示', ruby);
    await ruby.say_and_wait([r_call_m, '。']);
    await ruby.say_and_wait('你，在我的速度中，发现了光辉？');
    era.printButton('「是啊。」', 1);
    await era.input();
    await ruby.say_and_wait('如果善用这个武器，我也能逼近……');
    await ruby.say_and_wait('如果用这双脚，能展现出最耀眼的光辉的话……');
    await ruby.say_and_wait('和选择的路线无冠，那血脉就流淌在这个身体里。');
    await ruby.say_and_wait('相信只有王道路线能绽放光辉，我也不过如此而已。');
    await ruby.say_and_wait('但是，你可以让我在那条道路外达成使命。');
    await ruby.say_and_wait('以最适合我的方式。');
    await ruby.say_and_wait('这个月辛苦您了。');
    await ruby.say_and_wait('我充分认识到，没有你我是无法前进的。');
    await ruby.say_and_wait('首先必须向家里传达决断。');
    await ruby.say_and_wait('之后，还请继续多多指教。');
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(85, attr_change, 0);
  };

  handlers[95 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('夏季合宿（资深年）途中', ruby);
    await era.printAndWait('集训已经过了一半，今天这附近会举行夏日祭典。');
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 想着 ',
      ruby.get_colored_name(),
      ' 多半会选择留在集训所的时候。',
    ]);
    await ruby.say_and_wait([r_call_m, '？']);
    era.printButton('「我帮你做好念书的准备咯？」', 1);
    await era.input();
    await ruby.say_and_wait(
      '原来集训所也有这么安静的地方呢。而且连桌子和照明都准备好了。',
    );
    await ruby.say_and_wait('感谢您做了这么多考量。');
    await era.printAndWait(
      'Siuuuuu——咚！从远方传来了烟火的声音，祭典也差不多该要结束了。',
    );
    await era.printAndWait([
      '趁 ',
      ruby.get_colored_name(),
      ' 总算是告一段落的样子，',
      me.get_colored_name(),
      ' 讲了句早就准备好的话。',
    ]);
    era.printButton('要不要稍微去散步一下？', 1);
    await era.input();
    await ruby.say_and_wait('……知道了。');
    era.drawLine({ content: '海边' });
    await ruby.say_and_wait('静谧……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 在无人的沙滩上，肩并肩抬头看着满天繁星。沙沙作响的海风令人觉得十分悦耳。',
    ]);
    era.printButton('我听说这里的星星很漂亮才来的。', 1);
    await era.input();
    await ruby.say_and_wait(
      '确实，我也觉得景色十分秀丽。夏季的星座在夜空闪烁着。',
    );
    await era.printAndWait('散发着独特红光的即是天蝎的心脏——心宿二。');
    await ruby.say_and_wait('……啊啊，果然。');
    await ruby.say_and_wait('蝎火');
    await era.printAndWait([
      me.get_colored_name(),
      ' 感觉旁边好像传来了什么声音，可当 ',
      me.get_colored_name(),
      ' 正要确认的时候，',
      ruby.get_colored_name(),
      ' 又恢复了平常的神情。',
    ]);
    era.printButton('「要回去了哦？」', 1);
    era.printButton(`「白天的时候，${sys_get_callname(0, 93)}……」`, 2, {
      disabled:
        era.get('love:85') < 75 ||
        era.get('cflag:0:性别') !== 1 ||
        era.get('cflag:85:性别') !== 0,
    });
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('是。');
      await ruby.say_and_wait(
        '夜风已让我的头脑清醒许多。我打算回去之后，为明天的训练做些准备。',
      );
      await era.printAndWait([
        '说完后，',
        ruby.get_colored_name(),
        ' 掉头就走。说不定这场散步对',
        ruby.sex,
        '来说，根本就是非必要的事物。',
      ]);
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 为这多余的提案有没有给',
        ruby.sex,
        '添麻烦而兀自忧心时——',
      ]);
      await ruby.say_and_wait('我也，想成为那样的存在。');
      await era.printAndWait('从小小的背影中，传来了这句话。');
      await era.printAndWait([
        '彼此的心意稍微想通了，',
        me.get_colored_name(),
        ' 独自在这个夜晚细细品味着这份喜悦。',
      ]);
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 闻言弯下身子，手指伸进鞋跟将皮鞋脱下……然后一脚把 ',
        me.get_colored_name(),
        ' 踹倒在了地上。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 皱起眉头，心里不太高兴，但抬头一看。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 小小的足踝柔润滑腻，大小和 ',
        me.get_colored_name(),
        ' 的手掌差不多大。',
      ]);
      await era.printAndWait([
        '生气 ',
        me.get_colored_name(),
        ' 的 ',
        me.get_colored_name(),
        ' 选择……',
      ]);
      era.printButton('用牙齿轻轻啃。', 1);
      era.printButton('用嘴唇吻掌心。', 2);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 好像很怕痒，',
        me.get_colored_name(),
        ' 用舌头一直延伸到',
        ruby.sex,
        '轻盈的腿腰时，',
        ruby.sex,
        '差点忍不住大叫起来。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 坏心眼地用手指摆出『噤声』的手势提醒，',
        ruby.get_colored_name(),
        ' 立刻用双手按住嘴唇。',
      ]);
      await era.printAndWait(
        '夜晚的月光算不得明亮，但是要看清那块桃园禁地，也是绰绰有余。',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 撑开 ',
        ruby.get_colored_name(),
        ' 的双腿，挺进那道随着 ',
        ruby.get_colored_name(),
        ' 喘息一开一合的妖艳入口。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的下腹随着 ',
        me.get_colored_name(),
        ' 一寸寸的前进剧烈抖动，等到深入，又化为扩散至全身的颤抖。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 温柔地抽插。']);
      await ruby.say_and_wait('呜呜——');
      await era.printAndWait([
        '突然间，',
        ruby.get_colored_name(),
        ' 捂着嘴巴发出惨叫般的声音，身体抬起如拱桥。',
      ]);
      await era.printAndWait([
        ruby.sex,
        '的阴道整个紧缩，一圈圈地紧箍在 ',
        me.get_colored_name(),
        ' 的肉杆上。',
      ]);
      era.printButton('射精。', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 这时已经全身发烫、汗水淋漓。',
      ]);
      await era.printAndWait([
        '伴随着 ',
        me.get_colored_name(),
        ' 的射精，',
        ruby.get_colored_name(),
        ' 的下体也射出一些透明的潮液。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的身体真是被上天眷顾的优体，能够让',
        ruby.sex,
        '轻松享受性爱的愉悦。',
      ]);
      await era.printAndWait([
        '即使本人疲惫不堪，',
        ruby.sex,
        '的雌性通道却开始本能地痉挛蠕动。',
      ]);
      await era.printAndWait([
        '那种感觉像是无数细小的柔软触手，在同时抚弄 ',
        me.get_colored_name(),
        ' 的小训练员。',
      ]);
      await era.printAndWait([
        '一阵拨弄后，',
        me.get_colored_name(),
        ' 又重振雄风。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '当最后一次性交快要结束时，',
        me.get_colored_name(),
        ' 已经不敢留在 ',
        ruby.get_colored_name(),
        ' 体内了。',
      ]);
      await era.printAndWait('这具娇躯简直要把人的魂都抽干才罢休。');
      await era.printAndWait([ruby.get_colored_name(), ' 的小腹微微隆起。']);
      era.printButton('用手压一下。', 1);
      await era.input();
      await era.printAndWait('肚子里满满的浓精，把沙滩玷污地遍地狼藉。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 用来捂住嘴巴的手，早已举在头上无力垂下。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 想把 ',
        ruby.get_colored_name(),
        ' 带回集训所，双腿却不断发抖。',
      ]);
      await era.printAndWait('最后两个人爬着回到了房间。');
      const pregnant_cache = era.get('cflag:85:妊娠阶段');
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      end_ero_and_train();
      era.set('cflag:85:妊娠阶段', pregnant_cache);
    }
  };

  handlers[95 + 32] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('夏季合宿结束（资深年）', ruby);
    await ruby.say_and_wait('为了使命，应有奉献自身的觉悟。');
    era.printButton('「奉献？」', 1);
    await era.input();
    await ruby.say_and_wait([
      sys_get_colored_callname(85, 93),
      ' 是对的，我……',
    ]);
    era.printButton('「真的是对的吗？」', 1);
    await era.input();
    await ruby.say_and_wait('诶？');
    era.printButton(`「${m_call_r}，你觉得凯斯奇迹这样就好了吗？」`, 1);
    await era.input();
    await ruby.say_and_wait('！');
    await ruby.say_and_wait('……');
    await era.printAndWait([ruby.get_colored_name(), ' 陷入了沉思。']);
    era.drawLine();
    await era.printAndWait([
      '晚上，先室友一步回到寝室的 ',
      ruby.get_colored_name(),
      ' 正喃喃自语。',
    ]);
    await ruby.say_and_wait('我们，很像……');
    await ruby.say_and_wait('血脉、『奇迹』，赋予了我们使命和有目共睹的才能。');
    await ruby.say_and_wait('但有一定的不同，那是……');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '，你的前路……']);
    await ruby.say_and_wait('以那种脚步前进，未来只会……');
    await ruby.say_and_wait([
      sys_get_colored_callname(85, 93),
      ' ',
      ruby.sex,
      '自己，觉得这样就好了吗？',
    ]);
    await me.used_to_say_and_wait('真的是对的吗？');
    await me.used_to_say_and_wait('你觉得凯斯奇迹这样就好了吗？');
    await ruby.say_and_wait('不可能好。');
    await ruby.say_and_wait('我，不能允许……');
    await era.printAndWait('夏天的集训，在不安中结束了。');
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    flags.wait_flag =
      get_attr_and_print_in_event(85, attr_change, 0) || flags.wait_flag;
  };
};
