const era = require('#/era-electron');

const BasementOwners = require('#/data/event/basement-owners');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** @param {boolean} [clear_chara] */
function sys_handle_escape_basement(clear_chara) {
  if (clear_chara !== false) {
    era.set('flag:当前互动角色', 0);
  }
  const basement_owners = new BasementOwners();
  [0, ...basement_owners.get()].forEach((e) => {
    const life_marks = new LifeEventMarks(e);
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
  });
  basement_owners.clear();
}

module.exports = sys_handle_escape_basement;
