import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = style({
  backgroundColor: "red",

  selectors: {
    "&:hover": {
      backgroundColor: "green",
    },
  },
});

export const buttonRecipe = recipe({
  base: {},
  variants: {
    color: {
      neutral: {
        color: "white" ,
        backgroundColor: "red",

        selectors: {
          "&:hover": {
            backgroundColor: "green",
          },
        },
      },
      login: { background: "#2bc48a", color: "white"},
     logout: { background: "slateblue" },
     cancel: {background: 'gray'}
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16, fontSize: 15, fontWeight: 600, textTransform: "uppercase" },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: '8px', borderColor: 'transparent' },
    },
  },
});
