import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

const CustomButton = styled(ButtonUnstyled)`
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--color-brown);
  padding: 12px 24px;
  border-radius: 10px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: 3px solid black;

  &:hover {
    background-color: var(--color-black-light);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function MyButton(props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      onClick={props.onClick}
      text={props.text}
      style={{ marginTop: props.marginTop }}
    >
      <CustomButton disabled={props.disabled}>{props.text}</CustomButton>
    </Stack>
  );
}
