import Style from "./Button.module.css";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { IconButton } from "@mui/material";

export default function ButtonComponent({ children }) {
  return (
    <IconButton >
      <FeedbackIcon sx={{color:"#FFFFFF", fontSize:"2rem" }}/>
    </IconButton>
  );
}
