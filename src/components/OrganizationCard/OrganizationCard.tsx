import React, { FC, useCallback, useState } from "react";
import { OrganizationCardProps } from "./OrganizationCard.props";
import style from "./OrganizationCard.module.scss";
import { Card, CardMedia, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Licenses from "./Licenses/Licenses";
import { AddAndEditOrganization, OrganizationMenu } from "../../components";

export const OrganizationCard: FC<OrganizationCardProps> = ({
  organization,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = useCallback(() => setAnchorEl(null), []);
  const handleCloseEdit = useCallback(() => setOpenEdit(false), []);
  const handleOpenEdit = useCallback(() => {
    setOpenEdit(true);
    handleClose();
  }, []);

  return (
    <Card
      sx={{ boxShadow: "none", border: "1px solid #e7e7e7", padding: 2 }}
      {...props}
    >
      <AddAndEditOrganization
        open={openEdit}
        onClose={handleCloseEdit}
        organization={organization}
      />
      <div className={style.cardHeader}>
        <div className={style.avatar}>
          <CardMedia
            component="img"
            sx={{ height: 30, width: "auto", borderRadius: "30%" }}
            image={organization.image}
            alt="Live from space album cover"
          />
          <h3>{organization.title}</h3>
        </div>
        <IconButton
          sx={{ padding: 0 }}
          aria-label="settings"
          onClick={handleOpenMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <OrganizationMenu
          anchorEl={anchorEl}
          open={!!anchorEl}
          openEdit={handleOpenEdit}
          onClose={handleClose}
          organizationId={organization.id}
        />
      </div>
      <div className={style.content}>
        <h4>Licenses</h4>
        <div className={style.licenses}>
          {organization.licenses.map((licenses) => (
            <Licenses
              inUse={licenses.inUse}
              assigned={licenses.assigned}
              title={licenses.title}
              key={licenses.id}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
