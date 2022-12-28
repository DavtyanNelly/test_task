import { ModalProps } from "@mui/material";
import { IOrganization } from "../../interfaces/organization.interface";

export interface AddAndEditOrganizationProps
  extends Omit<ModalProps, "children"> {
  onClose: () => void;
  organization?: IOrganization;
}
