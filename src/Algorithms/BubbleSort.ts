import { frame } from "../Lib/types";

function bubbleSort(array: number[], animations: frame) {
  for (let i = 0; i < array.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([[j, j + 1], false]);
      if (array[j] > array[j + 1]) {
        animations.push([[j, array[j + 1]], true]);
        animations.push([[j + 1, array[j]], true]);
        [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}

export const getFrameArrayFromBubbleSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  const tmp = arrayToSort.slice();
  const res: frame = [];
  bubbleSort(tmp, res);
  runAnimation(res);
};
