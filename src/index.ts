const defaultOptions = {
  offsetLeft: 2,
  offsetRight: 2,
  replaceBy: "*",
};

export interface IOptions {
  replaceBy?: string;
  offsetLeft?: number;
  offsetRight?: number;
}

export default function (value: string, options?: IOptions) {
  const opt = { ...defaultOptions, ...options };
  const regex = new RegExp(
    "(?<=\\w{" + opt.offsetLeft + "})\\w(?=\\w{" + opt.offsetRight + "})",
    "g"
  );
  return value.replace(regex, opt.replaceBy);
}
