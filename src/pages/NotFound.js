import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div id="error-page">
      <Button id="btn" onClick={handleClick}>
        &#128542; Take me Back &#128542;
      </Button>
    </div>
  );
}

export default NotFound;
