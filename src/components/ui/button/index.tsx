import ButtonProps from "./index.props";
import ButtonVariantEnum from "./index.enum";

const Button: React.FC<ButtonProps> = ({ variant, btnText }) => {
  switch (variant) {
    case ButtonVariantEnum.SOLID:
      return (
        <>
          <SolidButton btnText={btnText} />
        </>
      );
      break;
    case ButtonVariantEnum.OUTLINE:
      return (
        <>
          <OutlineButton btnText={btnText} />
        </>
      );
      break;
    default:
      return (
        <>
          <h1>No Button Found</h1>
        </>
      );
      break;
  }
};

const OutlineButton: React.FC<ButtonProps> = ({ btnText }) => {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        {btnText}
      </button>
    </>
  );
};

const SolidButton: React.FC<ButtonProps> = ({ btnText }) => {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
