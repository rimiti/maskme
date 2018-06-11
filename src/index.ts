const defaultOptions = {
  replaceBy: "*",
  type: "default",
  numberOfChars: 4,
};

export default function (value: string, options: Object = {}) {
  const opt = {...defaultOptions, ...options};
  let regex = new RegExp("(?<=\\d{" + opt.numberOfChars + "})\\d(?=\\d{" + opt.numberOfChars + "})", "g");
  return value.replace(regex, opt.replaceBy);
};
