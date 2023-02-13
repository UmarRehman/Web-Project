export const LoginAuth = (state = "", action) => {
  switch (action.type) {
    case "USERLOGIN":
      return (state = action.payload.user);

    default:
      return state;
  }
};
