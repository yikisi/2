const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const print_select_tar_page = require('#/page/components/select-target');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_into_type = require('#/data/chara-info-type');
const recruit_flags = require('#/data/event/recruit-flags');
const exp_chara_info = require('#/page/exp/exp-chara-info');

// const abl_desc = {
//   // 快感忍耐的描述
//   endurance: {
//     anal: [
//       '暂时还一无所知',
//       '对痛苦感到恐惧',
//       '仍然有些抗拒',
//       '似乎能感到快乐了',
//       '已经习惯被填满了',
//       '空虚寂寞已无法忍耐',
//     ],
//     common: [
//       '一触即溃',
//       '食髓知味',
//       '稍能享受',
//       '乐在其中',
//       '习以为常',
//       '不可或缺',
//     ],
//     masochism: [
//       '暂时还一无所知',
//       '仍然有点抗拒',
//       '抖M肉奴候补生',
//       '开始享受性虐的快感',
//       '对凌辱习以为常',
//       '行走坐卧皆为受虐',
//     ],
//     mouth: [
//       '会因为快感怔忡失神',
//       '开始想多感受一些了',
//       '稍微能享受一些了',
//       '乐于通过嘴巴感受快乐',
//       '已经习以为常',
//       '中毒到不能失去了',
//     ],
//   },
//   // 部位掌握的描述
//   knowledge: {
//     common: [
//       '懵懂无知',
//       '本能探索',
//       '略知一二',
//       '条分缕析',
//       '头头是道',
//       '了若指掌',
//     ],
//     masochism: [
//       '暂时还懵懂无知',
//       '只会顺从本能',
//       '略微知晓了一些',
//       '可以分辨出对方的兴奋点了',
//       '能够谈得头头是道',
//       '对SM的手段了如指掌',
//     ],
//     mouth: [
//       '暂时还懵懂无知',
//       '只会顺从本能',
//       '略微知晓了一些',
//       '可以分辨一二了',
//       '能够谈得头头是道',
//       '已经了如指掌了',
//     ],
//   },
//   // 性爱技巧的描述
//   skill: {
//     common: [
//       '纯洁如纸',
//       '略显生疏',
//       '初见小成',
//       '不过不失',
//       '长于此道',
//       '登峰造极',
//     ],
//     mouth: [
//       '只通六窍的理解',
//       '略嫌生疏的嘴巴',
//       '初见小成的口技',
//       '不过不失的水准',
//       '口穴如阴的名器',
//       '业已穷究口淫道',
//     ],
//     sadism: [
//       '暂时还一无所知',
//       '生疏羞涩的施虐',
//       '抖S女王候补生',
//       '不过不失的水准',
//       '精彩绝伦的凌辱',
//       '业已穷究SM道',
//     ],
//   },
// };

/** @type {{generate:function(CharaTalk,{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}):{print:function:*[],[handle]:function(number)},name:string,[virgin]:boolean,[uma]:boolean}[]} */
const handlers = [];
handlers.push(
  require('#/page/exp/base-tab'),
  require('#/page/exp/edu-tab'),
  require('#/page/exp/skill-tab'),
  require('#/page/exp/race-tab'),
  require('#/page/exp/relation-tab'),
  require('#/page/exp/sex-tab'),
  require('#/page/exp/exp-tab-1'),
  require('#/page/exp/exp-tab-2'),
  require('#/page/exp/exp-tab-3'),
  require('#/page/exp/exp-tab-4'),
  require('#/page/exp/exp-tab-5'),
  require('#/page/exp/exp-tab-6'),
  require('#/page/exp/exp-tab-7'),
  require('#/page/exp/exp-tab-8'),
);

/**
 * @param {CharaTalk} chara
 * @param {{[uma]:boolean,[virgin]:boolean}} page
 */
function check_page_disabled(chara, page) {
  return (
    (chara.sex_code === 1 && page.virgin) ||
    (!era.get(`cflag:${chara.id}:种族`) && page.uma)
  );
}

/**
 * @param {number} chara_id
 * @returns {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean}}
 */
function get_flags(chara_id) {
  const no_fog =
      era.get(`exp:${chara_id}:性爱次数`) > era.get(`exp:${chara_id}:睡奸次数`),
    show_all_body =
      !chara_id ||
      era.get('status:0:马语者') ||
      era.get('status:0:透视镜片') > 0,
    show_all_exp =
      era.get('status:0:马语者') || era.get('status:0:马跳次数镜片') > 0;
  return {
    in_growth: era.get(`cflag:${chara_id}:成长阶段`) < 2,
    mark_level: show_all_body ? 3 : era.get(`mark:${chara_id}:淫纹`),
    show_all_body,
    show_all_exp,
    show_body: no_fog || show_all_body,
    show_exp: no_fog || show_all_exp,
  };
}

/**
 * @param {number} _id
 * @param {number[]} [chara_list]
 * @param {number} [_page]
 */
async function print_chara_info(_id, chara_list, _page) {
  let flag_exp = true,
    chara_id = _id,
    chara = get_chara_talk(chara_id),
    flags = get_flags(chara_id);
  while (flag_exp) {
    await era.clear();
    era.setToBottom();
    let page = _page === undefined ? era.get('flag:情报翻页') : _page;
    while (check_page_disabled(chara, handlers[page])) {
      page--;
    }
    const info_page = handlers[page].generate(chara, flags);
    era.setVerticalAlign('bottom');
    era.printInColRows(
      {
        columns: [...exp_chara_info(chara), ...info_page.print()],
        config: {
          width: 18,
        },
      },
      {
        columns:
          _page === undefined
            ? handlers.map((e, i) => {
                return {
                  accelerator: i + 10,
                  config: {
                    buttonType: i === page ? 'warning' : 'info',
                    disabled: check_page_disabled(chara, e),
                    offset: 2,
                    width: 22,
                  },
                  content: e.name,
                  type: 'button',
                };
              })
            : [],
        config: { width: 6 },
      },
    );
    era.setVerticalAlign('top');
    let prev = -1,
      next = -1;
    if (chara_list) {
      prev =
        (chara_list.indexOf(chara_id) + chara_list.length - 1) %
        chara_list.length;
      next = (prev + 2) % chara_list.length;
      prev = chara_list[prev];
      next = chara_list[next];

      era.printMultiColumns(
        [
          { type: 'divider' },
          ...(prev !== chara_id
            ? [
                {
                  accelerator: 4,
                  config: { width: 7 },
                  content: `前一位 — ${era.get(`callname:${prev}:-2`)}`,
                  type: 'button',
                },
                {
                  accelerator: 6,
                  config: { width: 7 },
                  content: `后一位 — ${era.get(`callname:${next}:-2`)}`,
                  type: 'button',
                },
              ]
            : []),
          {
            accelerator: 999,
            config: { align: 'right', offset: 4, width: 6 },
            content: '返回',
            type: 'button',
          },
        ],
        { horizontalAlign: 'end' },
      );
      const ret = await era.input();
      switch (ret) {
        case 4:
          chara_id = prev;
          chara = get_chara_talk(prev);
          flags = get_flags(chara.id);
          while (check_page_disabled(chara, handlers[page])) {
            page = era.add('flag:情报翻页', -1);
          }
          break;
        case 6:
          chara_id = next;
          chara = get_chara_talk(next);
          flags = get_flags(chara.id);
          while (check_page_disabled(chara, handlers[page])) {
            page = era.add('flag:情报翻页', -1);
          }
          break;
        case 999:
          flag_exp = false;
          break;
        default:
          if (ret < handlers.length + 10) {
            era.set('flag:情报翻页', ret - 10);
          } else {
            await info_page.handle(ret);
          }
      }
    } else {
      await era.waitAnyKey();
      flag_exp = false;
    }
  }
}

/** @param {number} [chara_id] */
async function page_exp(chara_id) {
  if (chara_id !== undefined) {
    await print_chara_info(chara_id, undefined, 4);
  } else {
    let exp_flag = true;
    while (exp_flag) {
      const selected = await print_select_tar_page(chara_into_type.info);
      if (selected === undefined) {
        exp_flag = false;
        continue;
      }
      await print_chara_info(
        selected,
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes),
      );
    }
  }
}

module.exports = page_exp;
