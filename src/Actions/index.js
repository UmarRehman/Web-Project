export const addItemtoList = (Pack, PriceChange, data) => {
  return {
    type: "IncrementItem",
    payload: {
      Price: PriceChange,
      Pack: Pack,
      data: data,
    },
  };
};

export const LoginAuth = (user) => {
  return {
    type: "USERLOGIN",
    payload: {
      user: user,
    },
  };
};
export const RemoveItemtoList = () => {
  return {
    type: "DecreamentItem",
  };
};
