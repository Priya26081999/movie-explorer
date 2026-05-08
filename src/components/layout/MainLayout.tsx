import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
