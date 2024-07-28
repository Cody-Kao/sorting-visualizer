import { frame } from "../Lib/types";

function partition(
  array: number[],
  begin: number,
  finish: number,
  animations: frame,
) {
  let i = begin;
  let j = finish + 1;
  const condition = true;
  const pivot = array[begin];
  while (condition) {
    while (array[++i] <= pivot) {
      if (i === finish) break;
      animations.push([[i], false]);
    }
    while (array[--j] >= pivot) {
      if (j === begin) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, array[j]], true]);
    animations.push([[j, array[i]], true]);
    [array[i], array[j]] = [array[j], array[i]];
  }
  animations.push([[begin, array[j]], true]);
  animations.push([[j, array[begin]], true]);
  [array[begin], array[j]] = [array[j], array[begin]];
  return j;
}

function runQuickSort(
  array: number[],
  begin: number,
  finish: number,
  animations: frame,
) {
  if (begin < finish) {
    const part = partition(array, begin, finish, animations);
    runQuickSort(array, begin, part - 1, animations);
    runQuickSort(array, part + 1, finish, animations);
  }
}

export const getFrameArrayFromQuickSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  if (arrayToSort.length <= 1) return arrayToSort;

  const animations: frame = [];
  const auxiliaryArray = arrayToSort.slice();
  runQuickSort(auxiliaryArray, 0, arrayToSort.length - 1, animations);
  runAnimation(animations);
};
