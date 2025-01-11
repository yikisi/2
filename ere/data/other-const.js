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
  max_chara_id: 1000,
  front_hairs: ['厚刘海', '齐刘海', '侧分', '排气口', '中分'],
  gene_juel_names: ['粉', '蓝', '白'],
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
