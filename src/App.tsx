import SelectAlgorithm from "./Components/SelectAlgorithm";
import SelectSpeedBar from "./Components/SelectSpeedBar";
import { useVisualizerContext } from "./Context/MainContext";
import { AlgorithmOptionsArray } from "./Lib/const";
import { SortingAlgorithmType } from "./Lib/types";
import { runAlgorithm } from "./Utils/runAlgorithm";
import { FaCirclePlay } from "react-icons/fa6";
import { PiKeyReturnFill } from "react-icons/pi";
import { AlgorithmDescriptionObjectDict } from "./Lib/const";

function App() {
  const {
    arrayToSort,
    animationSpeedRef,
    setAnimationSpeed,
    isSorting,
    sortingAlgorithm,
    setSortingAlgorithm,
    runAnimation,
    resizeAndReset,
    requiresReset,
  } = useVisualizerContext();

  const handlePlay = () => {
    if (requiresReset) {
      resizeAndReset();
      return;
    }

    runAlgorithm(sortingAlgorithm, arrayToSort, runAnimation);
  };

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px] pt-2">
      <div className="flex h-full justify-center">
        <div
          id="content-container"
          className="flex w-full max-w-[1020px] flex-col px-4 lg:px-0"
        >
          <div className="relative flex h-[66px] w-full items-center justify-between text-[1.2rem]">
            <h1 className="hidden text-2xl font-light text-gray-300 md:flex">
              Sorting Visulizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <SelectSpeedBar
                isDisabled={isSorting}
                value={animationSpeedRef.current}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <SelectAlgorithm
                options={AlgorithmOptionsArray}
                defaultOption="bubble"
                isDisabled={isSorting}
                handleChange={(e) =>
                  setSortingAlgorithm(e.target.value as SortingAlgorithmType)
                }
              />
              <button
                className="text-[32px] text-[#ffffff]"
                onClick={() => handlePlay()}
              >
                {requiresReset ? <PiKeyReturnFill /> : <FaCirclePlay />}
              </button>
            </div>
          </div>

          <div className="mt-6 w-full gap-6 rounded border border-system-purple20 bg-system-purple80 bg-opacity-10 p-4 text-gray-400 sm:flex">
            <div className="flex w-3/4 flex-col items-start justify-start gap-4">
              <a
                href={AlgorithmDescriptionObjectDict[sortingAlgorithm]?.link}
                target="_blank"
              >
                <span className="hidden text-xl hover:underline sm:block">
                  {AlgorithmDescriptionObjectDict[sortingAlgorithm]?.title}
                </span>
              </a>
              <p className="text-md hidden sm:block">
                {AlgorithmDescriptionObjectDict[sortingAlgorithm]?.description}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:w-1/4 sm:items-start sm:justify-start">
              <a
                href="https://zh.wikipedia.org/zh-tw/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6"
                target="_blank"
                className="text-xl underline hover:underline sm:no-underline"
              >
                Time Complexity
              </a>
              <p className="flex w-full flex-col items-center gap-2 text-gray-500 sm:items-start">
                <span className="flex justify-start gap-5">
                  Best Case:
                  <span>
                    {AlgorithmDescriptionObjectDict[sortingAlgorithm]?.bestCase}
                  </span>
                </span>
                <span className="flex justify-start gap-5">
                  Average Case:
                  <span>
                    {
                      AlgorithmDescriptionObjectDict[sortingAlgorithm]
                        ?.averageCase
                    }
                  </span>
                </span>
                <span className="flex justify-start gap-5">
                  Worst Case:
                  <span>
                    {
                      AlgorithmDescriptionObjectDict[sortingAlgorithm]
                        ?.worstCase
                    }
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] left-0 right-0 mx-auto flex w-full items-end justify-center">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line default-line-color relative mx-0.5 w-1 rounded-lg opacity-70 shadow-lg"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
