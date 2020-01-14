import {
  DESKTOP_VIEWPORT_WIDTH
} from "constants/breakpoints";
import {
  TABLET_VIEWPORT_WIDTH,
  PHONE_VIEWPORT_WIDTH,
  SMALLPHONE_VIEWPORT_WIDTH
} from "../constants/breakpoints";

export const devices = {
  desktop: `(max-width: ${DESKTOP_VIEWPORT_WIDTH})`,
  tablet: `(max-width: ${TABLET_VIEWPORT_WIDTH})`,
  phone: `(max-width: ${PHONE_VIEWPORT_WIDTH})`,
  smallphone: `(max-width: ${SMALLPHONE_VIEWPORT_WIDTH})`
};
