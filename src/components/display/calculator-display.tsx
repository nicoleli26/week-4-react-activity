import React from "react";

interface IProps {
  displayValue: string;
}

export function CalculatorDisplay(props: IProps) {
  return <div className="calculator-display">{props.displayValue || "0"}</div>;
}
