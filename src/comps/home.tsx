import React, { useEffect, useState } from "react";
import "./home.css";

import Button from "@mui/material/Button";
import { AddCircleOutlined } from "@material-ui/icons";
import Create from "./create";
import { IMeetUp } from "../store/interfacses";

const Home: React.FC = () => {
  const [meetUps, setMeetUps] = useState<Array<IMeetUp>>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <div className="homeContainer">
      <Button
        type="submit"
        onClick={() => setOpenPopup(true)}
        className="logo_plus"
        style={{
          position: "absolute",
          right: "50px",
          top: "130px",
          fontSize: "20px",
        }}
        variant="contained"
        endIcon={<AddCircleOutlined style={{ fontSize: "80px" }} />}
        color="success"
      ></Button>
      <Create openPopup={openPopup} SetopenPopup={setOpenPopup} />
    </div>
  );
};
export default Home;
