import { Cell } from "./Cell";
import type { Item as ItemDetails } from "./data";
import botIcon from "./assets/botanist.webp";
import minIcon from "./assets/miner.webp";
import { useEorzeaTime } from "./useEorzeaTime";

type Props = {
  activeClassName: string;
  className: string;
  duration: 2 | 4;
  item: ItemDetails;
};

const twoHours = "h-[8.333333333333334%]";
const fourHours = "h-[16.666666666666668%]";
const starts = [
  "top-0",
  "top-[4.166666666666667%]",
  "top-[8.333333333333334%]",
  "top-[12.5%]",
  "top-[16.666666666666668%]",
  "top-[20.833333333333336%]",
  "top-[25%]",
  "top-[29.166666666666668%]",
  "top-[33.333333333333336%]",
  "top-[37.5%]",
  "top-[41.66666666666667%]",
  "top-[45.833333333333336%]",
  "top-[50%]",
  "top-[54.16666666666667%]",
  "top-[58.333333333333336%]",
  "top-[62.50000000000001%]",
  "top-[66.66666666666667%]",
  "top-[70.83333333333334%]",
  "top-[75%]",
  "top-[79.16666666666667%]",
  "top-[83.33333333333334%]",
  "top-[87.5%]",
  "top-[91.66666666666667%]",
  "top-[95.83333333333334%]",
];

export const Item = ({ activeClassName, className, duration, item }: Props) => {
  const { hours } = useEorzeaTime();
  const height = duration === 2 ? twoHours : fourHours;
  const top = starts[item.start];
  const combinedClassName = `${className} ${
    hours >= item.start && hours < item.start + duration ? activeClassName : ""
  }`;

  return (
    <Cell
      className={`absolute border-b-white border-b-4 w-full ${top} ${height} ${combinedClassName}`}
      vAlign
    >
      {item.name}
      <div className="absolute right-2 top-2">
        <img
          className="mb-1 w-5"
          src={item.job === "BOT" ? botIcon : minIcon}
        />
      </div>
      <div className="absolute bottom-2 right-2 text-sm">
        Lv{item.level} {Array.from({ length: item.stars }).map(() => "★")}
      </div>
      <div className="absolute bottom-2 left-2 text-xs text-left">
        {item.zone} ({item.xy.join(", ")})
      </div>
    </Cell>
  );
};
