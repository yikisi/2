const era = require('#/era-electron');

const kojo = require('#/event/others/anniversary.kojo');

async function anniversary() {
  if (era.get('flag:当前回合数') % 48 === 1) {
    let name;
    switch (era.get('flag:当前年')) {
      case 2010:
        name = '第十年';
        break;
      case 2020:
        name = '第二十年';
        break;
      case 2030:
        name = '第三十年';
        break;
      case 2040:
        name = '第四十年';
        break;
      case 2050:
        name = '第五十年';
    }
    if (name !== undefined) {
      era.drawLine();
      await kojo[name]({
        SHE: era.get('flag:角色性别') === 1 ? '他' : '她',
        UMA: era.get('flag:角色性别') === 1 ? '马郎' : '马娘',
        YOU: era.get('callname:0:-2'),
      });
    }
  }
}

module.exports = anniversary;
