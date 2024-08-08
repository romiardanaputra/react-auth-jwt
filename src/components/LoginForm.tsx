import Button from "./ui/button";
import ButtonVariantEnum from "./ui/button/index.enum";
import CustomInputField from "./ui/input/CustomInputField";

const LoginForm = () => {
  return (
    <>
      <div className="min-h-screen max-w-md mx-auto  relative ">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Login Form</h1>
          </div>
          <form action="" className="space-y-4">
            <CustomInputField
              inputType="email"
              placeholder="Email"
              name="email"
              labelName="Email Address"
            />

            <CustomInputField
              inputType="password"
              placeholder="password"
              name="password"
              labelName="Password"
            />
            <Button variant={ButtonVariantEnum.OUTLINE} btnText="Login Now" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
