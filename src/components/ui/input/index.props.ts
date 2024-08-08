export type CustomInputFieldProps = {
  inputType: string;
  placeholder: string;
  name: string;
  value?: string;
  labelName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
