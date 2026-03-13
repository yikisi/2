const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

module.exports = class extends CustomizedLove {
  get_event_vars() {
    return {
      chara_self_name: sys_get_callname(52, 52),
      in_urara: get_chara_talk(52, chara_colors[52][1]),
      relation: new UraraEduMarks().loop === 2 ? 150 : era.get('relation:52:0'),
    };
  }

  async 49(urara, me, callname) {
    const { chara_self_name, in_urara } = this.get_event_vars();
    await print_event_name('觉醒的稚嫩', urara);
    await in_urara.say_as_unknown_and_wait(
      `如果是往常，现在的 ${
        urara.name
      } 理应早已进入了梦乡，但今夜的小${urara.uma_sex_title}却些难以入眠。`,
    );
    await in_urara.say_as_unknown_and_wait(
      `从舍友的床上不断传出的让人脸红心态的低吟声就像某种咒语一般，总将${urara.sex}的思绪带到不知名的某个地方……`,
    );
    era.drawLine();
    await urara.print_and_wait(
      `在床上翻来覆去着，${urara.name} 的思绪也像风雨中的小船般在脑海上晃个不停。`,
    );
    await urara.print_and_wait(
      `就这样闭上眼睛的话，总感觉会像上次那样梦到不得了的事，比如对 ${chara_self_name} 这样那样的 ${callname} 什么的。`,
    );
    await urara.print_and_wait(
      `不过渴求地将 ${chara_self_name} 推倒的 ${callname}，虽然有点可怕，但现在好像接受了也不错的样子？`,
    );
    await urara.print_and_wait(
      `梦里抱着 ${callname} 的${urara.uma_sex_title}那副不害臊的神情也是，以后的 ${chara_self_name} 也会……变成那样不知羞耻的「${urara.phy_sex_title}」吗？`,
    );
    await urara.print_and_wait(
      `这样平等的相拥着，那时的 ${callname} 与 ${chara_self_name}，究竟是谁在渴求谁呢……`,
    );
    await urara.print_and_wait(
      '不行不行，现在还不是胡思乱想的时候！要好好睡觉才行！',
    );
    await urara.print_and_wait([
      `那现在要去提醒一下 `,
      sys_get_colored_callname(52, 61),
      ` 吗？可是这样做一定会惹${urara.sex}生气的，还是 ${chara_self_name} 再努力一下好了……`,
    ]);
    urara.print('呜呜……身体好热，就算掀掉被子也还是好热……');
    era.printButton('试一下，试一下就好……（升级关系）', 1);
    era.printButton('唔……但还是好困啊……（暂停升级）', 2);
    if ((await era.input()) === 1) {
      begin_and_init_ero(52);
      await urara.print_and_wait(
        `然而在褪掉睡衣，将手${
          urara.sex_code - 1 ? '伸进花园' : '伸向肉棒'
        }的瞬间，${urara.teen_sex_title} 娇嫩的身体就已做好了迎接高潮的准备。`,
      );
      await urara.print_and_wait(
        `仅是轻轻一下，小${urara.uma_sex_title}的身体就在比以往任何一次都要激烈的反应下，让无法抑制的让水声打湿了床单。`,
      );
      await urara.print_and_wait(
        `而即使用力捂住嘴不让声音漏出，在不住的颤抖中，对 ${callname} 微弱的呼唤还是从蒙住的被子下偷偷溜走了。`,
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await urara.print_and_wait(
          '不知不觉中，因高潮而挺起的那对雌肉也在急不可耐挤出着奶水。',
        );
        await urara.print_and_wait([
          '即使身体酥软无比，汁水还是不断自发性地挤出着乳首，浸透着',
          urara.teen_sex_title,
          '的睡衣。',
        ]);
        era.println();
        era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
      }
      await urara.print_and_wait(
        `身体发生了无法理解的反应，${chara_self_name} 有点慌张，但欲望依旧占据着身体绝对的支配。`,
      );
      await urara.print_and_wait(
        `在手指失控的深入与不住的娇声呻吟中，小${urara.uma_sex_title}比以往任何一次都沉浸在对某人的爱欲之中。`,
      );
      await urara.print_and_wait(
        `就像初尝发情的幼兽期望着被成年雄性所征服，${chara_self_name} 在被单下不断扭动着腰肢。`,
      );
      await urara.say_and_wait(
        `${callname}……呜……被 ${callname}、粗暴的……不行了、哈啊……`,
      );
      await urara.print_and_wait(
        `被某人施以支配凌虐的妄想仿佛整晚都在持续，${chara_self_name} 甚至不知道自己何时睡着的。`,
      );
      await urara.print_and_wait(
        `等${urara.teen_sex_title}再次睁开眼睛时，已经是第二天被闹钟叫醒的时候了。`,
      );
      await urara.print_and_wait(
        '在发泄了欲望后，除了床的状况有些糟糕外，这一夜竟然睡得意外安稳，只是——',
      );
      await urara.say_and_wait(
        `虽然不是很懂，但是……${callname}、好想来一次……真正的……`,
      );
      await urara.print_and_wait(
        `在${urara.teen_sex_title}起床时的意犹未尽之间，「不知羞耻」的话语竟再次小声地脱口而出了……`,
      );
      era.println();
      await masturbate(52);
      end_ero_and_train();
      await sys_love_uma_in_event(52);
    } else {
      await urara.say_and_wait(`下次还要去见${callname}，还是赶快睡吧……`);
      await urara.print_and_wait(
        `强忍着躁动的身体，用力将尾巴拉到一边，小${urara.uma_sex_title}艰难的在床上翻了个身。`,
      );
      await urara.print_and_wait(
        `用被子与枕头蒙住耳朵，在努力地折腾了一番后，${callname} 终于在室友断断续续的喘息声中进入了梦乡。`,
      );
      await urara.print_and_wait(
        `但在梦中，小${urara.uma_sex_title}又梦见了，像看待「${urara.phy_sex_title}」般热切的将${
          urara.sex
        }推倒的 ${callname}……`,
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await urara.print_and_wait(
          '而醒来的时候，两只不听话的大白兔似乎也因为梦中的发情还在精神的挺立着。',
        );
        await urara.print_and_wait(
          '从挺立的尖端流出的白色汁液，也趁着主人沉浸在梦中将睡衣的胸前浸湿地一塌糊涂。',
        );
        era.println();
      }
      await urara.print_and_wait(
        `于是，被过激的春梦整晚缠绕着的 ${chara_self_name}，第二天还是起晚了。`,
      );
      await urara.say_and_wait(
        `要是 ${chara_self_name} 昨晚没有忍耐，会睡得更好一点吧，大概……`,
      );
      era.set('status:52:熬夜', 1);
      era.set('cflag:52:爱慕暂拒', 49);
    }
    era.set('talent:52:工口意愿', 1);
  }

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 50(urara, me, callname) {
    const { in_urara, relation } = this.get_event_vars();
    await print_event_name('稚嫩的水声', urara);
    new UraraLifeMarks().fuck_buddy = 1;
    await in_urara.say_as_unknown_and_wait('虽然不太愿面对……');
    await in_urara.say_as_unknown_and_wait(
      '但在爱欲的浇灌下，青涩的果实总会成熟为妖艳的蛇果。',
    );
    await in_urara.say_as_unknown_and_wait(
      '那么，日后到底要不要早早摘下这颗甜美的果实呢……？',
    );
    era.drawLine();
    await era.printAndWait([
      '在等待未果于是开始动身寻找后，',
      me.get_colored_name(),
      ' 轻易的找到了 ',
      urara.get_colored_name(),
      ' 所躲藏的阴影。',
    ]);
    await era.printAndWait([
      '掩耳盗铃般的，面色潮红的 ',
      urara.get_colored_name(),
      ' 将幼小身体努力蜷缩进大厅背光的角落中。',
    ]);
    await era.printAndWait([
      '只是即使仅有一墙之隔，沉溺于羞耻快感的小',
      urara.uma_sex_title,
      '依旧没能发现 ',
      me.get_colored_name(),
      ' 已近在咫尺。',
    ]);
    await era.printAndWait(
      '本应穿着整齐的布料仅是凌乱地挂在身上，稚嫩的敏感点毫无保留的暴露在空气中。',
    );
    if (urara.sex_code - 1) {
      await era.printAndWait(
        '十只手指努力地探索着身体的每一个淫靡的角落，不断地从粉嫩的幼穴中拉出粘稠的银丝。',
      );
      await era.printAndWait([
        urara.teen_sex_title,
        '的淫水正源源不断地滴落，在光洁的地板上留下一滩充满背德欲望的小小水洼。',
      ]);
    }
    if (era.get('talent:52:乳房尺寸') >= 1) {
      await era.printAndWait(
        '而与淫水一同洒下的，还有几滴禁忌且不合时宜的乳白色。',
      );
      await era.printAndWait(
        '严实紧绷的束胸被翻开，一对在幼小的身体上有些不协调的膨乳暴露在了观者面前。',
      );
      await era.printAndWait(
        '乳房蓬松柔软的下垂着，向前凸出的乳晕和乳首不受控制地分泌着白色的汁水。',
      );
      await era.printAndWait([
        '就算',
        urara.teen_sex_title,
        '将手臂搭在身前极力捧住两只因发情而乱颤的小怪物，乳白色的水渍也依旧在身下越积越多。',
      ]);
      await era.printAndWait(
        '而这对柔软敏感到成为新性器的自产奶魅肉，也昭示着这幅娇小的身体其实早已做好了准备——',
      );
      await era.printAndWait(
        '准备好在为未来的某一刻能进行哺乳，也准备好了让紧致的小腹成为新的孕袋……',
      );
    }
    await era.printAndWait([
      '此刻的 ',
      urara.get_colored_name(),
      ' 就像一只肥美的幼兔，天真地将诱人的弱点全部展现在了潜伏的捕食者面前。',
    ]);
    await urara.say_and_wait([
      '呜……',
      callname,
      '……',
      me.actual_name,
      '……究竟是怎么了……好舒服、停不下来……',
    ]);
    await era.printAndWait([
      '伴随着能够勾起征服欲的娇嫩哭腔，',
      urara.get_colored_name(),
      ' 在连绵的娇喘中呼唤着 ',
      me.get_colored_name(),
      ' 的名字。',
    ]);
    await era.printAndWait(
      '明知道现在正做着绝对不能被人看到的事，却还是无法抑制地发出着快乐的呻吟。',
    );
    await era.printAndWait([
      '含苞待放的',
      urara.teen_sex_title,
      '，正无助又期待地向看不见的某人展示着自己的身体最不堪的一面。',
    ]);
    if (relation > 150) {
      await urara.say_and_wait([
        me.sex,
        '还在等着我的……明明不可以的，万一让',
        me.sex,
        '看到了、不要……',
      ]);
      await era.printAndWait([
        '带着大脑都被烧坏掉的淫乱神情，',
        urara.get_colored_name(),
        ' 混合着水声淫乱地低语着。',
      ]);
      await era.printAndWait([
        '小小的',
        urara.uma_sex_title,
        '此刻像着了魔一般，不断地搅动着敏感到一触即发的身体。',
      ]);
      await urara.say_and_wait([
        '如果被 ',
        callname,
        ' 看见、如果被 ',
        me.actual_name,
        ' 看见的话，呜……',
      ]);
      await urara.say_and_wait('好想要……但是不行……脑袋要变得奇怪起来了——');
    } else {
      await urara.say_and_wait([
        '明明、我都明白的……',
        callname,
        ' 是那样的人，但是，啊、哈啊……',
      ]);
      await era.printAndWait([
        '虽然精神在抗拒着，但堕入情欲的小',
        urara.uma_sex_title,
        '却无法凭自己停下激烈自慰的手指。',
      ]);
      await era.printAndWait([
        '此刻的 ',
        urara.get_colored_name(),
        ' 的双腿向外折成八字，脊背也因激烈的快感而挺到了极限。',
      ]);
      await urara.say_and_wait([
        '果然我还……',
        urara.get_colored_name(),
        '、还想要相信 ',
        callname,
        '，想要相信 ',
        me.actual_name,
        '……',
      ]);
      await urara.say_and_wait([
        '但是……为什么、现在一想起 ',
        callname,
        '，身体就——',
      ]);
    }
    await era.printAndWait(
      '在无法抑制的绝顶声中，娇小但淫乱的身体迎来了激烈的最高潮。',
    );
    await era.printAndWait([
      '失禁般飞溅的爱液浇灌着地板、打湿了鞋子与半脱的长袜，也浸透了',
      urara.teen_sex_title,
      '的内裤与安全裤。',
    ]);
    await era.printAndWait([
      '欲望得以暂时释放的 ',
      urara.get_colored_name(),
      ' 失神地靠在墙角中，耳朵与尾巴无力地垂着，失去对焦的双眼怔怔的看着某处。',
    ]);
    await era.printAndWait([
      '只是当',
      urara.sex,
      '笨拙地想要收拾身体时，随着双腿的脱力，小',
      urara.uma_sex_title,
      '还是滑坐在了身下那滩逐渐失温的汁水当中……',
    ]);
    await era.printAndWait([
      '当 ',
      urara.get_colored_name(),
      ' 衣衫不整、慌慌张张地跑来与 ',
      me.get_colored_name(),
      ' 汇合时，距约定时间早已晚了好一会儿，但这次 ',
      me.get_colored_name(),
      ' 却连下次注意的提醒都没能说出口。',
    ]);
    await era.printAndWait([
      '为了压抑住当场吃掉 ',
      urara.get_colored_name(),
      ' 的欲望，',
      me.get_colored_name(),
      ' 几乎耗光了精力，更别说去直视那张依旧挂着诱人潮红的小脸了。',
    ]);
    await era.printAndWait([
      '只是视线无处安放的 ',
      me.get_colored_name(),
      ' 还是注意到了，在担当凌乱的裙下，晶莹的液体正顺着湿透的内裤边缘不断流出，沾湿了长袜的边缘……',
    ]);
    sys_change_lust(0, lust_from_palam * 2);
    sys_change_lust(52, lust_from_palam * 4);
    begin_and_init_ero(52);
    await masturbate(52);
    end_ero_and_train();
    era.set('flag:当前互动角色', 52);
  }
};
