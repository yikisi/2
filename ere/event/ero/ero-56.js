const era = require(`#/era-electron`);

const { orgasm_check_list } = require('#/system/ero/sys-calc-ero-status');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');
const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');
const { log_7 } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const { ero_action_names, ero_hooks } = require('#/data/event/ero-hooks');
const { location_name } = require('#/data/locations');

const handlers = {},
  sleep_handlers = {};

[
  require('#/event/ero/common-lines/ero-sleeping-pettings-1'),
  require('#/event/ero/common-lines/ero-sleeping-pettings-2'),
  require('#/event/ero/common-lines/ero-sleeping-fuckings'),
].forEach((f) => f(sleep_handlers, handlers));

async function continue_fucking_common_FUKU(attacker, defender) {
  if (era.get(`tcvar:${defender.id}:接近高潮`)) {
    await defender.say_and_wait('哈❤️啊啊~');
    await defender.print_and_wait([
      defender.get_colored_name(),
      ' 的身体破廉耻的在 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
    ]);

    await defender.print_and_wait(
      '以往元气十足的脸上此时只剩下被情欲完全支配的阿嘿颜，粉唇也大张成惊人的o型，支离破碎的表白不停地从口中流出。',
    );
    if (era.get(`love:56`) > 75) {
      await defender.say_and_wait([
        `喜欢 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` ......最喜欢❤️ `,
        attacker.get_colored_actual_name(),
        ``,
      ]);
    } else {
      await defender.say_and_wait([`肉棒……喜欢……坏，要坏掉了❤️`]);
    }
    await defender.print_and_wait([
      `可能对白兴大人还是有一些羞愧吧，但这份羞愧很快就被当成燃料，用来鼓动着身体用更加下流的扭动去迎合肉棒。`,
    ]);
    await defender.say_and_wait(
      `变得更粗鲁了呢， `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 。`,
      true,
    );

    await defender.say_and_wait(
      `还有那能让身为兼具占卜师和巫女这二重神秘身份的自己堕落成发情母马的，如涌泉般层层叠叠的快感。`,
      true,
    );
    await defender.say_and_wait(
      '不......或许简单的预言什么的，大概还是能做到吧？像是自己很快就要高潮的事实。',
      true,
    );
    await defender.say_and_wait('去了……快要……去了……');
    await defender.say_and_wait('唔呃嗯嗯嗯嗯嗯❤❤❤……');
  } else {
    await defender.print_and_wait([
      `大概是带着些抖M要素的自己早就期望着被训练员这样支配吧？`,
    ]);
    await defender.say_and_wait([`啊哈……❤️哈呼哈…`]);
    await defender.print_and_wait([
      `收紧的穴肉则又被无情的撑开，接踵而来的快感已经让平时能记住复杂祷词的脑袋一片空白了。`,
    ]);
    await defender.say_and_wait([`哈…哈………哈❤`]);
    await defender.print_and_wait([
      `巫女圣洁的俏脸在肉棒大人的进攻下又露出了谄媚的笑容。`,
    ]);
    await defender.say_and_wait([`肉棒......大人？`], true);
    await defender.say_and_wait([`这么叫......白兴大人一定会怪罪的吧？`], true);
    await defender.print_and_wait([
      `但发情栗毛马娘巫女散发着下流气味的湿漉漉发热身体还是诚实的往 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 那靠的更近了一点，`,
    ]);
    await defender.say_and_wait([`就算，被当成飞机杯使用也没关系的......`]);
    await defender.print_and_wait([
      `破廉耻的说出了这样的话语，毕竟，比起不知道什么时候会降下来的神罚，果然还是现在能让自己晕乎乎的快感更重要一点。`,
    ]);
  }
}

async function deep_blow_job_FUKU(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      `脑袋上传来了被抚摸的感觉，来自自家训练员的大手轻柔的按在蓬松的橙发上，似乎在鼓励一般的抚摸着，配着自己的动作，时不时的触碰一下已经耷拉下来的两只耳朵。`,
    ]);
    await attacker.print_and_wait([
      `像是......呜不对......这种姿势，分明就是 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的宠物嘛，是被当成了小狐狸吗？`,
    ]);
    await attacker.print_and_wait([
      `于是已经在肉棒的气味中被训练好的自己明白了来自主人的每一个指令。`,
    ]);
    await attacker.print_and_wait([
      `像是在被拉着左耳时要抿紧双唇压迫肉棒，并用湿润的粉舌裹住敏感的龟头。`,
    ]);
    await attacker.print_and_wait([
      `被扯着右耳时该左右扭动着脑袋，用脸颊内侧的软肉与嫩舌一同服侍着肉棒。`,
    ]);
    await attacker.print_and_wait([
      `而当 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 短促的摸头时，则要吸紧肉棒前端让脸颊淫荡的凹陷下去，并用舌尖磨蹭着铃口。`,
    ]);
    await attacker.say_and_wait([`呜咕——`]);
    await attacker.print_and_wait([
      `腿发软似的开始打颤，小脑袋晕乎乎的加快了吞吐肉棒的动作。`,
    ]);
  } else {
    await attacker.say_and_wait([`呜咕——`]);
    await defender.print_and_wait([
      `双腿发软似的开始打颤，明明能跑长距离的身体也像是支撑不住了一样向前倾倒着，让那俏脸凑近着离肉棒的根部越来越近。`,
    ]);
    await defender.print_and_wait([
      `微眯着那被肉棒的气味熏的睁不开的星星眼，在呼吸间自嘴角漏出带着淡淡肉棒腥味的口水，顺着伸直的雪颈滑落，挂在那对乳球上。`,
    ]);
    await defender.say_and_wait([`阿福？`]);
    await attacker.say_and_wait([`唔……唔唔唔唔……`]);
    await defender.print_and_wait([
      `试探性的问了问身下人的状况，却只得到了支支吾吾的回应，小脸彻底埋在了`,
      defender.get_colored_name(),
      `的胯下的阴毛丛中。`,
    ]);
    await defender.print_and_wait([
      `嘛，既然没事，那就继续吧，将担当的脑袋牢牢地按在了自己胯下，然后不断的前后耸动着腰部，像是真的在抽插着 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的嘴穴一样，尽情的享受着用肉棒连同担当的小嘴喉咙一起侵犯的快感。`,
    ]);
  }
}

handlers[ero_hooks.get_mark] = async (chara_id, _, extra_flag) => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  switch (extra_flag.name) {
    case `欢愉`:
      switch (extra_flag.level) {
        case 1:
          //message = `1`
          if (era.get(`love:56`) >= 75) {
            await era.println();
            await MF.say_and_wait(`呀啊！！！`);
            await me.print_and_wait([
              ` `,
              MF.get_colored_name(),
              ` 移开了视线，在 `,
              me.get_colored_name(),
              ` 询问能否继续时点了点头。`,
            ]);
            await me.print_and_wait(
              `配合着扭起腰，品味着自己一人时无法体验到的快感。`,
            );
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`唔唔！哈啊哈啊……`);
            await me.print_and_wait([
              ``,
              MF.get_colored_name(),
              `歪着头沉思了一会。`,
            ]);
            await MF.say_and_wait(`为什么……好舒服。`);
            await era.println();
          }
          break;
        case 2:
          if (era.get(`love:56`) >= 75) {
            await era.println();
            await MF.say_and_wait(`哈啊啊！！！${me.actual_name}`);
            await me.print_and_wait([
              `在高潮中大声的叫出了 `,
              me.get_colored_name(),
              ` 的名字，平日偶尔能在 `,
              MF.get_colored_name(),
              ` 身上感受到少许来自其为巫女的圣洁。`,
            ]);
            await me.print_and_wait(`此刻彻底荡然无存。`);
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`哈……快！快点！`);
            await me.print_and_wait([
              `尽管因为激烈绝顶而颤抖不止，逐渐被快感支配的 `,
              MF.get_colored_name(),
              ` 对`,
              me.get_colored_name(),
              ` 发出了继续袭击的请求。`,
            ]);
            await era.println();
          }

          break;
        case 3:
          if (era.get(`love:56`) >= 75) {
            await era.println();
            await MF.say_and_wait(`肉棒……再激烈些……肉棒大人！！！`);
            await me.print_and_wait([
              `随着性爱带来的快感逐步覆写完 `,
              MF.get_colored_name(),
              ` 的意识。`,
            ]);
            await me.print_and_wait(
              `马娘口中嚷嚷着的淫语，说明了白兴大人的彻底失败。`,
            );
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`唔啊啊！！！`);
            await me.print_and_wait([
              `被绝顶支配的`,
              MF.get_colored_name(),
              `失神望着不知待在哪里的神明。`,
            ]);
            await me.print_and_wait([
              `从嘴里模糊不清的恳求来看，身体完全屈服的她此时的祈祷对象已经变成了给她带来如此快感的`,
              me.get_colored_name(),
              `了。`,
            ]);
            await era.println();
          }

          break;
      }
      break;
    case `同心`:
      switch (extra_flag.level) {
        case 1:
          await era.println();
          await MF.say_and_wait(`咿啊～！`);
          await me.print_and_wait([
            ``,
            MF.get_colored_name(),
            `靠在了`,
            me.get_colored_name(),
            `的身上，任凭摆布。`,
          ]);
          await me.print_and_wait(`面泛春光，娇躯一颤一颤地跳动着。`);
          await era.println();

          break;
        case 2:
          await era.println();
          await MF.say_and_wait(`呀！！！`);
          await MF.say_and_wait(`不，没事~命定之人请继续吧！`);
          await me.print_and_wait([
            MF.get_colored_name(),
            `那蒙上了层水雾的橙色双眸注视着`,
            me.get_colored_name(),
            `。`,
          ]);
          await me.print_and_wait(
            `偶尔触碰到她的敏感带时，她便会配合发出可爱的叫声。`,
          );
          await era.println();

          break;
        case 3:
          await era.println();
          await me.print_and_wait([
            `闭上了眼睛的 `,
            MF.get_colored_name(),
            ` 将手臂环在 `,
            me.get_colored_name(),
            ` 的脖子上，而后稍稍踮起了脚尖，让双唇贴着 `,
            me.get_colored_name(),
            ` 的耳朵。`,
          ]);
          await MF.say_and_wait(`主人……`);
          await MF.say_and_wait(`嘿嘿，命定之人喜欢这个称呼吗？`);
          await MF.say_and_wait(`那么，主人接下来把小福玩坏也没事哦！`);
          //set('callname:32:0', [callname.content, '主人大人']);
          await era.println();
          break;
      }

      break;
    case `苦痛`:
      switch (extra_flag.level) {
        case 1:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`哈啊！好疼！！！`);
            await MF.say_and_wait(`没关系的……`);
            await MF.say_and_wait(`只是希望能再温柔一点……`);

            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`呜……`);
            await me.print_and_wait([
              ``,
              MF.get_colored_name(),
              `的表情因为疼痛而变得扭曲，但她只是尽力咬紧牙关，漏出些许悲鸣。`,
            ]);
            await era.println();
          }

          break;
        case 2:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`咿啊～！？`);
            await MF.say_and_wait(`我是有些抖M啦……但这实在有些过分了吧！？`);

            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`咿啊～！？`);
            await MF.say_and_wait(`白兴大人……救救我……`);
            await era.println();
          }

          break;
        case 3:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`不要！不要啊！！！`);
            await MF.say_and_wait(`我不想……我不想命定之人变成这样子……`);
            await me.print_and_wait([
              ``,
              MF.get_colored_name(),
              `的身体因为疼痛而颤抖不止，眼泪啪嗒啪嗒的滴落下来。`,
            ]);
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`……`);
            await me.print_and_wait([
              `如人偶般任凭`,
              me.get_colored_name(),
              `的摆布，这位名叫`,
              MF.get_colored_name(),
              `的赛马娘正再次尝试将自己的记忆封闭起来。`,
            ]);
            await era.println();
          }
      }

      break;
    case `羞耻`:
      switch (extra_flag.level) {
        case 1:
          await era.println();
          await MF.say_and_wait(`呜……请，请继续吧……`);
          await me.print_and_wait([
            `欢爱过程中的`,
            MF.get_colored_name(),
            `试图用手蒙住自己的眼睛，看来她对这样的行为还是有点害羞。`,
          ]);

          await era.println();
          break;
        case 2:
          await era.println();
          await MF.say_and_wait(`唔……还是有点害羞……`);
          await MF.say_and_wait(`要是被白兴大人看到话。`);
          await era.println();

          break;
        case 3:
          await era.println();
          await MF.say_and_wait(`啊啊啊，无所谓了……`);
          await me.print_and_wait([
            `自暴自弃般地说出了这番话，`,
            MF.get_colored_name(),
            `索性配合起`,
            me.get_colored_name(),
            `愈发大胆的动作来。`,
          ]);
          await MF.say_and_wait(`我……真是败廉耻的行为。`);
          await era.println();
      }

      break;
    case `反抗`:
      switch (extra_flag.level) {
        case 1:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`这，这就是训练员喜欢的吗？`);
            await MF.say_and_wait(`稍稍有点过分了呢……`);
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`啊……我可以拒绝吗？`);
            await MF.say_and_wait(`训练员先生，我偶尔也是会生气的哦！`);
            await era.println();
          }

          break;
        case 2:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`那个……训练员，是有些讨厌我了吗？`);
            await MF.say_and_wait(
              `我，我会好好听话的……告诉我，告诉我怎么取悦训练员吧……`,
            );
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`是这样吗？`);
            await me.print_and_wait([
              `原本琥珀般温暖的眼眸变得冰冷，锐利的十字星审视着`,
              me.get_colored_name(),
              `。`,
            ]);
            await era.println();
          }

          break;
        case 3:
          if (era.get(`love:56`) > 75) {
            await era.println();
            await MF.say_and_wait(`命定之人……`);
            await MF.say_and_wait(`……姐姐，我……`);
            await MF.say_and_wait(`我该怎么办……`);
            await me.print_and_wait(`嵌着星星的琥珀色眼眸，此刻黯淡无光。`);
            await era.println();
          } else {
            await era.println();
            await MF.say_and_wait(`一定要这样吗？`);
            await me.print_and_wait([
              `一瞬间，宛如被神明凝视般的压力降临到了`,
              me.get_colored_name(),
              `的身上。`,
            ]);
            await MF.say_and_wait(`命定之人……虽然现在觉得这个称呼有些恶心了。`);
            await MF.say_and_wait(
              `但多少还算是占卜的结果……所以，接下来能不要这么对我吗？`,
            );
            await era.println();
          }
      }

      break;

    case `淫纹`:
      if (extra_flag.new) {
        switch (extra_flag.level) {
          case 1:
            //message = `1`
            await me.print_and_wait(
              `小腹上那个繁复复杂的图纹,显示出了卵子的活动轨迹……`,
            );
            await me.print_and_wait(
              `冒着粉红亮光的纹路，暗示主人身份般绘出了类似神道教的鸟居的镂空。`,
            );
            await MF.say_and_wait(`没想到训练员还会这个……`);
            await era.println();
            break;
          case 2:
            await MF.say_and_wait(`唔……纹路变得更加复杂了呢……`);
            await me.print_and_wait([
              ``,
              MF.get_colored_name(),
              `沉默地看着小腹上坐落于子宫位置的鸟居周围的纹饰……`,
            ]);
            await MF.say_and_wait(`不知道白兴大人会怎么想。`);
            await era.println();
            break;
          case 3:
            await me.print_and_wait(
              `更加复杂的形状，添加了显示出怀孕率和受孕的功能……`,
            );
            await me.print_and_wait([
              `被神选中的巫女抚摸着脐下的位置，自觉的对`,
              me.get_colored_name(),
              `张开了双腿。`,
            ]);
            await me.print_and_wait(
              `能拉出丝线的小穴随着呼吸间闪烁的淫纹，有节奏的张合着。`,
            );
            await MF.say_and_wait(`哈……哈……`);
            await me.print_and_wait(
              `冒着粉光的眸子，呆滞地看着`,
              me.get_colored_name(),
              `。`,
            );
            await era.println();
            break;
        }
      }
  }
};

handlers[ero_hooks.ero_end] = async () => {
  /*
  console.log(`ero-56.js`);
  console.log(`love: ${love}`);
  console.log(`out: ${out}`);
  console.log(`satis: ${satis}`);
  console.log(`statin: ${statin}`);
  */
  // 1 是否脱力
  // 2 是否满足
  // 3 是否进行Vsex
};

handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 亲吻 ',
    defender.get_colored_name(),
    ' 的嘴唇…… 】',
  ]);

  if (hook.arg) {
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait('近的可以清楚看到对面星星眼中泛着的水雾。');
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      `……`,
    ]);
    await attacker.print_and_wait([
      `不自觉地用手环抱住`,
      attacker.get_colored_name(),
      `，尽力回应伸入她口腔中的舌头。`,
    ]);
    await attacker.print_and_wait([
      `双唇分离，二人的舌头之间悬起了一座银色的橋梁，又被呼出的热气吹落。`,
    ]);
    await defender.say_and_wait('嗯哈……啾哈…….❤️');
    await attacker.print_and_wait([
      `好不容易缓过一口气的`,
      sys_get_colored_callname(attacker.id, defender.id),
      `又开始索吻。`,
    ]);
  } else {
    await defender.say_and_wait('啾噜……嗯……噗哈……啾噜……咕嗯');
    await defender.print_and_wait([
      `分明自己是跑长距离的赛马娘，才是应该主导的那一方啊……`,
    ]);
    await defender.print_and_wait([
      `可来自命定之人的，成年人令人安心的气味，顺着交换过来的唾液与气息灌入自己的身体中的时候……`,
    ]);
    await defender.print_and_wait([`……要……要融化了……`]);
    await attacker.print_and_wait([
      `在偶尔唇分时的休息时间，满脸潮红的`,
      defender.get_colored_name(),
      `小口半张着不断吐出热气，眼角还含着一点泪珠。`,
    ]);
    await defender.say_and_wait([
      ``,
      attacker.get_colored_actual_name(),
      `……喜欢……`,
    ]);
  }
};

handlers[ero_hooks.french_kiss] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 对 ',
    defender.get_colored_name(),
    ' 法式湿吻……】',
  ]);
  if (hook.arg) {
    await attacker.print_and_wait(`自然不满足于浅尝辄止。`);
    await attacker.print_and_wait([
      `于是进一步将舌头深深的插了进去，尽情蹂躏着`,
      sys_get_colored_callname(attacker.id, defender.id),
      `的口腔。`,
    ]);
    await attacker.print_and_wait(`啪嗒啪嗒地，让动起来的舌头发出下流的水声。`);
    await defender.say_and_wait('唔！❤️');
    await attacker.print_and_wait([
      `当二人的舌头纠缠在一起时，怀中的栗毛马娘自喉中发出了黏糊糊的应答声。`,
    ]);
    await attacker.print_and_wait([
      `身体也是紧紧的贴在一起，快感随着舌头与舌头，口腔粘膜，或是牙齿的接触传递到对方身上，让尝试做出回应的`,
      sys_get_colored_callname(attacker.id, defender.id),
      `身体止不住的颤抖起来。`,
    ]);
    await attacker.print_and_wait([
      `只得享受来自于`,
      sys_get_colored_callname(defender.id, attacker.id),
      `的，充满侵略性的吻。`,
    ]);
  } else {
    await defender.say_and_wait('嗯……啾噜……咕嗯……');
    await defender.print_and_wait([
      `明明`,
      sys_get_colored_callname(defender.id, attacker.id),
      `是人类但是……肺活量强的有些犯规了呀……`,
    ]);
    await defender.print_and_wait([
      `舌头充满仪式感的一颗颗舔过牙齿，缠绕着自己的舌头，摩挲着舌根……`,
    ]);
    await defender.print_and_wait([
      `还有流入自己口腔里的，来自`,
      sys_get_colored_callname(defender.id, attacker.id),
      `黏糊糊的唾液……`,
    ]);
    await defender.say_and_wait('咕噜……唔哈……❤️');
    await defender.print_and_wait([
      `在接吻的余韵，自己便会急促的娇喘着，让充满 `,
      attacker.get_colored_actual_name(),
      ` 荷尔蒙的气息流遍全身。`,
    ]);
    await defender.say_and_wait('那个，总是还想继续呀……❤️', true);
    //  await attacker.print_and_wait([`在接吻的余韵，`,sys_get_colored_callname(attacker.id, defender.id),`急促的娇喘着，`]);
  }
};

handlers[ero_hooks.talk] = async (attacker, defender) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 和 ',
    defender.get_colored_name(),
    ' 闲话家常……】',
  ]);
  if (Math.random() < 0.5) {
    await attacker.say_and_wait('福来算是犬系还是猫系的女友呢？');
    await defender.say_and_wait('欸！这个吗！');

    await attacker.say_and_wait('……到不如说是狐狸系？');
    attacker.print([
      `被点出自己本性的 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 脸变得更红了。`,
    ]);
  } else {
    await attacker.say_and_wait('这样像是在从白兴大人手中抢人呢……');
    await attacker.print_and_wait([
      '看着身上泛着樱红的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      `不由得这么说到。 `,
    ]);
    await attacker.print_and_wait('……没有被踢……也没有收到回复');
    attacker.print('……但是脸红得很厉害。');
  }
};

handlers[ero_hooks.lure] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 在 ',
    defender.get_colored_name(),
    ' 的耳边说着绵绵情话……】',
  ]);
  await attacker.say_and_wait(`阿福。`);
  await attacker.print_and_wait(
    `轻轻的，对着那对细长的耳朵，唤着面前担当马娘的名字。`,
  );
  await defender.say_and_wait([
    `那……那个， `,
    sys_get_colored_callname(defender.id, attacker.id),
    ` 。`,
  ]);
  await attacker.print_and_wait([
    `攀住 `,
    attacker.get_colored_name(),
    ` 的衣服下摆，像只狐狸一样贴在 `,
    attacker.get_colored_name(),
    ` 的胸口，用充满期待的目光回应 `,
    attacker.get_colored_name(),
    ` 。`,
  ]);
  await attacker.print_and_wait([`是该说些什么的时候吧？`]);
  await attacker.print_and_wait([
    `不过，还是很享受抱着 `,
    sys_get_colored_callname(attacker.id, defender.id),
    ` 柔软身体的现在呀，大手不安分的在占卜少女的身上四处游走，无论是安产型的臀肉，平日束缚在衣服里的巨乳，还是那双匀称的到好处的双腿。`,
  ]);
  await attacker.print_and_wait([
    `能看到 `,
    sys_get_colored_callname(attacker.id, defender.id),
    ` 的星星瞳，因为 `,
    attacker.get_colored_name(),
    ` 的动作闪烁着。`,
  ]);
  hook.arg =
    (!defender || era.get(`love:${defender}`) >= 50) &&
    !era.get(`tcvar:${defender}:发情`) &&
    Math.random() < Math.log(era.get(`abl:${attacker}:甜言蜜语`) + 2) / log_7;

  if (hook.arg) {
    await era.printAndWait([defender.get_colored_name(), ' 变得兴奋起来了……']);
  }
};

handlers[ero_hooks.missionary] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 以正常位插入了 ',
      defender.get_colored_name(),
      ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
    ]);

    await defender.say_and_wait(`唔……可以的。`);
    await attacker.print_and_wait([
      `两手环在了 `,
      attacker.get_colored_name(),
      ` 的背后，像是不想让自己的通红脸颊被看到似的把头靠在了 `,
      attacker.get_colored_name(),
      ` 的肩膀上。`,
    ]);
    await attacker.print_and_wait([
      `肉棒伴着淫靡的水声插入了 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的小穴，于是她环抱在背后的双手便下意识的缩紧，连带着让那对匀称的双腿也在你背后猛地绷直，让肉棒径直捅入更深的地方。`,
    ]);
    await defender.say_and_wait('呜呜！好烫……❤️');
    await attacker.print_and_wait([
      `就算对面把头侧着也没用，只是听着耳侧 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 
      漏出的可爱喘息声，一只因为滚烫肉棒的陡然快感而双眼翻白的栗毛马娘形象便清晰的浮现在 `,
      attacker.get_colored_name(),
      ` 的脑海中。`,
    ]);
    await defender.say_and_wait('……哈嗯❤️');
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 以正常位抽插着 ',
      defender.get_colored_name(),
      ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.doggy_style] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 以后背位插入了 ',
      defender.get_colored_name(),
      ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
    ]);
    await defender.say_and_wait([`……这样趴着吗？`]);
    await defender.print_and_wait([
      `按 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的指示如幼犬般趴在地面。`,
    ]);
    await defender.print_and_wait([
      `唔……明明自己没有特意训练过，但就像是得到了莫名的神启一样，
          知道要把自己的圆润屁股抬到一个合适的高度，顺带懂事的让湿漉漉的马尾甩在一旁，露出下面的饥渴小穴。`,
    ]);
    await defender.print_and_wait([
      `看不到…… `,
      attacker.get_colored_actual_name(),
      ` 的脸`,
    ]);
    await defender.print_and_wait([`但是……咕……兴奋起来了。`]);
    await defender.say_and_wait('呃啊……');
    await defender.print_and_wait([
      `肉棒长驱直入，下身的肿胀和满足感被神经忠实的传递给大脑，让自己的嘴角勾起了幸福而痴痴的笑容。`,
    ]);
    await defender.print_and_wait([`完，完全和小狗一样了呢。`]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 以后背位抽插着 ',
      defender.get_colored_name(),
      ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.sitting] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      defender.get_colored_name(),
      ' 相对而坐，将肉棒插入了 ',
      defender.get_colored_name(),
      ` 的${hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'}……】`,
    ]);

    await attacker.print_and_wait([
      `能感受到 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的臀肉压在自己大腿上的，棉花糖般的触感。`,
    ]);
    await attacker.print_and_wait([
      `胸前那两对白兔也随着 `,
      attacker.get_colored_name(),
      ` 抽插的动作一跳一跳的，硬邦邦的乳尖也是。`,
    ]);
    await attacker.print_and_wait([
      `不止于此，这种体位的好处还可以清楚的看见，那对星星眼是如何慢慢变成爱心的。`,
    ]);
    await defender.say_and_wait([
      `咕哈…… `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` ❤️`,
    ]);
    await attacker.print_and_wait([
      `小腹被肉棒顶出明显轮廓的 `,
      defender.get_colored_name(),
      `，露出了一个有些呆呆的可爱表情。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ` 相对而坐，肉棒抽插着${
        hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'
      }……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.hug_sitting] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将背对着的 ',
      defender.get_colored_name(),
      ` 抱在怀里坐着，将肉棒插入了${
        hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
      }……】`,
    ]);

    await defender.print_and_wait([
      `配合着缓缓沉下身体，龟头充血着挺入了肉臀间，将臀肉尽数紧抵再推开……`,
    ]);
    await defender.say_and_wait([`哈❤️啊啊~~`]);
    await defender.print_and_wait([
      `肉棒没有通知自己就直接顶了上来, 发情的濡湿小穴一下子像是要被顶穿般。`,
    ]);
    await defender.say_and_wait('咕……呜❤️……哈啊……哈啊……❤️');
    await defender.print_and_wait([
      `自暴自弃般的将头靠在身后 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的胸膛上, 迎合着身后人的挺腰的动作。`,
    ]);
    await defender.print_and_wait([
      `不过，这个姿势倒是不用担心自己露出的糟糕表情被 `,
      sys_get_colored_callname(defender.id, attacker.id),
      `  看见什么的……`,
    ]);
    await defender.print_and_wait([
      `但是自口中漏出的淫荡声音，因快感而绷直的马耳朵，还有缠在训练员腰上的懂事尾巴。`,
    ]);
    await defender.print_and_wait([
      `就算身后那家伙再愚钝，也能猜到自己现在成了怎样糟糕的情况吧。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 怀抱着 ',
      defender.get_colored_name(),
      ` 坐着，肉棒抽插着${
        hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
      }……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.standing] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ` 面对面站着，将肉棒插入了${
        hook.hook === ero_hooks.standing ? '小穴' : '屁穴'
      }……】`,
    ]);

    await attacker.print_and_wait([
      `握着 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 右脚的脚踝，把她的腿抬了起来，少女顿时摇摇欲坠，带着胸前的那对沉甸甸也一晃一晃的。`,
    ]);
    await defender.say_and_wait([`唔哇……要在这个姿势下做吗？`]);
    await attacker.print_and_wait([
      `凭借神乐时的训练，勉勉强强用单脚保持平衡的 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 看着 `,
      attacker.get_colored_name(),
      ` 挺立起来的胯下之物。`,
    ]);
    await defender.print_and_wait([`等一下……等下啊呃❤️！`]);
    await attacker.print_and_wait([
      `马娘的柔韧性让 `,
      attacker.get_colored_name(),
      ` 轻松地将那匀称的大腿压到了小穴旁，而后肉棒咕啾咕啾的插入了 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的泥泞小穴。`,
    ]);
    await attacker.print_and_wait([
      `随着淫靡又轻块的啪嗒水声响起， `,
      attacker.get_colored_name(),
      ` 开始训练起 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 有关单脚平衡的舞蹈技巧来。`,
    ]);
  } else {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.standing ? '小穴' : '屁穴'}……】`,
      ]);
      await defender.say_and_wait([`哈～……嗯哈～❤️`]);
      await attacker.print_and_wait([
        `双眼失焦的 `,
        defender.get_colored_name(),
        ` 环住了 `,
        attacker.get_colored_name(),
        ` 的脖子，两只栗色的耳朵在头皮上卷紧，连那条搭在臂弯上的腿也打着颤。`,
      ]);
      await attacker.print_and_wait([
        `这种体位得以让肉棒更好的捅入深处，小穴如求饶般亲吻着肉棒，每次抽送时，把头靠在肩膀上的 `,
        defender.get_colored_name(),
        ` 就会随着节奏在耳边吐出软糯的呻吟。`,
      ]);
      await defender.say_and_wait('太…快了❤命定之人……这样也太快了❤');
      await attacker.print_and_wait([
        `露出了有些惊慌表情的 `,
        defender.get_colored_name(),
        ` 反倒是勾起了 `,
        attacker.get_colored_name(),
        ` 的施虐欲，托着臀部让正不断求饶的马娘微微离地，而后又一次挺腰，破开最深层缠绕封锁的层叠膣肉，顶到巫女神圣的子宫颈上，摩擦，旋转。`,
      ]);
      await defender.say_and_wait(`去了~要去了~❤️`);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.standing ? '小穴' : '屁穴'}……】`,
      ]);

      await attacker.print_and_wait([
        `得益于那份身高差的缘故，被 `,
        attacker.get_colored_name(),
        ` 架着腿抽插的 `,
        defender.get_colored_name(),
        `，脚尖只能勉强的碰到地面。`,
      ]);
      await defender.say_and_wait([`抱，抱紧我❤️。`]);
      await attacker.print_and_wait([
        `在请求下搂紧了 `,
        defender.get_colored_name(),
        ` 的腰，奋力的抽送着，一突入到最深处、`,
        defender.get_colored_name(),
        ` 就会因为腹底传来的冲击而娇媚的呻吟起来`,
      ]);
      await defender.say_and_wait('嗯啊….哈啊啊啊…');
      await attacker.print_and_wait([
        `平日里充满元气的俏脸，此刻正布满着淫态。`,
      ]);
      await attacker.print_and_wait([
        `架在 `,
        attacker.get_colored_name(),
        ` 臂弯上的腿止不住的颤抖着，黏腻的爱液不断地自交合处流下。`,
      ]);
    }
  }
};

handlers[ero_hooks.hug_standing] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 站着将 ',
      defender.get_colored_name(),
      ` 揽在怀中，将肉棒插入${
        hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'
      }……】`,
    ]);

    await defender.print_and_wait([
      `被摆成了这样困难的姿势, `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的下一步会怎么做呢？`,
    ]);
    await defender.print_and_wait([
      `敏感的耳尖？翘起的臀瓣？又或是那对自己都认为下流的乳房？还是说……`,
    ]);
    await defender.print_and_wait([
      `在下一秒双腿发软的自己就可能摔倒的现在，完全占卜不出来身后命定之人的行动呀……`,
    ]);
    await defender.say_and_wait([`咿咿咿——呀❤️！`]);
    await defender.print_and_wait([
      `来自 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的炽热肉棒噗嗤噗嗤地连根肏进了自己的小穴。`,
    ]);
    await defender.print_and_wait([
      `连求饶都说不出口，早已认清现状的身体本能的弯曲腰部，让臀部进一步向 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的方向靠拢。`,
    ]);
  } else {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '握住了',
        defender.get_colored_name(),
        '的双臂',
        ' 从身后用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'}，`,
      ]);
      await defender.say_and_wait([`咿咿咿——呀❤️！`]);
      await attacker.print_and_wait([
        `握着自己担当的双臂，不停耸动着腰，每次抽送，那摇晃的腰胯与那如同两颗蜜桃一般的臀肉就激烈撞在一起。`,
      ]);
      await attacker.print_and_wait([
        `能跑出出色末脚的肉腿也站不稳般的痉挛着，带着十只软嫩的足趾也蜷曲起来，肉棒抽离时，爱液就会在那激烈交合之间拉出下流的银丝。`,
      ]);
      await defender.say_and_wait('咕……唔哈……❤️');
      await attacker.print_and_wait([
        `可惜......看不见阿福的脸，不过，光是听着口中漏出的声音，就能得知这家伙离高潮只差一步之遥的事实。`,
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '握住了',
        defender.get_colored_name(),
        '的双臂',
        ' 从身后用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'}，`,
      ]);
      await defender.print_and_wait([
        `好……好深、身体里……`,
        sys_get_colored_callname(defender.id, attacker.id),
        `的感觉……好棒`,
      ]);
      await defender.print_and_wait([
        `微微蜷起的马耳中不断传来湿粘液体在腰胯与腿臀的缓慢撞击中沥沥淅淅的声音。`,
      ]);
      await defender.print_and_wait([
        `被蹂躏的小腹中传来了令自己安心的充实感。`,
      ]);
      await defender.print_and_wait([`稍稍快点也可以的......`]);
      await defender.print_and_wait([`于是缠在命定之人腰上的尾巴便微微使劲。`]);
      await defender.say_and_wait('唔诶？！！❤️哦哦……！❤️');
      await defender.print_and_wait([
        `快感如决堤般涌入大脑，就算想要喊着停下来也做不到，自食其果的自己只能靠在身后人的怀中被激烈的抽插着。`,
      ]);
    }
  }
};

handlers[ero_hooks.suspended_congress] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ` 抬起架住，将肉棒插入了${
          hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]));

    await defender.say_and_wait([`唔呀！`]);
    await attacker.print_and_wait([
      `面前还沉浸在幻想中的酥麻身体被 `,
      attacker.get_colored_name(),
      ` 一下子抱了起来，突然的失衡让她向前搂住了 `,
      attacker.get_colored_name(),
      ` 的躯干，
        肉感的亮晶晶双腿也顺势锁在了 `,
      attacker.get_colored_name(),
      ` 的腰侧。`,
    ]);
    await defender.say_and_wait([`呃哦哦哦❤️！`]);
    await attacker.print_and_wait([
      `借着重力甩动自己担当的肉体，让硬邦邦的肉棒一口气齐根没入湿漉漉的肉穴，肉棒狠狠的撞击在了子宫口，沟壑和肉棒紧密的贴合在了一起，在 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的身下显出浅浅的隆起。`,
    ]);
    await attacker.print_and_wait([
      `每当肉棒要抽离时，锁在 `,
      attacker.get_colored_name(),
      ` 腰侧的双腿也会挽留般的微微伸直，再伴随之后猛烈的插入变回原来的环绕。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 的肉棒抽插着 ',
      defender.get_colored_name(),
      ` 的浮空${
        hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
      }……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.hug_suspended_congress] = async (
  attacker,
  defender,
  hook,
) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将 ',
      defender.get_colored_name(),
      ` 背对着抬起架住，肉棒插入了${
        hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
      }……】`,
    ]);

    await defender.print_and_wait([
      `被 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 掰开托起的双腿，还有以极为别扭的姿势环住他脖颈的双手。`,
    ]);
    await defender.print_and_wait([
      `这种……像是给小孩把尿，还有可能下一秒就因为重心不稳而摔在地上的羞耻姿势……`,
    ]);
    await defender.say_and_wait([`咕啾——❤️`]);
    await defender.print_and_wait([
      `在肉棒插入的瞬间，自己便像是要飞出去一样，不受控制的弓起身子，可又因为重力，摇摇晃晃的落回了，以 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的肉棒为支点的悬空椅子上.`,
    ]);
    await defender.print_and_wait([`哈❤️……哈❤️这样的话。`]);
    await defender.print_and_wait([
      `看不清 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的表情，但在失重和快感双重作用下的身体，已经将那个厉害肉棒的形状记得清清楚楚了。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 的肉棒抽插着背对的 ',
      defender.get_colored_name(),
      ` 浮空的${
        hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
      }……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.ask_cowgirl] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 坐在身上，用${
        hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
      }吞没肉棒……】`,
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        hook.hook === ero_hooks.ask_cowgirl ? part_enum.virgin : part_enum.anal,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await defender.say_and_wait([`要我自己来吗？`]);
    await defender.say_and_wait([`唔…….`]);
    await defender.print_and_wait([
      `只是望着 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 向上挑起的雄壮之物，自己便羞红了脸, 呼吸也变得急促了起来。`,
    ]);
    await defender.print_and_wait([`一想到自己一会儿会骑在这上面……`]);
    await attacker.say_and_wait([`阿福？`]);
    await defender.say_and_wait([`滋——唔？`]);
    await defender.print_and_wait([
      `被 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 催促之后才发现自己的嘴角流出了涎水。`,
    ]);
    await defender.print_and_wait([`没想到自己会这么淫乱啊。`]);
    await defender.print_and_wait([
      `一刻也不想等待，发颤的腰部便“咚”的落了下来，微笑地俯视着身下的 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` ，心领神会地用腰部做起祭礼的动作，让黏糊糊的穴肉带领着肉棒把小穴探了个遍。`,
    ]);
    await defender.print_and_wait([
      `顺带着让自己好学的小穴又一次彻底地温习了一遍肉棒的形状。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求身上的 ',
      defender.get_colored_name(),
      ` 继续用${
        hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
      }套弄肉棒……】`,
    ]);
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.ask_stimulate_glans_by_virgin] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }

  !extra_flag.skip_name &&
    (await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 用${
        hook.hook === ero_hooks.ask_stimulate_glans_by_virgin ? '小穴' : '屁穴'
      }套弄肉棒……】`,
    ]));
  if (hook.arg) {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        hook.hook === ero_hooks.ask_stimulate_glans_by_virgin
          ? part_enum.virgin
          : part_enum.anal,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }

    await defender.print_and_wait([`明明插在自己体内的肉棒还是那样硬邦邦的……`]);
    await defender.print_and_wait([
      `但 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 却坏笑着的停了下来，拍了拍我的大腿。`,
    ]);
    await defender.print_and_wait([`呜，训练员先生就这么喜欢欺负我吗？`]);
    await defender.print_and_wait([
      `赌气拔出来……让呆在自己体内的坏家伙好好冷静一下什么的？`,
    ]);
    await attacker.say_and_wait([`咕叽咕叽~`]);
    await defender.print_and_wait([
      `腰部……自己的腰部怎么已经晃起来了？哈……哈啊……`,
    ]);
    await defender.print_and_wait([`想要……`]);
    await defender.print_and_wait([
      `赶紧催促着自己浑身发软的肌肉活动起来，命令它们配合自己侍奉起 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的肉棒，毕竟，堵气拔出来什么的，可是绝对绝对的大凶啊！`,
    ]);

    if (era.get(`cflag:${defender.id}:种族`)) {
      await defender.print_and_wait(
        '白花花的屁股在湿漉漉马尾巴的伴奏下翩翩起舞。',
      );
    }
  } else {
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.stimulate_g_spot] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 用肉棒戳弄着 ',
    defender.get_colored_name(),
    ' 的G点……】',
  ]);
  if (hook.arg) {
    await attacker.print_and_wait([
      `继续挺腰，让胯下的肉棒向蜜穴的更深处碾去，每当龟头掠过了一处略显粗糙的软肉之后， `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 就支支吾吾地颤抖起来。`,
    ]);
    await defender.say_and_wait([`咕啊❤️~啊啊`]);
    await attacker.print_and_wait([
      `在马娘体内横冲的肉棒妖怪就这样发现了名叫 `,
      defender.get_colored_actual_name(),
      ` 的巫女弱点`,
    ]);
    await defender.say_and_wait([`噫啊啊啊❤️~`]);
    await attacker.print_and_wait([
      `痉挛不止的，被淫水弄的亮晶晶的丰腴双腿，因快感而绷直的马尾与双耳，连眸中的星星眼也被冒着粉光的爱心所顶掉。`,
    ]);
    await attacker.print_and_wait([
      `不言自明，面前算得上是现人神的家伙，现在已经堕落成了一只留着口水的发情母马。`,
    ]);
    await attacker.print_and_wait([
      `每当肉棒撞到 `,
      defender.get_colored_actual_name(),
      ` 的酥软子宫，半吐着香舌的她便会配合你动作般的翘起臀部，放声娇吟起来。`,
    ]);
  } else {
    await continue_fucking_common_FUKU(attacker, defender);
  }
};

handlers[ero_hooks.ask_fuck] = async (attacker, defender, hook) => {
  if (attacker.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 插入自己的${hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'}……】`,
    ]);
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

    await attacker.say_and_wait([`想……`]);
    await attacker.say_and_wait([`欸！`]);
    await attacker.print_and_wait([
      `立即捂住了嘴，几乎自己都不敢相信身为神社巫女的自己能说出这样的话，简直……简直像是被不知道什么东西夺舍了一样。`,
    ]);
    await attacker.print_and_wait([
      `回过神来，自己丰腴柔软的双腿已经自觉地分了开来，黏腻的穴瓣间拉起了浓厚的银线，入口处还正寂寞地一张一合。`,
    ]);
    await attacker.print_and_wait([
      `唔……真是色情呢，自己的身体，但是，有着厉害肉棒的 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 能理解的吧……`,
    ]);
    await attacker.say_and_wait([`插进来吧……`]);
    await attacker.print_and_wait([
      `用右手的食指和中指稍稍用力把反射着晶莹光辉的阴唇分开，将内部正叫渴的粉嫩穴肉向 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 展示出来，补上了名为祈求插入这一动作的最后一块碎片。`,
    ]);
    await attacker.say_and_wait([`为了今日份的大吉……请插进来吧。 `]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 继续抽插自己的${
        hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'
      }……】`,
    ]);
    await continue_fucking_common_FUKU(defender, attacker);
  }
};

handlers[ero_hooks.cowgirl] = async (attacker, defender, hook) => {
  if (attacker.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 骑在 ',
      defender.get_colored_name(),
      ` 身上，以${
        hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
      }吞没肉棒……】`,
    ]);

    await attacker.print_and_wait([
      `双手放在 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的胸膛上，居高临下的盯着他的脸。`,
    ]);
    await attacker.print_and_wait([`有种自己占上风的感觉呢。`]);
    await attacker.print_and_wait([
      `那么，接下来该怎么让身下这个总是喜欢欺负自己的家伙乖乖求饶呢？`,
    ]);
    await attacker.print_and_wait([`左右？上下？还是转圈似的扭腰？或者……`]);
    await attacker.say_and_wait([`~咿呀！❤️`]);
    await attacker.print_and_wait([
      `趁着别人思考的时候突然动起来什么的，太犯规了呀！`,
    ]);
    await attacker.print_and_wait([
      `不要动！呃❤️！明明......❤️咿呀~❤️我在上面❤️！`,
    ]);
    await attacker.say_and_wait([`唔呃~好棒❤️！`]);
    await attacker.print_and_wait([`失态的呻吟从张开的嘴中不断漏出。`]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 骑在 ',
      defender.get_colored_name(),
      ` 身上，以自己的${
        hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
      }套弄着肉棒……】`,
    ]);
    await continue_fucking_common_FUKU(defender, attacker);
  }
};

handlers[ero_hooks.pet_ear] = async (attacker, defender, hook) => {
  if (attacker.id === 0) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 抚摸 ',
      defender.get_colored_name(),
      ' 的耳朵……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait([
        `平时因为惩罚的缘故，碰过很多次 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的耳朵了`,
      ]);
      await attacker.print_and_wait([
        `不过并不是现在这样把 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 那对，在马娘中算的上长的马耳朵，以带着性的意味，肆意的揉捏，把玩。`,
      ]);
      await defender.say_and_wait([`唔呀❤️……`]);
      await attacker.print_and_wait([
        `栗色的马尾巴一下子绷得笔直，连舌尖也吐了出来，上下颤动着。`,
      ]);
      await attacker.print_and_wait([`看来右边的耳朵会更敏感一些呢。`]);
    } else {
      await defender.print_and_wait([
        `先是轻捏着耳廓的边缘，然后 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 直接把手指伸了进来。`,
      ]);
      await defender.say_and_wait([`咿呀❤️!`]);
      await defender.print_and_wait([
        `抚摸慢慢变成搓揉，手指还使坏般蹭着绒毛，暖呼呼的感觉不断的自耳朵传来。`,
      ]);
      await defender.print_and_wait([
        `想要躲开，但背叛了自己的耳朵还是自觉的伸直了开来，被 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 玩弄了个遍。`,
      ]);
      await defender.print_and_wait([`好刺激，视线……视线逐渐变得雾蒙蒙的了……`]);
      await defender.print_and_wait([`并拢的双腿间也变得黏糊糊的了。`]);
    }
  } else {
    if (
      attacker.id === 56 &&
      defender.id === 0 &&
      era.get(`cflag:${defender.id}:种族`) === 1
    ) {
      throw new Error(`unsupported hook!`);
    } // 我猜测这样可以。
  }
};

handlers[ero_hooks.pull_ear] = async (attacker, defender) => {
  // if (defender.id != 56){throw new Error(`unsupported hook!`);}

  if (attacker.id === 0) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯 ',
      defender.get_colored_name(),
      ' 的耳朵……】',
    ]);
    await attacker.print_and_wait([`如果扯一下的话……`]);
    await attacker.print_and_wait([
      `本来只是打算比划一下，但在对上了 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 同样期待的目光后，想象化为了现实`,
    ]);
    await attacker.print_and_wait([
      `粗暴地，像是对待养殖场里的兔子一样，强迫她仰起头来`,
    ]);
    await attacker.print_and_wait([
      `敏感的耳朵根部在被 `,
      attacker.get_colored_name(),
      ` 揪起时向着 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的大脑输送着被误认成快感的疼痛。`,
    ]);
    await defender.say_and_wait([`唔呜呜❤️……呃❤️……`]);
    await attacker.print_and_wait([`是不是玩的有些过了呢？`]);
    await attacker.print_and_wait([
      `但一松开手，因拉扯而泛着樱桃红的栗色马耳朵就欢快地摇摆了起来，诉说着主人心情良好的事实。`,
    ]);
  } else {
    if (
      attacker.id === 56 &&
      defender.id === 0 &&
      era.get(`cflag:${defender.id}:种族`) === 1
    ) {
      throw new Error(`unsupported hook!`);
    } // 我猜测这样可以。
  }
};

handlers[ero_hooks.pet_leg] = async (attacker, defender, hook, extra_flag) => {
  if (attacker.id === 0) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 爱抚 ',
        defender.get_colored_name(),
        ' 的大腿……】',
      ]));
    if (hook.arg) {
      if (!attacker.id && era.get(`cflag:${defender.id}:种族`)) {
        await attacker.print_and_wait(
          '作为训练员，将面前担当的双腿，用性的意味去观赏与抚摸……',
        );
        await attacker.print_and_wait(
          '只是把现在正在做的事，用克制的语言去描述，叫人身体发凉的背德感就已经随着寒战传遍了全身。',
        );
        await attacker.print_and_wait(
          '明明训练后为了确认状态，偶尔也会有上手抚摸的亲热动作吧……',
        );
        await attacker.print_and_wait(
          '但是很神奇的，现在脑袋里完全没法将这双腿与「比赛」联系在一起',
        );
      }
      await attacker.print_and_wait('现在的自己满脑袋想的都是……');
      await attacker.print_and_wait('被这双腿交错着缠上腰的话，一定感觉很棒。');
    } else {
      await attacker.print_and_wait('柔软而有弹性。');
      await attacker.print_and_wait('曲线优雅而纤长。');
      await attacker.print_and_wait(
        '有着能因为手指的爱抚而发起抖的绝佳敏感度。',
      );
      if (era.get(`cflag:${defender.id}:种族`)) {
        await attacker.print_and_wait('真浪费啊……');
        await attacker.print_and_wait('这样的双腿只是为了比赛而存在什么的……');
      }
    }
  } else {
    if (
      attacker.id === 56 &&
      defender.id === 0 &&
      era.get(`cflag:${defender.id}:种族`) === 1
    ) {
      throw new Error(`unsupported hook!`);
    } // 我猜测这样可以。
  }
};

handlers[ero_hooks.pet_breast] = async (attacker, defender, hook) => {
  // if (defender.id != 56){throw new Error(`unsupported hook!`);}
  const touched = era.get(`tcvar:${defender.id}:阴道接触部位`);

  if (attacker.id === 0) {
    if (touched.part === part_enum.penis && touched.owner === attacker.id) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 揉捏 ',
        defender.get_colored_name(),
        ' 的胸部……】',
      ]);

      await attacker.print_and_wait([
        `近乎粗鲁地揉捏起那对平时躲在衣服下的丰满乳球, 让那对因为汗液而光滑富有弹性的乳房完全按照你的意思变换着形状 , 手指偶尔拂过那莓果般的乳头。`,
      ]);
      await defender.say_and_wait([`呜……！❤️这里……！❤️❤️`]);
      await attacker.print_and_wait([
        `被 `,
        attacker.get_colored_name(),
        ` 掌握了弱点的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 发出了甜美闷声的同时反弓起了身子，最后嘤咛着软倒在 `,
        attacker.get_colored_name(),
        ` 的怀里。`,
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 玩弄 ',
        defender.get_colored_name(),
        ' 的胸部……】',
      ]);
      if (hook.arg) {
        await attacker.print_and_wait([
          ` `,
          sys_get_colored_callname(attacker.id, defender.id),
          ` 胸口的那对沉甸甸，此刻落入了 `,
          attacker.get_colored_name(),
          ` 的手中。`,
        ]);
        await attacker.print_and_wait([
          `虽然平时隔着衣服看起来并不算十分巨大，但那不断传递到手心鼓鼓囊囊的触感，让 `,
          attacker.get_colored_name(),
          ` 进一步确定了，自己的担当是有着隐藏巨乳的下流马娘。`,
        ]);
        await defender.say_and_wait([`唔唔……❤️`]);
        await attacker.print_and_wait([
          `噗呢噗呢的揉动着，享受着掌间乳肉那温热又水润的肉浪。`,
        ]);
        await attacker.print_and_wait([
          `每当手指陷进柔软的时候，兴奋起来的 `,
          sys_get_colored_callname(attacker.id, defender.id),
          ` 就会一颤一颤地反应着，自喉间漏出暧昧的呻吟。`,
        ]);
      } else {
        await attacker.print_and_wait([
          `近乎完全湿润的黄玉色眸子，伴着鼻腔中发出的诱人呻吟声，看来 `,
          sys_get_colored_callname(attacker.id, defender.id),
          ` 有着一对敏感的胸部呢。`,
        ]);
        await attacker.print_and_wait([`要停下来吗？你稍稍放慢了手中的动作`]);
        await defender.say_and_wait([`哈啊❤️……欸……`]);
        await defender.print_and_wait([`那个，可以继续的……`]);
        await attacker.print_and_wait([`充满欲情地对你说出了恳求的话语。`]);
        await attacker.print_and_wait([
          `于是变本加厉地将这对柔软到几乎没有固定形状的乳球拉扯成了更符合你心意的形状，让白花花的乳肉遍布掌印红痕......不知道欢爱结束后会不会留下痕迹呢？`,
        ]);
        await defender.say_and_wait([`唔哈……❤️`]);
      }
    }
  } else {
    if (
      attacker.id === 56 &&
      defender.id === 0 &&
      era.get(`cflag:${defender.id}:种族`) === 1
    ) {
      throw new Error(`unsupported hook!`);
    } // 我猜测这样可以。

    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 的手指在 ',
      defender.get_colored_name(),
      ' 胸部上画着圈……】',
    ]);

    await attacker.print_and_wait([
      `不知道自己该做些什么，于是在食指在训练员先生的胸部上画着圈。`,
    ]);
    await attacker.print_and_wait([`被注意到了吗？`]);
    await attacker.print_and_wait([
      `于是索性把脸靠在男人的胸膛上，撒娇般的蹭动着。`,
    ]);
  }
};

handlers[ero_hooks.pet_nipple] = async (attacker, defender, hook) => {
  //if (defender.id != 56){throw new Error(`unsupported hook!`);}

  if (attacker.id === 0) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄 ',
      defender.get_colored_name(),
      ' 的乳头……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait([
        `只是碰到胸部就如此敏感的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 在被玩弄乳头时会怎么样呢 ?`,
      ]);
      await attacker.print_and_wait([
        `直接伸手捏住了那对肿胀的不像样子的乳头, 像是把玩着驱魔用的豆子一样碾动着.`,
      ]);
      await defender.say_and_wait([`啊～！……哈啊❤️、哈啊、嗯～❤️`]);
      await attacker.print_and_wait([
        `自己担当的声音逐渐变得高昂起来, 脸上也露出了因为快感过载的痴态`,
      ]);
      await attacker.print_and_wait([`那么再拉扯一下呢 ?`]);
      await defender.say_and_wait([
        `结果 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 触电般的仰起头来 , 支支吾吾地靠在了 `,
        attacker.get_colored_name(),
        ` 的身上`,
      ]);
    } else {
      await defender.say_and_wait([`……呀啊～❤️`]);
      await attacker.print_and_wait([
        `使坏般地, 单单玩弄着自己担当的敏感乳头.`,
      ]);
      await attacker.print_and_wait([
        `扭扭捏捏的乳头被 `,
        attacker.get_colored_name(),
        ` 用大拇指和食指捏住, 像是把玩着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 决胜服上的念珠般左右拧动着, 享受着那个硬邦邦，带着回弹的触感.`,
      ]);
      await defender.say_and_wait([`……啊❤️～……嗯、呜～……呀❤️`]);
      await attacker.print_and_wait([
        ` `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 就会因为 `,
        attacker.get_colored_name(),
        ` 的动作而扭动着身体 , 如同念着祷词般从口中吐出有节奏的快乐呻吟`,
      ]);
    }
  } else {
    if (
      attacker.id === 56 &&
      defender.id === 0 &&
      era.get(`cflag:${defender.id}:种族`) === 1
    ) {
      throw new Error(`unsupported hook!`);
    } // 我猜测这样可以。
  }
};

handlers[ero_hooks.finger_fuck] = async (attacker, defender) => {
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 将手指插入 ',
    defender.get_colored_name(),
    ' 的蜜穴……】',
  ]);

  await attacker.print_and_wait([
    `只是手指稍微划过，面前 `,
    defender.get_colored_name(),
    ` 的穴口便马上更湿了起来。`,
  ]);
  await defender.say_and_wait([`呀啊……`]);
  await attacker.print_and_wait([`自家巫女湿润娇艳的呻吟声在耳边回荡着。`]);
  await attacker.print_and_wait([
    `先是食指，再是中指，时不时还勾起指尖，在有着褶皱感触的肉壁上用指尖不断刺激着。`,
  ]);
  await defender.print_and_wait([`呼，呼呼，啊……命定之人……手指，好厉害`]);
  await attacker.print_and_wait([
    `黏黏糊糊的小穴里，早已分不清是 `,
    attacker.get_colored_name(),
    ` 的手指在翻搅着穴肉，还是寻求着刺激的蜜肉在主动吮吸着手指`,
  ]);
};

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

handlers[ero_hooks.ero_start] = async () => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const love = era.get(`love:56`);
  const relation = era.get(`relation:56:0`);
  const special = era.get(`status:56:1013`);
  const UMAZ = era.get('status:56:马跳Z') || era.get('status:56:超马跳Z');

  if (era.get('tflag:强奸') === 0) {
    throw new Error(`unsupported hook!`); // 还没写
  }

  if (!sys_check_awake(56)) {
    throw new Error(`unsupported hook!`); // 还没写
  }

  if (UMAZ) {
    await MF.say_and_wait([`我的身体……好热啊......`]);
    await me.print_and_wait([
      `尽力试着自控的 `,
      MF.get_colored_name(),
      ` 抱膝缩在角落，粉嫩的锁骨泛着发情的绯红。`,
    ]);
    await MF.say_and_wait([`哈啊❤️~哈❤️`]);
    await me.print_and_wait([
      `张开的双唇将香舌暴露在空中，翕动的鼻尖不断吸入着 `,
      me.get_colored_name(),
      ` 的气味。`,
    ]);
    await MF.say_and_wait([`想要❤️想要❤️想要❤️想要❤️`]);
    await me.print_and_wait([
      `终于，无法抗拒药性的 `,
      MF.get_colored_name(),
      ` 踉踉跄跄的站了起来，衣物一件接着一件落在地上。`,
    ]);
    await me.print_and_wait([
      `那对奶白色的团子压在了 `,
      me.get_colored_name(),
      ` 的身上，隔着衣服也能感受到 `,
      MF.get_colored_name(),
      ` 的硬邦邦乳尖，炽热的吐息从耳畔传来。`,
    ]);
    await MF.say_and_wait([
      `已经……极限了， `,
      sys_get_colored_callname(56, 0),
      ` ，来吃掉我吧。`,
    ]);
    return;
  }
  if (special) {
    await MF.say_and_wait([`来做吧?`]);
    await MF.say_and_wait([`明明......哈❤️好热啊......`]);
    await me.print_and_wait([
      `由于发情期而变得主动的 `,
      MF.get_colored_name(),
      ` ，自顾自的脱起了汗湿的衣服。`,
    ]);
    await me.print_and_wait([
      `红润的嘴唇不停半张半合，吐出白雾般的一股股雾气，让催情的荷尔蒙充斥着整个房间。`,
    ]);
    await MF.say_and_wait([`好热啊......`]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 主动褪去衣物, 含着娇媚气息的体液不断的流下来, 啪嗒啪嗒地落在木地板上。`,
    ]);
    await me.print_and_wait([
      `随后目光涣散的软倒在了 `,
      me.get_colored_name(),
      ` 的怀里, 栗色的马尾也缠上了 `,
      me.get_colored_name(),
      ` 的大腿`,
    ]);
    await MF.say_and_wait([
      `帮帮我吧...... `,
      sys_get_colored_callname(56, 0),
      ` 。`,
    ]);
    return;
  }

  if (location_name[era.get('flag:当前位置')] === '休息室') {
    if (relation < 400) {
      /*   */
      await MF.say_and_wait([`唔......那个，训练员先生？`]);
      await me.print_and_wait([
        `被 `,
        me.get_colored_name(),
        ` 强硬抱在怀里的 `,
        MF.get_colored_name(),
        ` ，轻轻颤抖着，不过耳朵倒是好懂地一摆一摆的。`,
      ]);
      await MF.say_and_wait([`要在这里做吗......万一被风纪委员她们发现的话？`]);
      await MF.say_and_wait([`咕唔！啾❤️......啾啊❤️`]);
      await me.print_and_wait([
        `回答 `,
        MF.get_colored_name(),
        ` 的是 `,
        me.get_colored_name(),
        ` 的嘴唇。`,
      ]);
      await me.print_and_wait([
        `手也不安分的伸进了自己担当的裙子里，揉捏着两腿间的软肉，直到把她的内裤也弄的湿漉漉的。`,
      ]);
      await me.print_and_wait([
        `被勾起了情欲的 `,
        MF.get_colored_name(),
        ` 眼角含泪的靠在了 `,
        me.get_colored_name(),
        ` 的怀里。`,
      ]);
      await MF.say_and_wait([
        `快点开始吧...... `,
        sys_get_colored_callname(56, 0),
        ` ❤️`,
      ]);
      return;
    }

    if (relation >= 400) {
      await me.print_and_wait([
        `对上了 `,
        me.get_colored_name(),
        ` 目光的 `,
        MF.get_colored_name(),
        ` 像是突然明白了什么，栗色的尾巴也停止了摆动`,
      ]);
      await MF.say_and_wait([`是......想要做了吗？`]);
      await MF.say_and_wait([`用那个眼神，不用占卜也能猜到啦！`]);
      await MF.say_and_wait([`唔, 明明还在学校里呢, 要是被发现的话......`]);
      await me.print_and_wait([`咚！`]);
      await me.print_and_wait([
        `嘴上抱怨着, 但是校服的裙子却跌落在了地面，然后又是同样代表着上衣被脱下的闷声.....最后, 随着运动内衣的褪下,原本被裹住的乳球一下子跳了出来。`,
      ]);
      await me.print_and_wait([
        `在那对多了层粉色的丰盈乳房上，乳尖因期待而充血挺立着。`,
      ]);
      await MF.say_and_wait([`哈啊❤️~哈❤️……`]);
      await me.print_and_wait([
        `双臂轻轻的环住了 `,
        me.get_colored_name(),
        ` 的脖子, `,
        MF.get_colored_name(),
        ` 用变得湿润的星星瞳望向 `,
        me.get_colored_name(),
        ` .`,
      ]);
      await MF.say_and_wait([
        ` `,
        sys_get_colored_callname(56, 0),
        ` .....让我变得舒服起来吧`,
      ]);
      return;
    }
  }

  if (location_name[era.get('flag:当前位置')] === '自宅') {
    if (relation < 400) {
      await me.print_and_wait([
        `从背后靠近正研究着如何在 `,
        me.get_colored_name(),
        ` 家里摆放开运物品的 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
      await MF.say_and_wait([`呀啊......`]);
      await me.print_and_wait([
        `双手伸进 `,
        MF.get_colored_name(),
        ` 的衣服里，掠过那对饱满的乳肉，让橙发少女小声的抗议着。`,
      ]);
      await MF.say_and_wait([`至少，先让我把这个放好吧......`]);
      await me.print_and_wait([
        `但不安分的手继续向下探去，隔着肚皮轻轻按压着 `,
        MF.get_colored_name(),
        ` 正渴求着更多刺激的子宫。`,
      ]);
      await me.print_and_wait([
        `于是 `,
        MF.get_colored_name(),
        ` 便会下意识后退，让自己的臀缝隔着裤子主动的顶上了 `,
        me.get_colored_name(),
        ` 的肉棒。`,
      ]);
      await MF.say_and_wait([`......硬邦邦的。`]);
      await MF.say_and_wait([`要现在做吗？`]);
      await MF.say_and_wait([
        `感觉 `,
        sys_get_colored_callname(56, 0),
        ` 也忍的很辛苦呢......`,
      ]);
      return;
    }

    if (relation >= 400) {
      await me.print_and_wait([
        `从背后搂住正研究着如何在 `,
        me.get_colored_name(),
        ` 家里摆放开运物品的 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
      await MF.say_and_wait([`唔呵呵！！！`]);
      await MF.say_and_wait([`训练员是打算对我做什么呢......唔~❤️啾~❤️`]);
      await me.print_and_wait([
        `早有预料般地侧过头来，仰头堵上了 `,
        me.get_colored_name(),
        ` 的嘴唇。`,
      ]);
      await me.print_and_wait([
        `二人的唇齿舌立即激烈地纠缠在一起，发出令空气不忍直视的淫靡水声。`,
      ]);
      await MF.say_and_wait([`唔~❤️……啾啊❤️~啾……嗯❤️`]);
      await me.print_and_wait([
        `突然， `,
        MF.get_colored_name(),
        ` 扣住了 `,
        me.get_colored_name(),
        ` 的手，引着 `,
        me.get_colored_name(),
        ` 摸向了她的两腿间，顺带着扯下了内裤。`,
      ]);
      await me.print_and_wait([
        `连大腿根部都有泛着光泽的水渍，肉眼可见的湿透了，`,
      ]);
      await MF.say_and_wait([`嗯......反正已经写了外宿申请的，所以~❤️`]);
      await MF.say_and_wait([`让我……变得更加舒服吧~❤️`]);
      return;
    }
  }

  if (
    love >= 50 &&
    location_name[era.get('flag:当前位置')] != '自宅' &&
    location_name[era.get('flag:当前位置')] != '自宅'
  ) {
    await MF.say_and_wait([`训练员，要做了吗？`]);
    await me.print_and_wait([
      `被 `,
      me.get_colored_name(),
      ` 搂在怀里的 `,
      MF.get_colored_name(),
      ` 红着脸说道，马耳一摆一摆的拍在你的脸上。`,
    ]);
    await me.say_and_wait([`讨厌了吗？`]);
    await MF.say_and_wait([
      `欸！并没有！！！绝对，绝对不会讨厌 `,
      me.get_colored_name(),
      ` 的！`,
    ]);
    await me.print_and_wait([
      `轻轻地摸了她的脸、拍了拍她的头发，让因害怕被 `,
      me.get_colored_name(),
      ` 抛弃的 `,
      MF.get_colored_name(),
      ` 冷静了下来。`,
    ]);
    await me.say_and_wait([`.......要吃掉你了哦`]);
    await me.print_and_wait([
      `软倒在了 `,
      me.get_colored_name(),
      ` 怀里的 `,
      MF.get_colored_name(),
      ` 眼神湿润地着看着 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait([`嗯......`]);
    await MF.say_and_wait([
      `......请 `,
      sys_get_colored_callname(56, 0),
      ` 随意地开动吧。`,
    ]);
    return;
  }
};

handlers[ero_hooks.stimulate_glans_by_virgin] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  !extra_flag.skip_name &&
    (await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ` 用${
        hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴'
      }套弄着 `,
      defender.get_colored_name(),
      ' 的肉棒……】',
    ]));
  if (hook.arg) {
    if (hook.arg === 0xf) {
      await attacker.print_and_wait([`哈啊......哈......`]);
      await attacker.print_and_wait([
        `勉强能适应呢，毕竟，命定之人的肉棒，是还没睡醒的样子。`,
      ]);
      await attacker.print_and_wait([`这个时候的话,就该我来帮忙了吧。`]);
      await attacker.print_and_wait([
        `深呼吸，稍稍绷紧小腹，让蠕动着的小穴唤醒 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的肉棒。`,
      ]);
      await attacker.say_and_wait([`唔！! ! 咿呀 ! ! !`]);
      await attacker.print_and_wait([
        `被唤醒的怪物肉棒给本来还能跟上训练员节奏的自己带来了几乎失去意识般的快感。`,
      ]);
    } else {
      await attacker.print_and_wait([
        `总是让 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 
            单方面努力的话，感觉有些稍稍愧疚呢。`,
      ]);
      await attacker.print_and_wait([
        ` 毕竟，两人三足的法则，就算是在做爱这一对于现役赛马娘和训练员来说是背德的行为也一样吧。`,
      ]);
      await attacker.say_and_wait([`哈......❤`]);
      await attacker.print_and_wait([
        `在充血胀的硬邦邦肉棒下一次撞进来的时候试着深呼吸，「啾」的让缠人的小穴吮吸起顶到子宫颈的充血龟头。`,
      ]);
      await attacker.say_and_wait([`呃啊啊啊啊......`]);
      await attacker.print_and_wait([
        `正缠绞着灼热肉棒的穴内，传来了几乎要让自己瞬间昏过去的快感`,
      ]);
      await attacker.print_and_wait([
        `肉棒跳的更厉害了呢，所以，我也算帮上忙了吧， `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 。`,
      ]);
    }
  } else {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await attacker.print_and_wait([`不妙不妙不妙......`]);
      await attacker.print_and_wait([
        `本来只是想试着配合上训练员节奏的自己, 却颇为掉链子的忘了深处的穴肉会有多么的敏感。`,
      ]);
      await attacker.print_and_wait([
        `似乎是察觉到了缠绞力度的放松，抵在了子宫口前的龟头对准前方挺起的软肉开始了蛮横无礼的冲刺。`,
      ]);
      await attacker.print_and_wait([
        `方才还能时不时反攻几下肉棒的穴肉，被粗翘滚烫的肉棒完全碾开，粗大的龟头狠狠撞在了自己的子宫颈上。`,
      ]);
      await attacker.print_and_wait([`去了......要去了......`]);
    } else {
      await attacker.print_and_wait([`深呼吸......深呼吸......`]);
      await attacker.print_and_wait([
        `想要尽力配合, 但自己都不知道有没有完整的做完一次动作, 只要塞在体内的肉棒稍稍抽动一下，被快感塞满的大脑就会一片空白, 从嘴里咿咿呀呀的吐出下流的呻吟。`,
      ]);
      await attacker.print_and_wait([
        `不过, 听着噗嗤噗嗤的下流声响 , 黏糊糊的小穴应该有好好的服侍 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的肉棒吧.`,
      ]);
    }
  }
};

handlers[ero_hooks.hand_job] = async (attacker, defender, hook, extra_flag) => {
  if (attacker.id != 56) {
    throw new Error(`unsupported hook!`);
  }

  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 的肉棒握在手中……】',
      ]));

    await attacker.say_and_wait([`那个，训练员先生......我做的还行吧？`]);
    await attacker.print_and_wait([
      `没听见回答，不过，见到 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 的腰微微挺起来了呀。`,
    ]);
    await attacker.say_and_wait([`那我继续了......`]);
    await attacker.print_and_wait([
      `用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。`,
    ]);
    await attacker.say_and_wait([`唔......这样，就像参拜前的洗手一样。`]);
    await attacker.print_and_wait([
      `被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。`,
    ]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 撸动着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await attacker.print_and_wait([
      `用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。`,
    ]);
    await attacker.print_and_wait([
      `在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。`,
    ]);
    await attacker.print_and_wait([
      `加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。`,
    ]);
    await attacker.print_and_wait([`哈......训练员也很开心呢......`]);
    await attacker.print_and_wait([
      `自己的小腹也一跳一跳的，所以，请赶紧射出来吧......`,
    ]);
  }
};

handlers[ero_hooks.ask_hand_job] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 将肉棒握在手心……】',
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.hand,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await defender.print_and_wait([
      `盯着 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 那光是看见就能让自己的小腹一跳一跳的家伙，自觉的十指已经像平时受到神启一样有律的摆动起来。`,
    ]);
    await defender.say_and_wait([`那个，想我用手做吗？`]);
    await defender.print_and_wait([
      `不用说话也能占卜的到了，伸手安慰着青筋跳动的肉棒，直到它慢慢变成能把自己小穴撑开塑造成下流难堪的形状的怪物模样。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续撸动肉棒……】',
    ]);
  }
  await handlers[ero_hooks.hand_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.force_hand_job] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行将肉棒伸到 ',
      defender.get_colored_name(),
      ' 手中……】',
    ]);
    await attacker.say_and_wait([`阿福，摊开手`]);
    await defender.print_and_wait([
      ` `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 颇为强硬的将肉棒伸到了自己摊开的双手间，散发出来的浓厚气味光是嗅到就让脑子发热。`,
    ]);
    await defender.print_and_wait([
      `应该做出点不情愿的表情吧？用这么强硬的态度命令自己？`,
    ]);
    await defender.print_and_wait([
      `但，右手已经颇为虔诚的开始轻轻磨挲着肉冠上敏感的沟壑，左手则是连同鼓囊囊的种子袋一起，将 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 的肉棒在柔软的掌心上托起。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行用肉棒蹭着 ',
      defender.get_colored_name(),
      ' 的双手……】',
    ]);
  }
  await handlers[ero_hooks.hand_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.hand_and_blow_job] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  if (defender.id != 0) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边抚摸一边亲吻着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await attacker.print_and_wait([`肉棒变得更大了呢......`]);
    await attacker.print_and_wait([
      `还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是......`,
    ]);
    await attacker.print_and_wait([
      `稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向训练员肉根。`,
    ]);
    await attacker.say_and_wait([`啾～`]);
    await attacker.print_and_wait([
      `看来 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 很喜欢这样呢。`,
    ]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边玩弄一边舔舐着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await attacker.say_and_wait([`呲溜呲溜——`]);
    await defender.print_and_wait([
      `身下的 `,
      attacker.get_colored_name(),
      ` 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。`,
    ]);
    await defender.print_and_wait([
      `偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着给 `,
      defender.get_colored_name(),
      ` 带来快感。`,
    ]);
  }
};

handlers[ero_hooks.ask_hand_and_blow_job] = async (
  attacker,
  defender,
  hook,
) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边抚摸肉棒一边含住龟头……】',
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.mouth,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await attacker.say_and_wait([`试着舔一下。`]);
    await defender.print_and_wait([
      `从 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 那里得到了这样的指示，于是毫无怀疑的吐出的舌尖，卷起自马眼滴落的液体吞入腹中。`,
    ]);
    await defender.print_and_wait([
      `哈，可以的吧，这样自己的舌头都被弄的黏糊糊的了......欸！还要再大胆一点吗？`,
    ]);
    await defender.print_and_wait([
      `再用手调整了一下角度，然后像对待珍宝珠般用舌尖绕着龟头与冠状沟不断舔弄着。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边撸动肉棒一边吮吸龟头……】',
    ]);
  }
  await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.force_hand_and_blow_job] = async (
  attacker,
  defender,
  hook,
) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行将肉棒挤开 ',
      defender.get_colored_name(),
      ' 的双手伸到口前……】',
    ]);
    await attacker.say_and_wait([`给我同时用手和嘴，做的到吧？`]);
    await defender.print_and_wait([
      `仰视着正居高临下 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 居高临下的视角里，不由自主的让双腿呈M字的大大张开，肉棒恰巧就在伸出舌尖就能触碰到的地方。`,
    ]);
    await defender.print_and_wait([
      `呜，态度太恶劣了吧，暗自腹诽着，但抖M的自己已经开始小心地磨挲着肉棒上条条胀起的经络，同时用舌尖轻点起铃口。`,
    ]);
    await defender.print_and_wait([`咕......当然，当然做的到。`]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 的肉棒一边击打着 ',
      defender.get_colored_name(),
      ' 的手一边搅弄着 ',
      defender.get_colored_name(),
      ' 的唇舌……】',
    ]);
  }
  await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.tit_job] = async (attacker, defender, hook, extra_flag) => {
  if (defender.id != 0) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 夹起双乳将 ',
        defender.get_colored_name(),
        ' 的肉棒捧住……】',
      ]));

    await defender.print_and_wait([
      `见着身前的担当把你的肉棒整根塞入乳沟，然后尽力的挤压着那对平时隐藏在校服下硕大调皮的白兔。`,
    ]);
    await attacker.say_and_wait([
      `嗯～……嗯咻，呼、嗯～ `,
      defender.get_colored_name(),
      ` 感觉......还好吧？`,
    ]);
    await attacker.print_and_wait([
      `于是亲昵地拍了拍正侍奉着自己的少女,手掌在亮橙色的头发上来回蹭了蹭。`,
    ]);
    await attacker.print_and_wait([`嘶......感觉更卖力了呢。`]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 上下挪动双乳摩擦着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await attacker.print_and_wait([
      `肉棒一跳一跳的，看来自己的侍奉是有效果的呢，不过，总是担心 `,
      defender.get_colored_name(),
      ` 会不舒服。`,
    ]);
    await attacker.print_and_wait([
      `于是试着将自己的两颗已经挺立变硬的樱桃贴在肉棒上，让那对变得硬硬的乳粒给乳交的过程带来不一样的感觉。`,
    ]);
    await attacker.print_and_wait([
      `乳尖在撞上变得更加滚烫的肉棒时，传来的电流感麻痹着大脑，胯间变得黏糊糊了呢。`,
    ]);
    await attacker.print_and_wait([
      `哈......哈啊，这样子，看来自己也乐在其中呢。`,
    ]);
  }
};

handlers[ero_hooks.ask_tit_job] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用双乳夹住肉棒……】',
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.breast,
      )
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await attacker.print_and_wait([
      `盯着自家占卜师胸前那对会随着动作而一晃一晃的圆润乳肉，挺立起来的乳尖周围露着健康的粉色。`,
    ]);
    await attacker.print_and_wait([`如果让肉棒被那对奶子包裹的话。`]);
    await defender.say_and_wait([`可以的~!`]);
    await attacker.print_and_wait([
      `还没说出口便听见了自家担当熟悉的应答声，毕竟 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 就是这样善解人意的赛马娘。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用双乳侍奉肉棒……】',
    ]);
  }
  await handlers[ero_hooks.tit_job](defender, attacker, hook, {
    skip_name: true,
  });
};
handlers[ero_hooks.ask_tit_and_blow_job] = async (attacker, defender, hook) => {
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边用乳房摩擦肉棒，一边用嘴唇亲吻龟头……】',
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.breast,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await defender.print_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      ' 从乳肉中冒出头的龟头有些没精打采的样子。',
    ]);
    await defender.print_and_wait('而且本人也很好懂地正合起掌拜托。');
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边用乳房摩擦肉棒，一边吮吸龟头……】',
    ]);
  }
  await handlers[ero_hooks.tit_and_blow_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.tit_and_blow_job] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  if (defender.id != 0) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边用双乳摩擦 ',
        defender.get_colored_name(),
        ' 的肉棒，一边含住了龟头……】',
      ]));

    await attacker.print_and_wait([
      ` 一上一下活动着腰肢，让晶莹的先走汁均匀的涂满了正夹着肉棒的柔嫩沟壑，又被乳沟和肉棒叠加在一起的温度蒸发，弄的脑袋也晕乎乎的。`,
    ]);
    await attacker.print_and_wait([`感觉......味道比平时还浓烈呀。`]);
    await attacker.print_and_wait([
      `小心地调整位置，只露出还在不断滴落先走汁的龟头在自己的嘴前，微微身子微微前倾将其含入口中，舌头正好垫在冠状沟的位置。`,
    ]);
    await attacker.print_and_wait([
      `啊......怎么都算不上美味吧，但是......还是会多吞下去一点的。`,
    ]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边用双乳摩擦 ',
        defender.get_colored_name(),
        ' 的肉棒，一边吮吸着龟头……】',
      ]));
    await attacker.say_and_wait([`吸溜吸溜……`]);
    await attacker.print_and_wait([
      `滴落的咸腥液体没有浪费，被自己一滴不剩的吞入了腹中，而偶尔龟头从口中抽离时，粉舌也会伴随着跟上，在液体落入那对已经被弄的滑腻腻亮晶晶的欧派前赶着接住。`,
    ]);
    await attacker.print_and_wait([`直到脑子里都被这股下流的气味充满。`]);
    await attacker.print_and_wait([
      `毕竟......是 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 认可自己的奖励呢`,
    ]);
  }
};

handlers[ero_hooks.blow_job] = async (attacker, defender, hook, extra_flag) => {
  if (defender.id != 0) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用嘴唇含住 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await attacker.print_and_wait([
      `巫女要掌握乱七八糟的仪式啊，基础的类比学习是必要的能力，但是.....没想过会用在这种地方。`,
    ]);
    await attacker.print_and_wait([
      `想象成胡萝卜，用自己的舌尖轻触肉根，然后再缠绕上去舔舐，品尝着来自 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 雄性荷尔蒙的味道。`,
    ]);
    await attacker.say_and_wait([`哈、呜、啾噜……`]);
    await attacker.print_and_wait([
      ` 嘴巴在吞舔肉棒的过程中流露出淫浊而放浪的液体吸吮声。`,
    ]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用嘴唇舔舐着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    await defender.say_and_wait([`学的很快呢。`]);
    await attacker.print_and_wait([
      `望着正呲溜呲溜侍奉着你坚挺的 `,
      attacker.get_colored_name(),
      ` ，拍了拍她的脑袋以示夸奖。`,
    ]);
    await defender.print_and_wait([`嗯......呵呵、很舒服吧。`]);
    await defender.print_and_wait([
      `伸出淫靡的舌头一点点舔弄着马眼，或者把龟头含在口中用舌面轻压，甚至像小恶魔一样轻轻用牙齿来回刮蹭着 `,
      defender.get_colored_name(),
      ` 的敏感带。`,
    ]);
    await defender.print_and_wait([
      `每当 `,
      defender.get_colored_name(),
      ` 有所反应的时候，待兼福来都会开心的笑出来。`,
    ]);
  }
};

handlers[ero_hooks.ask_blow_job] = handlers[ero_hooks.force_blow_job] = async (
  attacker,
  defender,
  hook,
) => {
  const is_asking = hook.hook === ero_hooks.ask_blow_job;
  if (hook.arg) {
    if (is_asking) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 含住肉棒……】',
      ]);
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait([`用嘴吗？`]);
      await defender.say_and_wait([`嗯，我会尽力的。`]);
      await defender.print_and_wait([
        `跪坐在地上把头凑了过去，让呼出的吐息拍打肉棒上，看起来又变大了一点呢。`,
      ]);
      await defender.print_and_wait([`然后......`]);
      await defender.say_and_wait([`咕！`]);
      await defender.print_and_wait([
        `一口气把阴茎吞入口中，参拜时用于念祷词的小嘴被肉棒塞得满满的，伴随着咕啾咕啾的声音开始给自己的 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 口交。`,
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行将肉棒插入 ',
        defender.get_colored_name(),
        ' 的嘴唇……】',
      ]);
      await attacker.say_and_wait('把嘴张开。');
      await defender.print_and_wait(
        '挣扎的话说不定有用……虽然有这样想过，身体却一点点被那只手压低了下去……',
      );
      await defender.say_and_wait('唔……');
    }
    await handlers[ero_hooks.blow_job](defender, attacker, hook, {
      skip_name: true,
    });
  } else {
    if (is_asking) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 舔舐肉棒……】',
      ]);

      await defender.say_and_wait([`知道啦，知道啦。`]);
      await attacker.print_and_wait([`有些心不在蔫的吞下了肉棒，`]);
      await defender.say_and_wait([` ……咕哇、咕噜、啾、呜！`]);
      await attacker.print_and_wait([
        `看来是没做好准备，试着吐出肉棒的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 用鼻子吐着气，一点点的让坚挺离开了口中。`,
      ]);
      await attacker.print_and_wait([
        `不过从翕动着的鼻翼与摇晃的尾巴来看，应该是颇为享受的样子。`,
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 强行用肉棒搅弄 ',
        defender.get_colored_name(),
        ' 的唇舌……】',
      ]);
      await defender.say_and_wait('哈……', true);
      await defender.say_and_wait('还要……继续嘛……', true);
    }
    await handlers[ero_hooks.blow_job](defender, attacker, hook, {
      skip_name: true,
    });
  }
};

handlers[ero_hooks.deep_blow_job] = async (attacker, defender, hook) => {
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 深深含住了 ',
      defender.get_colored_name(),
      ' 的肉棒……】',
    ]);
    await attacker.print_and_wait([`呼......这样喘气会有点费劲呢。`]);
    await attacker.print_and_wait([
      `向后再仰了仰头，小舌用力的缩起，让肉棒得以挤进了自己的口中。`,
    ]);
    await attacker.print_and_wait([`还是，没有到头吗？`]);
    await attacker.print_and_wait([
      `直到闭上眼睛的自己察觉到了杂乱的毛发戳刺到鼻子的瘙痒感，还有那股愈发明显，莫名令自己沉醉的腥臭味。`,
    ]);
    await attacker.print_and_wait([`头脑发白，这样，再深一点也没有关系的吧？`]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在喉咙深处服侍着 ',
      defender.get_colored_name(),
      ' 的肉棒……】',
    ]);
    await attacker.say_and_wait([`咕唔—!`]);
    await attacker.print_and_wait([
      `尽管那对星星瞳已经微微翻白，但喉咙仍不停地舒张收缩，用往日里除空气外绝不会有他物触及的喉肉勒紧，刺激着龟头。`,
    ]);
    await attacker.say_and_wait([`唔~哧溜~唔—!`]);
    await attacker.print_and_wait([
      `自贴在阴毛丛中的粉唇与肉棒的缝隙间漏出色情的吐息，翘起的栗色马尾邀功般的摆动了起来。`,
    ]);
  }
  await deep_blow_job_FUKU(attacker, defender, hook);
};

handlers[ero_hooks.ask_deep_blow_job] = async (attacker, defender, hook) => {
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 将肉棒深深含入……】',
    ]);
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.mouth,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await attacker.say_and_wait('还想要，更深一点……');
    await defender.print_and_wait([
      '贪心地呓语着，被索取快感的本能所支配的 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 挺起了腰。',
    ]);
    await defender.print_and_wait('更深地含进去了……');
    await defender.print_and_wait('顶到，最里面了……');
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 在喉咙深处侍奉肉棒……】',
    ]);
    await defender.print_and_wait([
      '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
      defender.get_colored_name(),
      ` 在这方面出乎${attacker.get_phy_sex_title()}预料的有天赋。`,
    ]);
    await defender.print_and_wait([
      `用余光看着 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 吸着气仰起头的姿势，没空哼歌的 `,
      defender.get_colored_name(),
      ' 好懂地抖起了耳朵。',
    ]);
    await defender.print_and_wait('怎么样～');
    await defender.print_and_wait([
      `虽然那张小嘴此刻没有说话的空闲，但与自家的${
        era.get(`cflag:${defender.id}:种族`) ? '担当' : '伙伴'
      }正负距离接触的 `,
      sys_get_colored_callname(defender.id, attacker.id),
      ` 完全领会了那用舌尖勾勒在肉棒龟头上的邀功言语。`,
    ]);
  }
  await deep_blow_job_FUKU(defender, attacker, hook);
};

handlers[ero_hooks.force_deep_blow_job] = async (attacker, defender, hook) => {
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行将肉棒插入 ',
      defender.get_colored_name(),
      ' 的喉咙深处……】',
    ]);
    await attacker.say_and_wait('把头抬起来。');
    await defender.print_and_wait('更深地含进去了……');
    await defender.print_and_wait('依旧是，叫人难以听出温情的短促命令句。');
    await defender.print_and_wait([
      '但 ',
      defender.get_colored_name(),
      ' 的身体却难以抗拒地被其所支配着。',
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行在 ',
      defender.get_colored_name(),
      ' 喉咙深处搅弄着……】',
    ]);
    await defender.print_and_wait(
      `无言地催促着，${attacker.get_phy_sex_title()}再一次强硬地用手将面前的${defender.get_teen_sex_title()}固定在了自己的股间，直到自己满足之前。`,
    );
  }
  await deep_blow_job_FUKU(defender, attacker, hook);
};

//if(defender.id != 0 ){ throw new Error(`unsupported hook!`); }

handlers[ero_hooks.ask_stimulate_g_spot] = handlers[
  ero_hooks.ask_stimulate_womb
] = async (attacker, defender, hook) => {
  if (defender.id != 56) {
    throw new Error(`unsupported hook!`);
  }

  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 请求 ',
    defender.get_colored_name(),
    ` 用肉棒刺激${
      hook.hook === ero_hooks.ask_stimulate_g_spot ? 'G点' : '子宫'
    }……】`,
  ]);
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
    if (era.get(`cflag:${attacker.id}:种族`) && attacker.id) {
      await attacker.print_and_wait(
        `身为${attacker.get_uma_sex_title()}，这也太丢人了不是吗……`,
      );
    } else {
      await attacker.print_and_wait(
        '身为大人，身为训练员，这也太丢人了不是吗……',
      );
    }
    await attacker.print_and_wait(
      '但是完全没法忍耐住——留着口水在训练员耳边轻喃着乞求快感。',
    );
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
    //
  } else {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await continue_fucking_common_FUKU(defender, attacker);
    } else {
      await attacker.say_and_wait('慢，啊哈❤️，慢一点❤️~!');
      await attacker.print_and_wait(
        `尽管已经如此乞求了，肉棒依旧能用短促而精准地命中着自己的弱点，浑浊眼瞳在敏感带带来的快感下泛起几乎将橙色驱尽的粉红。`,
      );
      await attacker.print_and_wait(
        `被驯化的完美贴合你形状的蜜穴，报恩般的而用柔和的收缩蠕动来取悦着这你那根为待兼福来的身体带来无尽快感的火热肉杆。`,
      );
    }
  }
};

handlers[ero_hooks.foot_job] = async (attacker, defender, hook, extra_flag) => {
  if (hook.arg) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的双足踏上了 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));

    await attacker.say_and_wait([
      ` `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` ~这样……感觉还行吗？`,
    ]);
    await defender.print_and_wait([
      `眯起的橙色眼眸绽着些许狡黠，那双能跑出优秀末脚的双足踏在了 `,
      defender.get_colored_name(),
      ` 的肉棒上`,
    ]);
    await defender.print_and_wait([
      `一脚抚弄龟头，一脚托起杆身，待到淅淅索索的足底摩擦让龟头预热的差不多之后，转而沿着胀红肉棒上根根暴起的粗筋，向感官不那么敏锐的末端探去。`,
    ]);
    await attacker.say_and_wait([`……真热啊……像要融化一样……`]);
    await defender.print_and_wait([
      `赛马娘们珍视的双足，就这么为了做爱时的情趣，被轻易的使用着，让龟头前端粘粘的先走汁，更多地更快地被生产出来`,
    ]);
  } else {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用双足踩踏着 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));

    await attacker.print_and_wait([
      `大概是擅长差马跑法的自己，平时在赛场上时也要随时分心关注身边对手的缘故吧？`,
    ]);
    await attacker.print_and_wait([
      `所以，在专心致志的用双足照料着训练员肉棒的自己，还能有余裕注意到训练员的情况。`,
    ]);
    await attacker.print_and_wait([
      `开始只是用足底脚掌夹住肉棒不住的套弄着，等听到男人的喘息声逐渐粗重起来，便又换个姿势继续刺激着肉棒的敏感点。`,
    ]);
    await attacker.print_and_wait([
      `让柔软的足心踏着龟头，等到肉棒开始不住的抖动时，又坏坏的停下摩擦，转而曲起脚趾压在龟头上扣住。`,
    ]);
    await attacker.say_and_wait(
      [`哈......这种能把训练员硬邦邦的肉棒踩在脚下的，莫名的优越感。`],
      true,
    );
    await attacker.say_and_wait(
      [`......好奇怪，明明只是用脚在做，但心跳快得不行，身体也好热。`],
      true,
    );
  }
};

handlers[ero_hooks.ask_foot_job] = async (attacker, defender, hook) => {
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 请求 ',
    defender.get_colored_name(),
    ' 用双足踩踏肉棒……】',
  ]);
  if (hook.arg) {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.penis,
        part_enum.foot,
      )
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    await attacker.print_and_wait('……果然？');
    await attacker.print_and_wait([
      '明明听见了出格的下流请求，面前的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 却露出了一份有所预料的余裕表情。',
    ]);
    await attacker.print_and_wait('原来…暴露的这么明显吗……');
  }
  await handlers[ero_hooks.foot_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.force_foot_job] = async (attacker, defender, hook) => {
  await era.printAndWait([
    '【',
    attacker.get_colored_name(),
    ' 强行拉过 ',
    defender.get_colored_name(),
    ' 的双足抚弄肉棒……】',
  ]);
  if (hook.arg) {
    await attacker.print_and_wait(
      '因为对这种要求感到不满，所以扭过脸去不看这边也很正常吧。',
    );
    await attacker.print_and_wait(
      '不过在这边的业界，踩的时候把头扭向另一边可是奖励哦。',
    );
    await attacker.print_and_wait('啊……看过来了……');
  }
  await handlers[ero_hooks.foot_job](defender, attacker, hook, {
    skip_name: true,
  });
};

handlers[ero_hooks.suck_nipple] = async (
  attacker,
  defender,
  hook,
  extra_flag,
) => {
  if (attacker.id === 0) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        hook.arg ? ' 含住了' : ' 吮吸着 ',
        defender.get_colored_name(),
        ' 的乳头……】',
      ]));
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('啾——');
      await attacker.print_and_wait(
        '眼前的白腻与玫红本能地想要躲开，但舌头可不是这么容易就能满足的东西。',
      );
      await attacker.print_and_wait(
        `${defender.get_teen_sex_title()}的柔软左右闪躲，最终认命般的乖乖停留在了舌尖。`,
      );
      await attacker.say_and_wait('吸——');
      await attacker.print_and_wait(
        '渐渐地，在舌尖兀自发着烫的红点有了硬挺的实感，于是小心用齿间将那肉粒衔住，咻地一吸——',
      );
      await defender.say_and_wait('唔——！');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 身体的分量立刻沉甸甸地压了过来。',
      ]);
      await attacker.print_and_wait('大概是腿发软了吧。');
    } else {
      const is_milking = era.get(`talent:${defender.id}:泌乳`);
      await attacker.print_and_wait('不会觉得很羞耻吗？');
      await attacker.print_and_wait(
        `被用膝枕侍奉着，将${
          is_milking ? '能漏出奶汁的' : '白皙'
        }乳肉俯到自己面前。`,
      );
      await attacker.print_and_wait(
        '而且大概是因为自己的错，那颜色分外妖艳的乳头已肿胀成方便吮吸的纤长形状……',
      );
      await attacker.print_and_wait('……所以真的不会为此而且羞耻吗？');
      await attacker.print_and_wait('完全不会。');
      await attacker.print_and_wait('舒服地眯起眼，张口衔住那嫣红的乳粒一吮。');
      if (is_milking) {
        await attacker.print_and_wait('「噗咻咻咻咻咻——」');
        await attacker.print_and_wait([
          `虽然看不见，但脑袋里已全是，那第一次流出乳汁时，从 `,
          sys_get_colored_callname(attacker.id, defender.id),
          ` 羞红的表情下，由白腻乳肉中喷射出的一条纤细却又连续，叫人的目光不由得追随上去的优美抛物线……`,
        ]);
        await attacker.print_and_wait('而且有点甜。');
      }
    }
  } else if (
    attacker.id === 56 &&
    defender.id === 0 &&
    era.get(`cflag:${defender.id}:种族`) === 1
  ) {
    throw new Error(`unsupported hook!`);
  } // 我猜测这样可以。
};

handlers[ero_hooks.bite_nipple] = async (attacker, defender, _, extra_flag) => {
  if (attacker.id != 0) {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 轻轻咬着 ',
        defender.get_colored_name(),
        ' 的乳头……】',
      ]));
    await attacker.print_and_wait([
      `在用齿间将硬邦邦的乳粒衔入口上的那一刻，怀中的 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 身体一下子便僵硬了。`,
    ]);
    await attacker.print_and_wait('诶……是吗……');
    await attacker.print_and_wait(
      `轻轻地活用着牙齿，绕着敏感的乳头留下一圈参差的红痕……顺便让怀中的${defender.get_teen_sex_title()}身体不住地颤抖……`,
    );
    await attacker.print_and_wait([
      '大概是明白了这边接下来的目标吧，在乳头被舌细细舔舐润滑的瞬间，',
      defender.get_colored_name(),
      ' 伸出双手搂进了 ',
      attacker.get_colored_name(),
      ' 的腰……',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('很可爱。');
    await attacker.print_and_wait([
      '不止在说怀里的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，还有那留满了红肿痕迹的乳头。',
    ]);
  } else if (
    attacker.id === 56 &&
    defender.id === 0 &&
    era.get(`cflag:${defender.id}:种族`) === 1
  ) {
    throw new Error(`unsupported hook!`);
  }
};

handlers[ero_hooks.ask_insult] = async (attacker, defender, hook) => {
  if (attacker.id !== 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 辱骂自己……】',
    ]);
    if (await ask_action(attacker.id)) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }

    await defender.say_and_wait(`想被辱骂？`);
    await defender.print_and_wait(`从圣洁的马娘巫女那里得到了这样奇怪的请求。`);
    await attacker.say_and_wait(
      `我，因为那个......被训练员粗暴对待的感觉，很不错呢......`,
    );
    await defender.print_and_wait([
      `看来自家担当果然是抖M呢，于是淫荡巫女，肉便器，飞机杯占卜师之类不痛不痒的侮辱话语骂向了面前的栗毛马娘。`,
    ]);
    await defender.print_and_wait([
      `看`,
      attacker.get_colored_actual_name(),
      `似乎颇为受用的样子，之后要不要试试更恶劣一点的措辞呢？`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续辱骂自己……】',
    ]);

    await attacker.print_and_wait([
      `耳边响着各种愈发恶劣的辱骂话语，但更令自己感到有些后怕的，反而是愈发敏感，愈发能从这种行为中感到快乐的自己。`,
    ]);
    await attacker.say_and_wait([`这种感觉，不想，不想停止......`], true);
    await attacker.say_and_wait(
      [`哈，自己，自己的确是个无可救药的，抖M马娘......`],
      true,
    );
  }
};

handlers[ero_hooks.ask_hit_anal] = async (attacker, defender, hook) => {
  if (attacker.id != 56) {
    throw new Error(`unsupported hook!`);
  }
  if (hook.arg) {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 拍打自己的臀部……】',
    ]);
    if (await ask_action(attacker.id)) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
    await defender.say_and_wait([`如果阿福这么想被欺负的话......`]);
    await defender.print_and_wait([
      `手掌在 `,
      attacker.get_colored_name(),
      ` 圆润的臀部上轻轻磨蹭了两下，让她的身躯在我怀里微微颤抖，说不上是因为害怕还是由于激动。`,
    ]);
    await defender.print_and_wait([`啪！`]);
    await defender.print_and_wait([
      `逐渐变得滚烫的臀峰在 `,
      defender.get_colored_name(),
      ` 还未从酥麻感中恢复的手掌上轻轻蹭着，看来很喜欢呢。`,
    ]);
  } else {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续拍打自己的臀部……】',
    ]);

    await attacker.say_and_wait([`好疼……但是，好喜欢……`], true);
    await attacker.say_and_wait([`啪啪地打着自己的屁股。`], true);
    await attacker.say_and_wait([`偶尔又轻轻揉搓着几个来回。`], true);
    await attacker.say_and_wait(
      [`对逐渐分不清了疼痛还是快乐的自己来说，都是最棒的奖励呢……`],
      true,
    );
  }
};
handlers[ero_hooks.orgasm] = async (chara_id) => {
  const chara = get_chara_talk(chara_id);

  let multi_orgasm = undefined;

  /* switch (last_action) {
      case 79: // 站立位 // V高潮
        if(era.get(`nowex:56:阴道高潮`) === 1){
          await chara.print_and_wait([`咕齁齁齁齁~！！！`]);
          await me.print_and_wait([`达到了高潮的 `,chara.get_colored_name(),` ，痉挛的趾尖连维持平衡都做不到。`]);
          await me.print_and_wait([`只得进一步抱住了还在不断抽送着肉棒的 `,me.get_colored_name(),` 喉咙中低吟着如同求饶般的呜呜声。`]);
          if(era.get(`nowex:0:阴茎高潮`) === 1 && era.get(`nowex:56:阴道高潮`) === 1 && era.get(`nowex:56:膣内精液`)  > 0) { // 射精同时高潮
             
            await me.print_and_wait([`能感到在 `,chara.get_colored_name(),` 体内横冲直撞的肉棒也一跳一跳的做好了发射的准备。`]);
            await me.print_and_wait([`箍紧正双眼上翻的 `,chara.get_colored_name(),` 的腰臀，肉棒抵着因发情而下垂的子宫灌射着精液 , 腔内的穴肉也吮吸般刺激着龟头。`]);
            await chara.say_and_wait('~唔呃嗯嗯嗯嗯嗯！！！');
            await me.print_and_wait([` `,chara.get_colored_name(),` 原本充满元气的脸庞双眼翻白，唇瓣此刻大大的张开着，吐出那软嫩的香舌。`]);
            await me.print_and_wait([`浓郁的白精的自交合处滴答滴答落在了地上，`]);
          }
        }
        break;
        
      case 80: // 站立背位 // V高潮
        
        if( (era.get(`nowex:56:阴道高潮`) === 1 && era.get(`nowex:0:阴茎高潮`) === 0 ) || ( era.get(`nowex:56:阴道高潮`) === 1 && era.get(`nowex:0:阴茎高潮`) === 1 && era.get(`nowex:56:膣内精液`) < 0 ) ){
          await chara.print_and_wait([`呀......呀啊❤`]);
          await me.print_and_wait([`不受控制的弓起身子，仰起了天鹅般的白皙脖颈，向后靠在你的怀中。`]);
          await me.print_and_wait([`被挤压而流出的爱液顺着大腿流下，弄的栗色马尾也多了不少湿漉漉的深色痕迹。`]);
        }
        if(era.get(`nowex:0:阴茎高潮`) === 1 && era.get(`nowex:56:膣内精液`)  > 0 && era.get(`nowex:56:阴道高潮`) === 1 ){ // 射精
          await me.print_and_wait([`发射边缘的肉棒完全拔出，而后微微抬起那对肉臀，调整角度。`]);
          await me.print_and_wait([`肉棒长驱直入的碾过布满褶皱的穴壁，抵住 `,chara.get_colored_name(),` 的宫颈，倾吐起精液。`]);
          await chara.say_and_wait('~~唔咕哦，好烫……好……厉害......');
          await me.print_and_wait([` `,chara.get_colored_name(),` 柔美的身体，几乎被 `,me.get_colored_name(),` 拉拽成一个弓形，头部高高扬起，而后靠在了 `,me.get_colored_name(),` 的怀中，被挤压而流出的精液顺着大腿流下，弄的下垂的栗色马尾上也沾了不少。`]);

        }
      break;
    }
      TODO:算了 之后实装了体位系统再说吧
    */

  if (era.get(`nowex:${chara_id}:二重高潮`)) {
    multi_orgasm = '二';
  } else if (era.get(`nowex:${chara_id}:三重高潮`)) {
    multi_orgasm = '三';
  } else if (era.get(`nowex:${chara_id}:四重高潮`)) {
    multi_orgasm = '四';
  } else if (era.get(`nowex:${chara_id}:五重高潮`)) {
    multi_orgasm = '五';
  } else if (era.get(`nowex:${chara_id}:多重高潮`)) {
    multi_orgasm = '多';
  }
  multi_orgasm &&
    era.print([
      chara.get_colored_name(),
      ' 发生了',
      { content: ` ${multi_orgasm}重高潮`, color: buff_colors[2] },
      '！',
    ]);
  orgasm_check_list.forEach((part) => {
    const part_name = part_names[part];
    const times =
      era.get(`nowex:${chara_id}:${part_name}高潮`) +
      (era.get(`nowex:${chara_id}:无自觉${part_name}高潮`) || 0);
    if (part === part_enum.breast) {
      const nipple_times =
        era.get(`nowex:${chara_id}:乳头高潮`) +
        era.get(`nowex:${chara_id}:无自觉乳头高潮`);
      times &&
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '胸部', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
      nipple_times &&
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '乳头', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
    } else if (times) {
      let semen;
      switch (part) {
        case part_enum.sadism:
        case part_enum.masochism:
          era.print([
            chara.get_colored_name(),
            ' 因 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
          break;
        case part_enum.penis:
          semen = era.get(`nowex:${chara_id}:射精量`);
          era.print([
            chara.get_colored_name(),
            ' ',
            semen < 0 ? '在避孕套中' : '',
            '射出了',
            {
              content: ` ${Math.abs(semen)}ml `,
              color: buff_colors[2],
            },
            '精液！',
          ]);
          break;
        default:
          era.print([
            chara.get_colored_name(),
            ' 的 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
      }
    }
  });
};

/**
 * 待兼福来 - 调教
 *
 * @author Alex
 
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error(`unsupported hook!`);
  }

  /*return await handlers[hook.hook](hook, extra_flag);

*/

  if (ero_action_names[hook.hook]) {
    const { attacker, defender } = get_participants_and_first_action(
      56,
      hook,
      extra_flag,
    );
    let handler_dict = {};
    if (!sys_check_awake(defender)) {
      handler_dict = sleep_handlers;
    } else if (era.get('tflag:强奸') < 0) {
      handler_dict = handlers;
    } // 没写强奸的情况

    const aim_handler = handler_dict[hook.hook];
    if (
      !aim_handler ||
      (await aim_handler(
        get_chara_talk(attacker),
        get_chara_talk(defender),
        hook,
        extra_flag,
      ))
    ) {
      era.print([
        '【',
        get_chara_talk(attacker).get_colored_name(),
        ' 对 ',
        get_chara_talk(defender).get_colored_name(),
        hook.arg ? ' ' : ' 继续 ',
        ero_action_names[hook.hook],
        '……】',
      ]);
    }
  } else if (handlers[hook.hook]) {
    return await handlers[hook.hook](56, hook, extra_flag);
  }
};
