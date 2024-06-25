import React from "react";
import { Stack } from "@mui/material";

function Menu({ imgSrc }) {
  return (
    <img
      style={{
        objectFit: "cover",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        color: "white",
        filter: "invert(1)",
      }}
      src={`/assets/${imgSrc}`}
      alt="instagram"
    />
  );
}

function MiniLeftSideBar() {
  return (
    <div
      style={{
        p: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"1em",
        paddingLeft:"1em",
        paddingRight:"1em"
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <div style={{ width: "50px" }}>
          <img
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
            src="/assets/logo.jpg"
            alt="logo"
          />
        </div>

        <Menu imgSrc={"instagram.png"} />
        <Menu imgSrc={"mysql.png"} />
        <Menu imgSrc={"github.png"} />
        <Menu imgSrc={"visual-basic.png"} />
        <Menu imgSrc={"facebook-messenger.png"} />
        <Menu imgSrc={"sketch.png"} />
        <Menu imgSrc={"typescript.png"} />
        <Menu imgSrc={"windows.png"} />
        <Menu imgSrc={"mailchimp.png"} />
        <Menu imgSrc={"napster.png"} />
      </Stack>
    </div>
  );
}

export default MiniLeftSideBar;
