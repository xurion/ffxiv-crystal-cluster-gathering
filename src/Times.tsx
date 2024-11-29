import { Cell } from "./Cell";

export const Times = () => (
  <div className="border-r-4 flex flex-col">
    {Array.from({ length: 12 }, (_, i) => (
      <Cell className="flex flex-grow" key={i}>{`${String(i * 2).padStart(
        2,
        "0"
      )}:00`}</Cell>
    ))}
  </div>
);
