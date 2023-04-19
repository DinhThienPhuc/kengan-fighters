import { Avatar, Flex, Text, WrapperButton, WrapperNavbar } from "components";

import styled from "styled-components";

const Styled = {
  Navbar: styled(WrapperNavbar)`
    background-color: transparent;
    box-shadow: none;
    border: none;
  `,
  Box: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #091522b3;
    box-shadow: 0px -4px 16px #000000;
    border-radius: 28px;
    height: 680px;
  `,
  Avatar: styled(Avatar)`
    position: absolute;
    top: -60px;
    left: calc(50% - 60px);
  `,
  Name: styled(Text)`
    margin-top: 80px;
    text-align: center;
  `,
  Epithet: styled(Text)`
    margin-top: 10px;
    text-align: center;
  `,
  ParamGroup: styled(Flex)`
    margin-top: 40px;
  `,
  Param: styled(Flex)`
    width: 110px;
    min-height: 120px;
  `,
  Title: styled(Text)`
    margin-top: 10px;
  `,
  Value: styled(Text)`
    margin-top: 10px;
  `,
  FightingStyle: styled(Text)`
    padding: 5px 0px;
    text-align: center;

    &.first-element {
      margin-top: 30px;
    }
  `,
  ButtonGroup: styled(Flex)`
    width: 100%;
    position: absolute;
    bottom: 140px;
  `,
  DeleteButton: styled(WrapperButton)`
    &.button-variant__outlined {
      color: #ff5858;
      border-color: #ff5858;
    }

    &.button-variant__outlined:hover {
      color: #ff5858;
      border-color: #ff5858;
    }
  `,
  WrapIcon: styled.div`
    margin-right: 8px;
  `,
};

export default Styled;
