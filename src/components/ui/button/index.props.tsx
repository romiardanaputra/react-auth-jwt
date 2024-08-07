import ButtonVariantEnum from "./index.enum";

type ButtonProps = {
  btnText: string;
  children?: React.ReactNode;
  variant?: ButtonVariantEnum;
};

export default ButtonProps;
