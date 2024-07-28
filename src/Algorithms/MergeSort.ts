import { frame } from "../Lib/types";

function merge(
  array: number[],
  begin: number,
  middle: number,
  finish: number,
  animations: frame,
) {
  const left = array.slice(begin, middle);
  const right = array.slice(middle, finish);

  let i = 0;
  let j = 0;
  let k = begin;
  while (i < left.length && j < right.length) {
    animations.push([[begin + i, middle + j], false]);
    if (left[i] <= right[j]) {
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i += 1;
    } else {
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j += 1;
    }
    k++;
  }
  while (i < left.length) {
    animations.push([[begin + i], false]);
    animations.push([[k, left[i]], true]);
    array[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    animations.push([[middle + j], false]);
    animations.push([[k, right[j]], true]);
    array[k] = right[j];
    j += 1;
    k += 1;
  }
}

function runMergeSort(array: number[]) {
  const animations: frame = [];
  for (let k = 1; k < array.length; k = 2 * k) {
    for (let i = 0; i < array.length; i += 2 * k) {
      const begin = i;
      const middle = i + k;
      const finish = Math.min(i + 2 * k, array.length);
      merge(array, begin, middle, finish, animations);
    }
  }
  return animations;
}

export const getFrameArrayFromMergeSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  const tmp = arrayToSort.slice();
  const res: frame = runMergeSort(tmp);
  runAnimation(res);
};
