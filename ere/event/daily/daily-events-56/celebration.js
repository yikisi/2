const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(58),
    me = get_chara_talk(0);

  if (kitaru.sex_code === 1) {
    throw new Error();
  }

  switch (era.get('cflag:56:育成回合计时') % 48) {
    case 29:
      // 通用庙会
      await print_event_name('庙会', kitaru);
      await era.printAndWait([
        '今天和 ',
        kitaru.get_colored_name(),
        ' 参加了夏季合宿时的庙会。',
      ]);
      await era.printAndWait([
        '身着淡绿色浴衣的 ',
        kitaru.get_colored_name(),
        ' 正走在 ',
        me.get_colored_name(),
        ' 的前面，宽大但并不算厚重的浴衣给元气的',
        kitaru.sex,
        '添了不少优雅的气息。',
      ]);
      await era.printAndWait([
        '露着洁白脚背的木屐，随着 ',
        kitaru.get_colored_name(),
        ' 的轻块步伐发出清脆的声音。',
      ]);
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '带着妩媚的微笑看着 ',
        me.get_colored_name(),
        '，侧着身子，本就优美的臀股曲线更加的突出。',
      ]);
      await kitaru.say_and_wait(['怎么样！', callname, '！']);
      era.printButton('搂住待兼福来的腰', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('「喜欢」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '伸手搭在了 ',
          kitaru.get_colored_name(),
          ' 的腰上，',
          kitaru.get_teen_sex_title(),
          '的身体些微颤抖。',
        ]);
        await era.printAndWait([
          '橙色的马尾反倒是自觉的竖起，像是拥抱恋人般系在 ',
          me.get_colored_name(),
          ' 的手臂上。',
        ]);
        await kitaru.say_and_wait('欸！');
        await era.printAndWait([
          '而后，抬手在',
          kitaru.sex,
          '结实又圆润的臀部上轻拍了一下，',
          kitaru.get_teen_sex_title(),
          '配合的发出了可爱的叫声。',
        ]);
        await kitaru.say_and_wait('咿！');
        await era.printAndWait([
          '顺着臀沟向里慢慢移动，探入',
          kitaru.sex,
          '的双腿之间，隔着内裤挑逗般地反复触碰着',
          kitaru.sex,
          '的敏感部位。',
        ]);
        await kitaru.say_and_wait('周围……周围有人……咿呀！');
        await era.printAndWait('想要出声制止，却又因为下身的刺激说不出话。');
        await era.printAndWait([
          '只得更加的依靠在 ',
          me.get_colored_name(),
          ' 的怀里，寄希望于周围的人以为',
          kitaru.sex,
          '和训练员只是有些过于紧密的情侣罢了。',
        ]);
        await kitaru.say_and_wait('唔！');
        await era.printAndWait([
          '伴随着故意压低的轻呼，湿热黏腻的感觉自 ',
          me.get_colored_name(),
          ' 的指尖的布料处传来。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 已经完全瘫在了 ',
          me.get_colored_name(),
          ' 的怀里，双腿微微颤抖着，那瞳孔里的星星也覆上一层水雾。',
        ]);
        await kitaru.say_and_wait([callname, '……可以的……']);
        await era.printAndWait([
          '抱着 ',
          kitaru.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 踏入了一旁无人的树林。',
        ]);
        await quick_into_sex(56);
      } else {
        await era.printAndWait([
          '得到 ',
          me.get_colored_name(),
          ' 夸奖之后的',
          kitaru.get_teen_sex_title(),
          '，连着转了好几个圈，惹得不少人向 ',
          me.get_couple_title(),
          ' 投来目光。',
        ]);
        await era.printAndWait([
          '就算穿着如此精致典雅的衣服，',
          kitaru.sex,
          '还是那个会一惊一乍的 ',
          kitaru.get_colored_name(),
          ' 没错。',
        ]);
      }
      break;
    case 39:
      // 通用万圣节
      await print_event_name('万圣节', kitaru);
      await era.printAndWait(
        '万圣节的夜晚，特雷森学院连同周围的商店街一起被装饰成了万圣节应有的样子。',
      );
      await era.printAndWait([
        '在巨大蝙蝠挂饰和南瓜头的阴影下，各位赛',
        kitaru.get_uma_sex_title(),
        '们也像是粉丝感谢祭那样摆起了摊。',
      ]);
      await kitaru.say_and_wait(['啊！是 ', callname, '！']);
      await kitaru.say_and_wait('HAPPY HALLOWEEN！');
      await era.printAndWait([
        '处于 ',
        me.get_colored_name(),
        ' 担当的占卜小屋内，看着坐在占卜桌后面的 ',
        kitaru.get_colored_name(),
        ' 穿着一身为万圣节特意准备的装束。',
      ]);
      await era.printAndWait(
        '以纯黑为主色调的修女服，用白色作为点缀，朴素又透着十足的纯洁感。',
      );
      await era.printAndWait(
        '而鲜明的橘发与星星瞳则恰到好处的抵消了庄重服饰带来的压抑，反倒是若有若无的透露出一丝狐狸般魅惑的气调。',
      );
      await kitaru.say_and_wait('啊啦啦啦！');
      await kitaru.say_and_wait('很少见吧！');
      await kitaru.say_and_wait(
        '本来还想把这里的装扮也弄的和告解室一样的，可惜没有时间了！',
      );
      era.printButton('「这身装扮很适合你呢。」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！应该都是神职人员的缘故吧！');
      await kitaru.say_and_wait([
        '那么！',
        callname,
        '，有什么想对小福忏悔的吗？',
      ]);
      await era.printAndWait([
        '做了一个双手相握的动作，修女十字架般的双瞳盯着 ',
        me.get_colored_name(),
        '。',
      ]);
      era.printButton('发糖', 1);
      era.printButton('亲吻待兼福来', 2, {
        disabled: era.get('love:56') < 50,
      });
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '把事先准备好的糖果递给了 ',
          kitaru.get_colored_name(),
          ' 之后，在修女的祈祷声中回去了。',
        ]);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '的身体稍稍前倾，心领神会的 ',
          kitaru.get_colored_name(),
          ' 也随之把椅子往前搬了一点。',
        ]);
        await kitaru.say_and_wait('嗯，咕呜！');
        await era.printAndWait([
          '两人的舌头交缠在一起，担当的舌尖在 ',
          me.get_colored_name(),
          ' 口中游走，带着万圣节不同糖果的味道。',
        ]);
        await kitaru.say_and_wait('哈！');
        await era.printAndWait('唾液拉成的丝线落在修女服上。');
        await kitaru.say_and_wait(['……', callname, '。']);
        await kitaru.say_and_wait('呜……有些太大胆了呢。');
      }
      break;
    default:
      throw new Error();
  }
};
