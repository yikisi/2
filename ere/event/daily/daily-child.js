/**
 * @file 日常地文 - 孩子
 *
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

class DailyChild extends CustomizedDaily {
  async load_talk() {
    let temp;
    switch (era.get(`cflag:${this.id}:成长阶段`)) {
      case 0:
        temp = {
          color: get_chara_color(0),
          content: era.get(`cflag:${this.id}:父方角色`) ? '麻麻' : '叭叭',
          fontWeight: 'bold',
        };
        await get_chara_talk(this.id).say_and_wait([
          '呜呜哇哇哇——',
          temp,
          '——我要 ',
          temp,
          '——',
        ]);
        break;
      case 1:
        await get_chara_talk(this.id).say_and_wait([
          sys_get_colored_callname(this.id, 0),
          '……啊喏……能不能，不要丢下 ',
          sys_get_colored_callname(0, this.id),
          '……（抽泣）',
        ]);
    }
  }

  async growth(_, extra_flag) {
    const child = get_chara_talk(this.id),
      father = get_chara_talk(era.get(`cflag:${this.id}:父方角色`)),
      mother = get_chara_talk(era.get(`cflag:${this.id}:母方角色`)),
      love = era.get(`love:${mother.id || father.id}`),
      stockholm = era.get(`mark:${mother.id || father.id}:同心`),
      is_pregnant_slave = !mother.id && era.get('flag:惩戒力度') === 3;
    era.drawLine();
    if (extra_flag.stage === 0) {
      // 育儿
      await print_event_name('成长', child);
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
        ]);
        if (
          new LifeEventMarks(this.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' 看向与自己有点神似的 ',
            child.get_colored_name(),
            '，思考着以后的家庭生活……',
          ]);
        }
      } else {
        if (
          new LifeEventMarks(this.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 与 ',
            father.get_colored_name(),
            ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
          ]);
          await era.printAndWait([
            '之后，',
            mother.get_colored_name(),
            ' 对将孩子背在背上的 ',
            father.get_colored_name(),
            ' 投以抱有歉意的眼神。',
          ]);
          await era.printAndWait([
            father.get_colored_name(),
            ' 摸摸 ',
            mother.get_colored_name(),
            '的',
            era.get(`cflag:${father.id}:身高`) >=
            era.get(`cflag:${mother.id}:身高`) + 5
              ? '头'
              : '脸颊',
            '，表示自己并不介意。',
          ]);
          await era.printAndWait([
            '得到原谅的 ',
            mother.get_colored_name(),
            ' 再次将视线投向 ',
            child.get_colored_name(),
            ' 露出了慈爱的笑容。',
          ]);
        } else {
          if (is_pregnant_slave) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 露出温暖的笑容与孩子玩耍，',
              child.get_colored_name(),
              ' 这孩子也成为了 ',
              mother.get_colored_name(),
              ' 悲惨人生中少数的慰藉。',
            ]);
          } else {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 没有抗拒 ',
              father.get_colored_name(),
              ' 想要和孩子相处的举动，但对 ',
              father.get_colored_name(),
              ' 爱搭不理。',
            ]);
          }
          if (stockholm >= 2) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 最后还是放下了防备，与 ',
              father.get_colored_name(),
              ' 一起跟孩子玩耍。',
            ]);
          }
        }
      }
    } else if (extra_flag.stage === 1) {
      // 本格化
      await print_event_name('本格化', child);
      new LifeEventMarks(this.id).unexpected_child = 0;
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 依在 ',
          father.get_colored_name(),
          ' 的肩上看着孩子一天一天成长，露出了幸福的笑容。',
        ]);
      } else {
        if (is_pregnant_slave) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 一想到与自己如此亲昵的孩子很快也会长出羽翼离开自己便感觉失落。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 看着孩子一天一天成长，心里对 ',
            father.get_colored_name(),
            ' 的想法就越是复杂。',
          ]);
        }
        if (stockholm >= 2) {
          await era.printAndWait([
            '不过 ',
            mother.get_colored_name(),
            ' 依在 ',
            father.get_colored_name(),
            ' 的肩上看着孩子一天一天成长，还是稍微品尝到了满足感。',
          ]);
        }
      }
    } else if (extra_flag.stage === 2) {
      // 入学
      await print_event_name('入学', child);
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 在孩子的入学同意书上各自签上了自己的名字。',
        ]);
        await era.printAndWait([
          '下完笔后，',
          mother.get_colored_name(),
          ' 便开始积极地为孩子准备上学需要用的东西。',
        ]);
      } else {
        if (is_pregnant_slave) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 得知孩子也要入学特雷森学园后，突然感到背脊一阵发凉……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 与 ',
            father.get_colored_name(),
            ' 在孩子的入学同意书上各自签上了自己的名字。',
          ]);
          await era.printAndWait([
            '直到下完笔后，',
            mother.get_colored_name(),
            ' 仍然会感到一股非现实的虚幻感。',
          ]);
        }
        if (stockholm >= 2) {
          await era.printAndWait([
            '不过 ',
            mother.get_colored_name(),
            ' 还是把这些念头抛开，积极地为孩子准备上学需要用的东西。',
          ]);
        }
      }
    }
  }

  select() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (sys_check_awake(this.id)) {
      const growth = era.get(`cflag:${this.id}:成长阶段`);
      if (growth === 0) {
        era.print(
          get_random_entry([
            [
              '幼小的孩子还在牙牙学语，一看到 ',
              me.get_colored_name(),
              ' 就欢快地踏着小碎步奔跑过来。',
            ],
            [
              chara.get_colored_name(),
              ' 在地上不住滚动，',
              me.get_colored_name(),
              ' 担心 ',
              chara.get_colored_name(),
              ' 会不会一滚直接滚到地球的另一端。',
            ],
          ]),
        );
      } else if (growth === 1) {
        let temp =
          era.get(`cflag:${this.id}:父方角色`) ||
          era.get(`cflag:${this.id}:母方角色`);
        if (!era.get(`cflag:${temp}:种族`)) {
          temp = get_random_entry(
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
              (e) => era.get(`cflag:${e}:种族`),
            ),
          );
        }
        era.print(
          get_random_entry([
            [
              chara.get_colored_name(),
              ' 在认真地翻阅着赛马娘相关的知识书籍，当问起 ',
              chara.get_colored_name(),
              ' 最喜欢的赛马娘时，',
              chara.get_colored_name(),
              ' 总会骄傲地提到 ',
              get_chara_talk(temp).get_colored_name(),
            ],
            [
              chara.get_colored_name(),
              ' 在 ',
              me.get_colored_name(),
              ' 带领下练习奔跑，夕阳下的河边步道映照出两个长长的影子。',
            ],
          ]),
        );
      } else if (
        era.get(`cflag:${this.id}:成长阶段`) === 2 &&
        era.get(`cflag:${this.id}:育成回合计时`) === 'x' &&
        Math.random() < 1 / 3
      ) {
        era.print([
          chara.get_colored_name(),
          ' 随着年龄渐长，已经出落成了如同 ',
          get_chara_talk(
            era.get(`cflag:${this.id}:母方角色`) ||
              era.get(`cflag:${this.id}:父方角色`),
          ).get_colored_name(),
          ' 一样的大美人，想必在赛跑生涯上也能青出于蓝吧。',
        ]);
      } else {
        return super.select();
      }
    } else {
      era.print([chara.get_colored_name(), ' 正沉睡着。']);
    }
  }

  async talk() {
    const chara = get_chara_talk(this.id),
      father_id = era.get(`cflag:${this.id}:父方角色`),
      growth = era.get(`cflag:${this.id}:成长阶段`);
    if (sys_check_awake(this.id)) {
      if (growth === 0) {
        await chara.say_and_wait([
          {
            color: get_chara_color(0),
            content: father_id === 0 ? '叭叭' : '麻麻',
            fontWeight: 'bold',
          },
          '……！我是 ',
          chara.get_colored_name(),
          ' 哦！',
        ]);
      } else if (growth === 1) {
        await chara.say_and_wait([
          sys_get_colored_callname(this.id, 0),
          '！我饿了！',
        ]);
      } else if (growth === 2) {
        const temp = [];
        if (era.get(`talent:${this.id}:腋毛成长`)) {
          temp.push('腋下长出毛了……');
        }
        if (era.get(`talent:${this.id}:阴毛成长`)) {
          temp.push('下面长出毛了……');
        }
        if (chara.sex_code !== 1) {
          temp.push('胸部变大了……');
          if (era.get(`talent:${this.id}:泌乳`)) {
            temp.push('流出白白的东西了……');
          }
        }
        if (chara.sex_code > 0) {
          temp.push('下面变大了……');
        }
        await chara.say_and_wait([
          sys_get_colored_callname(this.id, 0),
          '我的身体感觉有点不对劲……那个，',
          get_random_entry(temp),
        ]);
      } else if (
        era.get(`status:${this.id}:发情`) &&
        (father_id === 0 || era.get(`cflag:${this.id}:母方角色`) === 0)
      ) {
        chara.say([
          '哈啊……哈啊……',
          sys_get_colored_callname(this.id, 0),
          '……我好热啊……这就是发情期……？',
        ]);
        await era.printAndWait([
          '之后，',
          get_chara_talk(0).get_colored_name(),
          ' 连忙去给 ',
          chara.get_colored_name(),
          ' 买来发情抑制剂。',
        ]);
      } else {
        return await super.talk();
      }
    } else {
      return await super.talk();
    }
  }
}

module.exports = DailyChild;
