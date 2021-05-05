import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const typography = {
  headers: {
    sizes: { large: "32px", medium: "24px", small: "18px", xSmall: "16px" },
    fontWeights: { light: 300, normal: "normal", bold: "bold" },
  },
  texts: {
    sizes: {
      xXLarge: "25px",
      xLarge: "20px",
      large: "19px",
      medium: "16px",
      small: "14px",
      xSmall: "10px",
    },
    fontWeights: { light: 300, normal: "normal", bold: 600 },
  },
};

export const zIndexs = {
  allWaysVisable: 9999,
  modal: 100,
  overlays: 99,
  aboveZero: 1,
};

export const mediaSizes = {
  desktopMinSize: "1025px",
  mobileMaxSize: "1024px",
  desktopMinSizeNumber: 1025,
  mobileMaxSizeNumber: 1024,
};

export default createGlobalStyle`
	*,
  	*::after,
  	*::before{
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	html{
		height: 100%;
	}
	
	body {
		margin: 0;
		padding: 0;
		height: 100%;
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: ${typography.texts.sizes.medium};
		color: ${colors.text};
		background-color: ${colors.backgroundGrey};
	}

	#root {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	a { 
		text-decoration: none;
		color: inherit;
	}
`;
