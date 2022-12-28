import { CardProps } from "@mui/material";
import { IOrganization } from "../../interfaces/organization.interface";

export interface OrganizationCardProps extends CardProps {
  organization: IOrganization;
}
