import { Cell } from "./Cell";
import type { Entry as EntryDetails } from "./data";

type Props = {
  className?: string;
  entry: EntryDetails;
};

export const Entry = ({ className, entry }: Props) => {
  if (entry.type === "empty") {
    return <Cell height={entry.duration} />;
  }

  return (
    <Cell className={className} height={entry.duration}>
      {entry.name}
    </Cell>
  );
};
