const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const print_select_tar_page = require('#/page/components/select-target');
const exp_chara_info = require('#/page/exp/exp-chara-info');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_into_type = require('#/data/chara-info-type');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

/** @type {{generate:function(CharaTalk,{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}):{print:function:*[],[handle]:function(number)},name:string,[vagina]:boolean,[uma]:boolean}[]} */
const handlers = [
  require('#/page/exp/base-tab'),
  require('#/page/exp/edu-tab'),
  require('#/page/exp/skill-tab'),
  require('#/page/exp/race-tab'),
  require('#/page/exp/relation-tab'),
  require('#/page/exp/sex-tab'),
  require('#/page/exp/exp-tab-mouth'),
  require('#/page/exp/exp-tab-boobs'),
  require('#/page/exp/exp-tab-body'),
  require('#/page/exp/exp-tab-hand-foot'),
  require('#/page/exp/exp-tab-penis'),
  require('#/page/exp/exp-tab-vagina'),
  require('#/page/exp/exp-tab-anal'),
  require('#/page/exp/exp-tab-sm'),
];

/**
 * @param {CharaTalk} chara
 * @param {{[uma]:boolean,[vagina]:boolean}} page
 */
function check_page_disabled(chara, page) {
  return (
    (chara.sex_code === 1 && page.vagina) ||
    (!era.get(`cflag:${chara.id}:种族`) && page.uma)
  );
}

/**
 * @param {number} chara_id
 * @returns {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean,true_mark_level:number}}
 */
function get_flags(chara_id) {
  const no_fog =
      era.get(`exp:${chara_id}:性爱次数`) >
        era.get(`exp:${chara_id}:睡奸次数`) ||
      era.get(`tcvar:${chara_id}:乳突`) !== void 0,
    body_item = era.get('status:0:马语者') || era.get('status:0:透视镜片') > 0,
    show_all_body = !chara_id || body_item,
    show_all_exp =
      era.get('status:0:马语者') || era.get('status:0:马跳次数镜片') > 0;
  return {
    in_growth: era.get(`cflag:${chara_id}:成长阶段`) < 2,
    mark_level: show_all_body ? 3 : era.get(`mark:${chara_id}:淫纹`),
    show_all_body,
    show_all_exp,
    show_body: no_fog || show_all_body,
    show_exp: no_fog || show_all_exp,
    true_mark_level: body_item ? 3 : era.get(`mark:${chara_id}:淫纹`),
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
    let page = _page ?? era.get('flag:情报翻页');
    while (check_page_disabled(chara, handlers[page])) {
      page--;
    }
    const info_page = handlers[page].generate(chara, flags);
    era.setVerticalAlign('bottom');
    era.printInColRows(
      {
        columns: [...exp_chara_info(chara), ...info_page.print()],
        config: {
          width: 19,
        },
      },
      {
        columns:
          _page === void 0
            ? handlers.map((e, i) => ({
                accelerator: i + 10,
                config: {
                  buttonType: i === page ? 'warning' : 'info',
                  disabled: check_page_disabled(chara, e),
                  offset: 2,
                  width: 22,
                },
                content: e.name,
                type: 'button',
              }))
            : [],
        config: { width: 5 },
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
                  content: i18n().detail.prev_template.replace(
                    '%NAME%',
                    get_display_name(era.get(`callname:${prev}:-2`)),
                  ),
                  type: 'button',
                },
                {
                  accelerator: 6,
                  config: { width: 7 },
                  content: i18n().detail.next_template.replace(
                    '%NAME%',
                    get_display_name(era.get(`callname:${next}:-2`)),
                  ),
                  type: 'button',
                },
              ]
            : []),
          {
            accelerator: 999,
            config: { align: 'right', offset: 4, width: 6 },
            content: i18n().ui_back,
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

async function page_exp() {
  let exp_flag = true,
    page = { curr: 1 };
  while (exp_flag) {
    const selected = await print_select_tar_page(chara_into_type.info, page);
    if (selected === void 0) {
      exp_flag = false;
      continue;
    }
    await print_chara_info(
      selected,
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes),
    );
  }
}

module.exports = page_exp;
module.exports.print_chara_info = print_chara_info;
