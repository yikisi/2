const era = require('#/era-electron');

const basement_queue = require('#/event/basement-queue');
const basement_factory = require('#/event/basement/basement-factory');
const check_factory = require('#/event/check/check-factory');
const daily_factory = require('#/event/daily/daily-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const edu_factory = require('#/event/edu/edu-factory');
const ero_factory = require('#/event/ero/ero-factory');
const love_factory = require('#/event/love/love-factory');
const mec_factory = require('#/event/mec/mec-factory');
const event_queue = require('#/event/queue');

const CharaTalk = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');

function sys_load_game() {
  event_queue.init();
  basement_queue.init();
  const src_chara = era.get('cflag:0:模版角色');
  CharaTalk.me._color = src_chara > 0 ? get_chara_color(src_chara) : '#ffffff';
  basement_factory.clean();
  check_factory.clean();
  daily_factory.clean();
  edu_factory.clean();
  ero_factory.clean();
  love_factory.clean();
  mec_factory.clean();
}

CustomizedEdu.load_game = sys_load_game;

module.exports = sys_load_game;
