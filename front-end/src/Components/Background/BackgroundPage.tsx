import { Box, Button, Fade } from "@mui/material";
import Xarrow, { Xwrapper } from "react-xarrows";
import PictureBox from "./PictureBox";
import childhood from "../../Content/Images/childhood-pic.jpg";
import india from "../../Content/Images/india-pic.jpeg";
import text from "../../Content/Text/BackgroundText.json";
import { useEffect } from "react";

function BackgroundPage() {
  //Used to set the vW CSS variable to the current viewport width. Prevents overflow of X axis
  function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }

  useEffect(() => {
    setVw();
  }, []);
  window.addEventListener("resize", setVw);

  return (
    <div className="background-page">
      <Fade in={true} timeout={2000}>
        <div style={{ display: "flex" }}>
          <Xwrapper>
            <div
              style={{
                flex: 1,
                paddingLeft: "3%",
                paddingTop: "3%",
              }}
            >
              <div id="childhood">
                <PictureBox
                  picture={childhood}
                  cardPreview={text.childhood.preview}
                  cardContent={text.childhood.content}
                />
              </div>
            </div>
            <div
              style={{
                flex: 1,
                paddingLeft: "50%",
                paddingTop: "20%",
              }}
            >
              <div id="india">
                <PictureBox
                  picture={india}
                  cardPreview={text.india.preview}
                  cardContent={text.india.content}
                />
              </div>
            </div>
            {/* TODO: Fix so that arrows do not move when expanding cards */}
            <Xarrow start={"childhood"} end={"india"} />
          </Xwrapper>
        </div>
      </Fade>
    </div>
  );
}

export default BackgroundPage;
