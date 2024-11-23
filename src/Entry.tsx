import type { Entry as EntryDetails } from "./data";

type Props = {
  entry: EntryDetails;
};

export const Entry = ({ entry }: Props) => {
  const height =
    entry.duration === 1
      ? "h-4"
      : entry.duration === 2
      ? "h-8"
      : entry.duration === 3
      ? "h-12"
      : "h-16";

  if (entry.type === "empty") {
    return <div className={height} />;
  }

  return <div className={height}>{entry.name}</div>;
};
