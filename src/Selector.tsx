import { useCallback, useEffect, useMemo, useState } from "react";
import earthIcon from "./assets/earth.png";
import fireIcon from "./assets/fire.webp";
import iceIcon from "./assets/ice.webp";
import lightningIcon from "./assets/lightning.webp";
import waterIcon from "./assets/water.webp";
import windIcon from "./assets/wind.webp";

type SelectorParams = {
  onEarthSelect: VoidFunction;
  onFireSelect: VoidFunction;
  onIceSelect: VoidFunction;
  onLightningSelect: VoidFunction;
  onWaterSelect: VoidFunction;
  onWindSelect: VoidFunction;
};
export const Selector = ({
  onEarthSelect,
  onFireSelect,
  onIceSelect,
  onLightningSelect,
  onWaterSelect,
  onWindSelect,
}: SelectorParams) => {
  const [faded, setFaded] = useState(true);
  const [timeoutId, setTimeoutId] = useState(0);

  const handleMouseMove = useCallback(() => {
    setFaded(false);
    clearTimeout(timeoutId);
    const id = setTimeout(() => setFaded(true), 1_000);
    setTimeoutId(id);
  }, [timeoutId]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const className = useMemo(
    () => (faded ? "opacity-20" : "opacity-100"),
    [faded]
  );

  return (
    <div
      className={`absolute bottom-2 h-8 w-48 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500 ${className}`}
    >
      <button className="h-8 w-8 p-0 inline-block" onClick={onEarthSelect}>
        <img src={earthIcon} />
      </button>
      <button className="h-8 w-8 p-0 inline-block" onClick={onFireSelect}>
        <img src={fireIcon} />
      </button>
      <button className="h-8 w-8 p-0 inline-block" onClick={onIceSelect}>
        <img src={iceIcon} />
      </button>
      <button className="h-8 w-8 p-0 inline-block" onClick={onLightningSelect}>
        <img src={lightningIcon} />
      </button>
      <button className="h-8 w-8 p-0 inline-block" onClick={onWaterSelect}>
        <img src={waterIcon} />
      </button>
      <button className="h-8 w-8 p-0 inline-block" onClick={onWindSelect}>
        <img src={windIcon} />
      </button>
    </div>
  );
};
