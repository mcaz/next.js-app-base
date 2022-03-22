export const formConfig = {
  formats: {
    email:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
    url: /^https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+$/,
    phone: /^0\d{9,10}$/,
    smartPhone: /^(050|070|080|090)\d{8}$/,
  },
} as const;

export default formConfig;
