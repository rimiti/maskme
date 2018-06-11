const defaultOptions = {
  replaceBy: "*",
  offsetLeft: 2,
  offsetRight: 2,
};

export interface Options {
  replaceBy?: string,
  offsetLeft?: number,
  offsetRight?: number,
}

export default function (value: string, options?: Options) {
  const opt = {...defaultOptions, ...options};
  const regex = new RegExp("(?<=\\w{" + opt.offsetLeft + "})\\w(?=\\w{" + opt.offsetRight + "})", "g");
  return value.replace(regex, opt.replaceBy);
};
