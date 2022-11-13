import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const menuList = [{ ref: "/", label: "🏠　홈" }];
// 사이드 메뉴 리스트

const SideMenu = () => {
  return (
    <Side>
      {menuList.map(({ label, ref }) => (
        <Link key={ref} to={ref}>
          <div>
            <MenuButton>{label}</MenuButton>
          </div>
        </Link>
      ))}
    </Side>
  );
};

export default SideMenu;

const Side = styled.div`
  position: fixed;
  padding-top: 30px;
  padding-left: 10px;
  left: 0px;
  width: 250px;
  height: 100%;
  background-color: rgb(48, 48, 48);
  border-right: 1px solid rgb(55, 55, 55);
  /* -ms-overflow-style: none; */
  /* border: solid 1px white; */
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const MenuButton = styled.button`
  height: fit-content;
  font-size: 14px;
  padding: 5px 16px 5px 16px;
  text-align: center;
  width: 100%;
  color: rgb(218, 218, 218);
  background-color: rgb(48, 48, 48);
  cursor: pointer;
  transition-duration: 50ms;
  border: none;
`;
