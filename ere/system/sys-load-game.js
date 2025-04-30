const era = require('#/era-electron');

const basement_queue = require('#/event/basement-queue');
const event_queue = require('#/event/queue');

const CharaTalk = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');

function sys_load_game() {
  event_queue.init();
  basement_queue.init();
  const src_chara = era.get('cflag:0:模版角色');
  CharaTalk.me._color = src_chara > 0 ? get_chara_color(src_chara) : '#ffffff';
}

module.exports = sys_load_game;
