import { Container } from "../../common/Container";
import {
  Wrapper,
  Form,
  Input,
  Button,
  Title
} from "./styled";
import { getApi } from "../../getApi";

export const MainPage = () => {
  const url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=Wroclaw+Gradowa+8";
  console.log(getApi(url));

  return (
    <Wrapper>
      <Container>
        <Title>Main Title</Title>
        <Form>
          <Input type="text" name="start" placeholder="Origin" />
          <Input type="text" name="end" placeholder="Destination" />
          <Button>Calculate Route</Button>
        </Form>
      </Container>
    </Wrapper>
  )
};