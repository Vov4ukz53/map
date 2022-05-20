import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHistory } from "../../mapSlice";
import {
  Wrapper,
  List,
  Item,
  Paragraph,
  Button,
  Title
} from "./styled";

export const History = () => {
  const [hide, setHide] = useState(false);
  const history = useSelector(selectHistory);

  return (
    <>
      <Button disabled={!history.length}
        onClick={() => setHide(!hide)}
      >
        {!hide ? "history show" : "history hide"}
      </Button>
      {
        hide && <Wrapper>
          <Title>History</Title>
          <List >
            {history.map((item, index) => (
              <Item key={index}>
                <Paragraph>From: {item.addressStart}</Paragraph>
                <Paragraph>To: {item.addressEnd}</Paragraph>
                <Paragraph>Distance: {item.distance}</Paragraph>
              </Item>
            ))}
          </List>
        </Wrapper>
      }
    </>
  )
};