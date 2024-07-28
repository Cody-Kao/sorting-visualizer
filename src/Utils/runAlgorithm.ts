import { getFrameArrayFromBubbleSort } from "../Algorithms/BubbleSort";
import { getFrameArrayFromHeapSort } from "../Algorithms/HeapSort";
import { getFrameArrayFromInsertionSort } from "../Algorithms/InsertionSort";
import { getFrameArrayFromMergeSort } from "../Algorithms/MergeSort";
import { getFrameArrayFromQuickSort } from "../Algorithms/QuickSort";
import { getFrameArrayFromSelectionSort } from "../Algorithms/SelectionSort";
import { frame } from "../Lib/types";

export const runAlgorithm = (
  sortingAlgorithm: string,
  arrayToSort: number[],
  runAnimation: (frameArray: frame) => void,
) => {
  switch (sortingAlgorithm) {
    case "bubble":
      getFrameArrayFromBubbleSort(arrayToSort, runAnimation);
      break;
    case "insert":
      getFrameArrayFromInsertionSort(arrayToSort, runAnimation);
      break;
    case "select":
      getFrameArrayFromSelectionSort(arrayToSort, runAnimation);
      break;
    case "merge":
      getFrameArrayFromMergeSort(arrayToSort, runAnimation);
      break;
    case "quick":
      getFrameArrayFromQuickSort(arrayToSort, runAnimation);
      break;
    case "heap":
      getFrameArrayFromHeapSort(arrayToSort, runAnimation);
      break;
    default:
      getFrameArrayFromBubbleSort(arrayToSort, runAnimation); // default one is bubble sort
      break;
  }
};
