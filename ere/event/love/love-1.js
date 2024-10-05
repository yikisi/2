/**
 * @file 特别周 - 爱慕
 *
 * TODO
 *
 * @author wwm
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

/** @param {CharaTalk} spe */
async function love_49_spe(spe) {
  await spe.print_and_wait(`一个如往常一样平静的夜晚。`);
  await spe.print_and_wait(
    `特别周缩在被窝里竖起耳朵，在确认到另一张床上的舍友已经进入梦乡后，轻轻地按亮了手机。\n`,
  );
  await spe.say('(……总感觉有点紧张……)');
  await spe.print_and_wait(
    `特别周点开了line，打开了置顶群聊，手指在屏幕上跳动。`,
  );
  await spe.print_and_wait(
    `群聊成员是她最熟悉的几个马娘同学，大家平时也经常在群里闲聊，有时是相约周末一起出门，有时是谈谈自己身边发生了什么。`,
  );
  await spe.print_and_wait(
    `如果遇到了某些事情，但是又不方便去问妈妈或者训练员，那就问下朋友们吧,特别周如此想着。\n`,
  );
  await spe.print_and_wait(
    `「目标是日本第一」：「最近被训练员看着的时候总是会感到不自在，无论是训练，吃饭，还是一起出去玩，怎么回事呢？」`,
  ); /**todo：设置其他人的文字颜色和人称代词*/
  await spe.print_and_wait(`预想中的其他人的回复马上跳了出来。`);
  await spe.print_and_wait(
    `「一流马娘」：「是身体不舒服吗？明天去趟医院如何？」`,
  );
  await spe.print_and_wait(
    `「目标是日本第一」：「已经去过了，医生都说我非常健康……」`,
  );
  await spe.print_and_wait(
    `「曼波」：「辣酱可以让你回复精神，只要吃下去一整瓶就会好起来的！」`,
  );
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「小环小鹰你们两个跑偏了吧。这是少女的思春期哦。」`,
  );
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「对自己的训练员暗生情愫可不是什么稀奇的事情~」`,
  );
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「就看小特什么时候能鼓起勇气了。」`,
  );
  await spe.print_and_wait(
    `「不退転」：「我支持青云同学的说法。另外，辣酱不是包治百病的哦，小鹰。」`,
  );
  await spe.print_and_wait(`「目标是日本第一」：「诶？」`);
  await spe.print_and_wait(`「曼波」：「知道了，对不qi」`);
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「就是这样，小特，好好把握机会，恋爱中遇到什么问题都可以来找恋爱达人青酱哦~」`,
  );
  await spe.print_and_wait(`（五分钟后）`);
  await spe.print_and_wait(`「一流马娘」：「大家怎么都不说话了？」`);
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「@曼波 @不退転 小草和小鹰俩人应该正在宿舍里格斗吧。」`,
  );
  await spe.print_and_wait(
    `「zzzzzzzzzzz」：「@目标是日本第一 小特应该是意识到自己对训练员的感情后被轰沉了，大概率顾不上这边了~」`,
  );
  await spe.say_and_wait(`\n“对……训练员……暗生情愫……？”`);
  await spe.print_and_wait(`未曾考虑过的情感在特别周的心中涌起。`);
  await spe.print_and_wait(
    `虽然下意识想要反驳，但只要想象一下训练员接受了其他马娘的表白，两个人每天手牵着手，周末和不是自己的马娘一起出门约会的样子……`,
  );
  await spe.print_and_wait(
    `脑海中就会被一股复杂的感情冲得七零八落，根本无法好好思考任何事情。`,
  );
  await spe.say_and_wait('……事已至此先睡觉吧。');
  await era.printAndWait(`结果，特别周辗转反侧到天已经大亮才睡着。`);
  await sys_love_uma_in_event(1);
}

/** @param {CharaTalk} spe */
async function love_74_spe(spe) {
  await spe.say_and_wait('嗯嗯，那我准备睡觉了，妈妈也早点休息哦，晚安！');
  await spe.print_and_wait(
    `挂断了电话，特别周还在回味着从妈妈这里听到的新鲜事：农场的羊群把野生的同类一起带回了家，栅栏被路过的马娘一不小心踹烂了，等等。`,
  );
  await spe.print_and_wait(`而自己这边分享的事情……`);
  await spe.say_and_wait('……都是和训练员一起做的事情啊。');
  await spe.print_and_wait(
    `一起训练，一起吃饭，休息的时候一起出去约会，或是一起窝在沙发里打游戏。`,
  );
  await spe.print_and_wait(
    `不知不觉中，训练员的身影已经出现在自己生活中的每一个地方。`,
  );
  await spe.say_and_wait('这样的日子……会消失吗？');
  await spe.print_and_wait(`等到自己毕业的话，双方就会分道扬镳。`);
  await spe.print_and_wait(
    `那个在自己难过时会用尽浑身解数逗自己开心的人，和自己心意相通的人，陪伴着自己走过竞赛生涯每一步的人，也会从自己的生活中退场吧。`,
  );
  await spe.say_and_wait('……不想这样啊。');
  await spe.print_and_wait(`这样想着的特别周，把目光投向了手机上的——`);
  era.printButton('北海道双人行攻略（升级关系）', 1);
  era.printButton('下一场比赛的战术说明（暂停升级）', 2);
  const ret = await era.input();
  if (ret === 1) {
    await spe.print_and_wait(
      `……不知不觉中，训练员也成为了自己人生中重要的人。`,
    );
    await spe.print_and_wait(
      `想要带训练员回一趟自己的家乡，带他欣赏自己长大的地方，把他介绍给自己的妈妈，让他更多的了解有关自己的一切。`,
    );
    await spe.say_and_wait('（我好像真的喜欢上……）');
    await spe.print_and_wait(`特别周把早已红透了的脸颊埋进了被子里。`);
    await sys_love_uma_in_event(1);
  } else {
    await spe.print_and_wait(
      `……摇了摇头，特别周把这些情绪甩到脑后，开始继续研究下一场比赛。`,
    );
    await spe.print_and_wait(
      `自己的目标是成为日本第一的赛马娘，不应该被这些事情干扰。`,
    );
    era.set('cflag:1:爱慕暂拒', 74);
  }
}

module.exports = async (hook) => {
  const love = era.get('love:1'),
    chara_talk = get_chara_talk(1);
  if (love >= 99) {
    throw new Error('unsupported!');
  }
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      await love_49_spe(chara_talk);
    } else if (love === 74) {
      await love_74_spe(chara_talk);
    }
  }
};
