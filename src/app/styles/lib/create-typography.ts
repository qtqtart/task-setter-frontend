import { TypographyOptions } from "@mui/material/styles/createTypography";

export const createTypography = () => {
  const typography: TypographyOptions = {
    fontFamily: "Roboto, sans-serif",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    button: {
      fontSize: "14px",
      fontWeight: "bold",
      letterSpacing: "0.1px",
      lineHeight: "20px",
      textTransform: "capitalize",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "normal",
      letterSpacing: "0.5px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "normal",
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    subtitle1: {
      fontSize: "22px",
      fontWeight: "bold",
      lineHeight: "28px",
      textTransform: "capitalize",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "bold",
      letterSpacing: "0.15px",
      lineHeight: "24px",
      textTransform: "capitalize",
    },
    h1: {
      fontSize: "56px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "64px",
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "52px",
      textTransform: "capitalize",
    },
    h3: {
      fontSize: "36px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "44px",
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "40px",
      textTransform: "capitalize",
    },
    h5: {
      fontSize: "28px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "36px",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "24px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "32px",
      textTransform: "capitalize",
    },
  };

  return typography;
};
