import { AlgorithmDescriptionObject, AlgorithmOptions } from "./types";

export const MINANIMATIONSPEED = 100;
export const MAXANIMATIONSPEED = 400;
export const STEP = 10;

export const AlgorithmOptionsArray: AlgorithmOptions[] = [
  { value: "bubble", label: "bubble" },
  { value: "insert", label: "insert" },
  { value: "select", label: "select" },
  { value: "merge", label: "merge" },
  { value: "quick", label: "quick" },
  { value: "heap", label: "heap" },
];

// dict declaration in TS
// { [keyName:keyType]:ValueType }
export const AlgorithmDescriptionObjectDict: {
  [algorithm: string]: AlgorithmDescriptionObject;
} = {
  bubble: {
    title: "Bubble Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    bestCase: "O(n)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
  },
  insert: {
    title: "Insertion Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    bestCase: "O(n)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
  },
  select: {
    title: "Selection Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    bestCase: "O(n²)",
    averageCase: "O(n²)",
    worstCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F",
    description:
      "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    bestCase: "O(n log n)",
    averageCase: "O(n log n)",
    worstCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    bestCase: "O(n log n)",
    averageCase: "O(n log n)",
    worstCase: "O(n²)",
  },
  heap: {
    title: "Heap Sort",
    link: "https://zh.wikipedia.org/zh-tw/%E5%A0%86%E6%8E%92%E5%BA%8F",
    description:
      "Heapsort is a comparison-based sorting algorithm which can be thought of as an implementation of selection sort using the heap data structure. It divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.",
    bestCase: "O(n log n)",
    averageCase: "O(n log n)",
    worstCase: "O(n log n)",
  },
};
