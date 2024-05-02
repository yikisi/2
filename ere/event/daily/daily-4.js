const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const chara_talk = get_chara_talk(4);
/**
 * 丸善斯基的日常事件,id=4
 *
 * @author 黑奴一号
 */
/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  let temp;
  const love = era.get('love:4'),
    buffer = [];
  if ((temp = new EduEventMarks(4)).get('after_recruit')) {
    chara_talk.say(`初次见面,我是${chara_talk.name}`);
    chara_talk.say('希望能在赛场上带着憧憬着我的后辈们希望');
    chara_talk.say(
      `.....不过话说回来,训练员君看起来真可爱呢,让我想起了炎热的夏天`,
    );
    temp.sub('after_recruit');
  } else {
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push([
        [
          '这种程度还不够,你能做得更好',
          '......如果是训练员君的要求,我会尽力的',
        ],
        `${chara_talk.name}带着复杂的情绪看着你`,
      ]);
    } else {
      buffer.push(
        [
          [
            '享受着奔跑时迎面所吹的风。',
            `如果训练员君有什么烦恼的话可以跟${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我说哦`,
          ],
          `${chara_talk.name}带着一丝微笑看着你`,
        ],
        [
          [
            `今天的训练计划是什么呢？不管是什么${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我都能从容应对`,
          ],
          `不知何时周围的${chara_talk.get_uma_sex_title()}们都围了过来,这就是${
            chara_talk.name
          }的魅力.`,
        ],
      );
      if (love >= 75) {
        //
        buffer.push([
          [
            '训练员君,训练之后一起坐小塔兜风吧？',
            `在夜晚的寒风吹拂下不管是${chara_talk.get_uma_sex_title()}还是人都会情绪高涨起来的`,
          ],
          `${chara_talk.name}将身体整个压在了你的手臂上,尾巴不知何时也缠上了你的大腿`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              '唔嗯~说起来四季之风各有不同,若是让我来选择的话我还是喜欢春风。',
              '不知训练员君喜欢哪一个季节的风呢?',
            ],
            `${chara_talk.name}含笑看着你`,
          ],
          [
            [
              '"春天有一种魔力。一种让人想‘成为更好的自己’的魔力。"',
              '训练员君又是怎么想的呢?',
            ],
            `在拉伸运动开始前,与${chara_talk.name}闲聊时她向你提出了这个问题`,
          ],
        );
      } else {
        buffer.push([
          [
            `将风的魅力带给憧憬着我的后辈们。希望之风的化身,${chara_talk.name}哦~`,
            `呵呵,训练员君觉得这个台词怎么样？`,
          ],
          `露出笑容的${chara_talk.name},似乎心情不错的摇晃着尾巴。`,
        ]);
      }
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => chara_talk.say(e));
    era.print(entry[1]);
  }
};

handlers[event_hooks.good_morning] = function () {
  const love = era.get('love:4'),
    buffer = [];
  if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
    if (love >= 75) {
      buffer.push([
        ['唔嗯~让我再睡一会嘛', '昨天不小心看漫画看太晚了'],
        `你无可奈何地摇醒${chara_talk.name}然后对着全身镜帮她梳理头发`,
      ]);
    } else {
      buffer.push([
        ['哈啊.....这副样子可不能让后辈们看到呢'],
        `${chara_talk.name}带似乎很困的样子`,
      ]);
    }
  } else {
    buffer.push(
      [
        [
          '今天的训练计划是什么呢？',
          `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我已经准备好了哦`,
        ],
        `${chara_talk.name}跃跃欲试的样子`,
      ],
      [
        ['在草地上奔驰的感觉真舒服呢', '训练员君到了吗'],
        `在你按时到达赛道的时候,${chara_talk.name}已经跑了好几圈了`,
      ],
    );
    if (love >= 75) {
      buffer.push([
        [
          '训练员君早上好⭐',
          '.......为什么跑到隔壁房间叫你起床?',
          `不觉得有个会叫你起床的温柔大${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }是很幸福的事情吗`,
        ],
        `${chara_talk.name}把你的被子掀开然后催促你赶快洗漱`,
      ]);
    } else if (love >= 50) {
      buffer.push(
        [
          [
            '训练员君身上似乎有未激发的潜能呢',
            '虽然感觉还很微弱不过应该很快就会出现了吧',
          ],
          `${chara_talk.name}若有所思的打量着你`,
        ],
        [
          [
            `训练员君如果有困惑的话可以跟${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我说出来哦`,
            '一直憋在心里的话,即使是万能钥匙也会插不进生锈的锁孔的',
          ],
          `${chara_talk.name}似乎很担心的看着你`,
        ],
      );
    } else {
      buffer.push([
        [
          '全力奔跑的时候会有一种若有若无的感觉,这就是所谓的领域吗?',
          `......啊,训练员君早上好`,
        ],
        `在草地上奔跑的${chara_talk.name}似乎触及到领域的边界了`,
      ]);
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => chara_talk.say(e));
    era.print(entry[1]);
  }
};

handlers[event_hooks.talk] = async function () {
  let talk_arr;
  switch (era.get('cflag:4:干劲')) {
    case -2:
      talk_arr = [
        '手上为什么贴了创口贴?今天早上想要自己做一顿早饭的时候听着音乐不小心切到了手指......谢谢你的关心',
        `为什么今天这么晚才来,而且头发也乱糟糟的......?今天起床的时候不小心碰倒了纸箱子把里面的东西全部打翻了收拾了好久才放回原位急匆匆赶过来了,不过没关系的啦,今天的训练任务是什么?`,
      ];
      break;
    case -1:
      talk_arr = [
        '训练员君可以帮我看一下这个手机怎么打开吗?诶?原来这么简单吗?',
        '昨天看漫画不小心看入迷了,训练员君抱歉呢.',
      ];
      break;
    case 0:
      talk_arr = [
        [
          `训练员君今天的安排是什么呢。`,
          `如果训练员君有什么问题的话可以来找我倾诉哦,不如说${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我非常欢迎呢♪`,
        ],
      ];
      break;
    case 1:
      talk_arr = [
        `今天的状态不错呢,训练员君觉得怎么样呢?`,
        `希望那些努力的孩子们看到我的背影之后也能追逐着我的身影享受到这份被风吹拂的快乐`,
        `训练员君训练结束之后一起去喝果汁吧?`,
      ];
      break;
    case 2:
      talk_arr = [
        `我感受到了训练员君身上的热情了呢♪`,
        `今天的我状态非常好呢,训练员君就在这里看着我打破上一次的记录吧♪`,
        `就让我来点燃训练员君内心潜藏的热情吧,Let's go!`,
      ];
      break;
  }
  if (
    //春
    era.get('flag:当前月') === 3 ||
    era.get('flag:当前月') === 4 ||
    era.get('flag:当前月') === 5
  )
    talk_arr.push(
      '训练员君感受到了春风的气息了吗,破开了大地的束缚自由自在在天空之中嬉戏的春风。',
      '可爱的后辈们如同春天开放的花朵一样弥散着香气呢,我希望她们的香气能够弥漫到这个世界的每一处角落。',
    );
  if (
    //夏
    era.get('flag:当前月') === 6 ||
    era.get('flag:当前月') === 7 ||
    era.get('flag:当前月') === 8
  )
    talk_arr.push(
      '四个季节之中我最容易被吸引的就是夏天呢,在夜晚温度适宜的时候与小塔一起自由自在的奔驰,我也仿佛与夏风合为一体了呢。',
      '训练员君晚上有空吗?等训练结束之后我们一起去海边吧?潮湿的海风会吹散那份令人烦躁的干燥,在月亮的照耀之下,整个人都被洗涤了呢',
    );
  if (
    //秋
    era.get('flag:当前月') === 9 ||
    era.get('flag:当前月') === 10 ||
    era.get('flag:当前月') === 11
  )
    talk_arr.push(
      '唔嗯~秋天到了啊,秋天总有一种让人想要就这么睡过去才行的气息呢,训练结束后可以让我在训练室稍微休息一下吗' +
        `食欲之秋,文学之秋,秋天总有一种多愁善感的气氛呢,夏季的潮湿与热情也在秋天到来之时逐渐褪去了`,
    );
  if (
    //冬
    era.get('flag:当前月') === 12 ||
    era.get('flag:当前月') === 1 ||
    era.get('flag:当前月') === 2
  )
    talk_arr.push(
      '在这万物安息的冬日,唯有风之精灵在这片白茫茫的大地上舞蹈.后辈们似乎也期待着能在草地上尽情的驰骋呢',
      '训练员君,你身上似乎很暖和呢,待会训练完之后一起去商店街喝一点热饮吧?',
    );
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async function () {
  const talk_arr = [
    '这个玩偶是送给我的吗?训练员君谢谢你.',
    '是我最喜欢的椰汁饮料呢,谢谢你训练员君',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      `呵呵,这下不得不考虑回礼了呢?晚上回去的时候就让你尝尝${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我的手艺吧`,
      '这份可爱的草莓慕斯蛋糕是专门排了两个小时的队才从西点店里买到的吗?训练员君努力认真的样子真想让人摸摸头呢。',
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_cook] = async function () {
  const talk_arr = [
    '好怀念的味道,那我就不客气咯?',
    '训练员君就乖乖坐在这里看着我做饭吧......欸?希望能和我一起做饭吗?',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      '训练员君尝尝这个蛋包饭怎么样吧?怎么样,很好吃吧.看到训练员君露出了幸福的笑容我好像也吃饱了呢',
      `希望能为${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我做一份饭......这就是幸福的味道吗,我的心现在正dokidoki的跳个不停呢♪`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_study] = async function () {
  const talk_arr = [
    '如果要参加各种竞赛的话,掌握各种跑法也是很重要的呢......干脆试下甩尾跑法吧？',
    '比起受人引导的位置,其实我更喜欢指引他人的感觉呢',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      '通过观看历届的重赏视频分析逃马跑法的各个要领,然后提高自己吧',
      `在训练员君的指导之下,${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我也有了很大的进步呢,谢谢你`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_rest] = async function () {
  const talk_arr = [
    '既然是难得的放松时间, 训练员君要不要一起看看最新的潮流期刊呢',
    '训练员君辛苦了呢,诶,不好意思下意识的就摸了摸你的头',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      '训练员君可以让我再抱着你一会吗?你身上总有一种温暖的气息呢',
      '训练员君每天都这么辛苦,有什么能让我帮助你的吗?还是说上次那将头埋进我的胸口吗?',
      '好孩子好孩子,每天都这么疲惫,就在我的怀抱里稍微休息一下吧。',
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_prepare] = async function () {
  const talk_arr = [
    '不让后辈们看到我精彩的表现的话可不行呢',
    '训练员君就在副驾驶位好好感受风的舞蹈吧',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      '就让后辈们看看从训练员君身上传递到的火焰吧',
      '训练员君可以让我再抱紧一会吗?诶,不可以?真小气。',
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_game] = async function () {
  const talk_arr = [
    `${
      era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
    }我对游戏这方面很不擅长呢,训练员君有什么推荐的游戏吗?`,
    '比起在训练室就这样坐着,不如出去训练......希望能看到我穿泳装的样子吗?训练员君真H呢',
  ];
  if (era.get('love:4') >= 75) {
    talk_arr.push(
      '训练员君听说过秋之回忆吗?虽然我也没有玩过，不过趁这个机会一起来试试吧！',
      '真希望能再次感受到那份夏季的吹拂呢,那个小镇少年与少女初次见面的时候',
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.out_church] = async function () {
  const love = era.get('love:4'),
    chara340_talk = get_chara_talk(340),
    chara341_talk = get_chara_talk(341),
    chara342_talk = get_chara_talk(342);
  chara340_talk.name = '温柔的女神';
  chara341_talk.name = '睿智的女神';
  chara342_talk.name = '严肃的女神';
  await chara_talk.say_and_wait(`训练员君到了呦`);
  await era.printAndWait(`在某个休息日你们决定到神社祈福`);
  await era.printAndWait(
    `传说三女神下凡时啜饮过此处的清泉,于是这条山间的小溪便得到了她的祝福`,
  );
  await era.printAndWait(
    `古代的人们便围绕着这条小溪建起了神社,前来参拜的人们祈求着事业或者爱情的成功`,
  );
  await chara_talk.say_and_wait(
    `听说当神社内挂着的铃铛会响起的时候,虔诚祈祷的人们会得到三女神的祝福。`,
  );
  await era.printAndWait(
    `虽然你们早早的就来到了这里,不过这里似乎已经有不少人了`,
  );
  era.printButton(`那么我们也赶快去排队吧`, 1);
  await era.input();
  await era.printAndWait(`所幸队伍并不长,很快就轮到你们了`);
  await era.printAndWait(`穿过鸟居,走进了这座三女神的神社之中`);
  await era.printAndWait(
    `你学着前面的游客往赛钱箱里投入了几枚硬币,拍了拍手双手合十,闭上眼开始祈祷`,
  );
  await chara_talk.say_and_wait(`……`);
  if (get_random_value(0, 1)) {
    await era.printAndWait(`你们等了一会似乎也没有听到铃铛的响声。`);
    await chara_talk.say_and_wait(`真遗憾呢`);
    await era.printAndWait(`${chara_talk.name}似乎许下了什么很重要的愿望。`);
    await era.printAndWait(`你握住了她的手`);
    await chara_talk.say_and_wait(`......训练员君谢谢你，`);
    await chara_talk.say_and_wait(`那么和小塔一起兜风来发泄这份情绪吧`);
    await era.printAndWait(`之后你在意识模糊之中似乎看到了三女神的笑容`);
  } else {
    switch (get_random_value(0, 2)) {
      case 0:
        await chara340_talk.say_and_wait('加油吧孩子们');
        break;
      case 1:
        await chara341_talk.say_and_wait('我可爱的孩子们,希望你们能幸福');
        break;
      case 2:
        await chara342_talk.say_and_wait('去奔跑吧,希望在驰骋的尽头');
    }
    await era.printAndWait(`叮铃铃`);
    await era.printAndWait(`你似乎听到了三女神的低语。`);
    await era.printAndWait(
      `你偷偷睁开眼睛往${chara_talk.name}的方向瞟了一眼。`,
    );
    await chara_talk.say_and_wait(`......三女神大人谢谢你，`);
    await era.printAndWait(`${chara_talk.name}露出了如释重负的笑容`);
    await chara_talk.say_and_wait(`训练员君`);
    await era.printAndWait(`${chara_talk.name}身后在离开鸟居后停下了脚步`);
    if (love >= 90) {
      await era.printAndWait(
        `干燥的嘴唇被另一片嘴唇所浸润,你不禁抱住了她纤细的身体`,
      );
      await era.printAndWait(`此刻两颗跳动的心脏终于心意相同`);
      await era.printAndWait(
        `时间,名誉还有除佳人以外一切的一切你都已经不在乎了`,
      );
      await era.printAndWait(`此刻的你只想沉浸在这份温柔乡之中`);
      await era.printAndWait(`直到呼吸困难为止,随风舞蹈的二人才依依不舍地分开`);
      await chara_talk.say_and_wait(
        `训练员君,也许你就是,不对，你就是我一直追寻的那份火焰.`,
      );
      await era.printAndWait(
        `${chara_talk.name}紧紧地握住了你的手,你默默地忍受着这份痛苦`,
      );
      await era.printAndWait(`然后二人再次唇齿交融。`);
      await era.printAndWait(`火焰最终还是战胜了那份干燥`);
    } else {
      await era.printAndWait(
        `你感受到了一阵湿润的气息,${chara_talk.name}转过身去努力平静着心中的激动`,
      );
      await era.printAndWait(`带着微妙的情绪你们回到了学院`);
    }
  }
};

handlers[event_hooks.out_shopping] = async function (hook) {
  const love = era.get('love:4');
  const buffer = [];
  let temp;
  hook.arg = await select_action_in_shopping_street();
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(`训练员君也一起来跳舞吧?`);
          await era.printAndWait(
            `虽然是初次尝试跳舞机,但${
              chara_talk.name
            }似乎可以和一些高手玩家一较高下了,这就是${chara_talk.get_uma_sex_title()}的天赋吗`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `那么,接下来去尝试一下那边的娱乐项目吧`,
          );
          await era.printAndWait(
            `${chara_talk.name}似乎像遇到新事物的孩子一样,两眼放光`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(`这么努力的训练员真可爱呢`, true);
          await era.printAndWait(
            `${chara_talk.name}带着笑容盯着你操作抓娃娃机时紧张的样子`,
          );
          break;
      }
      break;
    case 1:
      await chara_talk.say_and_wait(`训练员君也来试试看手气吧?`);
      await era.printAndWait(`${chara_talk.name}指着商店街附近的抽奖机`);
      switch (get_random_value(0, 4)) {
        case 0:
          await chara_talk.say_and_wait(`没关系的,下次还有机会`);
          await era.printAndWait(`${chara_talk.name}安慰着抽到纸巾时的你`);
          break;
        case 1:
          await chara_talk.say_and_wait(`晚上就吃胡萝卜吧`);
          await era.printAndWait(`${chara_talk.name}看着抽到的胡萝卜说着`);
          break;
        case 2:
          await chara_talk.say_and_wait(
            `嗯,有这么多胡萝卜的话,不如在训练室开派对吧`,
          );
          await era.printAndWait(
            `之后${chara_talk.name}邀请了小特她们一起来训练室品尝了胡萝卜盛宴`,
          );
          break;
        case 3:
          await chara_talk.say_and_wait(`是胡萝卜汉堡呢,手气真好`);
          await era.printAndWait(
            `晚上你和${chara_talk.name}一起享受了这份幸运的馈赠`,
          );
          break;
        case 4:
          await era.printAndWait(`叮铃铃`);
          await chara_talk.say_and_wait(`!`, true);
          await era.printAndWait(`抽奖箱旁的服务人员「恭喜恭喜」`);
          await era.printAndWait(`${chara_talk.name}看着抽出了温泉旅行券的你`);
          await chara_talk.say_and_wait(
            `运气真好呢,等有时间的时候一起去泡温泉吧`,
          );
          await era.printAndWait(`${chara_talk.name}看着抽出了温泉旅行券的你`);
          await era.printAndWait(`之后你们心情不错的回到了训练室之中`);
          break;
      }
      break;
    case 2:
      await chara_talk.say_and_wait(`训练员君来听听看这首最新的潮流歌曲吧`);
      await era.printAndWait(
        `${chara_talk.name}似乎点了一首非常怀旧的歌曲,你陷入了怀念之中`,
      );
      break;
    case 3:
      buffer.push(
        [
          [`听说最近上映的恋爱喜剧很有名呢,训练员君要不要一起去看看?`],
          `${chara_talk.name}指着电影推荐上的恋爱喜剧`,
        ],
        [
          `想去看那种刺激的特技电影吗?那种碰碰啪啪的感觉`,
          `你们讨论着最新上映的电影`,
        ],
        [
          [`训,训练员君我不行了,两条腿现在还在发抖`],
          `新血来潮想要尝试恐怖电影的两人,互相支撑着走出了观影厅`,
        ],
      );
      if (love >= 75) {
        buffer.push([
          [`嗯...今天还是看恋爱喜剧吧`],
          `笨蛋情侣在电影达到高潮时也与主角一样互相接吻`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [`训练员君最终是温暖还是干燥呢?`],
            `在看一场昏昏欲睡的电影中途,${chara_talk.name}突然开始自言自语`,
          ],
          [
            [`比起银杏叶开始飘落的秋天,我还是更喜欢潮湿的夏日呢`],
            `${chara_talk.name}看着电影推荐自言自语着`,
          ],
        );
      }
      temp = get_random_entry(buffer);
      for (const e of temp[0]) {
        await chara_talk.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
      break;
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const me = get_chara_talk(0);
  hook.arg = await select_action_in_station(4);
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `听说这附近有一家风评很好的甜品店,接下来一起去吃吧`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(`再来一份水果巴菲♪`);
          await me.say_and_wait(`吃了这么多没关系吗?`);
          await era.printAndWait(
            `你有点担心${chara_talk.name}的胃会不会受不了`,
          );
          await chara_talk.say_and_wait(
            `不用担心,女孩子吃甜食的时候有一个专门装甜食的胃的啦⭐`,
          );
          await chara_talk.say_and_wait(
            `${chara_talk.name}一大口一大口的吃着水果巴菲`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(`训练员君的手很温暖呢`);
          await era.printAndWait(`对你来说${chara_talk.name}又是什么呢?`);
          break;
        case 1:
          await chara_talk.say_and_wait(`虽然很想让训练员君一直依赖着我`);
          break;
      }
      break;
    case 2: //逛商场
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(`训练员君有什么想要去买的吗?`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `听说这附近新开了一家甜品店,之后来这边尝尝看吧`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const ret = await select_action_around_river();
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 1)) {
      case 0: //钓鱼
        await chara_talk.say_and_wait(
          `唔,${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我不太擅长钓鱼呢,那就拜托训练员君了哦`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `呵呵,看着训练员君认真的样子我也很高兴呢`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 1)) {
      case 0: //散步
        await chara_talk.say_and_wait(
          `岸边的空气真新鲜,训练员君是不是也觉得心情变好了呢?`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `看着后辈在岸边练习歌曲的热情时自己的心情也变得非常愉悦呢`,
        );
        break;
    }
  }
};

handlers[event_hooks.school_atrium] = async function () {
  const temp = await select_action_in_atrium();
  if (!temp) {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `烦心的事情吗?呵呵,${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我暂时还没有呢`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `我的跑步究竟带给${chara_talk.get_uma_sex_title()}们希望还是更深的绝望呢.....不不,没什么啦⭐`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `我也是刚刚才到,没等多久就碰到训练员君了呢.`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `我准备了亲手制作的便当哦,野餐的时候尝尝看吧♪`,
        );
        break;
    }
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  const chara_talk = get_chara_talk(4);
  if (Math.random() < 0.5) {
    await chara_talk.say_and_wait(`在天台吃便当的话心也变得像风一样自由了`);
  } else {
    await chara_talk.say_and_wait(
      `就这样放空大脑想象着自己化为了和煦的春风在柔和的阳光之下翩翩起舞,心情也变得雀跃起来了呢`,
    );
  }
};

module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object) {
      throw new Error('unsupported hook!');
    }
    if (!handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
