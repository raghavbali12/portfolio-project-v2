import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { useXarrow } from "react-xarrows";
import { callPeriodically } from "../../HelperFunctions/callPeriodically";

function PictureBox(props: {
  id: string;
  picture: any;
  cardPreview: string;
  cardContent: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const updateXarrow = useXarrow();

  const handleClick = async () => {
    setExpanded(!expanded);
    callPeriodically(updateXarrow, 100, 10);
  };

  return (
    <div>
      <Box className="picture-box">
        <Box id={props.id} component="img" alt={props.id} src={props.picture} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "500px",
            backgroundColor: "transparent",
          }}
        >
          <Box
            id={props.id + "Top"}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "2%",
              backgroundColor: "transparent",
            }}
          />
          <Box
            id={props.id + "Bottom"}
            sx={{
              position: "absolute",
              top: "55%",
              left: 0,
              width: "100%",
              height: "2%",
              backgroundColor: "transparent",
            }}
          />
        </Box>
        <Card
          sx={{
            height: "auto",
            width: "100%",
          }}
        >
          <CardContent>{props.cardPreview}</CardContent>
          <Collapse in={expanded} timeout={1000} unmountOnExit>
            <CardContent>{props.cardContent}</CardContent>
          </Collapse>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={handleClick}>
              {!expanded ? "Read More" : "Collapse"}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default PictureBox;
