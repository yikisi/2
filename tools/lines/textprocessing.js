const fs = require('fs');
const path = require('path');

// readdir promise处理
function asyncReaddir(filePath) {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, file) => {
      if (err) {
        reject(err);
      }
      resolve(file);
    });
  });
}

// statpromise处理
function asyncStat(filedir) {
  return new Promise((resolve, reject) => {
    fs.stat(filedir, (err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
}

function fileDispaly(filePath, callback) {
  // 读取filePath路径下所有文件和文件夹名称
  return asyncReaddir(filePath)
    .then((files) => {
      let promistList = files.map((fileName) => {
        let childFilePath = path.join(filePath, fileName); // 获得子文件的绝对路径

        // map遍历会得到多个promise，映射成新的promise数组promistList， 之后用Promise.all处理多个promise
        return asyncStat(childFilePath)
          .then((fileInfo) => {
            // 获取每个文件或文件夹的信息
            if (fileInfo.isFile()) {
              // 判断是否是文件
              callback && callback(childFilePath); // 是文件则执行回调函数，这里演示接受文件绝对路径
            }

            if (fileInfo.isDirectory()) {
              return fileDispaly(childFilePath, callback); // 递归处理文件夹
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });

      return Promise.all(promistList); // 所有的promise处理完成
    })
    .catch((err) => {
      console.log(err);
    });
}

// 定义callback, 处理接受到每个文件
let fileList = [];
function addFile(file) {
  fileList.push(file);
}

// 用D:/1067/1067 文件夹做测试
const filePath = path.resolve('D:\\1067\\1067');

fileDispaly(filePath, addFile).then(() => {
  fileList.forEach((item) => {
    let tmpPath = item;
    let tmp;
    tmp = fs.readFileSync(tmpPath, 'utf-8');
    tmp = tmp.replace(/\r\n/g, '\n');
    tmp = tmp.replace(/.*"Name": "(.*)",\n.*"Text": "(.*)",/g, '$1:「$2」');
    tmp = tmp.replace(/.*"ChoiceDataList".*/g, '');
    tmp = tmp.replace(/.*"ColorTextInfoList".*\n.*/g, '');
    tmp = tmp.replace(/.*},.*/g, '');
    tmp = tmp.replace(/.*{.*/g, '');
    tmp = tmp.replace(/.*\].*/g, '');
    tmp = tmp.replace(/\\n/g, '');
    tmp = tmp.replace(/.*"TextBlockList".*/g, '');
    tmp = tmp.replace(/\n\n/g, '\n');
    tmp = tmp.replace(/\n\n/g, '\n');
    tmp = tmp.replace(
      /.*"Title": "(.*)",/g,
      "await print_event_name('$1', chara_talk);",
    );
    tmp = tmp.replace(
      /里见光钻:「(.*)」/g,
      "await chara_talk.say_and_wait('$1');",
    );
    //换成你想替换的角色和对应的chara_talk，可以直接复制
    tmp = tmp.replace(
      /北部玄驹:「(.*)」/g,
      "await chara68_talk.say_and_wait('$1');",
    );
    //换成你想替换的角色和对应的chara_talk
    tmp = tmp.replace(/\n独白:「(.*)」/g, "\nawait era.printAndWait('$1');");
    tmp = tmp.replace(/\n:「(.*)」/g, "\nawait era.printAndWait('$1');");
    tmp = tmp.replace(/\n.*"(.*)".*/g, "\nera.printButton('「$1」', 1);");
    tmp = tmp.replace(/\n([^a]+?)\n/g, "\nawait era.printAndWait('$1');\n");
    tmp = tmp.replace(/\n([^a]+?)\n/g, "\nawait era.printAndWait('$1');\n");
    fs.writeFileSync(`${tmpPath}`, tmp);
  });
});
