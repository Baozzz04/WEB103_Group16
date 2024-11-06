import SignInUpTemplate from "../components/Templates/SignInUpTemplate";

export default function SignIn() {
  return (
    <SignInUpTemplate
      Introduction="Welcome back 👋"
      Description="Log in to connect with your favorite stars and receive personalized video messages."
      AuthType="Sign in"
    />
  );
}
