import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface OrganizationHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  amount: number;
  onClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
