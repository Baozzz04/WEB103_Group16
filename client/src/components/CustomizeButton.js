import { primary, secondary } from "../utils/constants";

export default function CustomizeButton({
  className = "",
  text,
  onClick,
  variant = "",
  isSignInWithGoogle = false,
}) {
  const variantStyle =
    variant === "primary" ? primary : variant === "secondary" ? secondary : "";
  const combinedClassName = `${variantStyle} ${className}`;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {isSignInWithGoogle && (
        <img src="/Google.svg" alt="Google logo" className="mr-2 h-6 w-6" />
      )}
      {text}
    </button>
  );
}
