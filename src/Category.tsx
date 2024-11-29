import { Item as ItemDetails } from "./data";
import { Item } from "./Item";

type Props = {
  activeCellClassName: string;
  cellClassName: string;
  ephemerals: ItemDetails[];
  legendaries: ItemDetails[];
};

export const Category = ({
  activeCellClassName,
  cellClassName,
  ephemerals,
  legendaries,
}: Props) => (
  <>
    <div className="relative w-1/2">
      {legendaries.map((legendaryItem, i) => (
        <Item
          activeClassName={activeCellClassName}
          className={cellClassName}
          duration={2}
          item={legendaryItem}
          key={i}
        />
      ))}
    </div>

    <div className="relative w-1/2">
      {ephemerals.map((ephemeralItem, i) => (
        <Item
          activeClassName={activeCellClassName}
          className={cellClassName}
          duration={4}
          item={ephemeralItem}
          key={i}
        />
      ))}
    </div>
  </>
);
