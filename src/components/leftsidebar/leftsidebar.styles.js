import { styled, Box } from "@mui/material";

export const LeftSideBarContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
`;

export const ListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-size: 0.8rem;
`;

export const ListItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
