// функция для изменения параметров сортировки
function compareNum(a, b) {
  return a - b;
}
//
const arrNum = [42, 12, 5, 0, 21, 18];
arrNum.sort(compareNum);
console.log(arrNum);

