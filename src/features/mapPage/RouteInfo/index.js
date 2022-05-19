import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAddressEnd, selectAddressStart, selectorRouteInfo } from "../../mapSlice";
import { Wrapper, Paragraph, Div, Input } from "./styled";

export const RouteInfo = () => {
  const { lengthInMeters } = useSelector(selectorRouteInfo);
  const addressStart = useSelector(selectAddressStart);
  const addressEnd = useSelector(selectAddressEnd);
  const distance = (lengthInMeters / 1000).toFixed(2);
  const [pricePerKm, setPricePerKm] = useState(2);

  const onInputChange = (event) => {
    setPricePerKm(event.target.value);
  };

  return (
    <Wrapper>
      <Paragraph>
        From: {addressStart.length > 0 ? addressStart.address.freeformAddress : ""}
      </Paragraph>
      <Paragraph>
        To: {addressEnd.length > 0 ? addressEnd[0].address.freeformAddress : ""}
      </Paragraph>
      <Paragraph>
        Distance: {distance >= 0 ? `${distance} km` : ""}
      </Paragraph>
      <Div>
        <Paragraph>Price per kilometer:</Paragraph>
        <Input
          onChange={onInputChange}
          value={pricePerKm}
        />$
      </Div>
      <Paragraph>
        Price of the Trip: {distance >= 0 ? `${(distance * pricePerKm).toFixed()} $` : ""}
      </Paragraph>
    </Wrapper>
  )
};