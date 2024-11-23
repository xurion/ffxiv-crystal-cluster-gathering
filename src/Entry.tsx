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
    return <Cell height={entry.duration} />;
  }

  return (
    <Cell
      className={`relative${className ? ` ${className}` : ""}`}
      height={entry.duration}
    >
      {entry.name}
      <div className="absolute right-2 top-2">
        <img
          className="mb-1 w-5"
          src={entry.job === "BOT" ? botIcon : minIcon}
        />
        {entry.collectable && <img className="w-5" src={collectableIcon} />}
      </div>
    </Cell>
  );
};
