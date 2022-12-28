import React, { FC, FunctionComponent } from "react";
import style from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import { Container } from "@mui/material";

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className={style.wrapper} {...props}>
      <Container className={style.container}>{children}</Container>
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );
