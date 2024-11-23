import { Entry as EntryDetails } from "./data";
import { Entry } from "./Entry";

type Props = {
  category: EntryDetails[];
  title: string;
};

export const Category = (props: Props) => {
  return (
    <div className="w-1/5">
      <div>{props.title}</div>
      {props.category.map((category, i) => (
        <Entry entry={category} key={i} />
      ))}
    </div>
  );
};
