import { Cell } from "./Cell";
import { Entry as EntryDetails } from "./data";
import { Entry } from "./Entry";

type Props = {
  category: EntryDetails[];
  cellClassName?: string;
  title: string;
  titleClassName?: string;
};

export const Category = (props: Props) => {
  return (
    <div className="w-1/5">
      <Cell
        className={`border-b-8 font-bold${
          props.titleClassName ? ` ${props.titleClassName}` : ""
        }`}
        vAlign
      >
        {props.title}
      </Cell>

      {props.category.map((category, i) => (
        <Entry className={props.cellClassName} entry={category} key={i} />
      ))}
    </div>
  );
};
