export default {
  color: {
    black: "#000",
    white: "#FFF"
  },
  spacing: {
    quarter: 2,
    halve: 4,
    base: 8,
    baseAndAHalf: 12,
    double: 16,
    triple: 24,
    quadruple: 32,
    quintuple: 40
  },
  font: {
    body: "default",
    bodyWeight: 500
  },
  fontSize: 14
};

export interface ITheme {
  color: {
    black: string;
    white: string;
  };
  spacing: {
    quarter: number;
    halve: number;
    base: number;
    baseAndAHalf: number;
    double: number;
    triple: number;
    quadruple: number;
    quintuple: number;
  };
  font: {
    body: string;
    bodyWeight: number;
  };
  fontSize: number;
}
