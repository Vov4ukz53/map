import { Container } from "../Container";
import { StyledHeader, List, Item, Link } from "./styled";

export const Header = () => (
  <StyledHeader>
    <Container>
      <nav>
        <List>
          <Item>
            <Link to="/main">
              main
            </Link>
          </Item>
          <Item>
            <Link to="/map">
              map
            </Link>
          </Item>
        </List>
      </nav>
    </Container>
  </StyledHeader>
);