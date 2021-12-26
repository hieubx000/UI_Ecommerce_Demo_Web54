import React from "react";
import { Menu } from "antd";


const { SubMenu } = Menu;

function handleClick(e) {
    
  console.log("click", e);
}

export default function SideBar() {
  return (
    <Menu
      onClick={handleClick}
      mode="vertical"
    //   defaultSelectedKeys={["0"]}
      style={{ height: "100%" }}
    >
      <SubMenu key="sub0" title="ALL PRODUCT">
      </SubMenu>

      <SubMenu key="sub1" title="GAMING GEAR">
        <SubMenu key="sub" title="CHUỘT CHƠI GAME">
            <Menu.Item key="1">CHUỘT GLORIOUS</Menu.Item>
        </SubMenu>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>

      <SubMenu key="sub2" title="BÀN GHẾ">
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title="PC - LINH KIỆN">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title="MÀN HÌNH">
        <Menu.Item key="13">option9</Menu.Item>
        <Menu.Item key="14">option10</Menu.Item>
        <Menu.Item key="15">option11</Menu.Item>
        <Menu.Item key="16">option12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" title="LAPTOP">
        <Menu.Item key="17">option9</Menu.Item>
        <Menu.Item key="18">option10</Menu.Item>
        <Menu.Item key="19">option11</Menu.Item>
        <Menu.Item key="20">option12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub6" title="SMART HOME">
        <Menu.Item key="21">option9</Menu.Item>
        <Menu.Item key="22">option10</Menu.Item>
        <Menu.Item key="23">option11</Menu.Item>
        <Menu.Item key="24">option12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
