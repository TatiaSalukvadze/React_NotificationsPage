import React from "react";
import styled, { css } from "styled-components";

function Header({ ar, setar }) {
  const unseen = ar.filter((el) => !el.seen);
  function mark() {
    const newArray = ar.map((obj) => ({
      ...obj,
      seen: true,
    }));
    console.log("he");
    setar(newArray);
    // for (let el of unseen) {
    //   el.seen = true;
  }

  return (
    <Wrapper>
      <Logo>
        <h1>Notifications</h1>
        <Notnum>{unseen.length}</Notnum>
      </Logo>
      <Button onClick={() => mark()}>Mark all as read</Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  margin-bottom: 24px;
  ${(props) =>
    props.mobile &&
    css`
      @media (min-width: 800px) {
        padding-top: 6px;
        margin-bottom: 33px;
      }
    `}
`;
const Logo = styled.div`
  display: flex;
  gap: 9px;
  h1 {
    color: #1c202b;
    font-size: 20px;
    font-weight: 800;
  }
  ${(props) =>
    props.mobile &&
    css`
      @media (min-width: 800px) {
        gap: 11px;
        h1 {
          font-size: 24px;
        }
      }
    `}
`;
const Notnum = styled.div`
  width: 32px;
  height: 25px;
  border-radius: 6px;
  background: #0a327b;
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  all: unset;
  background: none;
  border: none;
  color: #5e6778;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;
export default Header;
