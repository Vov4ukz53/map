import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../queryParameters";
import { fetchMap, selectError } from "../mapSlice";
import { Container } from "../../common/Container";
import { Form } from "./Form";
import { Error } from "./Error";
import { History } from "./History";
import { addHistory } from "../mapSlice";
import {
  selectAddressStart,
  selectAddressEnd,
  selectorRouteInfo
} from "../mapSlice";
import {
  Wrapper,
  Title,
  Link,
} from "./styled";

export const MainPage = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");
  const query1 = useQueryParameter("search1");
  const error = useSelector(selectError);
  const { address } = useSelector(selectAddressStart);
  const addressEnd = useSelector(selectAddressEnd);
  const { lengthInMeters } = useSelector(selectorRouteInfo);
  const distance = (lengthInMeters / 1000).toFixed(2);

  useEffect(() => {
    query !== null && query1 !== null &&
      dispatch(fetchMap({ query, query1 }));
  }, [dispatch, query, query1]);

  const onLinkClick = () => {
    dispatch(addHistory({
      addressStart: address.freeformAddress,
      addressEnd: addressEnd[0].address.freeformAddress,
      distance: `${distance} km`,
    }))
  };

  return (
    <Wrapper>
      <Container>
        <Title>Сhoose a trip</Title>
        <Form />
        {error ? <Error />
          : query && query1 && !error &&
          <Link onClick={onLinkClick} to="/map">Show result</Link>
        }
        <History />
      </Container>
    </Wrapper >
  )
};