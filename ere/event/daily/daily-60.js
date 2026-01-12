/**
 * @file 优秀素质 - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(60)) {
      return super.select();
    }
    get_chara_talk(60).say(
      Math.random() < 0.5
        ? `怎么了怎么了？找 ${sys_get_callname(60, 60)} 有什么事吗？`
        : `嗯？有事情要做吗？那 ${sys_get_callname(60, 60)} 就来陪你一起吧！`,
    );
  }

  good_morning() {
    const chara_self_name = sys_get_callname(60, 60),
      callname = sys_get_callname(60, 0);
    const talk_arr = [
      `今天的训练安排是什么？让我看看清单嘛`,
      `昨天烧烤店的大叔说又上架了些新菜品，之后要一起去尝尝吗？我请客哟～`,
      `嘘——！小声点！你看，那边有只猫猫在睡觉呢，要不我们换个地方吧？`,
      `哦！${callname}你一副很高兴的样子嘛，是遇上什么好事了吗？`,
      `说起来，晚饭决定好吃什么了吗？还没决定的话就让 ${chara_self_name} 来给你露一手吧！`,
    ];
    if (era.get('status:60:熬夜')) {
      talk_arr.push(
        `唔哈——啊……${callname}？为什么在打哈欠？啊哈哈哈……` +
          `这下瞒不住了啊，其实，${chara_self_name} 本来打算看完一个相声视频就睡觉的，结果实在是太有趣了，不知不觉就……` +
          `等回过神来时，已经是凌晨了，不过真的很有趣哦？要不${callname}也来看看？`,
      );
    } else if (era.get('base:60:体力') === era.get('maxbase:60:体力')) {
      talk_arr.push(
        `哦～${callname}，早上好呀！托你的福，${chara_self_name} 休息的很好呢！吃了不少美食，觉也睡得饱饱的，现在感觉浑身精力充沛哦？` +
          `总感觉好像年轻了许多呢！唯一有些遗憾的就是……啊，没什么，总之快告诉我接下来的安排吧？`,
      );
    } else {
      talk_arr.push(
        `啊，${callname}啊，早上好～睡了个好觉后总感觉疲惫也一扫而光了呢，如果能再有人按摩一下的话就更好了～嘛，不说这些了，接下来的安排是？`,
      );
    }
    get_chara_talk(60).say(get_random_entry(talk_arr));
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(60)) {
      return await super.good_night(hook);
    }
    const chara = get_chara_talk(60),
      check = get_custom_check(60).is_want_make_love(),
      me = get_chara_talk(0);
    if (check > 0) {
      era.print(
        `繁忙的一天结束，${me.name} 把 ${chara.name} 送到学生宿舍门口。`,
      );
      era.print(
        `${me.name} 刚打算如往常一样挥手告别，却突然被优秀素质拽住了袖脚。`,
      );
      era.print(
        '低头一看，不知是否是夕阳的映衬，优秀素质低垂着的脸庞显得格外的娇红。',
      );
      era.print(
        `一阵短暂的沉默后，红发${chara.get_teen_sex_title()}才支支吾吾开口打破了这份尴尬。`,
      );
      chara.say(
        '今天……已经做好外宿申请了……所以……再在一起呆一会也是可以的哟？那个……如果……',
      );
      chara.say(`如果 ${sys_get_callname(60, 0)} 想的话……更、更进一步的事也——`);
      era.print(
        `至此，${chara.get_teen_sex_title()}的双颊已经烧的通红，双眸含情脉脉的注视着 ${
          me.name
        } 的眼睛，${chara.sex}后续的言语，及时没说出口，${
          me.name
        } 也已是心知肚明。`,
      );
      if (check !== 2) {
        era.printButton('答应', 1);
        era.printButton('拒绝', 2);
      }
      if (check === 2 || (await era.input()) === 1) {
        chara.say('真、真的吗！');
        era.print(
          `优秀素质原本羞涩的脸上瞬间涌起了激动与喜悦，不等 ${me.name} 再次肯定，不由分说的便抱住了 ${me.name} 的手臂，并附在耳边轻声低语：`,
        );
        chara.say(
          `今晚的训练，也请你多多指教咯？训 · 练 · 员 · ${me.get_adult_sex_title()} ❤️`,
        );
        era.print(
          `就这样，${
            me.name
          } 被优秀素质拉着离开了宿舍前的大门，在其他放学的${chara.get_uma_sex_title()}们温暖的目送下，走向了街道的另一头……`,
        );
        hook.arg = true;
      } else {
        chara.say('是吗……这样啊……');
        era.print(
          `${chara.get_teen_sex_title()}松开了抓住袖角的手，脸上浮现了一抹难以隐去的失落。`,
        );
        chara.say(
          `嗯，没事的，我也真是，${sys_get_callname(
            60,
            0,
          )}今天明明都这么累了，也确实该休息休息了，刚才的话就拜托你当没听到吧，晚安啦，${sys_get_callname(
            60,
            0,
          )}，明天再见！`,
        );
        era.print(
          `看着${chara.get_teen_sex_title()}落寞离去的背影，${
            me.name
          } 心头涌上一股说不出的滋味。`,
        );
        hook.arg = false;
      }
    } else {
      era.print(
        `繁忙的一天结束，${me.name} 把 ${chara.name} 送到学生宿舍门口。`,
      );
      chara.say(`今天辛苦您了！明天再见，${sys_get_callname(60, 0)}！`);
      era.print(
        `一边挥手一边目送 ${chara.name} 的背影离开后，${me.name} 也转身离去，回到自己的宿舍休息。`,
      );
    }
  }

  async talk() {
    if (!sys_check_awake(60)) {
      return await super.talk();
    }
    const chara_self_name = sys_get_callname(60, 60),
      callname = sys_get_callname(60, 0);
    let talk_arr;
    switch (era.get('cflag:60:干劲')) {
      case -2:
        talk_arr = [
          '啊——浑身……提不起劲……',
          '啊——不行！满脑子想的都是坏事……得赶紧冷静下来才行……',
        ];
        break;
      case -1:
        talk_arr = [
          '唔——总感觉有些提不起劲呢。',
          '浑身上下总感觉不对劲呢……是不是该休息一下了？',
        ];
        break;
      case 0:
        talk_arr = [
          `日安，${callname}。今天的训练内容是什么？`,
          `训练、比赛还是别的什么的，就交给 ${callname} 安排了～我会在能力范围内去做的。`,
          `哈呀——啊，${callname} 啊。今天的安排是？`,
        ];
        break;
      case 1:
        talk_arr = [
          '嗯～感觉不错呢，这样的话也许能……什么都没有！哈哈哈哈……',
          '真是好天气呢，今天会有什么事呢？',
          `哦～总感觉会有什么好事发生呢？你说呢，${callname}？`,
        ];
        break;
      case 2:
        talk_arr = [
          '哦斯～今天也全力上吧——开玩笑的，不过我会在能力范围内尽力就是了。',
          `${chara_self_name} 状态绝佳！干脆去跑两圈吧？不过对结果别抱太大希望就是了。`,
          `哦？${callname} 早啊～要一起吃个早饭或者散散步吗？我请客哦？`,
        ];
        break;
    }
    await get_chara_talk(60).say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const callname = sys_get_callname(60, 0);
    await get_chara_talk(60).say_and_wait(
      Math.random() < 0.5
        ? `诶？这是送给我的？谢谢你，${callname}！不知道我的喜好？没事了，${callname} 光是有这份心意我就很开心啦！`
        : `什么什么？礼物？哇！谢谢 ${callname}！我可以现在拆开吗？`,
    );
  }

  async office_cook() {
    await get_chara_talk(60).say_and_wait(
      `料理什么的交给 ${sys_get_callname(60, 60)} 就行啦！${sys_get_callname(
        60,
        0,
      )} 就到一旁休息去吧！好了快去快去！`,
    );
  }

  async office_study() {
    await get_chara_talk(60).say_and_wait(
      `嘿——没想到 ${sys_get_callname(
        60,
        0,
      )} 连这种题都会啊？难道说以前是个高材生？`,
    );
  }

  async office_rest() {
    await get_chara_talk(60).say_and_wait(
      '偶尔像这样两个人一起无所事事也不错呢，偶尔的话。',
    );
  }

  async office_prepare() {
    await get_chara_talk(60).say_and_wait(
      `我不会辜负商店街的大家和 ${sys_get_callname(60, 0)} 的期待的！`,
    );
  }

  async office_game() {
    await get_chara_talk(60).say_and_wait(
      `哦？要向 ${sys_get_callname(
        60,
        60,
      )} 发起挑战吗？好胆识！那输的人要答应赢家一个请求哦？这样才有干劲嘛！`,
    );
  }

  async school_atrium(hook) {
    hook.arg = (await select_action_in_atrium()) > 0;
    await get_chara_talk(60).say_and_wait(
      hook.arg
        ? `在学校里这样……多少还是会意识到周围的目光呢……不过要是 ${sys_get_callname(
            60,
            0,
          )} 无所谓的话——`
        : `可恶！！！！！明明大家和 ${sys_get_callname(
            60,
            0,
          )} 都那么期待我，我却——`,
    );
  }

  async school_rooftop() {
    await get_chara_talk(60).say_and_wait(
      `锵锵！是 ${sys_get_callname(
        60,
        60,
      )} 的手制便当哦！每天都要保证营养均衡才行呢！`,
    );
  }

  async out_river(hook, extra_flag) {
    const chara_talk = get_chara_talk(60);
    if (!get_random_value(0, 2)) {
      await chara_talk.say_and_wait('……然后，蔬菜店的阿姨就又……');
      await era.printAndWait(
        `一边感受着吹拂而来的清爽的河风，一边听着 ${chara_talk.name} 滔滔不绝的讲着商店街的家常`,
      );
      await chara_talk.say_and_wait(
        `……${era.get('callname:60:0')}？你有在听吗？`,
      );
      await era.printAndWait(
        `似乎是因为没有回应而感到不满，${chara_talk.name} 发出了娇嗔`,
      );
      await era.printAndWait(
        `在作出答复和安抚后，${chara_talk.name} 才又恢复了刚才的劲头……`,
      );
      era.println();
      sys_change_motivation(60, 1);
      sys_like_chara(60, 0, 5);
      await era.waitAnyKey();
      hook.override = true;
    } else {
      if (!(hook.arg = (await select_action_around_river()) > 0)) {
        extra_flag.jpy = get_random_value(0, 5);
      }
      await chara_talk.say_and_wait(
        hook.arg
          ? `今天真是好天气呢～干脆午饭就在这河边找个地方吃了吧？${era.get(
              'callname:60:0',
            )} 要一起吗？`
          : `说起来，我之前和星云同学一起出来钓过几次鱼，从${
              chara_talk.sex
            }那里学到了不少技巧呢！怎么样，${era.get(
              'callname:60:0',
            )}？要不要 ${era.get('callname:60:60')} 来教教你呀？`,
      );
    }
  }

  async out_church(hook) {
    const chara_self_name = sys_get_callname(60, 60),
      chara_talk = get_chara_talk(60);
    await chara_talk.say_and_wait(`我看看，${chara_self_name} 今天的运势是——`);
    await era.printAndWait(
      `${chara_talk.name} 轻轻摇晃着签筒，不一会，一条纸签便从中落出：`,
    );
    hook.arg = get_random_value(0, 3);
    await chara_talk.say_and_wait(
      [
        '呜哇……万万没想到居然是……嘛、嘛，不过是签运不好而已，不要在意不要在意！……应该不会发生什么倒霉事……吧……',
        '唔，小吉啊，还算过得去的结果吧。不过从高往低数……这好像也是第三？',
        '中吉——还不错呢，说不定最近会有什么好事发生？',
        `哦～大吉！难道 ${chara_self_name} 也能闪闪发光了吗……开个玩笑，不过这样的好运要是能留给比赛里就好了！`,
      ][hook.arg],
    );
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(60, 0);
    const chara_self_name = sys_get_callname(60, 60);
    const chara_talk = get_chara_talk(60);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await chara_talk.say_and_wait(
          Math.random() < 0.5
            ? `这爪子看起来好像没什么力道，真的能抓的上来吗？……什么？以前特训出来的秘技？没想到 ${callname} 也有这样青春的一面呢。那就让 ${chara_self_name} 见识一下吧？`
            : `街机厅吗……经常能看到很多年轻的孩子来这边玩呢。我？我又不是会经常来这里玩的那种角色啦！${chara_self_name} 可是家务派哦？嘛，偶尔一起来玩一下倒也不错啦，偶尔的话。`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `会抽到什么呢？嘛，虽然大概率是三等奖就是了……不过万一呢？`,
        );
        break;
      case 2:
        await era.printAndWait(`与 ${chara_talk.name} 一同去了卡拉OK……`);
        await chara_talk.say_and_wait('——怎、怎么样，我唱的歌？');
        await era.printAndWait(`曲毕，${chara_talk.name} 有些紧张地等待着评价`);
        await chara_talk.say_and_wait(
          `天籁什么的……也太夸张了吧？${callname}，就算对 ${chara_self_name} 花言巧语也讨不到什么好处哦？` +
            `好啦！接下来轮到 ${callname} 了！`,
        );
        await era.printAndWait(
          `与 ${chara_talk.name} 一起度过了一段愉快的时光。`,
        );
        break;
      case 3:
        if (Math.random() < 0.5) {
          await chara_talk.say_and_wait(
            `恋爱电影吗？${callname} 意外地还挺少女心？觉得我会比较喜欢？哈哈哈——`,
          );
          await chara_talk.say_and_wait(
            `这种题材更适合那些年轻的小女生或者卿卿我我的情侣啦，不过 ${callname} 想看的话我也可以奉陪就是了。`,
          );
          await chara_talk.say_and_wait(
            `只要能跟 ${callname} 一起看的话……`,
            true,
          );
        } else {
          await chara_talk.say_and_wait(
            '呀……这副海报还真是有魄力呢，巨大机器人与鸡形怪兽的大决战，虽然不知道是什么设定，但总觉得应该会很有趣，要不今天就看这个了？',
          );
        }
    }
  }

  async out_station(hook) {
    const chara_talk = get_chara_talk(60);
    hook.arg = await select_action_in_station(60);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await chara_talk.say_and_wait(
            `这边也有好多吃的呢，${era.get(
              'callname:60:0',
            )} 想吃什么呢？这家吗？好，那我们走吧！`,
          );
          await chara_talk.say_and_wait('总之先记下来训练员喜欢的口味……', true);
        } else {
          await chara_talk.say_and_wait(
            '唔……稍微有点饿了呢，要在这附近随便吃点什么吗？',
          );
        }
        break;
      case 1:
        await chara_talk.say_and_wait(
          Math.random() < 0.5
            ? `那个……要不要，牵一下手呢？你看……这样不是更有约会的感觉吗？可以吗！？欸嘿嘿……${era.get(
                'callname:60:0',
              )} 的手，真温暖呢——`
            : `有点累了吗？那要来试试……${era.get(
                'callname:60:60',
              )} 的膝枕吗？啊，脸不要朝着我这边啦！会很……难为情的……`,
        );
        break;
      case 2:
        await era.printAndWait(`与 ${chara_talk.name} 一同去逛商店……`);
        await chara_talk.say_and_wait('噢～这件衣服看起来挺可爱嘛——');
        await era.printAndWait(`${chara_talk.name} 看着橱窗里展示的衣物感慨道`);
        await chara_talk.say_and_wait(
          `对吧？${era.get(
            'callname:60:0',
          )} 也是这么觉得的吧？……等、等下我可没说想要试穿哦？` +
            `你看，这种轻飘飘的风格更适合年轻人，对吧？${era.get(
              'callname:60:60',
            )} 不合适啦！」`,
        );
        await era.printAndWait(
          `面对劝说，${chara_talk.name} 再三推辞，最终落荒而逃。`,
        );
    }
  }

  async celebration(hook) {
    const nice_nature = get_chara_talk(60),
      weeks = (era.get('flag:当前回合数') - 1) % 48;
    switch (weeks) {
      case 5:
        await print_event_name('情人节', nice_nature);
        await nice_nature.say_and_wait(
          `呀，${era.get('callname:60:0')}，早上好呀`,
        );
        await era.printAndWait(
          '一大早，刚到学园，优秀素质就像等候多时一样出现在校门口。',
        );
        await nice_nature.say_and_wait('欸……那个……嘛，等会训练场见！');
        await era.printAndWait(
          `${nice_nature.get_teen_sex_title()}一副想说什么的样子，但最终没能开口，转身跑进校门。`,
        );
        era.drawLine({ content: '⏰到了中午⏰' });
        await nice_nature.say_and_wait(
          `哦～${era.get('callname:60:0')}，是 ${era.get('callname:60:60')} 哟？`,
        );
        await era.printAndWait('在食堂用餐时，优秀素质突然出现在身边，');
        await nice_nature.say_and_wait(
          `这里有好东西要给 ${era.get('callname:60:0')} 呢，就是这个qiao……`,
        );
        await era.printAndWait('优秀素质欲言又止，好像要说的话有些难以启齿。');
        await nice_nature.say_and_wait(
          `qiao……荞麦面优惠劵！之前商店街的阿姨给了我几张，我自己又用不完，就送给 ${era.get(
            'callname:60:0',
          )} 了！哈哈哈哈……那么，回见！`,
        );
        await era.printAndWait('优秀素质样子有些奇怪的逃离了食堂');
        era.drawLine({ content: '⏰到了晚上⏰' });
        await nice_nature.say_and_wait('送到这就可以了哦？');
        await era.printAndWait(
          '送优秀素质回到了栗东寮的门口，刚准备离去，却被优秀素质拉住了衣角。',
        );
        await nice_nature.say_and_wait('这、这个！还请收下！');
        await era.printAndWait(
          '优秀素质俏脸通红，鼓起勇气从背后把巧克力递了出来',
        );
        await nice_nature.say_and_wait(
          '姑且……是我亲手做的巧克力，如果不喜欢的话，不要也是可以的哦……？',
        );
        await era.printAndWait('但如此珍贵的礼物，怎么可能拒绝呢？');
        await era.printAndWait('与优秀素质的羁绊，更上一层楼了。');
        break;
      case 13:
        await print_event_name('粉丝感谢祭', nice_nature);
        await nice_nature.say_and_wait('哇啊——这也太热闹了吧？');
        await era.printAndWait('看着被来客挤满的校园，优秀素质感叹道');
        await nice_nature.say_and_wait(
          '不过大部分都是帝王或者麦昆那些闪耀的大明星们的粉丝吧？',
        );
        await nice_nature.say_and_wait('像我这样的小角色就去后勤——');
        await era.printAndWait('？？？「啊！找到小素质了！」');
        await era.printAndWait(
          `就在优秀素质转身准备离开的时候，一道女声响起，叫住了${nice_nature.sex}。`,
        );
        await nice_nature.say_and_wait('诶？蔬菜店的阿姨？您怎么来了？');
        await era.printAndWait(
          '蔬菜店的阿姨「当然是来看小素质在学校的生活怎么样啊！不只是我——」',
        );
        await nice_nature.say_and_wait(
          '啊！烧烤屋的大叔！小卖部的奶奶……怎么大家都来了……',
        );
        await era.printAndWait(
          '蔬菜店的阿姨「当然要来啦！我们大家可是小素质的粉丝啊！」',
        );
        await nice_nature.say_and_wait(
          '呜……你们这份心意我很高兴啦……但是，这样……总觉得，好羞耻……',
        );
        await era.printAndWait(
          '把自己脸用辫子埋住的优秀素质被商店街的街坊们团团围住，',
        );
        await era.printAndWait(
          `看来${nice_nature.sex}似乎会十分愉快的度过这个粉丝祭……`,
        );
        break;
      case 47:
        await print_event_name('圣诞节', nice_nature);
        await nice_nature.say_and_wait('喂喂？是我哦？不是诈骗电话是本人哦？');
        await era.printAndWait('电话那头传来了熟悉的声音，正是优秀素质。');
        await nice_nature.say_and_wait(
          '那个啊，能麻烦你来公园一趟吗？就现在……嗯，等会见！',
        );
        era.drawLine({ content: '⏰到了公园⏰' });
        await nice_nature.say_and_wait(
          `啊，来了啊，${era.get('callname:60:0')}！这边这边～`,
        );
        await era.printAndWait('大老远就能看见优秀素质朝着这边招手。');
        await era.printAndWait('今天是圣诞节的嘛');
        await nice_nature.say_and_wait(
          `嘛，也没有什么大事，只是 ${era.get(
            'callname:60:60',
          )} 看你好像没有什么安排的样子，就决定邀请你一起过圣诞节而已！`,
        );
        await nice_nature.say_and_wait('不行……吗？');
        await era.printAndWait(
          '得到了肯定的答复后，优秀素质再度展露笑颜，旋即从身后递出来一个礼物盒',
        );
        await nice_nature.say_and_wait(
          '这个！圣诞快乐！这是，我亲手织的围巾……虽然不是很熟练，花色也比较土气……',
        );
        await nice_nature.say_and_wait('但！如果不嫌弃的话，还请收下！');
        await era.printAndWait(
          '盒中是一条编织精美的围巾，能看出来优秀素质的用心',
        );
        await nice_nature.say_and_wait(
          '很喜欢吗？这、这样啊……不是因为照顾我的心情才这么说的吧？',
        );
        await era.printAndWait(
          '在解除优秀素质的不安后，二人一起度过了一个安宁详和的圣诞节……',
        );
        break;
      default:
        return await super.celebration(hook);
    }
  }

  async load_talk() {
    const nice_nature = get_chara_talk(this.id);
    if (
      era.get('cflag:60:妊娠阶段') >> pregnant_stage_enum.embryo &&
      !LifeEventMarks.get_marks(this.id).report
    ) {
      const callname = sys_get_colored_callname(this.id, 0);
      await nice_nature.say_and_wait([
        '啊哈，是吗，果然内恰小姐还是……但是等等，不行，',
        callname,
        '，我们的孩子，至少，至少给我们的孩子一个名字吧……',
      ]);
      await nice_nature.say_and_wait(
        '这孩子没有爸爸也无所谓，我能一个人养大，但至少，求求你，一个名字……',
      );
      await nice_nature.say_and_wait([
        '『花月自然』？『优雅素质』？类似的，名字，这是内恰小姐麻烦你的最后一件事，',
        callname,
        '，给我一个名字吧……',
      ]);
      await era.printAndWait(
        [nice_nature.get_colored_name(), '「', callname, '————！！」'],
        { color: nice_nature.color, fontSize: '3rem' },
      );
    } else {
      await nice_nature.say_and_wait([
        '如果是 ',
        sys_get_colored_callname(this.id, 0),
        ' 的话，一定能找到更好的路线吧……',
        sys_get_callname(this.id, this.id),
        ' 相信着你哦？不管是现在还是之前，亦或是未来……',
      ]);
    }
  }
};
