import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress, Menu, MenuItem, Typography } from "@mui/material";
import { OrganizationMenuProps } from "./OrganizationMenu.props";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { useDeleteOrganizationMutation } from "../../redux/apiSlice";

export const OrganizationMenu: FC<OrganizationMenuProps> = memo(
  ({ openEdit, onClose, organizationId, ...props }) => {
    const navigate = useNavigate();

    const [deleteOrganization, { isLoading }] = useDeleteOrganizationMutation();

    const handleDelete = async () => {
      await deleteOrganization({ id: organizationId });
      onClose();
    };

    return (
      <Menu id="long-menu" onClose={onClose} {...props}>
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        <MenuItem onClick={openEdit}>
          <BorderColorIcon sx={{ marginRight: 2 }} color={"secondary"} />
          <Typography color={"secondary"}>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate(`/${organizationId}`)}>
          <CallMissedOutgoingIcon sx={{ marginRight: 2 }} color={"secondary"} />
          <Typography color={"secondary"}>Go to Organization</Typography>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DoDisturbIcon sx={{ marginRight: 2 }} color={"secondary"} />
          <Typography color={"secondary"}>Delete Organization</Typography>
        </MenuItem>
      </Menu>
    );
  }
);
