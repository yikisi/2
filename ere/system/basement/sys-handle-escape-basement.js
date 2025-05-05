const era = require('#/era-electron');

const { clean_actions } = require('#/event/basement-queue');
const { get_custom_basement } = require('#/event/basement/basement-factory');

const { get_random_value } = require('#/utils/value-utils');

const basement_owners = require('#/data/event/basement-owners');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** @param {boolean} [clear_chara=true] */
function sys_handle_escape_basement(clear_chara = true) {
  if (clear_chara) {
    const release_chara = basement_owners.filter(
      (e) => LifeEventMarks.get_marks(e).b_escape === -1,
    )[0];
    era.set('flag:当前互动角色', release_chara || 0);
  }
  [0, ...basement_owners.get()].forEach((e) => {
    const life_marks = LifeEventMarks.get_marks(e);
    life_marks.b_timer =
      life_marks.b_enhance =
      life_marks.b_now =
      life_marks.b_s_level =
      life_marks.b_status =
      life_marks.b_stamina_buff =
      life_marks.b_food_buff =
      life_marks.b_time_buff =
      life_marks.b_out_cd =
      life_marks.b_r_seed =
      life_marks.b_food_medicine =
        0;
    if (life_marks.b_escape <= 0) {
      life_marks.b_escape++;
    }
    get_custom_basement(e).handle_escape();
    era.set(`status:${e}:沉睡`, 0);
    era.set(`status:${e}:马跳S`, 0);
  });
  era.set('flag:地下室冷却', get_random_value(2, 6));
  basement_owners.clear();
  clean_actions(() => true);
}

module.exports = sys_handle_escape_basement;
