import { extendTheme } from '@chakra-ui/react'
import { ButtonStyle as Button} from './components/buttonStyle';
import "@fontsource/heebo"

const CustomTheme = extendTheme({
    colors: {
        primary: "rgba(224,239,241,0.55)",
        secondary: "#680148",
        third: "#7DB4B5"
    },
    fonts: {
        heading: "Heebo",
        body: "Heebo"
    },
    components: {
        Button, 
    }
});

export {CustomTheme}