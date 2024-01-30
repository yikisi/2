const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CharaTalk = require('#/utils/chara-talk');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const event_hooks = require('#/data/event/event-hooks');

/**
 * 春乌拉拉 - 爱慕
 *
 * @author 99
 */
module.exports = async (hook) => {
  const chara_talk = new CharaTalk(52),
    chara_self_name = era.get(`callname:52:52`),
    callname = era.get('callname:52:0'),
    love = era.get('love:52');
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      await chara_talk.print_and_wait(
        `如果是往常，现在的 ${
          chara_talk.name
        } 理应早已进入了梦乡，但今夜的小${chara_talk.get_uma_sex_title()}却些难以入眠。`,
      );
      await chara_talk.print_and_wait(
        `  从舍友的床上不断传出的让人脸红心态的低吟声就像某种咒语一般，总将${chara_talk.sex}的思绪带到不知名的某个地方。`,
      );
      await chara_talk.print_and_wait(
        `在床上翻来覆去着，${chara_talk.name} 的思绪也像风雨中的小船般在脑海上晃个不停。`,
      );
      await chara_talk.print_and_wait(
        `就这样闭上眼睛的话，总感觉会像上次那样梦到不得了的事，比如对 ${chara_self_name} 这样那样的 ${callname} 什么的。`,
      );
      await chara_talk.print_and_wait(
        `不过渴求地将 ${chara_self_name} 推倒的 ${callname}，虽然有点可怕，但现在好像接受了也不错的样子？`,
      );
      await chara_talk.print_and_wait(
        `梦里抱着 ${callname} 的${chara_talk.get_uma_sex_title()}那副不害臊的神情也是，以后的 ${chara_self_name} 也会……变成那样不知羞耻的「${chara_talk.get_phy_sex_title()}」吗？`,
      );
      await chara_talk.print_and_wait(
        `这样平等的相拥着，那时的 ${callname} 与 ${chara_self_name}，究竟是谁在渴求谁呢……`,
      );
      await chara_talk.print_and_wait(
        '不行不行，现在还不是胡思乱想的时候！要好好睡觉才行！',
      );
      await chara_talk.print_and_wait(
        `那现在要去提醒一下 ${era.get(
          'callname:52:61',
        )} 吗？可是这样做一定会惹她生气的，还是 ${chara_self_name} 再努力一下好了……`,
      );
      await chara_talk.print_and_wait(
        '呜呜……身体好热，就算掀掉被子也还是好热……',
      );
      era.println();
      era.printButton('试一下，试一下就好……（升级关系）', 1);
      era.printButton('唔……但还是好困啊……（暂停升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        begin_and_init_ero(52);
        await chara_talk.print_and_wait(
          `然而在褪掉睡衣，将手${
            chara_talk.sex_code ? '伸进花园' : '伸向肉棒'
          }的瞬间，${chara_talk.get_teen_sex_title()} 娇嫩的身体就已做好了迎接高潮的准备。`,
        );
        await chara_talk.print_and_wait(
          `仅是轻轻一下，小${chara_talk.get_uma_sex_title()}的身体就在比以往任何一次都要激烈的反应下，让无法抑制的让水声打湿了床单。`,
        );
        await chara_talk.print_and_wait(
          `而即使用力捂住嘴不让声音漏出，在不住的颤抖中，对 ${callname} 微弱的呼唤还是从蒙住的被子下偷偷溜走了。`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await chara_talk.print_and_wait(
            '不知不觉中，因高潮而挺起的那对雌肉也在急不可耐挤出着奶水。',
          );
          await chara_talk.print_and_wait(
            '即使身体酥软无比，汁水还是不断自发性地挤出着乳首，浸透着少女的睡衣。',
          );
          era.println();
          era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
        }
        await chara_talk.print_and_wait(
          `身体发生了无法理解的反应，${chara_self_name} 有点慌张，但欲望依旧占据着身体绝对的支配。`,
        );
        await chara_talk.print_and_wait(
          `在手指失控的深入与不住的娇声呻吟中，小${chara_talk.get_uma_sex_title()}比以往任何一次都沉浸在对某人的爱欲之中。`,
        );
        await chara_talk.print_and_wait(
          `就像初尝发情的幼兽期望着被成年雄性所征服，${chara_self_name} 在被单下不断扭动着腰肢。`,
        );
        await chara_talk.say_and_wait(
          `${callname} ……呜……被 ${callname}、粗暴的……不行了、哈啊……`,
        );
        await chara_talk.print_and_wait(
          `被某人施以支配凌虐的妄想仿佛整晚都在持续，${chara_self_name} 甚至不知道自己何时睡着的。`,
        );
        await chara_talk.print_and_wait(
          `等${chara_talk.get_teen_sex_title()}再次睁开眼睛时，已经是第二天被闹钟叫醒的时候了。`,
        );
        await chara_talk.print_and_wait(
          '在发泄了欲望后，除了床的状况有些糟糕外，这一夜竟然睡得意外安稳，只是——',
        );
        await chara_talk.say_and_wait(
          `虽然不是很懂，但是……${callname}、好想来一次……真正的……`,
        );
        await chara_talk.print_and_wait(
          ` 在${chara_talk.get_teen_sex_title()}起床时的意犹未尽之间，「不知羞耻」的话语竟再次小声地脱口而出了……`,
        );
        era.println();
        await quick_make_love(
          new EroParticipant(52, part_enum.hand),
          new EroParticipant(
            52,
            era.get('cflag:52:阴道尺寸') ? part_enum.virgin : part_enum.penis,
          ),
          false,
        );
        end_ero_and_train();
        await sys_love_uma_in_event(52);
      } else {
        await chara_talk.say_and_wait(
          `下次还要去见${callname}，还是赶快睡吧……`,
        );
        await chara_talk.print_and_wait(
          `强忍着躁动的身体，用力将尾巴拉到一边，小${chara_talk.get_uma_sex_title()}艰难的在床上翻了个身。`,
        );
        await chara_talk.print_and_wait(
          `用被子与枕头蒙住耳朵，在努力地折腾了一番后，${callname} 终于在室友断断续续的喘息声中进入了梦乡。`,
        );
        await chara_talk.print_and_wait(
          `但在梦中，小${chara_talk.get_uma_sex_title()}又梦见了，像看待「${chara_talk.get_phy_sex_title()}」般热切的将她推倒的 ${callname}……`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await chara_talk.print_and_wait(
            '而醒来的时候，两只不听话的大白兔似乎也因为梦中的发情还在精神的挺立着。',
          );
          await chara_talk.print_and_wait(
            '从挺立的尖端流出的白色汁液，也趁着主人沉浸在梦中将睡衣的胸前浸湿地一塌糊涂。',
          );
          era.println();
        }
        await chara_talk.print_and_wait(
          `于是，被过激的春梦整晚缠绕着的 ${chara_self_name}，第二天还是起晚了。`,
        );
        await chara_talk.say_and_wait(
          `要是 ${chara_self_name} 昨晚没有忍耐，会睡得更好一点吧，大概……`,
        );
      }
      era.set('status:52:熬夜', 1);
      era.set('cflag:52:爱慕暂拒', 49);
    }
  }
};
