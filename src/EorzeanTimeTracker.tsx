import { useState } from "react";
import { useInterval } from "usehooks-ts";

const getEorzeaDayProgress = () => {
  const realTime = new Date(); // Current real-world time
  const unixTime = realTime.getTime(); // Get Unix time in milliseconds

  // Eorzea time runs 20 times faster than real time
  const eorzeaTime = (unixTime * 20) / 1000; // Convert ms to seconds and scale up

  const totalEorzeaSeconds = Math.floor(eorzeaTime) % (24 * 60 * 60); // Seconds since the start of the Eorzean day
  const percentageThroughDay = (totalEorzeaSeconds / (24 * 60 * 60)) * 100; // Calculate percentage

  return percentageThroughDay;
};

export const EorzeanTimeTracker = () => {
  const [top, setTop] = useState(getEorzeaDayProgress());
  useInterval(() => {
    setTop(getEorzeaDayProgress());
  }, 1000);

  return (
    <div
      className={`absolute border-b-2 border-b-black border-dashed w-full`}
      style={{ top: `calc(${top}% - 48px` }}
    />
  );
};
