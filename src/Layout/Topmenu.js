import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
//import { useAuth } from "../Context/auth/auth";
const Wrapper = styled.header`
  /* 레이아웃 */
  align-item: center;
  padding: 30px;
  text-align: center;

  /* 색상 */
  background: #2f2f2f;
  color: #ececec;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  /* 폰트 */
  font-size: 2.5rem;
`;

const TopMenu = () => {
  //const auth = useAuth();
  //const { user } = auth;
  const navigate = useNavigate();
  // const onClick = () => {
  //  navigate("/payment");
  // };
  return <Wrapper>It's header</Wrapper>;
};

export default TopMenu;
