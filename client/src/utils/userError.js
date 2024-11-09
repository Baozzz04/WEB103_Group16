import {
  errorMessageDefault,
  errorMessageEmailExist,
  errorMessageInvalidEmail,
  errorMessageInvalidPassword,
  errorMessageInvalidPasswordCharacter,
  errorMessageMissingCredentials,
  errorMessageMissingCredentialsEmailOnly,
  errorMessagePasswordLength,
  errorMessageTooManyAttempts,
} from "./constants";

export default function userError(error) {
  switch (error) {
    case "missing-all-credentials":
      return errorMessageMissingCredentials;
    case "auth/invalid-email":
      return errorMessageInvalidEmail;
    case "auth/invalid-credential":
      return errorMessageInvalidPassword;
    case "auth/too-many-requests":
      return errorMessageTooManyAttempts;
    case "password-length-too-short":
      return errorMessagePasswordLength;
    case "password-character-wrong":
      return errorMessageInvalidPasswordCharacter;
    case "auth/email-already-in-use":
      return errorMessageEmailExist;
    case "auth/missing-email":
      return errorMessageMissingCredentialsEmailOnly;
    default:
      return errorMessageDefault;
  }
}
