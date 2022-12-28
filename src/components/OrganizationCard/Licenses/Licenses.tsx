import { Tooltip, Typography } from "@mui/material";
import cn from "classnames";
import React, { FC, useState } from "react";
import { LicensesProps } from "./Licenses.props";
import style from "./Licenses.module.scss";

const Licenses: FC<LicensesProps> = ({ assigned, inUse, title, ...props }) => {
  const [currentAssigned, setCurrentAssigned] = useState<number | string>(
    assigned
  );

  return (
    <div className={style.licensesContent} {...props}>
      <h5 className={style.licensesTitle}>{title}</h5>
      <div className={style.licensesItem}>
        <Typography variant={"subtitle2"} mb={1}>
          In use:
        </Typography>
        <Tooltip title="Internal: 840 | External: 405" placement={"top-start"}>
          <Typography
            variant={"subtitle2"}
            className={cn(style.inUse, {
              [style.inUseRed]: inUse > Number(currentAssigned),
            })}
          >
            {inUse}
          </Typography>
        </Tooltip>
      </div>
      <div className={style.licensesItem}>
        <Typography variant={"subtitle2"}>Assigned:</Typography>
        <input
          className={style.currentAssigned}
          value={currentAssigned}
          type="number"
          onChange={(e) => setCurrentAssigned(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Licenses;
