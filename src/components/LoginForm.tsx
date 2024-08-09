import { useState } from "react";
import Button from "./ui/button";
import ButtonVariantEnum from "./ui/button/index.enum";
import CustomInputField from "./ui/input/CustomInputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // set token
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/login", {
        email,
        password,
      });

      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("authentication fail", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      navigate("/dashboard");
    }
  };
  return (
    <>
      {errorMessage && <p className="text-red-500 text-4xl">{errorMessage}</p>}
      <div className="min-h-screen max-w-md mx-auto  relative ">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Login Form</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInputField
              inputType="email"
              placeholder="Email"
              name="email"
              labelName="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CustomInputField
              inputType="password"
              placeholder="password"
              name="password"
              labelName="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant={ButtonVariantEnum.OUTLINE} btnText="Login Now" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
