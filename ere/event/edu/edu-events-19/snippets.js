const era = require('#/era-electron');

const diamond_lord = {
  content: '钻石君主',
  color: '#cdaa7d',
  fontWeight: 'bold',
};

module.exports = {
  diamond_lord,
  say_by_diamond_lord(content) {
    return era.printAndWait(
      [
        diamond_lord,
        '「',
        ...(Array.isArray(content) ? content : [content]),
        '」',
      ],
      { color: diamond_lord.color },
    );
  },
};
