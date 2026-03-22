const hair_colors = {
  // 用英语的是发色
  black: [0, 5, 30, '#867979'],
  dark_brown: [9, 27, 50, '#c46754'],
  light_brown: [12, 23, 90, '#aa6952'],
  auburn: [0, 60, 60, '#e24c4c'],
  blue: [195, 39, 150, '#1972e6'],
  purple: [338, 19, 59, '#ab8392'],
  orange: [23, 91, 104, '#f78743'],
  pink: [4, 58, 133, '#feb2ad'],
  green: [67, 27, 69, '#cbd96c'],
  gold: [40, 60, 130, '#fee6b9'],
  white: [220, 5, 180, '#e2e3ea'],

  // 用罗马音的是毛色，注意芦毛（ashike）下面还有个白毛
  aoge: [243, 30, 26, '#20198f'],
  aokage: [246, 20, 41, '#544b9b'],
  kurokage: [346, 25, 33, '#922843'],
  kage: [3, 29, 45, '#bd514a'],
  tochikurige: [7, 42, 44, '#db4630'],
  kurige: [13, 67, 64, '#e6712f'],
  ashike: [270, 5, 92, '#ebe0f6'],
};

const hc_keys = Object.keys(hair_colors);
const aoge_index = hc_keys.indexOf('aoge');

const hc_names = hc_keys.filter((_, i) => i < aoge_index);
const bhc_names = [...hc_keys.filter((_, i) => i >= aoge_index), 'white'];

module.exports = {
  adaptability_colors: [
    '#c6c5c5',
    '#aa9bf7',
    '#d67af4',
    '#6bc3ff',
    '#83d86a',
    '#ff82a8',
    '#ff9548',
    '#eeb93f',
    '#f8c7ff',
  ],
  akuochi: ['#ee82ee', '#ff54ff'],
  attr_bg_colors: { hp: '#006800', tp: '#0000ff' },
  attr_change_colors: { down: '#ff7744', up: '#98fb98' },
  attr_colors: [
    '#2f9ce2',
    '#d85843',
    '#ec8416',
    '#e55c86',
    '#2fb780',
    '#7fff00',
    '#87cefa',
  ],
  bhc_names,
  buff_colors: ['#34a5ff', '#f9a048', '#ff69b4', '#ff7373'],
  celebration_color: '#ff8686',
  el_danger_color: '#f56c6c',
  el_success_color: '#67c23a',
  el_warning_color: '#e6a23c',
  get_hair_color(hc, raw = false) {
    const colors = hair_colors[hc];
    if (!colors) {
      return void 0;
    }
    if (raw) {
      return colors;
    }
    return colors[3];
  },
  hc_names,
  love_colors: [
    '#ffffff',
    '#fbfbfb',
    '#ffc0cb',
    '#dda0dd',
    '#ee82ee',
    '#ff69b4',
    '#fd53fd',
  ],
  money_color: '#ffd700',
  motivation_colors: ['#ce7cff', '#34a5ff', '#9f9f9f', '#f9a048', '#fe809c'],
  palam_colors: {
    notifications: ['#ffc0cb', '#ee82ee'],
    progress: ['#b05a76', '#cf00cf'],
  },
  relation_colors: [
    '#ff7373',
    '#ffa0a0',
    '#9f9f9f',
    '#fbfbfb',
    '#6db75f',
    '#8fbae7',
    '#ff69b8',
    '#f28234',
  ],
  sex_colors: ['#fff0f5', '#ffb6c1', '#cd5555'],
  skin_colors: ['#ffecd9', '#ffe7cb', '#ffd0ad', '#f5b871'],
};
