import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import "./styles/EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ title, subject, description, time, id }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("./mail");
  };
  return (
    <div className="emailrow" onClick={openMail}>
      <div className="emailrow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title}</h3>
      <div className="emailrow_message">
        <h4>
          {subject}
          {""}
          <span className="emailrow_description">{description}</span>
        </h4>
      </div>
      <p className="emailrow_description">
        <p>{time}</p>
      </p>{" "}
      <div></div>
    </div>
  );
}

export default EmailRow;
