import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput/FormInput";
import {
  setCurrentUser,
  setUserMessage,
} from "../../redux/reducers/User/actions";
import { logger } from "../../redux/reducers/User/querries";
import {
  FormContainer,
  FormFieldContainer,
  LoginButton,
  LoginContainer,
} from "./login.style";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });

  const setCredentials = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await logger(user);
    dispatch(setCurrentUser({ token: response.token, role: response.role }));
    dispatch(setUserMessage(response.message));
  };
  return (
    <main>
      <LoginContainer>
        <h2>Connexion</h2>
        <FormContainer onSubmit={handleSubmit}>
          <FormFieldContainer>
            <FormInput
              type="email"
              name="email"
              label="e-mail"
              value={user.email}
              handleChange={setCredentials}
              required
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <FormInput
              type="password"
              name="password"
              label="mot de passe"
              value={user.password}
              handleChange={setCredentials}
              required
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <LoginButton type="submit">Se Connecter</LoginButton>
          </FormFieldContainer>
        </FormContainer>
      </LoginContainer>
    </main>
  );
};

export default Login;
