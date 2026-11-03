import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import './Main.css'
import Cart from '../../Icons/Cart.png'
import Wishlist from '../../Icons/Wishlist.png'
import Filter from '../../Icons/filter.png'

export default function Main() {

    const [ps] = useState([


        // NATIONAL JERSEYS
        {
            id: 1,
            name: "Portugal Away Shirt World Cup 2026 Ronaldo 7",
            player: "Cristiano_Ronaldo",
            category: "jersey",
            jersey_type: "national",
            team: "Portugal",
            price: 7999,
            price_tag: "7,999",
            brand: "Puma",
            size: "",
            age: "adults",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/Portugal-Away-Shirt-World-Cup-2026-Ronaldo-7.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 2,
            name: "Argentina Away Shirt World Cup 2026 Messi 10",
            player: "Lionel_Messi",
            category: "jersey",
            jersey_type: "national",
            team: "Argentina",
            price: 8499,
            price_tag: "8,499",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/Argentina-Away-Shirt-World-Cup-2026-Messi-10.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 3,
            name: "Brazil Away Shirt Wolrd Cup 2026 kids",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Brazil",
            price: 1399,
            price_tag: "1,399",
            brand: "Nike",
            size: "Sm",
            age: "kids",
            gender: "",
            special_note: "Kids",
            image: require("../../Images/Products/Brazil-Away-Shirt-Wolrd-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 4,
            name: "Brazil Away Shirt Wolrd Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Brazil",
            price: 6999,
            price_tag: "6,999",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Brazil-Away-Shirt-Wolrd-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 5,
            name: "Portugal Away Shirt World Cup 2026 Ronaldo 7 kids",
            player: "Cristiano_Ronaldo",
            category: "jersey",
            jersey_type: "national",
            team: "Portugal",
            price: 1499,
            price_tag: "1,499",
            brand: "Puma",
            size: "Sm",
            age: "kids",
            gender: "",
            special_note: "Kids",
            image: require("../../Images/Products/Portugal-Away-Shirt-World-Cup-2026-Ronaldo-7.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 6,
            name: "Argentina Away Shirt World Cup 2026 Messi 10 kids",
            player: "Lionel_Messi",
            category: "jersey",
            jersey_type: "national",
            team: "Argentina",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Md",
            age: "kids",
            gender: "",
            special_note: "Kids",
            image: require("../../Images/Products/Argentina-Away-Shirt-World-Cup-2026-Messi-10.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 7,
            name: "Portugal Home Shirt World Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Portugal",
            price: 5499,
            price_tag: "5,499",
            brand: "Puma",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Portugal-Home-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 8,
            name: "Argentina Home Shirt World Cup 2026 Women Messi 10",
            player: "Lionel_Messi",
            category: "jersey",
            jersey_type: "national",
            team: "Argentina",
            price: 5599,
            price_tag: "5,599",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "women",
            special_note: "Women",
            image: require("../../Images/Products/Argentina-Home-Shirt-World-Cup-2026-Women-Messi-10.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 9,
            name: "Brazil Home Shirt World Cup 2026",
            player: " ",
            category: "jersey",
            jersey_type: "national",
            team: "Brazil",
            price: 3599,
            price_tag: "3,599",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Brazil-Home-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 10,
            name: "Spain Home Shirt World Cup 2026 LAMINE YAMAL 19",
            player: "Lamine_Yamal",
            category: "jersey",
            jersey_type: "national",
            team: "Spain",
            price: 2599,
            price_tag: "2,599",
            brand: "Adidas",
            size: "Sm",
            age: "kids",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/Spain-Home-Shirt-World-Cup-2026-LAMINE-YAMAL-19.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 11,
            name: "Spain Away Shirt World Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Spain",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Spain-Away-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 12,
            name: "France Home Shirt World Cup 2026 Aero-FIT Authentic",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "France",
            price: 1299,
            price_tag: "1,299",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/France-Home-Shirt-World-Cup-2026-Aero-FIT-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 13,
            name: "France Away Shirt World Cup 2026 MBAPPE 10",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "France",
            price: 1999,
            price_tag: "1,999",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/France-Away-Shirt-World-Cup-2026-MBAPPE-10.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 14,
            name: "Norway Away Shirt World Cup 2026 BRAUT HAALAND 9",
            player: "Erling_Haaland",
            category: "jersey",
            jersey_type: "national",
            team: "Norway",
            price: 999,
            price_tag: "999",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/Norway-Away-Shirt-World-Cup-2026-BRAUT-HAALAND-9.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 15,
            name: "England Home Shirt World Cup 2026 KANE 9",
            player: "Harry_Kane",
            category: "jersey",
            jersey_type: "national",
            team: "England",
            price: 2199,
            price_tag: "2,199",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Player Edition",
            image: require("../../Images/Products/England-Home-Shirt-World-Cup-2026-KANE 9.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 16,
            name: "Germany Home Shirt World Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Germany",
            price: 3999,
            price_tag: "3,999",
            brand: "Nike",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Germany-Home-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 17,
            name: "Italy Home Shirt 2026-27",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Italy",
            price: 3299,
            price_tag: "3,299",
            brand: "Adidas",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Italy-Home-Shirt-2026-27.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 18,
            name: "Mexico Home Shirt World Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Mexico",
            price: 1299,
            price_tag: "1,299",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Mexico-Home-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 19,
            name: "Morocco Home Shirt World Cup 2026",
            player: "",
            category: "jersey",
            jersey_type: "national",
            team: "Morroco",
            price: 3299,
            price_tag: "3,299",
            brand: "Adidas",
            size: "Sm",
            age: "adults",
            gender: "men",
            special_note: "Kids",
            image: require("../../Images/Products/Morocco-Home-Shirt-World-Cup-2026.jpg"),
            size_text: "Many sizes available"
        },






        // CLUB JERSEYS
        {
            id: 20,
            name: "Real Madrid Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Real_Madrid",
            price: 2599,
            price_tag: "2,599",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Real-Madrid-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 21,
            name: "Paris Saint Germain Away Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Psg",
            price: 2499,
            price_tag: "2,499",
            brand: "Nike",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Paris-Saint-Germain-Away-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 22,
            name: "Inter Miami Away Shirt 2026 Messi 10 Authentic",
            player: "Lionel_Messi",
            category: "jersey",
            jersey_type: "club",
            team: "Inter_Miami",
            price: 3499,
            price_tag: "3,499",
            brand: "Adidas",
            size: "Md",
            age: "kids",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Inter-Miami-Away-Shirt-2026-Messi-10-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 23,
            name: "Real Madrid 3rd Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Real_Madrid",
            price: 1599,
            price_tag: "1,599",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Real-Madrid-3rd-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 24,
            name: "Ac Milan Home Shirt 2025-26 Kids",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Ac_Milan",
            price: 2799,
            price_tag: "2,799",
            brand: "Puma",
            size: "Md",
            age: "kids",
            gender: "men",
            special_note: "Kids",
            image: require("../../Images/Products/Ac-Milan-Home-Shirt-2025-26-Kids.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 25,
            name: "Barcelona Fourth Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Barcelona",
            price: 2299,
            price_tag: "2,299",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Barcelona-Fourth-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 26,
            name: "Barcelona Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Barcelona",
            price: 1699,
            price_tag: "1,699",
            brand: "Nike",
            size: "Sm",
            age: "adults",
            gender: "men",
            special_note: "Kids",
            image: require("../../Images/Products/Barcelona-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 27,
            name: "Liverpool Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Liverpool",
            price: 1399,
            price_tag: "1,399",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Liverpool-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 28,
            name: "Manchester United Home Shirt 2025-26 Authentic",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Manchester_United",
            price: 2599,
            price_tag: "2,599",
            brand: "Adidas",
            size: "Sm",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Manchester-United-Home-Shirt-2025-26-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 29,
            name: "Manchester United Away Shirt 2025-26 Authentic",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Manchester_United",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "xl",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Manchester-United-Away-Shirt-2025-26-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 30,
            name: "Manchester City Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Manchester_City",
            price: 999,
            price_tag: "999",
            brand: "Adidas",
            size: "Sm",
            age: "kids",
            gender: "men",
            special_note: "Kids",
            image: require("../../Images/Products/Manchester-City-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 31,
            name: "Arsenal Home Shirt 2025-26 Authentic",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Arsenal",
            price: 1999,
            price_tag: "1,999",
            brand: "Adidas",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Arsenal-Home-Shirt-2025-26-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 32,
            name: "Arsenal Away Shirt 2025/26 Authentic",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Arsenal",
            price: 1399,
            price_tag: "1,399",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Arsenal-Away-Shirt-2025-26-Authentic.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 33,
            name: "Bayern München Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Bayern_Munchen",
            price: 1699,
            price_tag: "1,699",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Bayern-München-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 34,
            name: "Juventus Home Shirt 2025-26",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Juventus",
            price: 1199,
            price_tag: "1,199",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "women",
            special_note: "Women",
            image: require("../../Images/Products/Juventus-Home-Shirt-2025-26.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 35,
            name: "Juventus Away Shirt 2025-26 Authentic",
            player: "",
            category: "jersey",
            jersey_type: "club",
            team: "Manchester_United",
            price: 1899,
            price_tag: "1,899",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "Authentic",
            image: require("../../Images/Products/Juventus-Away-Shirt-2025-26-Authentic.jpg"),
            size_text: "Many sizes available"
        },









        // LEGENDARY JERSEYS
        {
            id: 36,
            name: "Ac Milan Retro Shirt 2006-07",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Ac_Milan",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Ac-Milan-Legendary-Shirt-2006-07.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 37,
            name: "Barcelona 100th Anniversary Special Shirt 1998-1999",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Barcelona",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Sm",
            age: "kids",
            gender: "men",
            special_note: "Kids",
            image: require("../../Images/Products/Barcelona-100th-Anniversary-Legendary-Shirt-1998-1999.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 38,
            name: "England Iconic Shirt 1998",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "England",
            price: 1499,
            price_tag: "1,499",
            brand: "Umbro",
            size: "Xl",
            age: "adults",
            gender: "women",
            special_note: "Women",
            image: require("../../Images/Products/England-Legendary-Shirt-1998.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 39,
            name: "Real Madrid Iconic Shirt 2002-2003",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Real_Madrid",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Real-Madrid-Legendary-Shirt-2002-2003.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 40,
            name: "Nike Brazil Iconic Shirt 1998-2002",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Nike-Brazil-Legendary-Shirt-1998-2002.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 41,
            name: "Liverpool Retro Shirt 1993-1995",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Liverpool-Legendary-Shirt-1993-1995.jpg"),
            size_text: "Many sizes available"
        },


        {
            id: 42,
            name: "Messi Barcelona 2011 Jersey",
            player: "Lionel_Messi",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Barcelona",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Messi-Barcelona-2011-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 43,
            name: "Cristiano Ronaldo Real Madrid 2017 Jersey",
            player: "Cristiano_Ronaldo",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Real_Madrid",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Ronaldo-Real-Madrid-2017-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 44,
            name: "Maradona Argentina 1986 Jersey",
            player: "Maradona",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Argentina",
            price: 1499,
            price_tag: "1,499",
            brand: "Le_Coq_Sportif",
            size: "Sm",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Maradona-Argentina-1986-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 45,
            name: "Zidane France 1998 Jersey",
            player: "Zinedine_Zidane",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "France",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Zidane-France-1998-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 46,
            name: "Netherlands 1988 Euro Jersey",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Nehterlands",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Netherlands-1988-Euro-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 47,
            name: "Germany 1990 World Cup Jersey",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Germany",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Germany-1990-World-Cup-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 48,
            name: "Pele Brazil Jersey",
            player: "Pele",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "",
            size: "Lg",
            age: "agults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Pele-Brazil-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 49,
            name: "Juventus 1996 UCL Jersey",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Juventes",
            price: 1499,
            price_tag: "1,499",
            brand: "Kappa",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Juventus-1996-UCL-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 50,
            name: "England 1996 Euro Jersey",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "England",
            price: 1499,
            price_tag: "1,499",
            brand: "Umbro",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/England-1996-Euro-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 51,
            name: "Barcelona 1996 European Cup Jersey",
            player: "",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "Kappa",
            size: "Sm",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Barcelona-1996-European-Cup-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 52,
            name: "Thierry Henry Arsenal 2004 Jersey",
            player: "Thierry_Henry",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Arsenal",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Thierry-Henry-Arsenal-2004-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 53,
            name: "Ronaldinho Barcelona 2006 Jersey",
            player: "Ronaldinho",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Barcelona",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Ronaldinho-Barcelona-2006-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 54,
            name: "Steven Gerrard Liverpool 2005 UCL Jersey",
            player: "Steven_Gerrard",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Liverpool",
            price: 1499,
            price_tag: "1,499",
            brand: "Umbro",
            size: "Xl",
            age: "adults",
            gender: "women",
            special_note: "Women",
            image: require("../../Images/Products/Steven-Gerrard-Liverpool-2006-08-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 55,
            name: "Paolo Maldini AC Milan 2003 Jersey",
            player: "Paolo_Maldini",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Ac_Milan",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Xl",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Paolo-Maldini-AC-Milan-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 56,
            name: "Wayne Rooney Manchester United 2008 Jersey",
            player: "Wayne_Rooney",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Manchester_United",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Wayne-Rooney-Manchester-United-2015-16-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 57,
            name: "Ronaldo Brazil 2004-06 Jersey",
            player: "ROnaldo Nazario",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Ronaldo-Brazil-2004-06-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 58,
            name: "Cristiano Ronaldo Portugal Away 2016 Euro Jersey",
            player: "Cristiano_Ronaldo",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Portugal",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Cristiano-Ronaldo-Portugal-Away-2016-Euro-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 59,
            name: "Andrés Iniesta Spain 2010 World Cup Jersey",
            player: "Andrés_Iniesta",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-national",
            team: "Spain",
            price: 1499,
            price_tag: "1,499",
            brand: "Adidas",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Andrés-Iniesta-Spain-2010-World-Cup-Jersey.jpg"),
            size_text: "Many sizes available"
        },
        {
            id: 60,
            name: "Neymar Jr Santos 2011 Jersey",
            player: "Neymar_Jr",
            category: "jersey",
            jersey_type: "legendary",
            legendary_type: "legendary-club",
            team: "Brazil",
            price: 1499,
            price_tag: "1,499",
            brand: "Nike",
            size: "Md",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Neymar-Jr-Santos-2011-Jersey.jpg"),
            size_text: "Many sizes available"
        },






        // FANMADE JERSEYS
        {
            id: 62,
            name: "Real Madrid X Marvel Training T-Shirt Pre-Match White/Black/Bold Gold",
            player: "",
            category: "jersey",
            jersey_type: "fanmade",
            team: "Real_Madrid",
            price: 2499,
            price_tag: "2,499",
            brand: "Adidas",
            size: "Lg",
            age: "adults",
            gender: "men",
            special_note: "",
            image: require("../../Images/Products/Real-Madrid-X-Marvel-Training-T-Shirt-Pre-Match-White-Black-BoldGold.jpg"),
            size_text: "Many sizes available"
        },







        // FOOTBALLS
        {
            id: 63,
            name: "Nike Football Flight - White/Blackened Blue/Hyper Crimson",
            player: "",
            category: "football",
            football_type: "grass",
            team: "",
            price: 1299,
            price_tag: "1,299",
            brand: "Nike",
            size: "5",
            gender: "",
            special_note: "",
            image: require("../../Images/Products/Nike-Football-Flight-White-Blackened-Blue-Hyper-Crimson.jpg"),
            size_text: "Ball Sz. 5"
        },
        {
            id: 64,
            name: "Nike Football Academy T90 - White/Black/Red Black",
            player: "",
            category: "football",
            football_type: "indoor",
            team: "",
            price: 1399,
            price_tag: "1,399",
            brand: "Nike",
            size: "5",
            age: "",
            gender: "",
            special_note: "",
            image: require("../../Images/Products/NIke-Football-Academy-T90-White-Black-Red-Black.jpg"),
            size_text: "Ball Sz. 3, Ball Sz. 5"
        },







        // BOOTS
        {
            id: 65,
            name: "Adidas F50 League In Ice Cold Precision - Lucid Ray blue/Solar Yellow/light Utility Aqua Kids",
            player: "",
            category: "boot",
            brand: "Adidas",
            boot_type: "indore",
            team: "",
            price: 1999,
            price_tag: "1,999",
            age: "kids",
            gender: "",
            special_note: "Kids",
            image: require("../../Images/Products/Adidas-F50-League-In-Ice-Cold-Precision-Lucid-Ray-blue-Solar-Yellow-light-Utility-Aqua-Kids.jpg"),
            size_text: "Many Sizes Available"
        },






        // ACCESSORIES
        {
            id: 66,
            name: "Adidas F50 League In Ice Cold Precision - Lucid Ray blue/Solar Yellow/light Utility Aqua Kids",
            player: "",
            category: "accessories",
            brand: "Adidas",
            accessories_type: "indore",
            team: "",
            price: 1999,
            price_tag: "1,999",
            age: "",
            gender: "",
            special_note: "",
            image: require("../../Images/Products/Adidas-F50-League-In-Ice-Cold-Precision-Lucid-Ray-blue-Solar-Yellow-light-Utility-Aqua-Kids.jpg"),
            size_text: ""
        },


    ]);
    const [searchParams] = useSearchParams();
    const getFiltersFromUrl = () => {
        const fromUrl = { ...initialFilters };
        Object.keys(initialFilters).forEach((key) => {
            const value = searchParams.get(key);
            if (value) fromUrl[key] = value;
        });
        return fromUrl;
    };
    const initialFilters = {
        category: "all",
        bootType: "all",
        jerseyType: "all",
        jerseyClub: "all",
        jerseyNational: "all",
        jerseyLegendary: "all",
        footballType: "all",
        accessoriesType: "all",
        brand: "all",
        size: "all",
        age: "all",
        gender: "all",
    };
    const [filters, setFilters] = useState(getFiltersFromUrl);

    useEffect(() => {
        setFilters(getFiltersFromUrl());
    }, [searchParams]);

    const [sortPrice, setSortPrice] = useState("default");

    const filteredProducts = useMemo(() => {
        const f = filters;
        const match = (selected, value) => selected === "all" || selected === value;

        let result = ps.filter((p) => {
            if (!match(f.category, p.category)) return false;
            if (!match(f.brand, p.brand)) return false;
            if (!match(f.age, p.age)) return false;
            if (!match(f.gender, p.gender)) return false;

            // an empty size means "many sizes available", so it matches every size
            if (f.size !== "all" && p.size !== "" && p.size !== f.size) return false;

            if (f.category === "boot" && !match(f.bootType, p.boot_type)) return false;
            if (f.category === "football" && !match(f.footballType, p.football_type)) return false;
            if (f.category === "accessories" && !match(f.accessoriesType, p.accessories_type)) return false;

            if (f.category === "jersey") {
                if (!match(f.jerseyType, p.jersey_type)) return false;
                if (f.jerseyType === "club" && !match(f.jerseyClub, p.team)) return false;
                if (f.jerseyType === "national" && !match(f.jerseyNational, p.team)) return false;
                if (f.jerseyType === "legendary" && !match(f.jerseyLegendary, p.legendary_type)) return false;
            }
            return true;
        });

        if (sortPrice === "low") result = [...result].sort((a, b) => a.price - b.price);
        if (sortPrice === "high") result = [...result].sort((a, b) => b.price - a.price);

        return result;
    }, [ps, filters, sortPrice]);

    const handleFilter = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => {
            const next = { ...prev, [name]: value };

            if (name === "category") {
                next.bootType = "all";
                next.jerseyType = "all";
                next.jerseyClub = "all";
                next.jerseyNational = "all";
                next.jerseyLegendary = "all";
                next.footballType = "all";
                next.accessoriesType = "all";
            }
            if (name === "jerseyType") {
                next.jerseyClub = "all";
                next.jerseyNational = "all";
                next.jerseyLegendary = "all";
            }
            return next;
        });
    };



    return (
        <>
            <div className="container-fluid main-container">

                {/*  FILTERS AND SORTS  */}
                <button className="filters_sorts_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#Filters_Sorts"
                    aria-controls="offcanvas">
                    Filters & Sorts <span><img src={Filter} className="filter-sort-icon img-fluid" /></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="Filters_Sorts" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="filter-offcanvas-title ps-3" id="offcanvas-title">Filters & Sorts</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h5 className="text-center">Category</h5>
                        <select name="category" value={filters.category} onChange={handleFilter} className="filter-sort-box">
                            <option value="all">All</option>
                            <option value="boot">BOOTS</option>
                            <option value="football">FOOTBALLS</option>
                            <option value="jersey">JERSEYS</option>
                            <option value="accessories">ACCESSORIES</option>
                        </select>

                        {filters.category === "boot" && (
                            <div>
                                <h5 className="text-center">Boot Type</h5>
                                <select name="bootType" value={filters.bootType} onChange={handleFilter} className="filter-sort-box">
                                    <option value="all">Default</option>
                                    <option value="fg">Firm Ground</option>
                                    <option value="ag">Artificial Ground</option>
                                    <option value="mg">Multi-Ground</option>
                                    <option value="tf">Astro Turf</option>
                                    <option value="ic">Indoor Court</option>
                                </select>
                            </div>
                        )}

                        {filters.category === "jersey" && (
                            <div>
                                <h5 className="text-center">Jersey Type</h5>
                                <select name="jerseyType" value={filters.jerseyType} onChange={handleFilter} className="filter-sort-box">
                                    <option value="all">Default</option>
                                    <option value="club">Club</option>
                                    <option value="national">National</option>
                                    <option value="legendary">Legendary</option>
                                    <option value="fanmade">FanMade</option>
                                </select>

                                {filters.jerseyType === "club" && (
                                    <div>
                                        <h5 className="text-center">Club Jersey</h5>
                                        <select name="jerseyClub" value={filters.jerseyClub} onChange={handleFilter} className="filter-sort-box">
                                            <option value="all">Default</option>
                                            <option value="Real_Madrid">Real Madrid</option>
                                            <option value="Barcelona">Barcelona</option>
                                            <option value="Psg">Paris Saint Germain</option>
                                            <option value="Ac_Milan">Ac Milan</option>
                                            <option value="Manchester_City">Manchester City</option>
                                        </select>
                                    </div>
                                )}

                                {filters.jerseyType === "national" && (
                                    <div>
                                        <h5 className="text-center">National Jersey</h5>
                                        <select name="jerseyNational" value={filters.jerseyNational} onChange={handleFilter} className="filter-sort-box">
                                            <option value="all">Default</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="England">England</option>
                                        </select>
                                    </div>
                                )}

                                {filters.jerseyType === "legendary" && (
                                    <div>
                                        <h5 className="text-center">Legendary Jersey</h5>
                                        <select name="jerseyLegendary" value={filters.jerseyLegendary} onChange={handleFilter} className="filter-sort-box">
                                            <option value="all">Default</option>
                                            <option value="legendary-club">Club Legends</option>
                                            <option value="legendary-national">National Icons</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}

                        {filters.category === "football" && (
                            <div>
                                <h5 className="text-center">Football Type</h5>
                                <select name="footballType" value={filters.footballType} onChange={handleFilter} className="filter-sort-box">
                                    <option value="all">Default</option>
                                    <option value="grass">Grass / Outdoor</option>
                                    <option value="non-grass">Non-Grass / Hard Ground</option>
                                    <option value="indoor">Futsal / Indoor</option>
                                </select>
                            </div>
                        )}

                        {filters.category === "accessories" && (
                            <div>
                                <h5 className="text-center">Accessories Type</h5>
                                <select name="accessoriesType" value={filters.accessoriesType} onChange={handleFilter} className="filter-sort-box">
                                    <option value="all">Default</option>
                                    <option value="training-gear">Training Gear</option>
                                    <option value="player-gear">Player Gear</option>
                                    <option value="extra">Extras</option>
                                </select>
                            </div>
                        )}

                        <h5 className="text-center">Brands</h5>
                        <select name="brand" value={filters.brand} onChange={handleFilter} className="filter-sort-box">
                            <option value="all">Default</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                        </select>

                        <h5 className="text-center">Sort By Price</h5>
                        <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)} className="filter-sort-box">
                            <option value="default">Default</option>
                            <option value="low">Low to High</option>
                            <option value="high">High to Low</option>
                        </select>

                        <h5 className="text-center">Sizes</h5>
                        <select name="size" value={filters.size} onChange={handleFilter} className="filter-sort-box">
                            <option value="all">Default</option>
                            <option value="Sm">Small</option>
                            <option value="Md">Medium</option>
                            <option value="Lg">Large</option>
                            <option value="Xl">Extra-Large</option>
                        </select>

                        <h5 className="text-center">Age</h5>
                        <select name="age" value={filters.age} onChange={handleFilter} className="filter-sort-box">
                            <option value="all">Default</option>
                            <option value="kids">Kids</option>
                            <option value="adults">Adults</option>
                        </select>

                        <h5 className="text-center">Gender</h5>
                        <select name="gender" value={filters.gender} onChange={handleFilter} className="filter-sort-box">
                            <option value="all">Default</option>
                            <option value="men">Male</option>
                            <option value="women">Female</option>
                        </select>
                    </div>
                </div>
                {/*  END FILTERS AND SORTS  */}
                <div className="row ">
                    {/* MAIN CONTENT */}
                    <div className="col-12 shop-product-container py-4">
                        <div className="row">

                            {filteredProducts.length === 0 ? (
                                <>
                                    <p className='text-center text-warning'>No products match your filters.</p>
                                    <button
                                        type="button"
                                        className="btn btn-dark w-50 mx-auto"
                                        onClick={() => {
                                            setFilters(initialFilters);
                                            setSortPrice("default");
                                        }}
                                    >
                                        Reset filters
                                    </button>
                                </>
                            ) : (
                                filteredProducts.map((p) => (
                                    <div key={p.id} className="col-6 col-sm-4 col-lg-3 my-3">
                                        <a href="#" style={{ textDecoration: 'none' }}>
                                            <div className="card shop-card">

                                                <div className="card-header">
                                                    {/* Dynamic image path mapping */}
                                                    <img src={p.image} className="img-fluid shop-products-image" alt={p.name} loading="lazy" />

                                                    {/* Conditional rendering for Special Notes */}
                                                    {p.special_note && (
                                                        <div className="product_special_note">
                                                            <span>{p.special_note}</span>
                                                        </div>
                                                    )}

                                                    <div className="shop-product-wishlist-button d-flex justify-content-center align-items-center">
                                                        <span>
                                                            <img src={Wishlist} className="img-fluid shop-product-wishlist" alt="Wishlist" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    {/* Dynamic Product Name */}
                                                    <h4 className="shop-products-name">{p.name}</h4>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="shop-products-price">
                                                        {/* Dynamic Price Display */}
                                                        <span>₹ {p.price_tag}</span>

                                                        <div
                                                            className="featured-product-cart-button btn d-flex justify-content-center align-items-center"
                                                        >
                                                            <img src={Cart} className="img-fluid featured-products-cart" alt="Cart" />
                                                        </div>
                                                    </div>

                                                    {/* Dynamic Size text */}
                                                    {p.size_text && (
                                                        <div className="shop-products-footer-info">{p.size_text}</div>
                                                    )}
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                ))
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
