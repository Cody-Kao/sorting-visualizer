import { frame } from "../Lib/types";

function insertionSort(array: number[], animations: frame) {
  for (let i = 1; i < array.length; i++) {
    animations.push([[i], false]);
    const currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      animations.push([[j, j + 1, i], false]);
      array[j + 1] = array[j];
      animations.push([[j + 1, array[j]], true]);
      j -= 1;
    }
    array[j + 1] = currentValue;
    animations.push([[j + 1, currentValue], true]);
  }
}

export const getFrameArrayFromInsertionSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  const tmp = arrayToSort.slice();
  const res: frame = [];
  insertionSort(tmp, res);
  runAnimation(res);
};
