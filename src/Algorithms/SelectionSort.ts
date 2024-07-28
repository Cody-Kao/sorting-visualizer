import { frame } from "../Lib/types";

function selectionSort(array: number[], animations: frame) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, minIndex], false]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([[i, array[minIndex]], true]);
    animations.push([[minIndex, array[i]], true]);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

export const getFrameArrayFromSelectionSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  const tmp = arrayToSort.slice();
  const res: frame = [];
  selectionSort(tmp, res);
  runAnimation(res);
};
