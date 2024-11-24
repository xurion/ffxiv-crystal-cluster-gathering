import { useState } from "react";
import { useInterval } from "usehooks-ts";

const getEorzeaDayProgress = () => {
  const realTime = new Date();
  const unixTime = realTime.getTime();

  // Convert the real-world time into Eorzea time
  const eorzeaTime = (unixTime / 1000) * (3600 / 175); // 3600 Eorzea seconds pass every 175 real seconds

  // Calculate the total Eorzea seconds that have passed today
  const totalEorzeaSeconds = Math.floor(eorzeaTime) % (24 * 60 * 60); // Seconds in an Eorzea day

  // Calculate the percentage of the day that has passed
  const percentageThroughDay = (totalEorzeaSeconds / (24 * 60 * 60)) * 100;

  return percentageThroughDay.toFixed(2); // Return the percentage to two decimal places
};

export const EorzeanTimeTracker = () => {
  const [top, setTop] = useState(getEorzeaDayProgress());
  useInterval(() => {
    const top = getEorzeaDayProgress();
    setTop(top);
  }, 1000);

  return (
    <div
      className={`absolute border-b-2 border-b-black border-dashed w-full z-10`}
      style={{ top: `${top}%` }}
    />
  );
};
