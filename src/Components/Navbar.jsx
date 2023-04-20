import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icon = styled.img``;
const Logo = styled.img`
  height: 100px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li``;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #fc8ae6;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Icons = styled.div``;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/2.png" />
          <List>
            <ListItem>
              <a href="#">Hem</a>
            </ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon></Icon>
          <Button>Prata med mig!</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
