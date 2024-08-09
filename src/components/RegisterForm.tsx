import { useState } from "react";
import Button from "./ui/button";
import ButtonVariantEnum from "./ui/button/index.enum";
import CustomInputField from "./ui/input/CustomInputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.log("register fail", error);
      setMessage(error.response.data.error);
    } finally {
      navigate("/login");
    }
  };
  return (
    <>
      {message && <p className="text-3xl">{message}</p>}
      <div className="min-h-screen max-w-md mx-auto  relative ">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Register Form</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInputField
              inputType="name"
              placeholder="name"
              name="name"
              labelName="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <Button variant={ButtonVariantEnum.OUTLINE} btnText="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
