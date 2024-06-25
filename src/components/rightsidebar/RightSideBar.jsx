import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Draggable from "react-draggable";
import ButtonGroupAction from "./ButtonGroupAction";
import TabIcon from "@mui/icons-material/Tab";
import { blue } from "@mui/material/colors";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NorthIcon from "@mui/icons-material/North";

function RightSideBar() {
  const handleStart = () => {};

  const handleDrag = () => {};

  const handleStop = () => {};

  return (
    <>
      <ButtonGroupAction />
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Tabs</InputLabel>
              <OutlinedInput
                size="small"
                placeholder="Tabs"
                sx={{ width: "100%" }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <TabIcon sx={{ color: blue["700"] }} fontSize="small" />
                  </InputAdornment>
                }
                label="Tabs"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Row</InputLabel>
              <OutlinedInput
                size="small"
                placeholder="Row"
                sx={{ width: "100%" }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <ArrowRightAltIcon
                      sx={{ color: blue["700"] }}
                      fontSize="small"
                    />
                  </InputAdornment>
                }
                label="Row"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Column
              </InputLabel>
              <OutlinedInput
                placeholder="Column"
                sx={{ width: "100%" }}
                size="small"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <NorthIcon sx={{ color: blue["700"] }} fontSize="small" />
                  </InputAdornment>
                }
                label="Column"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Column
              </InputLabel>
              <OutlinedInput
                placeholder="Column"
                sx={{ width: "100%" }}
                size="small"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <NorthIcon sx={{ color: blue["700"] }} fontSize="small" />
                  </InputAdornment>
                }
                label="Column"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Column
              </InputLabel>
              <OutlinedInput
                placeholder="Column"
                sx={{ width: "100%" }}
                size="small"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <NorthIcon sx={{ color: blue["700"] }} fontSize="small" />
                  </InputAdornment>
                }
                label="Column"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="handle">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Column
              </InputLabel>
              <OutlinedInput
                placeholder="Column"
                sx={{ width: "100%" }}
                size="small"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <NorthIcon sx={{ color: blue["700"] }} fontSize="small" />
                  </InputAdornment>
                }
                label="Column"
              />
            </FormControl>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default RightSideBar;
