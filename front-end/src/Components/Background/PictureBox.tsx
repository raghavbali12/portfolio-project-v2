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
        <Box
          id={props.id}
          component="img"
          alt="Childhood picture."
          src={props.picture}
          sx={{
            height: "70%",
            width: "100%",
            objectFit: "cover",
          }}
        />
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
