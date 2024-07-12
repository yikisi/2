const { checkImage, get } = require('#/era-electron');

const chara_has_ero_image = {};

module.exports = {
  back_hairs: [
    '短发',
    '长直发',
    '双马尾',
    '高马尾',
    '发髻',
    '侧马尾',
    '蓬松双马尾',
    '外翼式',
    '单辫',
    '双辫',
    '双重丸子头',
    '高马尾+长直发',
  ],
  check_chara_ero_image(chara_id) {
    return chara_has_ero_image[chara_id];
  },
  first_child_id: 500,
  front_hairs: ['厚刘海', '齐刘海', '侧分', '排气口', '中分'],
  gene_juel_names: ['粉', '蓝', '白'],
  race_clothe_list: [
    { n: '决胜服', s: '' },
    { n: '第二套决胜服', s: 2 },
    { n: '新年装', s: '_春' },
    { n: '侍从礼服', s: '_仆' },
    { n: '游戏角色Cosplay', s: '_游' },
    { n: '礼服', s: '_礼' },
    { n: '婚纱', s: '_婚' },
    { n: '泳装', s: '_泳' },
    { n: '万圣节整蛊装', s: '_万圣' },
    { n: '祭典装', s: '_江户' },
    { n: '圣诞礼服', s: '_圣诞' },
    { n: '应援服', s: '_应援' },
  ],
  set_chara_ero_image() {
    const image_names = get('chara').map((e) => ({
        id: e,
        name: `${get(`staticcstr:${e}:头像`)}_裸`,
      })),
      checks = checkImage(...image_names.map((e) => e.name));
    image_names.forEach((e, i) => {
      if (checks[i]) {
        chara_has_ero_image[e.id] = true;
      }
    });
  },
  top_hairs: ['无', '短', '中', '长', '白'],
};
