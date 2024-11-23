import { Cell } from "./Cell";
import type { Entry as EntryDetails } from "./data";
import collectableIcon from "./assets/collectable.webp";

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
      {entry.collectable && (
        <img className="absolute right-2 top-2 w-4" src={collectableIcon} />
      )}
    </Cell>
  );
};
