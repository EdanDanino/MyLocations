import colors from "./colors";
import { mediaSizes, typography, zIndexs } from "./GlobalStyles";

export type Colors = typeof colors;
type Typography = typeof typography;
type MediaSizes = typeof mediaSizes;
type ZIndexs = typeof zIndexs;

export interface ITheme {
  colors: Colors;
  typography: Typography;
  mediaSizes: MediaSizes;
  zIndexs: ZIndexs;
}

const theme: ITheme = {
  colors,
  typography,
  mediaSizes,
  zIndexs,
};

const exportedTheme = { ...theme };

export default exportedTheme;
