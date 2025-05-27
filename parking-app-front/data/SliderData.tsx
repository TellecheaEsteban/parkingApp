import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const SliderData: ImageSliderType[] = [
    {
        image: require('../assets/images/cars.jpg'),
        title: 'Bienvenido',
        description: 'Bienvenido a la app de parking',
    },
    {
        image: require('../assets/images/cars.jpg'),
        title: 'Bienvenido',
        description: 'Bienvenido a la app de parking',
    },
    {
        image: require('../assets/images/cars.jpg'),
        title: 'Bienvenido',
        description: 'Bienvenido a la app de parking',
    },
]   