const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceInfo = require('#/data/race/model/race-info');
const era = require('#/era-electron');

const legends_default = require('#/data/race/legends-default.json');
const className = require('#/data/race/race-const.json');
const { race } = require('#/data/event/event-hooks');

const search_legend = require('#/system/racing/sys-race-search-legend');

//自动为玩家暂时选择适应性最高的跑法（不会自动选大逃）
//仅用于赛前预览，到时候会提供接口允许玩家变阵
function auto_style(weight) {
  return weight.indexOf(Math.min(weight)) + 1;
}

//非玩家的幻影马由适应性等级决定权重而随机抽一下跑法
//等级越高权重越高
function random_style(weight) {
  let weight_total = 0;
  let weight_segment = [];
  for (w of weight) {
    weight_total += 6 - weight;
    weight_segment.push(weight_total);
  }
  //万一全G适应性 兜个底去跑追吧
  if (weight_total === 0) {
    weight_total = 1;
    weight_segment[3] = 1;
  }

  let rd = Math.random() * weight_total;
  let style = 0;
  for (ind in weight_segment) {
    if (rd < weight_segment[ind]) {
      style = ind + 1;
      break;
    }
  }
  //抽到逃的再有几率变大逃吧 先给成50%
  if (style === 1 && Math.random < 0.5) {
    style = 0;
  }

  return style;
}

/**
 * @param {Number[]} team_chara
 * @param {RaceInfo} race_info
 */
module.exports = (team_chara, race_info) => {
  let list_index = team_chara;
  let list_chara = [];
  let sp_command = false;

  let phantom_age = race_info.limit > 2 ? 2 : race_info.limit;

  //先解析玩家的马娘
  for (indUma of team_chara) {
    let attrs = [
      era.get(`base:${indUma}:速度`),
      era.get(`base:${indUma}:耐力`),
      era.get(`base:${indUma}:力量`),
      era.get(`base:${indUma}:根性`),
      era.get(`base:${indUma}:智力`),
    ];
    let adapt_style_list = [
      era.get(`cflag:${indUma}:逃马适性`),
      era.get(`cflag:${indUma}:逃马适性`),
      era.get(`cflag:${indUma}:先马适性`),
      era.get(`cflag:${indUma}:差马适性`),
      era.get(`cflag:${indUma}:追马适性`),
    ];
    let adapt_distance_list = [
      era.get(`cflag:${indUma}:短距离适性`),
      era.get(`cflag:${indUma}:英里赛适性`),
      era.get(`cflag:${indUma}:中距离适性`),
      era.get(`cflag:${indUma}:长距离适性`),
    ];
    let adapt_ground_list = [
      era.get(`cflag:${indUma}:草地适性`),
      era.get(`cflag:${indUma}:泥地适性`),
    ];

    //TODO：Skill parsing
    let skill_list = [];

    let itemUma = new PseudoUma(
      indUma,
      era.get(`callname:${indUma}:-2`),
      era.get(`cflag:${indUma}:干劲`),
      attrs,
      auto_style(adapt_style_list),
      adapt_style_list,
      adapt_distance_list,
      adapt_ground_list,
      skill_list,
    );
    list_chara.push(itemUma);
  }

  //留个特殊指令呼叫隐藏对手的地方
  if (sp_command) {
  }

  //接着填过往冠军幻影
  //当然排除掉玩家自己出赛的
  let list_history = race_info.legends.filter((e) => !list_index.includes(e));
  let legends_history = require(`#/data/race/${
    className[race_info.class]
  }/legends/${race_info.nameEN}.json`);
  while (list_index.length < race_info.gates[0]) {
    //先填史实冠军
    //史实冠军保证干劲非负
    while (list_history) {
      let ind = list_history[Math.floor(Math.random() * list_history.length)];
      let uma_data = search_legend(ind, legends_history);
      if (uma_data.id !== -1) {
        //对应json中存在幻影数据则优先读取
        let itemUma = new PseudoUma(
          uma_data.id,
          uma_data.name,
          Math.floor(Math.random() * 3),
          uma_data.attrs,
          random_style(uma_data.adapt_style_list),
          uma_data.adapt_style_list,
          uma_data.adapt_distance_list,
          uma_data.adapt_ground_list,
          uma_data.skills,
        );
        list_chara.push(itemUma);
      } else {
        //对应json中不存在该幻影数据则从default读取
        uma_data = search_legend(ind, legends_default);
        let itemUma = new PseudoUma(
          uma_data.id,
          uma_data.name,
          Math.floor(Math.random() * 3),
          uma_data.attrs[phantom_age],
          random_style(uma_data.adapt_style_list[phantom_age]),
          uma_data.adapt_style_list[phantom_age],
          uma_data.adapt_distance_list[phantom_age],
          uma_data.adapt_ground_list[phantom_age],
          uma_data.skills[phantom_age],
        );
        list_chara.push(itemUma);
      }
      list_history = list_history.filter((e) => e !== ind);
      list_index.push(ind);
    }
  }

  //史实冠军不够数那再从default里随机抽人
  //此时不再保证干劲非负
  while (list_index.length < race_info.gates[0]) {
    let flag_search = true;
    while (flag_search) {
      let uma_data =
        legends_default[Math.floor(Math.random() * legends_default.length)];
      if (!list_index.includes(uma_data.id)) {
        flag_search = false;
      }
    }
    let itemUma = new PseudoUma(
      uma_data.id,
      uma_data.name,
      Math.floor(Math.random() * 5) - 2,
      uma_data.attrs[phantom_age],
      random_style(uma_data.adapt_style_list[phantom_age]),
      uma_data.adapt_style_list[phantom_age],
      uma_data.adapt_distance_list[phantom_age],
      uma_data.adapt_ground_list[phantom_age],
      uma_data.skills[phantom_age],
    );
    list_index.push(uma_data.id);
    list_chara.push(itemUma);
  }
  //最后填路人幻影
  while (list_index.length < race_info.gates[1]) {}

  return list_chara;
};
