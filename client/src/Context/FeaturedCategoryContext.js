import { createContext } from "react";

import menFashion from '../asset/Products/cloth/men/men-1.jpeg'
import womenFashion from '../asset/Products/cloth/women/women-1.jpeg'
import kidsFashion from '../asset/Products/cloth/kids/kids-2.jpeg'

export const FeatureCategoryContext = createContext([
    {
        name: "Lost items",
        image: menFashion,
        url: '/category/men',
        id: 1
    },
    {
        name: "Lost items",
        image: womenFashion,
        url: '/category/women',
        id: 2
    },
    {
        name: "Lost items",
        image: kidsFashion,
        url: '/category/kids',
        id: 3
    }
])