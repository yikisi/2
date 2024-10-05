const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { penis_colors, vp_status_enum } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await defender.say_and_wait('呐，进来吧❤️～');
      await attacker.print_and_wait(
        '眼前的少女，张开了双臂、将眼前的人儿涌入怀中。',
      );
      await attacker.print_and_wait(
        '身下的肉棒，伴随着一声「啊」响，很轻松的就进入了穴中。',
      );
      await attacker.print_and_wait(
        '一面感受着面前的宽臂，一面抚摸着下腹的凸起。',
      );
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait('还有那撕裂着自己处女的阵阵痛意——');
        await defender.say_and_wait('这下，终于……');
        await defender.say_and_wait([
          '终于在我的全身都刻下自己的标记了呢，',
          sys_get_colored_callname(defender.id, attacker.id),
          '～',
        ]);
      } else {
        await defender.say_and_wait([
          '啊……看起来，接下来我要被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 彻底的侵犯了呢❤️～',
        ]);
      }
    } else {
      await attacker.print_and_wait('插入、插入、插入……不停地摇动下体。');
      await attacker.print_and_wait([
        '想要把更多的精华，注入 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体。',
      ]);
      await defender.say_and_wait('咕❤️……那里❤️好厉害❤️～');
      await attacker.print_and_wait([
        '明明 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 正吐着舌头呻吟，却完全感受不到放荡的要素。',
      ]);
    }
  };

  handlers[ero_hooks.missionary_anal_sex] =
    handlers[ero_hooks.sitting_anal_sex] =
    handlers[ero_hooks.standing_anal_sex] =
    handlers[ero_hooks.suspended_congress_anal_sex] =
    handlers[ero_hooks.ask_cowgirl_anal_sex] =
      async (attacker, defender, hook) => {
        if (defender.id !== 100) {
          throw new Error();
        }
        if (hook.arg) {
          await attacker.print_and_wait(['这么大的肉棒，真的塞得进后庭吗？']);
          await attacker.print_and_wait([
            '正在烦恼着生理上是否合理，而 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 却主动伸出双手张开了后庭。',
          ]);
          await defender.say_and_wait(['呐……进来吧～？']);
          await attacker.print_and_wait([
            '绯红的脸上莞尔一笑，主动地迎接着「异物」对后穴的侵入。',
          ]);
        } else if (era.get('exp:100:性交次数') > 0) {
          await defender.say_and_wait([
            '被侵犯了❤️不仅仅是小穴，就连屁股也被侵犯了呐❤️～',
          ]);
          await attacker.print_and_wait([
            '一只手在脸旁比了个V字，双眸向上看又伸出了舌头，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 露出了就像是扮鬼脸一般的表情。',
          ]);
          await defender.say_and_wait([
            '嗯？我在干什么？唔……我听说这样的姿势，能让 ',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 更兴奋来着呢～',
          ]);
          await attacker.print_and_wait([
            '一面说着，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 扭动着自己丰满的屁股……',
          ]);
          await defender.say_and_wait([
            '啊啦，能感觉身体里的变大了呢❤️～看来是真的有效呐～',
          ]);
        } else {
          await defender.say_and_wait(['啊❤️、唔❤️……噗噗、嗯❤️……']);
          await attacker.print_and_wait([
            '伴随着后穴的开拓，呻吟声不自觉地从 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的口中流出。',
          ]);
          await attacker.print_and_wait([
            '是喜欢这种后庭的玩法？还是单纯的忍受着这样的刺激？无论是哪个都好，重要的是，后庭内的肉棒正渐渐肿大——',
          ]);
          await defender.say_and_wait([
            '唔❤️……要射了吗？哈❤️……要射到后穴里？还是小穴里？还是说……',
          ]);
          await attacker.print_and_wait([
            '像是开玩笑般的，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 一只手在自己的嘴旁比了个「V」字。',
          ]);
          await defender.say_and_wait(['还是说，要射在我的嘴里呐？❤️～']);
        }
      };

  handlers[ero_hooks.doggy_style] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '银灰色的头发垂落在身后，白皙的后背与丰满的肥臀一览无余。',
      ]);
      await defender.say_and_wait([
        '这个体位完全看不见 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 呐……真讨厌呢～',
      ]);
      await attacker.print_and_wait([
        '将脸埋在身下的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，发出了小小的抗议。',
      ]);
      await attacker.print_and_wait([
        '抗议自然无效，肿胀的肉棒，已经向那肥臀下的小穴所逼近——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，双手用力抓着，缓解着身下的疼痛。',
        ]);
        await defender.say_and_wait([
          '没想到，自己珍藏了十几年的处女，在看不到的情况下就失去了呢。',
        ]);
        await defender.say_and_wait([
          '呐……',
          sys_get_colored_callname(defender.id, attacker.id),
          '，要负起责任来哦？',
        ]);
      }
    } else {
      await attacker.print_and_wait(['就像小狗一样的、动物般的交合。']);
      await attacker.print_and_wait([
        '揉捏着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁股，不断的将肉棒往小穴中抽送。',
      ]);
      await attacker.print_and_wait([
        '「啪！」朝着屁股用力的拍击，穴内的紧缚感便猛地变强。',
      ]);
      await defender.say_and_wait([
        '噗咕呼❤️……不够紧吗？明白了❤️……我会用力夹紧的❤️～噗噗❤️……',
      ]);
      await attacker.print_and_wait(['没有沟通，但却能通过这种方式进行交流。']);
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        '，果然很喜欢「这种」方式吗？',
      ]);
    }
  };

  handlers[ero_hooks.doggy_style_anal_sex] =
    handlers[ero_hooks.hug_sitting_anal_sex] =
    handlers[ero_hooks.hug_standing_anal_sex] =
    handlers[ero_hooks.hug_suspended_congress_anal_sex] =
      async (attacker, defender, hook) => {
        if (defender.id !== 100) {
          throw new Error();
        }
        if (hook.arg) {
          await attacker.print_and_wait([
            '「啪、啪」，伴随着清脆的声响、',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 白皙的肥臀上多出了两个赤红的印子。',
          ]);
          await attacker.print_and_wait([
            '就像是理解了在拍击肥臀所蕴藏的深意，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的双手随即来到了后庭旁，张开了自己的后穴。',
          ]);
          await defender.say_and_wait(['啊❤️……噗❤️、哈❤️～～～']);
          await attacker.print_and_wait([
            '肉棒一点点的深入，背对着自己的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 便发出一点点的娇喘。',
          ]);
          await attacker.print_and_wait([
            '……明明正对着的时候还在假装矜持，可一旦背对着的时候，就暴露了本性吗？',
          ]);
        } else if (era.get('tcvar:100:接近高潮')) {
          await attacker.print_and_wait(['啪！啪！啪！啪！……']);
          await attacker.print_and_wait([
            '伴随着节奏拍击着 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的臀部，在一次次后庭的紧缩中迎来欢愉的高潮。',
          ]);
          await attacker.print_and_wait([
            '原本白嫩的肥臀如今已是一片红肿，即便只是轻轻敲打，也能迎来小穴的泛滥。',
          ]);
          await defender.say_and_wait(['哈❤️……不行❤️不行❤️……已经、不行了❤️。']);
          await attacker.print_and_wait([
            '在一次次快感之中逐渐放荡的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '，如今已经失去了往常的余裕，就像是在求饶一般，在一次次泛滥中重复着相似的话语。',
          ]);
          await attacker.print_and_wait([
            '在下体处弄得粘稠的手指伸向了 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的脸庞，放入',
            defender.sex,
            '的嘴中，被 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 贪婪的吸吮、吞下。',
          ]);
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            ' 的……手指❤️～',
          ]);
          await defender.say_and_wait([
            '我已经……是 ',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 的东西了❤️。',
          ]);
        } else {
          await attacker.print_and_wait([
            '每次抽插，都能感觉到 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的颤抖。',
          ]);
          await attacker.print_and_wait([
            '就像是刻意忍耐着娇喘一般，听不见放荡的娇喘，而只能隐隐听到「呜呜～」的声音。',
          ]);
          await attacker.print_and_wait(['「啪！～」']);
          await defender.say_and_wait(['啊❤️']);
          await attacker.print_and_wait([
            '而每当这个时候，只要一拍 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的屁股，后穴内就会为之一紧，就连空虚的小穴也会肉眼可见的湿润。',
          ]);
          await attacker.say_and_wait([
            '呐，',
            sys_get_colored_callname(attacker.id, defender.id),
            '……这还只是个开始哦？',
          ]);
          await defender.say_and_wait(['……❤️']);
        }
      };

  handlers[ero_hooks.sitting] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '面对面地，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 坐在了自己的大腿之上。',
      ]);
      await attacker.print_and_wait(['双手围在脖子上，两张脸离的很近很近。']);
      await defender.say_and_wait(['哎嘿嘿……这样做的话，感觉很让人害羞呢。']);
      await attacker.print_and_wait([
        '脸上渐渐被绯色所侵染，用膝盖立起了身体的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，慢慢的在顶着小穴的肉棒上坐了下来……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 微微的皱了下眉头，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await attacker.say_and_wait(['……会很痛吗？']);
        await defender.say_and_wait(['嗯，稍微有一点点呢……']);
        await defender.say_and_wait([
          '不过呢……只要能看着 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '，不管是什么痛苦，一定都可以克服哦❤️～',
        ]);
        await attacker.print_and_wait([
          '扶着自己的脸，眼前的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 露出了温柔的笑容。',
        ]);
      }
    } else {
      await attacker.print_and_wait([
        '环绕着自己的脖颈，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在身前扭动着腰姿。',
      ]);
      await defender.say_and_wait([
        '唔❤️……要再快一点吗？还是就这样？……嗯❤️～哪种对 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 更舒服呢？',
      ]);
      await attacker.print_and_wait([
        '明明是被侵犯的一方，但却比我还要主动。被小穴包裹着的肉棒，几乎被无微不至的「关照」。',
      ]);
      await attacker.print_and_wait([
        '……即便不去可以的抬弄着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁股，',
        defender.sex,
        '也会自己上下抽动的吧？',
      ]);
      await defender.say_and_wait(['❤️～']);
      await attacker.print_and_wait([
        '满脸赤红的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 望着自己，满脸都是幸福。',
      ]);
    }
  };

  handlers[ero_hooks.hug_sitting] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '坐在自己的大腿上，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 靠在自己的怀中。',
      ]);
      await attacker.print_and_wait([
        '银灰色的发丝上散发着古朴却又淫靡的气息。',
      ]);
      await defender.say_and_wait([
        '呐，',
        sys_get_colored_callname(defender.id, attacker.id),
        '，不能面对面做吗？',
      ]);
      await attacker.print_and_wait([
        '挺立的肉棒戳弄着小穴的大门，回绝了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的抗议。',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await attacker.say_and_wait(['……会很痛吗？']);
        await defender.say_and_wait(['……很痛哦？']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 摸了摸湿润的眼角。',
        ]);
        await defender.say_and_wait(['所以啊……之后还是，面对面的做吧？']);
      }
    } else {
      await defender.say_and_wait(['啊❤️……噗❤️、哈❤️～～～']);
      await attacker.print_and_wait([
        '小声的呻吟，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 按着膝盖，上下抽送、轻轻地扭动着身体。',
      ]);
      await attacker.print_and_wait([
        '似乎是对不能面对面做的抗议？尾巴没精神的垂在了一旁。',
      ]);
      await attacker.print_and_wait([
        '这样可不行呢……伸出手，如同监工般拽动着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尾巴。转瞬间，穴内便迎来了一股热浪。',
      ]);
      await defender.say_and_wait([
        '唔❤️！？',
        sys_get_colored_callname(defender.id, attacker.id),
        '，尾巴不行——',
      ]);
    }
  };

  handlers[ero_hooks.standing] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait(['贴着墙壁，小腹几乎紧密的贴在一起。']);
      await attacker.print_and_wait([
        '被逼在墙角的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，肉棒顶在',
        defender.sex,
        '那软糯的小穴上，左右摩擦着。',
      ]);
      await defender.say_and_wait(['啊哈哈……已经无路可走了呢。']);
      await attacker.print_and_wait([
        '说罢，完全没有一丝无奈痕迹的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，微笑地抬起了自己的右腿——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await defender.say_and_wait([
          '处女被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 夺走了呢～真是没办法啊～',
        ]);
        await attacker.print_and_wait([
          '却好似完全没有感觉到疼痛一般，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 微笑地说着。',
        ]);
        await attacker.say_and_wait(['……不痛吗？']);
        await defender.say_and_wait(['嗯……还好啦～']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 温柔的说着，话音刚落，便开始扭动起自己的腰身。',
        ]);
        await defender.say_and_wait([
          '倒是 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '……不动起来吗？',
        ]);
      }
    } else {
      await attacker.print_and_wait([
        '小腹紧紧的贴在一起，子宫口一次又一次受到冲击。',
      ]);
      await attacker.print_and_wait([
        '即便是那个温柔的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，在无路可退的情况下，也显出了放荡的神情。',
      ]);
      await defender.say_and_wait(['哈❤️～唔❤️～不要看我这幅表情啦。']);
      await attacker.print_and_wait([
        '明明说的是不想被看到自己的表情，捂住的却是自己的眼睛。',
      ]);
      await attacker.print_and_wait(['这个位置，肉棒可以深深的抵着宫口。']);
      await attacker.print_and_wait([
        '……再不逃跑的话，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的子宫可就要被肉棒攻陷了哦？',
      ]);
    }
  };

  handlers[ero_hooks.hug_standing] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait(['靠着墙壁，肉棒穿插在小穴之上。']);
      await attacker.print_and_wait([
        '明明是被逼至了墙角，穴口却仍在肉杆上下的摩擦。',
      ]);
      await defender.say_and_wait(['背面吗……这个姿势又要被欺负了呢～']);
      await attacker.print_and_wait([
        '……说是被欺负，可明明尾巴已经开心的摆动了起来。',
      ]);
      await attacker.print_and_wait([
        '对于已经发情的',
        defender.get_uma_sex_title(),
        '无需客气。按着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁股，尽情的冲刺吧——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await defender.say_and_wait([
          '「见红」了呢……被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 留下印记了啊。',
        ]);
        await attacker.print_and_wait([
          '看不见 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的表情，只能看到',
          defender.sex,
          '的耳朵在左右摇晃。',
        ]);
        await defender.say_and_wait(['这一次，是被欺负所以没办法啦……']);
        await defender.say_and_wait(['下次，一定要面对面卿卿我我的做哦？']);
      }
    } else {
      await defender.print_and_wait(['屁股上到处都是红色的印子。']);
      await defender.print_and_wait([
        '不仅被拍着屁股，就连尾巴也被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 当做支撑点拽在了手中。',
      ]);
      await defender.print_and_wait([
        '每一次小穴里肉棒对子宫的挤压，都能让自己彻底明白自己正在被「侵犯」的事实。',
      ]);
      await defender.say_and_wait(['哈……被侵犯了、被侵犯了、被侵犯了❤️～']);
      await defender.print_and_wait([
        '明明是不可以的，但一想到自己正在被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 侵犯，正在被拍着屁股、正在被拽着尾巴，心中就不由自主的为之激荡。',
      ]);
      await defender.say_and_wait(
        [
          '哈、哈……这样的表情，绝对不能被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 看到呐❤️～',
        ],
        true,
      );
    }
  };

  handlers[ero_hooks.suspended_congress] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '明明是在赛场上驰骋的',
        defender.get_uma_sex_title(),
        '，可举起来时却一点也不重。',
      ]);
      await attacker.print_and_wait([
        '手指轻易地陷进了丰满的肥臀之中，明明只是一个屁股却格外的贪婪。',
      ]);
      await defender.say_and_wait(['哎呀呀……又是个完全没法逃跑的姿势呢～。']);
      await attacker.print_and_wait([
        '明明说着的是逃跑，但两腿却已经缠入了腰身。',
      ]);
      await attacker.print_and_wait(['正对着肉棒的小穴，也主动地开始吞纳——']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await attacker.say_and_wait(['……会很痛吗？']);
        await defender.say_and_wait(['不痛哦。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 微笑的回答着。',
        ]);
        await defender.say_and_wait(['反正也逃不掉的，对吧❤️～？']);
      }
    } else {
      await defender.print_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 举着屁股抱在怀里，除了缠紧对方的腰身以外，自己什么都做不了。',
      ]);
      await defender.print_and_wait([
        '即便是想要稍稍的想要从肉棒中抽出身体放松一下，也会立刻被肉棒追上再一次扣响子宫的大门。',
      ]);
      await defender.say_and_wait(['这个姿势……真的好不妙。'], true);
      await defender.print_and_wait([
        '就像被当做自慰工具了一般，一边抱着屁股，一边来回抽插着小穴。',
      ]);
      await defender.print_and_wait([
        '子宫愈发的瘙痒，每次撞击穴中时吐出的香舌所夹带着呻吟声也越来越大。',
      ]);
      await defender.print_and_wait([
        '再这样下去，很快就会变成「放荡的',
        defender.get_child_sex_title(),
        '子了吧」。',
      ]);
      await defender.say_and_wait([
        '啊❤️～',
        sys_get_colored_callname(defender.id, attacker.id),
        '，不要看我的表情。',
      ]);
      await defender.say_and_wait(['我快……忍不住了❤️～']);
    }
  };

  handlers[ero_hooks.fucked_suspended_congress] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (attacker.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 抱着屁股面对面举了起来。',
      ]);
      await defender.print_and_wait([
        '明明是在交合，但看起来却像是奶奶抱孙子一样的场景。',
      ]);
      await attacker.say_and_wait([
        '很乖呢，',
        sys_get_colored_callname(attacker.id, defender.id),
        '❤️～要慢慢插进来哦。',
      ]);
      await defender.print_and_wait([
        '在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的协助下，自己的肉棒正对着小穴，伴随着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的动作，慢慢深入穴中……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await defender.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.say_and_wait([
          '处女被 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 夺走了呢～做得很好哦。',
        ]);
        await defender.print_and_wait([
          '就像是完成了什么了不起的成就一般，',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 微笑地说着。',
        ]);
        await defender.print_and_wait(['……不痛吗？虽然很想要这样去问——']);
        await attacker.say_and_wait([
          '接下来要动起来了，不舒服的话记得跟我说哦？火车要进山洞咯～',
        ]);
        await defender.print_and_wait([
          '感觉 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 完全是一副乐在其中的摸样。',
        ]);
      }
    } else {
      await defender.print_and_wait([
        '抓着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的乳头，就像寄生虫一样缠在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的腰上。',
      ]);
      await defender.print_and_wait([
        '肉棒一直在穴中抽插，但却并非是自己在主动挺动的腰身，而是正抱着自己屁股的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 在上下挥动。',
      ]);
      await attacker.say_and_wait([
        '唔❤️啊❤️……可以在快一点吗？要多添煤，火车才能跑的更快……咕❤️～～～',
      ]);
      await defender.print_and_wait([
        '手上的动作越来越快，那温柔的面色与其说是慈爱，倒不如说近乎于淫乱了。',
      ]);
    }
  };

  handlers[ero_hooks.hug_suspended_congress] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '举着屁股，将背对着的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 高高举起。',
      ]);
      await attacker.print_and_wait([
        '整个身体都被托在手中，赤红的肉棒在不停摩擦着女阴。',
      ]);
      await defender.say_and_wait(['完全逃不了了呢……至少，至少是面对面的话……']);
      await attacker.print_and_wait([
        '怀中的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，不知是兴奋还是恐惧地颤抖着。',
      ]);
      await attacker.print_and_wait([
        penis_colors[era.get('cflag:0:茎核类型')],
        '的肉棒，就在这一刻深入了小穴之中——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await defender.say_and_wait([
          '很痛哦，很痛哦，',
          sys_get_colored_callname(defender.id, attacker.id),
          '……？',
        ]);
        await defender.say_and_wait(['所以啊……还是面对面做吧……']);
        await defender.say_and_wait(['好吗？']);
      }
    } else {
      await defender.print_and_wait([
        '子宫正发出着颤抖的警告，重力迫使着小穴重重的压在了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒之上，',
      ]);
      await defender.print_and_wait([
        '就像是被当做自慰工具了一样，被抱在怀中完全动不了。',
      ]);
      await defender.print_and_wait([
        '要是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 松开了正支撑的自己的双手，脚尚且够不到地面的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '，肯定会被肉棒顶着子宫举起来吧。',
      ]);
      await defender.print_and_wait(['那样的话，毫无疑问会「坏掉」的。']);
      await defender.say_and_wait([
        '哈❤️……要掉下去了❤️、要坏掉了❤️、被，要被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 用坏掉了❤️～',
      ]);
      await defender.print_and_wait([
        '环绕着训练员脖颈，被不断抽插而失声娇喘的人，不是那个温柔的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，而只是一个被侵犯而感到欢愉的',
        defender.get_teen_sex_title(),
        '。',
      ]);
      await defender.say_and_wait(['要坏掉了❤️～～～～']);
    }
  };

  handlers[ero_hooks.ask_cowgirl] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '「要自己动哦？」这样说了之后，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 便主动的爬到了自己的身上。',
      ]);
      await attacker.print_and_wait([
        '双腿夹在胯部的旁边，双手十指紧扣，湿润的小穴正顶着一柱擎天的赤红肉棒。',
      ]);
      await attacker.print_and_wait([
        '接下来，只要 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 慢慢的放下腰身就好了。',
      ]);
      await defender.say_and_wait([
        '我毕竟也是',
        defender.get_uma_sex_title(),
        '嘛，',
        sys_get_colored_callname(defender.id, attacker.id),
        '，所以啊，在我满足之前，是不会停下来的哦。',
      ]);
      await defender.say_and_wait(['所以呐……准备好了吗？']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await attacker.print_and_wait([
          '伴随着 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 腰身的落下，赤红的鲜血从小穴处流出，滴答在身下。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await attacker.say_and_wait(['……会很痛吗？']);
        await defender.say_and_wait([
          '嗯……现在还在关心我的 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 我很喜欢啦。',
        ]);
        await defender.say_and_wait([
          '不过呢……比起关心我，我觉得还是先关心一下自己比较好呐。',
        ]);
        await defender.say_and_wait([
          '准备好担负起让我『见红』的责任了嘛，',
          sys_get_colored_callname(defender.id, attacker.id),
          '？',
        ]);
      }
    } else {
      await attacker.print_and_wait([
        '明明一直以来在做爱中都很弱气的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，现在却好像转换了人格般，不停地摆弄着身体。',
      ]);
      await attacker.print_and_wait([
        '摇摆、扭动、抽插，小穴一次又一次的吞噬着肉棒，肉棒一次又一次的因穴压而变转着摸样。',
      ]);
      await attacker.print_and_wait([
        '而十指相扣的双手，被 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 紧紧地抓住，连接下体的胯部，被两只脚深深的夹住。完全没有了逃跑的空间。',
      ]);
      await defender.say_and_wait([
        '呐……你知道吗，',
        sys_get_colored_callname(defender.id, attacker.id),
        '。',
      ]);
      await attacker.print_and_wait([
        '仰望着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的脸庞，绯润的脸蛋上夹杂着危险的气息。',
      ]);
      await defender.say_and_wait(['我一直……都在等着现在这个时候哦？']);
      await attacker.print_and_wait([
        '伴随着心灵之锁被解开的声音，在胯部上的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 开始舞动起了自己的身体……',
      ]);
    }
  };

  handlers[ero_hooks.stimulate_g_spot] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (Math.random() < 0.5) {
      await defender.print_and_wait([
        '肉棒一再的抽插，子宫口被阵阵的撞击，湿润的穴内一次又一次迎来着潮顶。',
      ]);
      await defender.print_and_wait([
        'G点不断被撞击，就连自己也不由得吐出香舌，发出阵阵的娇喘。',
      ]);
      await defender.say_and_wait(['咕哦哦哦齁哦❤️～～～～']);
      await defender.print_and_wait([
        '明明是对于',
        defender.get_child_sex_title(),
        '子来说是不可以发出的，下流、不成体统的声音，但却非常适合被蹂躏G点而发情的雌性。',
      ]);
      await defender.say_and_wait([
        '咕哦齁❤️～要去了、要去了，要去了啊❤️～～～～',
      ]);
    } else {
      await defender.say_and_wait([
        '噗咕❤️～要变成',
        defender.get_child_sex_title(),
        '子了、变成雌性了❤️～',
      ]);
      await defender.say_and_wait([
        '要被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那根臭烘烘的、味道很重，每次训练完后都会翘起来的肉棒变成雌性了啊❤️～～～',
      ]);
      await attacker.say_and_wait(['……你在说什么呢，母畜！']);
      await defender.say_and_wait([
        '咕齁❤️～身体内的肉棒又变大了……被发现了❤️每次训练结束后，都会特别在意 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 小帐篷的事，被发现了❤️',
      ]);
      await defender.say_and_wait([
        '要被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒狠狠地教育啦❤️～～～',
      ]);
    }
  };

  handlers[ero_hooks.stimulate_large_intestine] = async (
    attacker,
    defender,
  ) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (Math.random() < 0.5) {
      await defender.say_and_wait(['唔❤️～～～～屁股、好舒服……']);
      await attacker.print_and_wait([
        '每次肉棒的递送，都能感到一阵火辣辣的痛觉与快感。',
      ]);
      await attacker.print_and_wait([
        '……明明是后庭，是不应该感受到舒服的器官才对。',
      ]);
      await defender.say_and_wait([
        '屁股……要被调教成 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 专用的后穴了呐……',
      ]);
    } else {
      await attacker.print_and_wait([
        '每次抽插后庭，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腰就会十分配合的起来。',
      ]);
      await attacker.print_and_wait([
        '每次蹂躏S状结肠后想要拔出时，都能感觉到强大的穴压恋恋不舍的试图留住肉棒。',
      ]);
      await attacker.say_and_wait([
        '……难道说，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 很喜欢这种玩法吗？',
      ]);
      await defender.say_and_wait(['咕呼❤️～我不知道你在说什么哦❤️～']);
    }
  };

  handlers[ero_hooks.stimulate_womb] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (Math.random() < 0.5) {
      await defender.print_and_wait(['炽热的子宫，隔着一层小腹被手掌所抚摸。']);
      await defender.print_and_wait([
        '而另一边，是正在后庭之中不断挤压子宫的肉棒。',
      ]);
      await defender.print_and_wait(['前后包夹、十面埋伏……']);
      await defender.print_and_wait([
        '明明是如同物品般被彻底的置入 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的鼓掌之下，但却随之感到的是身为雌性的幸福。',
      ]);
      await defender.say_and_wait(['哈❤️已经，彻底逃不掉了～']);
    } else {
      await defender.print_and_wait([
        '一边是贪婪的吞咽着肉棒的后庭，另一边是湿润粘稠的小穴。',
      ]);
      await defender.print_and_wait([
        '不断的刺激子宫之下，粘液不断的从小穴上落下，如银河般垂落在地面上。',
      ]);
      await defender.print_and_wait([
        '不仅仅是小穴，就连另一张小嘴中生出的唾液，也不断的从不断呻吟的唇口中滑落。',
      ]);
      await defender.say_and_wait(['齁呼❤️……哈，小腹好热，好痒。❤️']);
      await defender.say_and_wait([
        '呐，',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 不要只光顾后穴……齁呼❤️……小穴也，插进来吧？',
      ]);
    }
  };

  handlers[ero_hooks.fucked_suspended_congress_anal_sex] = (
    attacker,
    defender,
    hook,
  ) => handlers[ero_hooks.missionary_anal_sex](defender, attacker, hook);
};
