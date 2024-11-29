import { useEffect, useState } from "react";

const getEorzeaTime = () => {
  const realTime = new Date();
  const unixTime = realTime.getTime();

  // Convert the real-world time into Eorzea time
  const eorzeaTime = (unixTime / 1000) * (3600 / 175); // 3600 Eorzea seconds pass every 175 real seconds

  // Calculate the total Eorzea seconds that have passed today
  const totalEorzeaSeconds = Math.floor(eorzeaTime) % (24 * 60 * 60); // Seconds in an Eorzea day

  // Calculate the current Eorzea time (hours, minutes, and seconds)
  const hours = Math.floor(eorzeaTime / (60 * 60)) % 24;

  // Calculate the percentage of the day that has passed
  const percent = (totalEorzeaSeconds / (24 * 60 * 60)) * 100;

  return {
    hours,
    percent,
  };
};

export const useEorzeaTime = () => {
  const initial = getEorzeaTime();
  const [hours, setHours] = useState(initial.hours);
  const [percent, setPercent] = useState(initial.percent);

  useEffect(() => {
    const id = setInterval(() => {
      const time = getEorzeaTime();
      setHours(time.hours);
      setPercent(time.percent);
    }, 1_000);

    return () => clearInterval(id);
  }, []);

  return {
    hours,
    percent,
  };
};
