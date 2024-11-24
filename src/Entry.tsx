import { Cell } from "./Cell";
import type { Entry as EntryDetails } from "./data";
import collectableIcon from "./assets/collectable.webp";
import botIcon from "./assets/botanist.webp";
import minIcon from "./assets/miner.webp";

type Props = {
  className?: string;
  entry: EntryDetails;
};

export const Entry = ({ className, entry }: Props) => {
  if (entry.type === "empty") {
    return (
      <Cell
        className="bg-slate-200 border-b-white border-b-4 text-slate-400"
        height={entry.duration}
        vAlign
      >
        None
      </Cell>
    );
  }

  return (
    <Cell
      className={`relative border-b-white border-b-4${
        className ? ` ${className}` : ""
      }`}
      height={entry.duration}
      vAlign
    >
      {entry.name}
      <div className="absolute right-2 top-2">
        <img
          className="mb-1 w-5"
          src={entry.job === "BOT" ? botIcon : minIcon}
        />
        {entry.collectable && <img className="w-5" src={collectableIcon} />}
      </div>
      <div className="absolute bottom-2 right-2 text-sm">
        Lv{entry.level} {Array.from({ length: entry.stars }).map(() => "★")}
      </div>
      <div className="absolute bottom-2 left-2 text-xs text-left">
        {entry.zone} ({entry.xy.join(", ")})
      </div>
    </Cell>
  );
};
