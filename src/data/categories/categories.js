import {
  faCheeseburger,
  faCocktail,
  faGlass,
  faHatChef,
  faMugHot,
  faStroopwafel,
  faWineBottle,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const categories = [
  {
    name: "Aujourd'hui",
    icon: <FontAwesomeIcon icon={faHatChef} size="2x" />,
    link: "/",
    slug: "today",
  },
  {
    name: "Burgers",
    icon: <FontAwesomeIcon icon={faCheeseburger} size="2x" />,
    link: "/products/burgers",
    slug: "burgers",
  },
  {
    name: "Gauffres",
    icon: <FontAwesomeIcon icon={faStroopwafel} size="2x" />,
    link: "/products/gauffres",
    slug: "gauffres",
  },
  {
    name: "Le Chaud",
    icon: <FontAwesomeIcon icon={faMugHot} size="2x" />,
    link: "/products/le-chaud",
    slug: "le-chaud",
  },
  {
    name: "Le Froid",
    icon: <FontAwesomeIcon icon={faGlass} size="2x" />,
    link: "/products/le-froid",
    slug: "le-froid",
  },
  {
    name: "Cocktails",
    icon: <FontAwesomeIcon icon={faCocktail} size="2x" />,
    link: "/products/cocktails",
    slug: "cocktail",
  },
  {
    name: "Le Vin",
    icon: <FontAwesomeIcon icon={faWineBottle} size="2x" />,
    link: "/products/le-vin",
    slug: "le-vin",
  },
];
