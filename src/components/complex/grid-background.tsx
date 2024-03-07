import { useEffect, useRef } from "react";

const GridBackground = () => {
  const movingGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movingGrid = movingGridRef.current;

    if (movingGrid) {
      movingGrid.style.animation = "movingbackground 90s linear infinite";
    }

    return () => {
      if (movingGrid) {
        movingGrid.style.animation = "";
      }
    };
  }, []);

  return (
    <div className="w-full h-[40vh] absolute top-0 left-0 overflow-hidden ">
      <div className="shadow-background absolute top-0 h-full w-full shadow-[inset_0_0_5rem_3rem]"></div>

      <div
        ref={movingGridRef}
        className="h-[200%] absolute inset-0 [mask-image:linear-gradient(to_bottom,white_30%,transparent_50%)] rounded-3xl w-full moving-grid-background z-20 py-8 "
      />
    </div>
  );
};

export default GridBackground;
