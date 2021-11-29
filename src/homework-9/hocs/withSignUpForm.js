import {useHistory} from "react-router-dom";
import {auth} from "../api/firebase";
import {useState} from "react";


export const withSignUpForm = (Component) => {
  return (props) => {
    const {push} = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
      setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleLogin = async (e) => {
      console.log(email, password);
      e.preventDefault();

      try {
        await auth.createUserWithEmailAndPassword(email, password);

        push("/profile");
      } catch (e) {
        setError(e);
      }
    };
    return <Component
      {...props}
      handleLogin={handleLogin}
      handlePassChange={handlePassChange}
      handleEmailChange={handleEmailChange}
      email={email}
      password={password}
      error={error}
    />
  }
}
