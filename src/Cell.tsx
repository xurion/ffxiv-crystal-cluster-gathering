import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  height?: 1 | 2 | 3 | 4;
  vAlign?: boolean;
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

  const vAlign = props.vAlign ? "content-center" : "content-top";

  return (
    <div
      className={`p-1 text-center ${vAlign} ${height}${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      {props.children}
    </div>
  );
};
