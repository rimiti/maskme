const defaultOptions = {
  replaceBy: "*",
  numberOfChars: 4,
};

export interface Options {
  replaceBy?: string,
  numberOfChars?: number,
}

export default function (value: string, options?: Options) {
  const opt = {...defaultOptions, ...options};
  const regex = new RegExp("(?<=\\w{" + opt.numberOfChars + "})\\w(?=\\w{" + opt.numberOfChars + "})", "g");
  return value.replace(regex, opt.replaceBy);
};
