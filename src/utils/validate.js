export const checkValidateData = (email, password, name) => {
  const isEmailVaild = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name) {
    const isValidName =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
        name
      );
    if (!isValidName) return "Name is not valid (ex: Divyanshu Rawat)";
  }

  if (!isEmailVaild) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not vaild 'Aa#1' ";

  return null;
};
