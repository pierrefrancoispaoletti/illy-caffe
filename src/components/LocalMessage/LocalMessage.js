import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserMessage } from "../../redux/reducers/User/actions";
import { selectMessage } from "../../redux/reducers/User/selector";
import {
  LocalMessageContainer,
  LocalMessageWrapper,
} from "./local-message.style";

const LocalMessage = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    if (visible) {
      setTimeout(() => {
        setVisible(false);
        dispatch(setUserMessage(""));
      }, 3000);
    }
  }, [message, dispatch]);
  return (
    message && (
      <LocalMessageContainer visible>
        <LocalMessageWrapper>
          <span>{message}</span>
        </LocalMessageWrapper>
      </LocalMessageContainer>
    )
  );
};

export default LocalMessage;
