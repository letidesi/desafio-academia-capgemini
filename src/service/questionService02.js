validatePassword = () => {
  let user_password = "Ya3";
  const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;

  const result = regexp.test(user_password);

  if (result === false) {
    const use = "&ab";
    let password = user_password + use;
    const use_pass = use.length;
    return use_pass;
  }
};

console.log(validatePassword());
