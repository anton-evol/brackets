module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  const config = bracketsConfig;
  let map = new Map(config);
  let j = 0;

  do {
    let i = 0;
    strArr.forEach(function (item, index) {
      if (index >= strArr.length) {
        index = 0;
      }
      //console.log(strArr);
      //console.log("Текущий индекс ITEM: "+index+"\n"+
      //          "Сам ITEM: "+item+"\n"+
      //          "Соответствующий ITEMу символ конфига: "+map.get(item)+"\n"+
      //          "Какой следующий элемент в строке: "+strArr[index+1]+"\n"+
      //          "Счётчик i:  "+i+"\n"+
      //          "Равен ли след.элемент текущему соотв.парному: "+(strArr[index+1] === map.get(item))+"\n");
      if (
        typeof map.get(item) === "undefined" ||
        strArr[index + 1] === "undefined"
      ) {
        index = 0;
      } else if (strArr[index + 1] === map.get(item)) {
        strArr.splice(index, 2);
        i = i + 1;
      } else {
        i = i + 1;
      }
    });
    j = j + 1;
  } while (j < str.length);

  return strArr.length === 0;
};
