import { useState } from "react";
import { Wrapper, List, Item, Paragraph, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectHistory } from "../../mapSlice";

export const History = () => {
  const [hide, setHide] = useState(false);
  const history = useSelector(selectHistory);

  return (
    <>
      <Button
        onClick={() => setHide(!hide)}
      >
        {!hide ? "history show" : "history hide"}
      </Button>
      {
        hide && <Wrapper>
          <h2>History</h2>
          {history.map((item, index) => (
            <List key={index}>
              <Item>
                <Paragraph>From: {item.addressStart}</Paragraph>
                <Paragraph>To: {item.addressEnd}</Paragraph>
                <Paragraph>Distance: {item.distance}</Paragraph>
              </Item>
            </List>
          ))}
        </Wrapper>
      }
    </>
  )
};