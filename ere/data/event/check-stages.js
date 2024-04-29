const stages = {
  after_punish: 0,
  after_race: 0,
  aim_check: 0,
  aim_race: 0,
  birth: 0,
  love_event: 0,
  next_week: 0,
  palace_check: 0,
  personal_action: 0,
  personal_titles: 0,
  prison: 0,
  rape_in_sleeping: 0,
  title_check: 0,
  want_make_love: 0,
};
Object.keys(stages).forEach((e, i) => (stages[e] = i));

module.exports = stages;
