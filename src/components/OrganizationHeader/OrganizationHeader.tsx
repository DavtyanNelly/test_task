import React, { FC, memo } from "react";
import style from "./OrganizationHeader.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase } from "@mui/material";
import { OrganizationHeaderProps } from "./OrganizationHeader.props";

export const OrganizationHeader: FC<OrganizationHeaderProps> = memo(
  ({ onChange, onClick, amount, ...props }) => (
    <div className={style.organizationHeader} {...props}>
      <div className={style.content}>
        <h3>{`All Organizations (${amount})`}</h3>
        <div className={style.search}>
          <InputBase
            placeholder="Search organization"
            inputProps={{ "aria-label": "search" }}
            onChange={onChange}
          />
          <SearchIcon color={"secondary"} />
        </div>
      </div>
      <Button
        sx={{ textTransform: "none", boxShadow: "none" }}
        variant="contained"
        onClick={onClick}
      >
        Add New Organization
      </Button>
    </div>
  )
);
