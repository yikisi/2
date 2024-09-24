const era = require('#/era-electron');

/** @param {number} luck */
function set_luck_result(luck) {
  switch (luck) {
    case 2:
      era.set('status:56:大吉', 1);
      era.set('status:56:中吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);

      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 2);
      }
      break;
    case 1:
      era.set('status:56:中吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 1);
      }
      break;
    case 0:
      era.set('status:56:小吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:中吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 0);
      }
      break;
    case 3:
      era.set('status:56:凶', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:中吉', 0);
      era.set('cflag:56:干劲', -1 - (Math.random() < 0.5));
  }
}

module.exports = set_luck_result;
