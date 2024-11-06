export const fields = [
  { label: "Category", type: "select", stateKey: "category" },
  { label: "Date", type: "date", stateKey: "date" },
  { label: "Name of Transaction", type: "text", stateKey: "name" },
  { label: "Type of Transaction", type: "select", stateKey: "type" },
  { label: "Amount", type: "amount", stateKey: "amount" },
  { label: "Transaction Purpose", type: "text", stateKey: "purpose" },
];

export const categoryOptions = [
  {
    value: "Food & Drinks",
    label: "Food & Drinks",
  },
  {
    value: "Bills & Payments",
    label: "Bills & Payments",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
  { value: "Others", label: "Others" },
];

export const typeOptions = [
  { value: "Income", label: "Income" },
  { value: "Expense", label: "Expense" },
];

export const errorMessageMissingCredentials =
  "Please provide both an email address and password.";
export const errorMessageMissingCredentialsEmailOnly =
  "Please provide an email address to recover your password.";
export const errorMessageNonExistAccount =
  "The email you entered is not associated with an account. Please check your email or sign up for a new account.";
export const errorMessageInvalidPassword =
  "The password you entered is not correct. Please enter a valid password to sign in.";
export const errorMessageInvalidPasswordCharacter =
  "Your password must include at least one number, one character, one special character.";
export const errorMessagePasswordLength =
  "Your password must be at least 10 characters long.";
export const errorMessageTooManyAttempts =
  "Too many failed sign in attempts. Please try again after 15 minutes.";
export const errorMessageInvalidEmail =
  "The email you entered is not correct. Please enter a valid email to sign in.";
export const errorMessageEmailExist =
  "The email you entered is already in use. Please enter a another email to sign up.";
export const errorMessageDefault = "Error occurred. Please try again later.";
export const errorMessageAddEditTransaction =
  "Please provide an option to this field above to add or edit a transaction.";

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;

export const primary =
  "h-12 w-full bg-[#0B0606] border border-[#0B0606] rounded-2xl text-white text-md transition-transform duration-300 ease-in-out active:scale-75";
export const secondary =
  "h-12 w-full bg-[#0B0606] border border-[#0B0606] rounded-2xl text-white text-md transition-transform duration-300 ease-in-out active:scale-75 flex items-center justify-center";

export const baseURL =
  "https://expense-tracker-ten-peach.vercel.app/api/transaction/";

// export const baseURL = "http://localhost:2000/api/transaction/";
export const previewTransaction = [{ preview: true }];

export const currentDate = new Date();
export const currentDay = currentDate.getDay();
export const currentMonth = currentDate.getMonth();
export const currentYear = currentDate.getFullYear();
