import { theme } from "./palette";

type colorType = "white" | "primary" | "primaryLight" | "primaryDark" | "secondary" | "secondary"

export function getColorPalette(color: string | undefined | colorType): colorType {
  switch (color) {
  case "white": {
    return theme.palette.common.white as colorType;
  }
  case "primary": {
    return theme.palette.primary.main as colorType;
  }
  case "primaryLight": {
    return theme.palette.primary.light as colorType;
  }
  case "primaryDark": {
    return theme.palette.primary.dark as colorType;
  }
  case "secondary": {
    return theme.palette.secondary.main as colorType;
  }
  default: {
    return theme.palette.primary.main as colorType;
  }
  }
}
