import { frame } from "../Lib/types";

function heapify(array: number[], n: number, i: number, res: frame): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    res.push([[largest, left], false]);
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) {
    res.push([[largest, right], false]);
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    res.push([[largest, array[i]], true]);
    res.push([[i, array[largest]], true]);
    [array[i], array[largest]] = [array[largest], array[i]]; // Swap

    // Recursively heapify the affected sub-tree
    heapify(array, n, largest, res);
  }
}

function heapSort(array: number[], res: frame) {
  const n = array.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, res);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    res.push([[0, array[i]], true]);
    res.push([[i, array[0]], true]);
    [array[0], array[i]] = [array[i], array[0]]; // Swap

    // Call max heapify on the reduced heap
    heapify(array, i, 0, res);
  }
}

export const getFrameArrayFromHeapSort = (
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  const tmp = arrayToSort.slice();
  const res: frame = [];
  heapSort(tmp, res);
  runAnimation(res);
};
