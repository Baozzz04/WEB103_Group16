import { passwordRegex } from "./constants";

export default function passchecker(password, email) {
  switch (true) {
    case !password || !email:
      return "missing-all-credentials";
    case password.length < 10:
      return "password-length-too-short";
    case !passwordRegex.test(password):
      return "password-character-wrong";
    default:
      return "empty";
  }
}
