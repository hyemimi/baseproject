import React, { useEffect, useState } from "react";
import TopMenu from "./Topmenu";
import SideMenu from "./Sidemenu";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <TopMenu />
      <MainContainer>
        <SideMenu />
        <MainContent>
          <Outlet /> {/* Route의 내용들이 여기에 */}
        </MainContent>
      </MainContainer>
    </div>
  );
};

export default Layout;

const MainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #2f2f2f;
`;
const MainContent = styled.main`
  background-color: #ececec;
  width: 100%;
  min-width: 1080px;
  min-height: 100vh;
  height: fit-content;
  padding: 40px 40px 40px 280px;
`;
