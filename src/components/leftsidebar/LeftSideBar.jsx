import { useState } from "react";
import {
  LeftSideBarContainer,
  ListContainer,
  ListItemContainer,
} from "./leftsidebar.styles";
import "./leftSideBar.css";
import { leftSideBarMenus } from "./leftSideBarMenus";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@mui/material";
import { blue, pink } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

function List({ title, items, isOpen, id, handleIconClick }) {
  return (
    <ListContainer>
      <ListItemContainer>
        <h3
          style={{ fontWeight: "bold", marginBottom: "1em" }}
          className="list-text"
        >
          {title}
        </h3>
        <img
          width={"18px"}
          style={{
            marginBottom: "1em",
            filter:
              "invert(29%) sepia(81%) saturate(6447%) hue-rotate(186deg) brightness(102%) contrast(104%)",
          }}
          onClick={() => handleIconClick(id)}
          src="/assets/plus-icon.jpg"
          alt="plus-icon"
        />
      </ListItemContainer>

      {!!isOpen && (
        <div className={`flex`}>
          {items.map((item) => {
            return (
              <p style={{ fontWeight: "400", lineHeight: "23px" }} key={item}>
                {item}
              </p>
            );
          })}
        </div>
      )}
    </ListContainer>
  );
}

function LeftSideBar() {
  const [menus, setMenus] = useState(leftSideBarMenus);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleIconClick = (listId) => {
    const foundList = menus.find((menu) => menu.id === listId);

    if (foundList) {
      setMenus((prevMenus) => {
        return prevMenus.map((menu) => {
          return menu.id === foundList.id
            ? { ...menu, open: true }
            : { ...menu, open: false };
        });
      });
    }
  };

  return (
    <>
      <div>
        <LeftSideBarContainer>
            <h3 style={{margin:".5em",fontWeight:"bold",marginTop:"0",marginBottom:"1em"}}>Project Name</h3>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
            fullWidth
            size="small"
            sx={{width:"100%",marginBottom:"1em"}}
              id="outlined-adornment-amount"
              placeholder="search"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{color:blue['700']}} />
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
          <Box sx={{ position: "absolute", top: "-50px", right: "-25px" }}>
            {!isSidebarOpen ? (
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: blue["700"],
                  ":hover": { cursor: "pointer" },
                }}
              >
                <KeyboardArrowRightIcon
                  fontSize="small"
                  onClick={() => setIsSidebarOpen(true)}
                />
              </Avatar>
            ) : (
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: blue["700"],
                  ":hover": { cursor: "pointer" },
                }}
              >
                <KeyboardArrowLeftIcon
                  fontSize="small"
                  onClick={() => setIsSidebarOpen(false)}
                />
              </Avatar>
            )}
          </Box>
          {isSidebarOpen &&
            menus.map((leftMenu) => {
              return (
                <List
                  id={leftMenu.id}
                  title={leftMenu.title}
                  isOpen={leftMenu.open}
                  items={leftMenu.items}
                  handleIconClick={handleIconClick}
                />
              );
            })}
        </LeftSideBarContainer>
      </div>
    </>
  );
}

export default LeftSideBar;
