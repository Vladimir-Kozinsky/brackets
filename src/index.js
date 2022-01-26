module.exports = function check(str, bracketsConfig) {
  // your solution
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    let el = strArr[i]
    let el2 = strArr[i + 1]
    for (let index = 0; index < bracketsConfig.length; index++) {
      if (el == bracketsConfig[index][0] && el2 == bracketsConfig[index][1]) {
        strArr.splice([i], 2);
        i = -1;

        continue;
      }
    }
  }

  if (strArr.length != 0) {
    return false;
  } else {
    return true;
  }
}

