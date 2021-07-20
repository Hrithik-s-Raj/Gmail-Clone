import React from "react";
import "./styles/SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formdata) => {
    console.log(formdata);

    db.collection("emails").add({
      to: formdata.to,
      suject: formdata.subject,
      message: formdata.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendmail">
      <div className="sendmail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendmail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />

        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />

        <input
          placeholder="Message"
          className="sendmail_message"
          type="text"
          {...register("message", { required: true })}
        />

        <div className="sendmail_options">
          <Button
            className="sendmail_send"
            varient="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
