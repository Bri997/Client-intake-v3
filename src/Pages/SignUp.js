// https://janhesters.com/email-only-sign-up-with-aws-amplify/
// https://egghead.io/lessons/react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow
// https://medium.com/@pandeysoni/how-to-setup-customize-amplify-authentication-ui-using-hooks-36442f5fdc
import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignUp = (props) => {
  const { authState, onStateChange } = props;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    code: "",
  });

  const handleInputChange = (e) => {
    const { value, dataset } = e.target;
    const { prop } = dataset;
    setFormData({
      ...formData,
      [prop]: value,
    });
  };

  const signInClick = async () => {
    try {
      await Auth.signIn(formData.username, formData.password);
      onStateChange(authState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
};

export default SignUp;
