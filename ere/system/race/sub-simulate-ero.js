const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { item_enum } = require('#/data/ero/item-const');
const { damage_buff, secretion_amount } = require('#/data/ero/orgasm-const');
const { frame_rate, race_event_enum } = require('#/data/race/race-sim-const');

const param_base = 10000 / (60 * frame_rate);

/** @type {{f:function(PseudoUma):boolean,c:string}[]} */
const item_reports = [
  {
    f: () => true,
    c: '（呃呃呃呃呃嗯唔唔……）',
  },
  {
    f: () => true,
    c: '（什么东西混着汗一起流下去了……那是我的口水吗❤️❤️❤️）',
  },
  {
    f: () => true,
    c: '（喘气声……会被听到吗……不要再喘了❤️❤️❤️）',
  },
  { f: () => true, c: '（不够……完全不够啊❤️❤️❤️）' },
  {
    f: () => true,
    c: '（哪怕就在现在，在比赛之中高潮也无所谓吧，因为看不出来的——❤️❤️❤️）',
  },
  {
    f: () => true,
    c: '（啊啊❤️❤️❤️热流在体内乱窜，快受不了了❤️❤️❤️）',
  },
  { f: (u) => u.index_chara > 0, c: '（有看着吗❤️❤️❤️一定特别明显吧❤️❤️❤️）' },
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（被欺负个不停的乳头❤️❤️❤️又红又肿，硬得像石子一样❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（好丢脸❤️❤️❤️但是想射精的念头完全停不下来❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（被摄像机对准着奔跑的下半身……想射精❤️❤️❤️想丢脸地被注视着射精到腿软到站不起来啊啊啊啊啊❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（闻到先走汁的味道了，好难受噢噢噢噢噢啊啊啊啊❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（嗯❤️❤️❤️……精子要溢出来了……）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（阴核被强迫接触着空气硬挺着，太羞耻了——❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris === item_enum.clamps,
    c: '（阴蒂被夹得好痛……但好爽——湿答答的淫水直流下来❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（阴蒂硬梆梆地勃起着，像被电击一样……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（淫水黏答答地流到大腿上❤️❤️❤️大家都看得见……！）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（哈啊，这玩具一进去，里面收缩得喘不过气，嗯哈……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（腿上和小穴里都是水❤️❤️❤️滑溜溜的触感好羞耻！）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（玩具❤️❤️❤️在使劲震着子宫……但还是不够啊……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（嗯❤️❤️❤️被顶到深处了❤️❤️❤️咕噜咕噜的……要融化了～❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（边插边磨，越是不想在意，就越是有感觉❤️❤️❤️不要……！）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（要边赛跑边被假鸡巴插到高潮了啦嗯噢噢❤️❤️❤️！）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（不行了，体内抽搐着的感觉太强烈❤️❤️❤️……！）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（怎么可能❤️❤️❤️夹着这种东西就能满足啊啊啊——❤️❤️❤️）',
  },
  {
    f: (u) =>
      u.ero.item.anal === item_enum.anal_beads ||
      u.ero.item.anal === item_enum.dildo,
    c: '（蠕动的感觉❤️❤️❤️好强烈……像是第二条尾巴❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（屁眼被撑开了❤️❤️❤️火辣辣的抽搐着……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（哈啊❤️❤️❤️菊花的摩擦好难受哦哦哦❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（不要被甩脱出来呀❤️❤️❤️『排泄』出来的紧张感真不妙啊❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0 || u.ero.item.anal > 0,
    c: '（啊呜❤️❤️❤️一边跑步，里面的玩具就一边在动——❤️❤️❤️！）',
  },
  {
    f: (u) => Object.values(u.ero.item).reduce((p, c) => p + (c > 0), 0) >= 2,
    c: '（嗯哦哦哦❤️❤️❤️全身上下都在震动的感觉❤️❤️❤️——！）',
  },
];

/** @type {{f:function(PseudoUma):boolean,c:string}[]} */
const orgasm_reports = [
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（乳头变硬了……啊❤️❤️❤️身体在颤抖……）',
  },
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（乳头、乳头硬得感觉要裂开了嗯哦哦哦❤️❤️❤️！）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（下面好硬……出来了❤️❤️❤️……！）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（！！！——好想射更多——❤️❤️❤️！）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（哦哦啊❤️❤️❤️阴蒂要被捏碎了❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（小穴❤️❤️❤️要被假鸡巴戳得肿起来了——❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（子宫抽搐得像要撕裂一样了齁噢噢噢噢噢❤️❤️❤️——！）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（如果在这里出来的话，人生会❤️❤️❤️不要❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（啊～❤️❤️❤️屁眼被干得发烫❤️❤️❤️塞进塞出的～❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.breast > 0 && u.ero.item.virgin > 0,
    c: '（奶子和小穴全被玩具占据着❤️❤️❤️淫水在看不见的地方乱喷❤️❤️❤️要喘得像野兽一样了❤️❤️❤️！）',
  },
  {
    f: (u) =>
      u.ero.item.virgin === item_enum.dildo &&
      (u.ero.item.anal === item_enum.dildo ||
        u.ero.item.anal === item_enum.butt_plug),
    c: '（小穴和屁眼要被硬东西插爆了噢噢噢噢❤️❤️❤️全身像要被撕裂了❤️❤️❤️——！）',
  },
];

/**
 * @param {PseudoUma[]} list_chara
 * @param {string} timer_record
 * @param {number} timer
 * @param {[]} events
 * @param {[]} reports
 */
function sub_simulate_ero(list_chara, timer_record, timer, events, reports) {
  for (const uma of list_chara) {
    uma.race.conditionParams.milk = 0;
    const { index_chara: cid } = uma;
    let orgasm = 0;
    let stamina_times = 0;
    if (uma.race.conditionParams.item === 1) {
      if (uma.ero.item.breast > 0) {
        uma.ero.param.breast += param_base * (1 + uma.ero.buff.breast);
      }
      if (uma.ero.item.penis > 0) {
        uma.ero.param.penis += param_base * (1 + uma.ero.buff.penis);
      }
      if (uma.ero.item.clitoris > 0) {
        uma.ero.param.clitoris += param_base * (1 + uma.ero.buff.clitoris);
      }
      if (uma.ero.item.virgin > 0) {
        uma.ero.param.virgin += param_base * (1 + uma.ero.buff.virgin);
      }
      if (uma.ero.item.anal > 0) {
        uma.ero.param.anal += param_base * (1 + uma.ero.buff.anal);
      }
      let tmp;
      orgasm += tmp = Math.floor(uma.ero.param.breast / 10000);
      uma.ero.param.breast %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.breast);
      if (tmp > 0 && era.get(`talent:${cid}:泌乳`) > 0) {
        uma.race.conditionParams.milk = 1;
        era.add(
          `exp:${cid}:喷奶量`,
          get_random_value(...secretion_amount.breast),
        );
      }
      era.add(`exp:${cid}:胸部高潮次数`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.anal / 10000);
      uma.ero.param.anal %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.anal);
      era.add(`exp:${cid}:肛门高潮次数`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.clitoris / 10000);
      uma.ero.param.clitoris %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.clitoris);
      era.add(`exp:${cid}:外阴高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        Math.floor(get_random_value(...secretion_amount.virgin) / 2),
      );

      uma.ero.main.forEach((p) => (uma.ero.param[p] += orgasm * 1000));

      orgasm += tmp = Math.floor(uma.ero.param.penis / 10000);
      uma.ero.param.penis %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.penis);
      era.add(`exp:${cid}:阴茎高潮次数`, tmp);
      era.add(`exp:${cid}:射精量`, get_random_value(...secretion_amount.penis));

      orgasm += tmp = Math.floor(uma.ero.param.virgin / 10000);
      uma.ero.param.virgin %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.virgin);
      era.add(`exp:${cid}:阴道高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        get_random_value(...secretion_amount.virgin),
      );
    } else if (uma.ero.param.sex >= 10000) {
      stamina_times = orgasm = Math.floor(uma.ero.param.sex / 10000);
      uma.ero.param.sex %= 10000;
    }
    if (orgasm > 0) {
      orgasm = Math.min(orgasm, 6);
      uma.race.conditionParams.orgasm = 1;
      events.push({ e: race_event_enum.orgasm, u: uma });
      uma.race.staminaCost *=
        1 +
        stamina_times *
          (1 - damage_buff + damage_buff * orgasm + uma.ero.cost.sex);
      if (era.get('flag:道具影响') !== 0) {
        uma.race.velocityReal -= 0.1;
      }
    } else {
      uma.race.conditionParams.orgasm = 0;
    }
    if (
      uma.race.conditionParams.item === 1 &&
      (orgasm > 0 || timer % 15 === 0)
    ) {
      const chara = get_chara_talk(cid);
      reports.unshift({
        config: { align: 'left' },
        content: [
          timer_record,
          ' ',
          chara.id > 0 ? chara.get_colored_name() : '',
          {
            content: get_random_entry(
              (orgasm > 0 ? orgasm_reports : item_reports).filter((e) =>
                e.f(uma),
              ),
            ).c,
            color: chara.color,
          },
        ],
        timer,
        type: 'text',
      });
    }
  }
}

module.exports = sub_simulate_ero;
