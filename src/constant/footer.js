import { visa } from '../utils/visa';
import { masterCard } from '../utils/mastercard';
import { applePay } from '../utils/applePay';
export const paymentMethod = [
    {
        id: 1,
        name: "Visa",
        link: "https://vise.com",
        svg: visa
    },
    {
        id: 2,
        name: "Master card",
        link: "https://www.mastercard.us/en-us.html",
        svg: masterCard
    },
    {
        id: 3,
        name: "Apple pay",
        link: "https://www.apple.com/apple-pay/",
        svg: applePay
    },
]
export const footerLinks = [
    {
        id: 1,
        name: "Términos y condiciones",
        link: "/"
    },
    {
        id: 2,
        name: "Privacidad",
        link: "/"
    }
]