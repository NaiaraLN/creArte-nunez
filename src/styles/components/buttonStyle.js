import { whiten } from "@chakra-ui/theme-tools";
import {darken} from "@chakra-ui/theme-tools"

export const ButtonStyle = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        secondary: {
            bg: "secondary",
            color: "white",
            _hover: {
                bg: whiten("secondary", 20),
                boxShadow: "lg",
            }
        },
        third: {
            bg: "third",
            color: "black",
            _hover: {
                bg: darken("third", 10),
                transform: "scale(1.02)",
                boxShadow: "lg",
            }
        },
    },
    // The default `size` or `variant` values
    defaultProps: {},
}