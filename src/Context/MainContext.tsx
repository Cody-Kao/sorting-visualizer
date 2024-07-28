import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { frame, SortingAlgorithmType } from "../Lib/types";
import { getRandomNumber } from "../Utils/getRandomNumber";
import { MAXANIMATIONSPEED } from "../Lib/const";

interface VisualizerContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  sortingAlgorithm: SortingAlgorithmType;
  setSortingAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeedRef: React.MutableRefObject<number>;
  setAnimationSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isAnimationComplete: boolean) => void;
  resizeAndReset: () => void;
  runAnimation: (animation: frame) => void;
  requiresReset: boolean;
}

const VisualizerContext = createContext<VisualizerContextType | undefined>(
  undefined,
);

export const useVisualizerContext = () => {
  const context = useContext(VisualizerContext);
  if (!context) {
    throw new Error(
      "useVisualizerContext must be used within VisualizerContextProvider",
    );
  }
  return context;
};

export default function VisualizerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [sortingAlgorithm, setSortingAlgorithm] =
    useState<SortingAlgorithmType>("bubble");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(MAXANIMATIONSPEED);
  const animationSpeedRef = useRef(animationSpeed);
  animationSpeedRef.current = animationSpeed;
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const requiresReset = isSorting || isAnimationComplete;

  // resize the arrayToSort
  const resize = () => {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
      return;
    }
    const contentContainerWidth = contentContainer.clientWidth;
    const contentContainerHeight = contentContainer.clientHeight;
    const numOfLines = contentContainerWidth / 8;
    const maxLineHeight = Math.max(contentContainerHeight - 420, 100);
    const tmpArray: number[] = [];
    for (let i = 0; i < numOfLines; i++) {
      tmpArray.push(getRandomNumber(35, maxLineHeight));
    }

    setArrayToSort(tmpArray);
  };

  // reset the arrayToSort and animation
  const reset = () => {
    setIsSorting(false);
    setIsAnimationComplete(false);

    // clear all the Timeout, otherwise the sorting animation may keep processing
    const highestId = setTimeout(() => {
      for (let i = highestId; i >= 0; i--) {
        window.clearTimeout(i);
      }
    }, 0);

    // reset the color to original one
    const allLines = document.getElementsByClassName(
      "array-line",
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allLines.length; i++) {
      allLines[i].classList.remove("change-line-color");
      allLines[i].classList.add("default-line-color");
    }
  };

  // for resizing the screen
  const resizeAndReset = () => {
    resize();
    reset();
  };

  useEffect(() => {
    resizeAndReset(); // init for the first time it mounts
    // add listener to the resize event
    window.addEventListener("resize", resizeAndReset);

    return () => {
      window.removeEventListener("resize", resizeAndReset);
    };
  }, []);

  // run animation
  const runAnimation = (animations: frame) => {
    setIsSorting(true);

    const inverseSpeed = (1 / animationSpeedRef.current) * 200;
    const arrLines = document.getElementsByClassName(
      "array-line",
    ) as HTMLCollectionOf<HTMLElement>;

    const updateClassList = (
      indexes: number[],
      addClassName: string,
      removeClassName: string,
    ) => {
      indexes.forEach((index) => {
        arrLines[index].classList.add(addClassName);
        arrLines[index].classList.remove(removeClassName);
      });
    };

    const updateHeightValue = (
      lineIndex: number,
      newHeight: number | undefined,
    ) => {
      arrLines[lineIndex].style.height = `${newHeight}px`;
    };

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [lineIndexes, isSwap] = animation;
        if (!isSwap) {
          updateClassList(
            lineIndexes,
            "change-line-color",
            "default-line-color",
          );
          setTimeout(
            () =>
              updateClassList(
                lineIndexes,
                "default-line-color",
                "change-line-color",
              ),
            inverseSpeed,
          );
        } else {
          const [lineIndex, newHeight] = lineIndexes;
          updateHeightValue(lineIndex, newHeight);
        }
      }, index * inverseSpeed);
    });

    const finalTimeout = animations.length * inverseSpeed;
    setTimeout(() => {
      Array.from(arrLines).forEach((line) => {
        line.classList.add("pulse-animation", "change-line-color");
        line.classList.remove("default-line-color");
      });

      setTimeout(() => {
        Array.from(arrLines).forEach((line) => {
          line.classList.remove("pulse-animation", "change-line-color");
          line.classList.add("default-line-color");
        });
        setIsSorting(false);
        setIsAnimationComplete(true);
      }, 1000);
    }, finalTimeout);
  };

  const value = {
    arrayToSort,
    setArrayToSort,
    sortingAlgorithm,
    setSortingAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeedRef,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resizeAndReset,
    runAnimation,
    requiresReset,
  };

  return (
    <VisualizerContext.Provider value={value}>
      {children}
    </VisualizerContext.Provider>
  );
}
