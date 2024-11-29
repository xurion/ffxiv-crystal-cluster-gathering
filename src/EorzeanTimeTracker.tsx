import { useEorzeaTime } from "./useEorzeaTime";

export const EorzeanTimeTracker = () => {
  const { percent } = useEorzeaTime();

  return (
    <div
      className={`absolute border-b-2 border-b-black border-dashed w-full z-10`}
      style={{ top: `${percent}%` }}
    />
  );
};
