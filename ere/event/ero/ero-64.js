/**
 * @file 目白善信 - 调教
 * @author Bottle
 * @author KUN
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');
const PamaNormalCommunications = require('#/event/ero/ero-lines-64/normal-communications');
const PamaNormalFucking = require('#/event/ero/ero-lines-64/normal-fucking');
const PamaNormalMakingOuts = require('#/event/ero/ero-lines-64/normal-making-outs');
const PamaNormalSm = require('#/event/ero/ero-lines-64/normal-sm');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

class PamaNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new PamaNormalCommunications(this);
    this.making_outs = new PamaNormalMakingOuts(this);
    this.fucking = new PamaNormalFucking(this);
    this.sm = new PamaNormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true });
    this.normal = new PamaNormalLines(this);
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(64)) {
      return await super.get_mark(level, type, _new);
    }
    const pama = get_chara_talk(64);
    switch (type) {
      case mark_enum.pleasure:
        switch (level) {
          case 1:
            await pama.say_and_wait('明明只是肉体关系，我却……停不下来……');
            break;
          case 2:
            await pama.say_and_wait('逃不掉❤️️已经没法从这个❤️️逃掉了❤️');
            break;
          case 3:
            await pama.say_and_wait(
              '哈啊❤️️已经无法逃走了❤️没有就不行了❤️我已经是……这个人的所有物了❤️',
            );
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            await pama.say_and_wait('事到如今，我们已经……哎嘿嘿……');
            break;
          case 2:
            await pama.say_and_wait('这就是所谓的一心同体……');
            break;
          case 3:
            await pama.say_and_wait('果然，只有你能做到这个❤️️只有你❤️️……');
        }
        break;
      default:
        return await super.get_mark(level, type, _new);
    }
  }

  async orgasm(pama, me, callname) {
    if (era.get('love:64') < 50) {
      return;
    }
    const last_action = era.get('tflag:前回行动'),
      master = era.get('tflag:主导权');
    if (
      (master === 0 && last_action === ero_hooks.ask_blow_job) ||
      (master === 64 && last_action === ero_hooks.blow_job)
    ) {
      if (era.get('nowex:0:阴茎高潮') > 0) {
        if (era.get('nowex:64:饮精量') > 0) {
          await pama.say_and_wait(['唔嗯……']);
          await era.printAndWait([
            me.get_colored_name(),
            ' 扶住 ',
            pama.get_colored_name(),
            ' 的头，将涌出的精子尽数倾泻至',
            pama.get_teen_sex_title(),
            '口中，然后在包覆下享受着余韵。',
          ]);
          await era.printAndWait([
            '那双似乎想要抵抗的手却只是无力地扶在 ',
            me.get_colored_name(),
            ' 大腿两侧，',
            pama.sex,
            '只得用舌面迎接着每一阵温热……',
          ]);
          await era.printAndWait([
            '勉强将精液咽下的 ',
            pama.get_colored_name(),
            ' 喘着粗气，眼神却如同被灌醉般朦胧不堪。',
          ]);
        } else if (era.get('nowex:64:颜射') > 0) {
          await era.printAndWait([
            me.get_colored_name(),
            ' 在临近射精前抽出，将一发发白浊洒在 ',
            pama.get_colored_name(),
            ' 那张白皙的脸蛋上。',
          ]);
          await era.printAndWait([
            '而后者只是微微皱眉，放任自己的嘴唇、鼻梁、前额乃至头发都沾上 ',
            callname,
            ' 的标记。',
          ]);
          await era.printAndWait([
            '用刚刚射精完毕的尖端磨蹭着 ',
            pama.get_colored_name(),
            ' 柔软的脸颊，',
            me.get_colored_name(),
            ' 边享受着余韵，边欣赏着眼前的杰作。',
          ]);
        }
      }
    } else if (era.get('nowex:0:阴茎高潮') > 0) {
      if (era.get('nowex:64:饮精量') > 0) {
        if (
          (master === 0 && last_action === ero_hooks.ask_deep_blow_job) ||
          (master === 64 && last_action === ero_hooks.deep_blow_job)
        ) {
          await pama.say_and_wait(['唔……']);
          await era.printAndWait([
            '察觉到 ',
            me.get_colored_name(),
            ' 即将射精的 ',
            pama.get_colored_name(),
            '，将 ',
            me.get_colored_name(),
            ' 的大腿紧紧抱住，奉献着自己的体温。',
          ]);
          await era.printAndWait([
            '扶住 ',
            pama.get_colored_name(),
            ' 的脑袋抵到最深处，在',
            pama.sex,
            '的紧拥下，向',
            pama.get_teen_sex_title(),
            '的食道里倾泻精子直至最后一滴。',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 接住像是要倾倒的 ',
            pama.get_colored_name(),
            '，口腔终于解放的',
            pama.sex,
            '无力地靠在 ',
            me.get_colored_name(),
            ' 身上喘着气，像是跑完了一整场比赛。',
          ]);
          await era.printAndWait([
            '整理着 ',
            pama.get_colored_name(),
            ' 脸上的汁液和散发，莫名的罪恶感涌上心头，直至',
            pama.sex,
            '拉住 ',
            me.get_colored_name(),
            ' 的手，梦呓似地说道。',
          ]);
          await pama.say_and_wait([callname, '……我做得还不错吧？']);
        } else if (
          last_action === ero_hooks.sixty_nine &&
          pama.sex_code === 0
        ) {
          await era.printAndWait([
            pama.get_colored_name(),
            ' 的舌头在 ',
            me.get_colored_name(),
            ' 的阴茎上舞动，每一次吞吐都令 ',
            me.get_colored_name(),
            ' 浑身酥麻。',
          ]);
          await era.printAndWait([
            '同时，',
            me.get_colored_name(),
            ' 的唇舌也在 ',
            pama.get_colored_name(),
            ' 湿润的蜜穴中探索，引得',
            pama.sex,
            '不断扭动腰肢……',
          ]);
          await pama.say_and_wait(['唔唔……！']);
          await era.printAndWait([
            '浸于快感潮水中的 ',
            me.get_colored_name(),
            ' 甚至没有预料到，紧抱着 ',
            pama.get_colored_name(),
            ' 的大腿迎来了射精。',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            ' 微微呛了一下，但',
            pama.sex,
            '很快调整过来，努力吞咽着口中的浊液。',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 能感觉到',
            pama.sex,
            '的喉咙在不断滚动，舌尖紧紧覆住 ',
            me.get_colored_name(),
            ' 那敏感的尖端，快感直冲脑髓……',
          ]);
        }
      } else if (
        era.get('nowex:0:射精量') > 0 &&
        ((master === 0 && last_action === ero_hooks.ask_foot_job) ||
          (master === 64 && last_action === ero_hooks.foot_job))
      ) {
        await pama.say_and_wait([
          '哈啊……',
          callname,
          '……没关系的……哈啊……全部射出来吧……',
        ]);
        await era.printAndWait([
          '似乎察觉到 ',
          me.get_colored_name(),
          ' 临近高潮，',
          pama.get_colored_name(),
          ' 加快速度鼓励着 ',
          me.get_colored_name(),
          ' 射精，柔嫩的脚掌紧紧包裹着 ',
          me.get_colored_name(),
          ' 跳动的炽热。',
        ]);
        await era.printAndWait([
          '随着 ',
          me.get_colored_name(),
          ' 的一声低吟，一股股浓稠的精液从尖端喷涌，溅落在 ',
          pama.get_colored_name(),
          ' 白皙的脚背和小腿上。',
        ]);
        await era.printAndWait([
          pama.get_colored_name(),
          ' 看着眼前的景象，缩动脚趾感受着粘稠液体的温度和质感，眼中闪烁着兴奋的光芒。',
        ]);
      } else if (era.get('nowex:64:膣内精液') > 0) {
        if (
          (master === 0 && last_action === ero_hooks.missionary) ||
          (master === 64 && last_action === ero_hooks.ask_fuck)
        ) {
          await pama.say_and_wait(['啊、啊啊啊、不行……啊啊啊嗯。']);
          await era.printAndWait([
            '来到了冲刺阶段，',
            me.get_colored_name(),
            ' 肆意向 ',
            pama.get_colored_name(),
            ' 潮红的蜜穴挥泄着射精前的最后一点性欲。',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            ' 原本抑扬的娇声被撞击抹平了波谷，变成了泣叫般连绵的声音，在房间里回荡着。',
          ]);
          await era.printAndWait([
            '然后，将交合处连带 ',
            pama.get_colored_name(),
            ' 的两条大腿用力抵在身下，让精子一滴不漏地涌进深处……',
          ]);
          await pama.say_and_wait(['……唔……哦。']);
          await era.printAndWait([
            pama.get_colored_name(),
            ' 在 ',
            me.get_colored_name(),
            ' 身下剧烈抽动着，不知是想要逃离还是在下意识地迎合 ',
            me.get_colored_name(),
            ' 的动作。',
          ]);
          await era.printAndWait([
            '肉棒在阴道的紧缩下排出最后几滴精液，',
            me.get_colored_name(),
            ' 欣赏着 ',
            pama.get_colored_name(),
            ' 在失去意识的刹那现出的表情。',
          ]);
        } else if (master === 0) {
          if (last_action === ero_hooks.doggy_style) {
            await era.printAndWait([
              '临近高潮，除去双膝勉强支撑着臀部，',
              pama.get_colored_name(),
              ' 那柔韧的身体完全瘫在床上。',
            ]);
            await era.printAndWait([
              '任由 ',
              me.get_colored_name(),
              ' 从上方一次次穿透着',
              pama.sex,
              '的蜜穴，瞳孔不住地往额头上翻。',
            ]);
            await era.printAndWait([
              pama.sex,
              '的双腿不住地颤抖，脚趾绷紧蜷缩，每一次的冲击都让',
              pama.sex,
              '发出甜腻的呻吟。',
            ]);
            await era.printAndWait([
              '随着射精前的电流席卷全身，',
              me.get_colored_name(),
              ' 挺动着腰部对自己身下的肉垫发出最后几次撞击。',
            ]);
            await pama.say_and_wait(['……哦……❤️。']);
          } else if (last_action === ero_hooks.sitting) {
            await era.printAndWait([
              '临近高潮，',
              pama.get_colored_name(),
              ' 的双腿紧紧缠绕在 ',
              me.get_colored_name(),
              ' 的腰间，随着每一次深入而收紧。',
            ]);
            await era.printAndWait([
              pama.sex,
              '的呻吟已经变得沙哑，每一个音节都充满了情欲的颤音。',
            ]);
            await pama.say_and_wait(['啊啊……啊……啊嗯……', callname, '……']);
            await era.printAndWait([
              me.get_colored_name(),
              ' 紧抱着 ',
              pama.get_colored_name(),
              ' 在',
              pama.sex,
              '的体内喷涌着精子，',
              pama.sex,
              '的臀部在 ',
              me.get_colored_name(),
              ' 的紧抓下摆动做着最后的汲取。',
            ]);
          }
        }
      }
    }
  }
};
