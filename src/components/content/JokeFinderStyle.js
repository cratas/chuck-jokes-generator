import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";


const grey = {
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: var(--font-family);
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: #fff;
  border: 3px solid black;
  border-radius: 8px;
  padding: 12px 0 12px 12px;
  margin: 1vw 0;
  width: 100%;

  &:hover {
    background: var(--color-black-light);
    border-color: black;
  }

  &:focus {
    background-color: var(--color-black-light)
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default function UnstyledInputBasic() {
  return (
    <CustomInput aria-label="Demo input" placeholder="Find some joke ..." />
  );
}
