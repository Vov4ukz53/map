import { useLocation, useNavigate } from "react-router";
import { StyledForm, Input, Button } from "./styled";

export const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };

  const onInputNextChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search1");
    } else {
      searchParams.set("search1", target.value);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  };

  return (
    <StyledForm>
      <Input
        onChange={onInputChange}
        type="text"
        name="start"
        placeholder="Origin"
      />
      <Input
        onChange={onInputNextChange}
        type="text"
        name="end"
        placeholder="Destination" />
      <Button>Calculate Route</Button>
    </StyledForm>
  )
}