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

// 用D:/1067 文件夹做测试
const filePath = path.resolve('D:\\1067');

fileDispaly(filePath, addFile).then(() => {
  let a = 0;
  fileList.forEach((item) => {
    a++;
    let tmpPath = item;
    let tmp;
    tmp = fs.readFileSync(tmpPath, 'utf-8');
    let title = tmp.match(/(?<="Title": ").*(?=")/);
    title = title[0];
    fs.writeFileSync(`D:\\1067\\1067\\${a} ${title}.txt`, tmp);
    // 保存到D:/1067/1067 文件夹（注意，必须要有这个文件夹，而且最好和源文件的文件夹不一样）
  });
});
