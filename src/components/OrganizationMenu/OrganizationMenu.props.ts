import { MenuProps } from "@mui/material";

export interface OrganizationMenuProps extends MenuProps {
  organizationId: number;
  onClose: () => void;
  openEdit: () => void;
}
