import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LicensesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  inUse: number;
  assigned: number;
}
