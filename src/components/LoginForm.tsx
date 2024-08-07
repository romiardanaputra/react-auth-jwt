import Button from "./ui/button";
import ButtonVariantEnum from "./ui/button/index.enum";
import CustomInputField from "./ui/input/CustomInputField";

const LoginForm = () => {
  return (
    <>
      <div>
        <form>
          <CustomInputField
            inputType="email"
            placeholder="Email"
            name="email"
          />

          <CustomInputField
            inputType="password"
            placeholder="password"
            name="password"
          />
          <Button variant={ButtonVariantEnum.SOLID} btnText="Login" />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
