import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  height?: 1 | 2 | 3 | 4;
  key?: number | string;
};

export const Cell = (props: Props) => {
  const height =
    props.height === 2
      ? "h-24"
      : props.height === 3
      ? "h-36"
      : props.height === 4
      ? "h-48"
      : "h-12";

  return (
    <div
      className={`content-center p-1 text-center ${height}${
        props.className ? ` ${props.className}` : ""
      }`}
      key={props.key}
    >
      {props.children}
    </div>
  );
};
