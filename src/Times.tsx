import { Cell } from "./Cell";

export const Times = () => (
  <div className="border-r-8">
    <Cell className="border-b-8" vAlign>
      Time
    </Cell>
    {Array.from({ length: 12 }, (_, i) => (
      <Cell height={2} key={i}>{`${String(i * 2).padStart(2, "0")}:00`}</Cell>
    ))}
  </div>
);
