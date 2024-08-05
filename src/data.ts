import type { IFood } from "./types/food";

// Importing images
import waffleImage from "./assets/images/image-waffle-desktop.jpg";
import cremeBruleeImage from "./assets/images/image-creme-brulee-desktop.jpg";
import macaronImage from "./assets/images/image-macaron-desktop.jpg";
import tiramisuImage from "./assets/images/image-tiramisu-desktop.jpg";
import baklavaImage from "./assets/images/image-baklava-desktop.jpg";
import meringueImage from "./assets/images/image-meringue-desktop.jpg";
import cakeImage from "./assets/images/image-cake-desktop.jpg";
import brownieImage from "./assets/images/image-brownie-desktop.jpg";
import pannaCottaImage from "./assets/images/image-panna-cotta-desktop.jpg";

export const data: IFood[] = [
    {
        image: {
            "desktop": waffleImage
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
        image: {
            "desktop": cremeBruleeImage
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    {
        image: {
            "desktop": macaronImage
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
    },
    {
        image: {
            "desktop": tiramisuImage
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
    },
    {
        image: {
            "desktop": baklavaImage
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
    },
    {
        image: {
            "desktop": meringueImage
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
    },
    {
        image: {
            "desktop": cakeImage
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
    },
    {
        image: {
            "desktop": brownieImage
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
    },
    {
        image: {
            "desktop": pannaCottaImage
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
    }
];
