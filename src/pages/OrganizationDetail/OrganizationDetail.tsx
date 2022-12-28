import React, { FC } from "react";
import { OrganizationDetailProps } from "./OrganizationDetail.props";
import { Box, Button, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import style from "./OrganizationDetail.module.scss";
import { useGetOrganizationDetailQuery } from "../../redux/apiSlice";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

const OrganizationDetail: FC<OrganizationDetailProps> = ({ ...props }) => {
  const navigate = useNavigate();
  const { idOrganization } = useParams();

  const {
    data: detail = {
      image: "",
      title: "",
    },
    isLoading,
  } = useGetOrganizationDetailQuery({ id: idOrganization });

  return (
    <div {...props}>
      {isLoading ? (
        <Box className={style.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Button startIcon={<ReplyAllIcon />} onClick={() => navigate("/")}>
            back
          </Button>
          <Box className={style.detail}>
            <img
              src={detail?.image}
              alt={"img_org"}
              width={200}
              height={"auto"}
            />
            <h2>{detail.title}</h2>
          </Box>
        </>
      )}
    </div>
  );
};

export default OrganizationDetail;
