import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const StyledButton = styled(Button)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create([ 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {    
    transform: scale(1.3);
  }
  `}
`;

export default function TransitionHover(button) {
  return (
    <Stack spacing={2} direction="row">
      <StyledButton>{button}</StyledButton>
    </Stack>
  );
}