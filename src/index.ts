const defaultOptions = {
  replaceBy: "*",
  type: "middle",
  numberOfChars: 4,
};

export interface Options {
  replaceBy?: string,
  type?: Type,
  numberOfChars?: number,
}

export enum Type {
  middle = "middle",
  end = "end",
  start = "start",
}

export default function (value: string, options?: Options) {
  const opt = {...defaultOptions, ...options};

  let regex: RegExp;
  if (opt.type === Type.middle) {
    regex = new RegExp("(?<=\\w{"+ opt.numberOfChars + "})\\w(?=\\w{" + opt.numberOfChars + "})", "g");
  } else if (opt.type === Type.start) {
    regex = new RegExp("\\w(?=\\w{" + opt.numberOfChars + "})", "g");
  } else if (opt.type === Type.end) {
    regex = new RegExp("(?<=\\w{" + opt.numberOfChars + "})\\w", "g");
  } else {
    throw new TypeError(`Unknown type "${opt.type}" (available types: ${Type})`)
  }
  return value.replace(regex, opt.replaceBy);
};
