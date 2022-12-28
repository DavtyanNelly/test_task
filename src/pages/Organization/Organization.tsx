import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { OrganizationProps } from "./Organization.props";
import { Box, CircularProgress } from "@mui/material";
import {
  OrganizationCard,
  OrganizationHeader,
  AddAndEditOrganization,
} from "../../components";
import { useGetOrganizationQuery } from "../../redux/apiSlice";
import style from "./Organization.module.scss";

const Organization: FC<OrganizationProps> = ({ ...props }) => {
  const { data: organization = [], isLoading } = useGetOrganizationQuery();

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const handleOpenAdd = useCallback(() => setOpenAdd(true), []);
  const handleCloseAdd = useCallback(() => setOpenAdd(false), []);

  const handleSetFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div {...props}>
      <OrganizationHeader
        onChange={handleSetFilter}
        amount={organization.length}
        onClick={handleOpenAdd}
      />
      {openAdd && (
        <AddAndEditOrganization open={openAdd} onClose={handleCloseAdd} />
      )}
      {isLoading ? (
        <Box className={style.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={style.cards}>
          {organization
            .filter((i) => i.title.toLowerCase().includes(filter.toLowerCase()))
            .map((org) => (
              <div className={style.card} key={org.id}>
                <OrganizationCard organization={org} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Organization;
