/**
 * @file 新手教学
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');

class GameGuides {
  /** @returns {Record<string,1>} */
  get #obj() {
    return era.get('flag:新手教学') || era.set('flag:新手教学', {});
  }

  /**
   * @param {string} con
   * @returns {boolean}
   */
  check(con) {
    const obj = this.#obj;
    if (obj[con]) {
      delete obj[con];
      return true;
    }
    return false;
  }

  init() {
    this.#obj[this.game_start.name] = 1;
  }

  async game_start() {
    if (this.check(this.game_start.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await era.printAndWait([
        me.get_colored_name(),
        ' 来到即将任职的学园，一名全身被翠绿色调包裹的',
        tokino.sex_code - 1 ? '美丽人类女性' : '干练人类男性',
        '就站在大门前静候着。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 认得',
        tokino.sex,
        '是自己最终面试上的其中一名面试官。',
      ]);
      era.println();
      const save_check = Object.keys(era.get('global:saves')).length > 0;
      if (save_check) {
        await tokino.say_as_unknown_and_wait('您好，新……');
        era.println();

        await era.printAndWait([
          '那位',
          tokino.get_phy_sex_title(),
          '与 ',
          me.get_colored_name(),
          ' 视线相接的一刻先是露出了疑惑的模样，不过很快就回过神来。',
        ]);
      } else {
        await era.printAndWait([
          '那位',
          tokino.get_phy_sex_title(),
          '与 ',
          me.get_colored_name(),
          ' 视线相接，旋即露出灿烂的微笑。',
        ]);
      }
      era.println();

      await tokino.say_as_unknown_and_wait([
        '您好，新来的训练员',
        me.get_adult_sex_title(),
        '。',
      ]);
      await tokino.say_as_unknown_and_wait('我是理事长秘书 骏川缰绳。');
      await tokino.say_and_wait('欢迎来到特雷森学园。');
      await tokino.say_and_wait(
        '为了让您能更快地融入工作环境，我将会为您提供建议与协助。',
      );

      if (save_check) {
        era.println();

        await era.printAndWait([tokino.sex, '眯起了双眼，继续说道。']);
        era.println();

        await tokino.say_and_wait('不过，您的经验丰富，一定能如鱼得水吧。');
      }
      era.drawLine();
      await tokino.say_and_wait([
        '身为一名训练员，您自然是需要找到一名专属赛',
        tokino.get_uma_sex_title(),
        '来搭档的。',
      ]);
      await tokino.say_and_wait('正好，特雷森学院里新来了不少有潜力的好苗子。');
      await tokino.say_and_wait('那么，一起去训练场看看吧？');
      EventMarks.get(0).add(event_hooks.recruit);
      this.#obj[this.recruit.name] = 1;
    }
  }

  async office_register() {
    if (this.check(this.office_register.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait('这是记录近期的比赛信息的表格，请您确认。');
      await tokino.say_and_wait(
        '若是想要为担当报名，只要选择对应的比赛就可以了。',
      );
      await tokino.say_and_wait(
        '每场比赛的长度与跑道质地不尽相同，因此需要根据搭档的适性进行比赛的选择。',
      );
      await tokino.say_and_wait(
        '同时，出走比赛也会消耗体力与精力，且赛后会进入一段时间的疲劳状态。',
      );
      await tokino.say_and_wait(
        '……曾有过恶质训练员不顾担当的身体状况，强令担当高强度连战比赛……',
      );
      await tokino.say_and_wait([
        '这种行为不但无法赢下比赛，还会令担当受伤。请训练员',
        me.get_adult_sex_title(),
        '尽量不要采取这种策略。',
      ]);
      await tokino.say_and_wait(
        '另外，如果在比赛前发生了突发状况，如伤病或是赛程冲突，避战也不失为一个选择。',
      );
      EventMarks.get(0)
        .sub(event_hooks.register_race)
        .add(event_hooks.school_trainer_office);
      this.#obj[this.school_trainer_office.name] = 1;
    }
  }

  async office_sex() {
    if (this.check(this.office_sex.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait('啊啦，居然会是这种要求呢……');
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 的眼神像利剑一样刺进了 ',
        me.get_colored_name(),
        ' 发烫的脸皮……',
      ]);
      return true;
    }
  }

  async office_train() {
    if (this.check(this.office_train.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait(
        '在招募到搭档后，您可以带领搭档前往训练场进行指导训练。',
      );
      await tokino.say_and_wait(
        '训练大体可以分为五个方向，分别是速度、耐力、力量、根性与智力。',
      );
      await tokino.say_and_wait(
        '担当的基础属性主要通过训练得到提升，但也不排除其他情况的存在。',
      );
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 拍拍手，示意 ',
        me.get_colored_name(),
        ' 打起精神。',
      ]);
      await tokino.say_and_wait(
        '……训练会消耗体力与精力，若是在疲劳的情况下强行训练可能会导致担当受伤。',
      );
      await tokino.say_and_wait('……这点还请尤其注意。');
      await era.printAndWait([
        '说到这里的 ',
        tokino.get_colored_name(),
        ' 流露出一丝苦涩的意味，但很快恢复了从容，露出一个有些勉强的微笑。',
      ]);
      EventMarks.get(0).sub(event_hooks.train).add(event_hooks.register_race);
      this.#obj[this.office_register.name] = 1;
    }
  }

  async out() {
    if (this.check(this.out.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait([
        '从特雷森的大门外出，可以前往小河边散步，商店街，神社或是车站前等地方，具体的……还请训练员',
        me.get_adult_sex_title(),
        '自己去探索吧。',
      ]);
      await tokino.say_and_wait(
        '不处理学校事务的时候，我一般会在学校的大门边。如果有什么事情，可以来这里找我。',
      );
      await tokino.say_and_wait('……但是请不要在和担当一起出行的时候这么做哦。');
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 向 ',
        me.get_colored_name(),
        ' 挥挥手，走向了学校大门边。',
      ]);
      era.drawLine();
      EventMarks.get(0).sub(event_hooks.out_start);
    }
  }

  async recruit() {
    if (this.check(this.recruit.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await era.printAndWait([
        '在训练场外，',
        tokino.get_colored_name(),
        ' 停下脚步。',
      ]);
      await tokino.say_and_wait(
        '中央特雷森学院，每年大约会招收两千名左右的学生。绝大部分的学生都是怀抱着攀上顶峰的憧憬，跨越了重重的难关来到这里的精英。',
      );
      await tokino.say_and_wait(
        '但，有些时候往往事与愿违——也许是因为激烈的竞争，伤病，也许只是因为坏运气……',
      );
      await era.printAndWait([tokino.get_colored_name(), ' 轻轻叹了一口气。']);
      await tokino.say_and_wait([
        '由于各种各样的原因，能够顺利完成公开赛（OP）的赛',
        tokino.get_uma_sex_title(),
        '不足一成。',
      ]);
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 转向了 ',
        me.get_colored_name(),
        '，露出认真严肃的神色。',
      ]);
      await tokino.say_and_wait([
        '作为训练员，您无法代替',
        tokino.get_uma_sex_title(),
        '们下场竞技。',
      ]);
      await tokino.say_and_wait(
        '所以在赛场之外的地方，您必须全力支持您的担当。',
      );
      await tokino.say_and_wait([
        '身心调理也好竞赛训练也罢，',
        tokino.sex,
        '们在奔向梦想的过程中，需要名为『训练员』的大人的引导与协助。',
      ]);
      await tokino.say_and_wait('所以，还请清楚认识到您身上将要背负的责任。');
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        ' 正了正自己的的领结，表明自己所抱有的觉悟。',
      ]);
      await tokino.say_and_wait('很好。');
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 点点头，领着 ',
        me.get_colored_name(),
        ' 向训练场上的学生们走去。',
      ]);
      EventMarks.get(0).sub(event_hooks.recruit);
      this.#obj[this.recruit_end.name] = 1;
    }
  }

  async recruit_end() {
    if (this.check(this.recruit_end.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      era.drawLine();
      if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 1) {
        await era.printAndWait([
          '顺利完成了招募工作，',
          me.get_colored_name(),
          ' 与新结成的搭档一起来到 ',
          tokino.get_colored_name(),
          ' 面前。',
        ]);
        await tokino.say_and_wait([
          '训练员',
          me.get_adult_sex_title(),
          '已经顺利找到担当了呢，那么……',
        ]);
        await era.printAndWait([tokino.get_colored_name(), ' 微微鞠了一躬。']);
        await tokino.say_and_wait(
          '骏川在此预祝您与您的担当在三年的生涯里……武运昌隆，一帆风顺。',
        );
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          ' 并没有寻找到合适的担当，独自一人返回 ',
          tokino.get_colored_name(),
          ' 面前。',
        ]);
        await tokino.say_and_wait([
          '训练员',
          me.get_adult_sex_title(),
          '，有找到合适的搭档吗？',
        ]);
        era.printButton('「合适的担当已经被挑走了哦。」', 1);
        era.printButton('「说来惭愧，大概没人对我感兴趣吧。」', 2);
        if ((await era.input()) === 1) {
          await era.printAndWait([
            me.get_colored_name(),
            ' 故意摊了摊手，显出一副十分苦恼的样子。',
          ]);
          await era.printAndWait('言语中几分真几分假，或许不太重要。');
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            ' 有些尴尬地摊了摊手，显出一副十分苦恼的样子。',
          ]);
        }
        era.println();

        await tokino.say_and_wait('这样啊……');
        await tokino.say_and_wait(
          '那么，过段时间再来看看吧，也许能够挑选到合适的学生作为担当呢。',
        );
        await tokino.say_and_wait(
          '如果已经有目标的话，也许可以去拜托一下理事长。',
        );
        await era.printAndWait([me.get_couple_title(), '离开了训练场。']);
      }
      EventMarks.get(0).add(event_hooks.train);
      this.#obj[this.office_train.name] = 1;
    }
  }

  async school_atrium() {
    if (this.check(this.school_atrium.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait(
        '这是中庭，很多师生在休息期间都会来到这里放松。',
      );
      era.println();

      await era.printAndWait([
        tokino.get_colored_name(),
        ' 指向中庭一角，',
        me.get_colored_name(),
        ' 顺着方向看见了一座粗壮得无法环抱、半个人高的枯树洞。',
      ]);
      era.println();

      await tokino.say_and_wait(
        '一些失意的人则会特地来朝着枯树洞大吼大叫发泄情绪。',
      );
      await tokino.say_and_wait([
        '所以假如训练员',
        me.get_adult_sex_title(),
        '经过附近的时候听见了什么叫声也不要大惊小怪哦。',
      ]);
      EventMarks.get(0)
        .sub(event_hooks.school_atrium)
        .add(event_hooks.school_rooftop);
      this.#obj[this.school_rooftop.name] = 1;
      return true;
    }
  }

  async school_chairman() {
    if (this.check(this.school_chairman.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait([
        '这里是本校理事长的办公室，假如有需要，您一般能在这里找到 ',
        {
          color: get_chara_color(302),
          content: '秋川理事长',
          fontWeight: 'bold',
        },
        '。',
      ]);
      await tokino.say_and_wait([
        '与理事长打好关系，可能会对训练员',
        me.get_adult_sex_title(),
        '的升迁有不小的帮助哦。',
      ]);
      era.println();

      await era.printAndWait([
        tokino.get_colored_name(),
        ' 朝 ',
        me.get_colored_name(),
        ' 眨眨眼睛。',
      ]);
      EventMarks.get(0)
        .sub(event_hooks.school_chairman)
        .add(event_hooks.school_visitors);
      this.#obj[this.school_visitors.name] = 1;
      return true;
    }
  }

  async school_clinic() {
    if (this.check(this.school_clinic.name)) {
      const tokino = get_chara_talk(301);
      await tokino.say_and_wait([
        '这里是本校的保健室，校医 ',
        sys_get_colored_callname(301, 305),
        ' 会在此处出没……对的，是出没。',
      ]);
      era.println();

      await era.printAndWait([
        tokino.sex,
        '带着为难的表情挠了挠脸颊，莫非 ',
        sys_get_colored_callname(0, 305),
        ' 是什么问题人物？',
      ]);
      EventMarks.get(0)
        .sub(event_hooks.school_clinic)
        .add(event_hooks.school_god);
      this.#obj[this.school_god.name] = 1;
      return true;
    }
  }

  async school_god() {
    if (this.check(this.school_god.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        tokino.get_colored_name(),
        ' 来到了一座雕刻着三名马娘女神像的喷泉前，水流自女神像肩上扛着的壶中汨汨而出。',
      ]);
      era.println();

      await tokino.say_and_wait('您在培训的时候应该已经看过这些三女神像了吧。');
      await tokino.say_and_wait('尽管随着时代不断进步，信仰慢慢式微。');
      await tokino.say_and_wait('但对我们而言，祂们是真正存在的……');
      await tokino.say_and_wait('……三女神……必须是真的。');
      era.println();

      await era.printAndWait([
        tokino.get_colored_name(),
        ' 小声地嘀咕了几句话，但忽然一阵大风刮过，让',
        tokino.sex,
        '的话语消散在空气中。',
      ]);
      era.println();

      await tokino.say_and_wait('总之，如果有烦心事，可以来这里祈祷看看。');
      await tokino.say_and_wait('据说每年三月，来这里祈祷还会有特殊的效果。');
      EventMarks.get(0)
        .sub(event_hooks.school_god)
        .add(event_hooks.school_atrium);
      this.#obj[this.school_atrium.name] = 1;
      return true;
    }
  }

  async school_rooftop() {
    if (this.check(this.school_rooftop.name)) {
      const tokino = get_chara_talk(301);
      await tokino.say_and_wait(
        '在一些影视作品里总能看见学生跑到天台上，不是吃便当就是展开秘密会议。',
      );
      await tokino.say_and_wait(
        '但实际上由于这个『景点』过于受欢迎，根本没办法在特雷森的天台独处呢，呵呵。',
      );
      EventMarks.get(0)
        .sub(event_hooks.school_rooftop)
        .add(event_hooks.school_chairman);
      this.#obj[this.school_chairman.name] = 1;
      return true;
    }
  }

  async school_trainer_office() {
    if (this.check(this.school_trainer_office.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await era.printAndWait([
        tokino.get_colored_name(),
        ' 带领着 ',
        me.get_colored_name(),
        ' 来到一个办公室，往里看去都是同行。',
      ]);
      era.println();
      await tokino.say_and_wait(
        '这里是您平常处理公务的地方，其他训练员也会经常在这里露脸。',
      );
      await tokino.say_and_wait('请好好跟各位同事打好关系呢。');
      EventMarks.get(0)
        .sub(event_hooks.school_trainer_office)
        .add(event_hooks.school_clinic);
      this.#obj[this.school_clinic.name] = 1;
      return true;
    }
  }

  async school_visitors() {
    if (this.check(this.school_visitors.name)) {
      const me = get_chara_talk(0),
        tokino = get_chara_talk(301);
      await tokino.say_and_wait(
        '每当有校外人士拜访时，校方都会安排在这些房间里会面。',
      );
      await tokino.say_and_wait([
        '以后应该也少不了来采访训练员',
        me.get_adult_sex_title(),
        '的记者吧。',
      ]);
      EventMarks.get(0)
        .sub(event_hooks.school_visitors)
        .add(event_hooks.out_start);
      this.#obj[this.out.name] = 1;
      return true;
    }
  }
}

const game_guides = new GameGuides();

module.exports = game_guides;
