import debounce from "lodash.debounce";
import { useReplaceQueryParameter } from "../queryParameters";
import { StyledForm, Input } from "./styled";

export const Form = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = debounce(({ target }) => {
    replaceQueryParameter({
      value: target.value.trim(),
      key: "search",
    })
  }, 1000);

  const onInputNextChange = debounce(({ target }) => {
    replaceQueryParameter({
      value: target.value.trim(),
      key: "search1",
    })
  }, 1000);

  return (
    <>
      <StyledForm>
        <Input
          onChange={onInputChange}
          type="text"
          name="start"
          placeholder="Origin"
          tabIndex={1}
        />
        <Input
          onChange={onInputNextChange}
          type="text"
          name="end"
          placeholder="Destination"
          tabIndex={2}
        />
      </StyledForm>
    </>
  )
};