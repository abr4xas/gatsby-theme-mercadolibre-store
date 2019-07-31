// Note: borderTopColor and borderBottomColor
// don't consume colors with the Theme UI shorthand
import { colors } from "../colors"

export const siteHeader = {
  logoContainer: {
    width: "80px",
    height: "auto",
    marginRight: "40px",
    img: {
      maxWidth: "100%",
    },
  },
  textLogo: {
    fontSize: 2,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  mainNavigation: {
    // Responsive Menu
    order: [1, 0, 0],
    flexGrow: [1, 0, 0],
    flexBasis: ["100%", "auto", "auto"],
    paddingY: [20, 0, 0],
    borderTopColor: [colors.gray[0], "none", "none"],
    borderTopStyle: ["solid", "none", "none"],
    borderTopWidth: [1, 0, 0],
    //
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      li: {
        fontSize: [2, "15px", 1],
        marginRight: "1.5em",
        a: {
          color: "black",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
            color: "brand_02.0",
          },
          "&[aria-current]": {
            borderBottomColor: "inherit",
            borderBottomWidth: 2,
            borderBottomStyle: "solid",
          },
        },
      },
    },
  },
  secondaryNavigation: {
    ul: {
      margin: "0 0 0 auto",
      padding: 0,
      listStyle: "none",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      li: {
        fontSize: [2, "15px", 1],
        marginRight: "1.5em",
        svg: {
          color: "black",
        },
      },
    },
  },
}
