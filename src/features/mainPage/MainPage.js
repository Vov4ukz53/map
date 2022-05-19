import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../queryParameters";
import { fetchMap, selectError } from "../mapSlice";
import { Container } from "../../common/Container";
import { Form } from "./Form";
import { Error } from "./Error";
import {
  Wrapper,
  Title,
  Link
} from "./styled";

export const MainPage = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");
  const query1 = useQueryParameter("search1");
  const error = useSelector(selectError);

  useEffect(() => {
    query !== null && query1 !== null &&
      dispatch(fetchMap({ query, query1 }));
  }, [dispatch, query, query1]);

  return (
    <Wrapper>
      <Container>
        <Title>Main Title</Title>
        <Form />
        {error ? <Error />
          : query && query1 && !error &&
          <Link to="/map">Show result</Link>
        }
      </Container>
    </Wrapper >
  )
};