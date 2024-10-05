const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

/**
 * @param {CharaTalk} vp
 * @param {CharaTalk} me
 */
module.exports = async (vp, me) => {
  await print_event_name('Premier amou（初恋这件小事）', vp);
  if (
    vp.sex_code - 1 !== 0 &&
    me.sex_code > 0 &&
    era.get('cflag:205:妊娠阶段') === 1 << pregnant_stage_enum.no
  ) {
    begin_and_init_ero(0, 205);
    await vp.print_and_wait(
      `某天，我对子宫保持诚实，到了 ${sys_get_callname(205, 0)} 的房间里。`,
    );
    !era.get(`status:205:经期`) && era.set('status:205:短效避孕药', 1);
    await me.say_and_wait('突然穿这身过来……你是什么意思？');
    await vp.print_and_wait(
      '蓝白低调的衣服，本来是一级赛穿的服装，但我就这么穿着过来了。',
    );
    await vp.print_and_wait(
      '为优雅而牺牲了部分透气性，全力跑上楼梯的我汗液没有蒸发，而是渗进内衣里，非常潮湿。',
    );
    await me.say_and_wait('我会干你一晚上的，你要做好心理准备。');
    await vp.print_and_wait('糟糕，已经湿了。');
    await vp.print_and_wait(
      '积攒了两周的性欲，不同阶段的发春期让小穴已经黏糊糊的了。',
    );
    await vp.print_and_wait(
      '我会变成什么样呢？怎么被打败，怎么谄媚，怎么被毁掉。',
    );
    await vp.print_and_wait(
      `进入房间关上门的瞬间，我就把披肩挂在衣架上，在 ${sys_get_callname(
        205,
        0,
      )} 面前坐下。`,
    );
    await me.say_and_wait('冷静点，小鸡鸡不会逃跑的。');
    await vp.print_and_wait(`为了让这个装傻的家伙闭嘴，我和${me.sex}接吻了。`);
    await quick_make_love(
      new EroParticipant(205, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    await vp.print_and_wait('把舌头塞进去缠上，将唾液灌进去，发出刺耳的水声。');
    await me.say_and_wait(`${sys_get_callname(0, 205)} 很有天赋呢。`);
    await vp.print_and_wait('吵死了……');
    await vp.print_and_wait('嘴里被舔了一下，对未知的触感有点吃惊。');
    await vp.print_and_wait(
      `果然 ${sys_get_callname(
        205,
        0,
      )} 很擅长接吻，熟知一切性爱中让对方高兴的方法。`,
    );
    await vp.print_and_wait(
      `脱下短靴扔到一边，屁股对着 ${sys_get_callname(
        205,
        0,
      )} 的脸，凑到肉棒旁去。`,
    );
    await vp.print_and_wait('以前想都不敢想的大胆体味。');
    await vp.say_and_wait('你的腥臭味……好大。');
    await vp.print_and_wait(
      '谄媚的甜言蜜语脱口而出，没办法吧？雌性赢不了的肉棒。',
    );
    await vp.print_and_wait(
      `整整两周，脑子因为 ${sys_get_callname(205, 0)} 烧焦了。`,
    );
    await vp.print_and_wait(
      `含住 ${sys_get_callname(205, 0)} 半勃起的男根，用舌头慢慢地绕龟头半圈。`,
    );
    await quick_make_love(
      new EroParticipant(205, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await vp.print_and_wait('闭上嘴发出「滋溜滋溜」的声音。');
    await vp.print_and_wait('勃起的那个马上贯穿我喉咙的深处。');
    await me.say_and_wait(
      `${sys_get_callname(0, 205)} 的脚也很臭，该说咸还是酸呢。`,
    );
    await vp.print_and_wait('变态，奇怪，差劲！');
    await vp.print_and_wait('除了你以外，我都不知道我的那种臭味。');
    await vp.print_and_wait('舌头仔细地舔着经络，慢慢地逼近根部。');
    await vp.print_and_wait(
      `期待中阴蒂推开包皮擅自跑了出来，我用大腿抓住 ${sys_get_callname(
        205,
        0,
      )} 的头勒紧。`,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(
        205,
        vp.sex_code ? part_enum.virgin : part_enum.clitoris,
      ),
      false,
    );
    await vp.print_and_wait('闻一下，舔一下，快点！快点，咬我也行，咬我那里！');
    await vp.print_and_wait('自己手淫的时候都不敢触碰，小指尖那么大的栗子。');
    await vp.print_and_wait(
      '最近只要夹紧腿走路就会被阴唇和内衣摩擦，变成了随意的下流弱点。',
    );
    await vp.print_and_wait(
      `责备开始了，就这样被 ${sys_get_callname(
        205,
        0,
      )} 吸住，用牙齿轻轻地碾磨。`,
    );
    await vp.print_and_wait('平时连户外的空气都不接触，想忍耐是不可能的。');
    await vp.print_and_wait(
      `我的腰像鲤鱼打挺一样跳了起来，把潮水泼洒在${me.sex}脸上。`,
    );
    await vp.print_and_wait('虽然想喊，但是嘴完全被堵住了。');
    await vp.say_and_wait('嗯！嗯啊啊啊啊啊，嗯，哦哦哦。');
    await vp.print_and_wait('每次我有感觉的时候喉咙都会收缩，把龟头挤压。');
    await vp.print_and_wait(
      '我被当成了飞机杯，可以通过刺激阴蒂来开关的方便工具。',
    );
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 的肉杆在嘴里发抖，大量吐精。`,
    );
    await vp.print_and_wait(
      '不是电影里那种流水一样的射精，是像炼乳一样浓厚的精液。',
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(205, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await vp.print_and_wait(
      '我把以要在喉咙深处开个洞般气势射出的精液，用力地移动喉咙咽下。',
    );
    await vp.print_and_wait('面对你这样的雄性不可能吐出精液吧。');
    await me.say_and_wait('口交变得很擅长了呢，给，水。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 稍微有点吃惊地把水递了过来。`,
    );
    await vp.print_and_wait(`我大大地张开嘴，让${me.sex}看清喉咙深处。`);
    await vp.print_and_wait('你看，你最重要的孩子，全部都掉在我的胃里了哦？');
    await vp.say_and_wait('啊……');
    await vp.print_and_wait('雄臭从食道涌上来，一直贯穿到大脑。');
    await vp.print_and_wait(
      '从小穴中已经滴下了雪白的淫液，不直接落下而是粘稠地垂下。',
    );
    await vp.print_and_wait('我的子宫……下降到了小孩子的手指都能触摸到的程度。');
    await vp.say_and_wait('这次，请在我的阴道里…');
    await vp.print_and_wait('我像青蛙一样张开腿，用手指放大私处，试着媚笑。');
    await vp.print_and_wait('你看，这里有能让你舒服的洞哦？');
    await vp.print_and_wait('插进去的话一定最舒服了。');
    await vp.print_and_wait('是黏糊糊的牝马雌穴哦？');
    await vp.print_and_wait('来了！');
    await vp.say_and_wait('嗯……！啊……！');
    await vp.print_and_wait(
      '一下子被贯穿了，被龟头戳到了，和子宫接吻，变得奇怪。',
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await vp.print_and_wait('好热，形状好棒。');
    await vp.say_and_wait('那里，多戳几下……喜欢。');
    await vp.print_and_wait('每一次活塞都很厉害，脑内的神经都要短路了。');
    await vp.print_and_wait(
      `紧紧的收缩阴道的话，${sys_get_callname(205, 0)} 也会露出苦闷的表情。`,
    );
    await vp.print_and_wait(`很可爱，我想一直这么勒紧${me.sex}。`);
    await vp.print_and_wait('听到「噗」的声音，肉棒要拔出去了……');
    await vp.print_and_wait('不行，不行！再多爱我一点，不插入是不行的…');
    await me.say_and_wait(
      `这是什么啊，你真是最顶级的名器啊 ${sys_get_callname(0, 205)}！`,
    );
    await vp.print_and_wait('啊……好开心。');
    await vp.print_and_wait(
      `被${sys_get_callname(
        205,
        0,
      )} 抚摸着头，让我匍匐着，像小狗一样，从后面做。`,
    );
    await vp.print_and_wait('呀啊！这样，简直就是野兽交合。');
    await vp.print_and_wait(
      `我因为汗液而粘在一起的头发被 ${sys_get_callname(
        205,
        0,
      )} 粗暴的抓起，像把手一样握住。`,
    );
    await vp.print_and_wait('笨蛋！明明是女孩子最重要的东西之一，太过分了。');
    await vp.print_and_wait('被从后面紧紧的抓住乳房，下体互相碰撞。');
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.breast),
      false,
    );
    await vp.print_and_wait('我无力地把脸趴在枕头上。');
    await me.say_and_wait('真是个好屁股啊，太色气了……');
    await vp.print_and_wait('笨蛋、cruche、Imbécile……');
    await vp.print_and_wait(
      '每次腰被撞击的时候屁股都会欺负，明明有点痛，却很舒服。',
    );
    await vp.say_and_wait('……想要。');
    await vp.print_and_wait('说完我就被翻过身吸出了舌头，然后……潮吹了。');
    set_palam_to_max(205, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(205, part_enum.mouth),
      false,
    );
    await vp.print_and_wait('虽然快无法呼吸了，但是嘴不会放开。');
    await vp.print_and_wait('发出「啾噜、啾噜」的声音。');
    await me.say_and_wait(`可恶，要射出来了，${sys_get_callname(0, 205)}！`);
    await vp.print_and_wait(`我把脚缠在${me.sex}腰上紧紧地抱住。`);
    await vp.print_and_wait('不要逃跑，全部注入子宫。');
    await vp.print_and_wait(`${me.sex}的龟头，和我的子宫口非常契合。`);
    await vp.print_and_wait('全部交给我，一点也不放过，全部……');
    await vp.print_and_wait(`勒紧脚，不让${me.sex}拔出肉棒。`);
    await vp.print_and_wait('用区区人类的力量抵抗也是没用的哦？');
    await vp.print_and_wait(`${sys_get_callname(205, 0)}，注精完成。`);
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await me.say_and_wait(`……哈啊，${sys_get_callname(0, 205)}，售后服务呢？`);
    await vp.print_and_wait('哈哈，我怎么会喜欢上这么差劲的人的？');
    await vp.print_and_wait('不过还挺好吃的，没办法，就帮你扫除口交一下。');
    await vp.print_and_wait('……不够、不够、不够、不够！');
    await quick_make_love(
      new EroParticipant(205, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await vp.print_and_wait(
      `我抓住 ${sys_get_callname(205, 0)} 的肩膀翻过身，这次我在上面。`,
    );
    await me.say_and_wait('让我休息一下？');
    await vp.print_and_wait('你在开玩笑吧，是你的话做多少都可以吧？');
    await vp.print_and_wait('第一次用骑乘位榨取，只能模仿色情视频的样子做。');
    await vp.print_and_wait('无论做多少次，都无法习惯。');
    await vp.print_and_wait(
      '只是屁股沉下，让肉棒完全埋入身体，快感就会渗出，意识会被放飞。',
    );
    await vp.print_and_wait('好了，你也别放松，加油～加油～再满足我吧。');
    await vp.print_and_wait('要用你的肉棒，杀了我哦。');
    await quick_make_love(
      new EroParticipant(205, part_enum.virgin),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    era.drawLine();
    await vp.print_and_wait('大脑恢复正常的时候，太阳已经完全升起了。');
    await vp.print_and_wait(`${sys_get_callname(205, 0)}一副喘不过气的样子。`);
    await vp.print_and_wait(
      '在那之后我也一直索取着，改变姿势连战，稍微休息一下就继续做爱。',
    );
    await vp.print_and_wait('嘴巴和阴道被插入的次数已经数不清了。');
    era.add('exp:205:口交次数', 10);
    era.add('exp:205:性交次数', 10);
    era.add('exp:0:戳阴部次数', 10);
    await vp.print_and_wait(
      `虽然也想试一下屁股，但 ${sys_get_callname(
        205,
        0,
      )} 说那个得事先做好准备。`,
    );
    await vp.print_and_wait('饥渴与干涸得到了满足，但是……');
    await vp.print_and_wait(
      `我把 ${sys_get_callname(205, 0)} 再次推倒在床上，因为：${
        me.sex
      }晨勃了。`,
    );
    await vp.print_and_wait(`我在${me.sex}干涸的嘴上，印上了一个贪婪的吻。`);
    era.println();
    await sys_love_uma_in_event(205);
    end_ero_and_train();
    era.drawLine();
    era.print('要开始二番战吗？');
    era.printButton('是', 1);
    era.printButton('否', 2);
    if ((await era.input()) === 1) {
      await quick_into_sex(205);
    }
  } else {
    await sys_love_uma_in_event(205);
  }
};
