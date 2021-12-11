import {
  faGlass,
  faHatChef,
  faCoffee,
  faMugHot,
  faMugTea,
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
    name: "Le Café",
    icon: <FontAwesomeIcon icon={faCoffee} size="2x" />,
    link: "/products/le-cafe",
    slug: "le-cafe",
    subCategory: [
      { name: "Classiques", slug: "classiques" },
      { name: "Spéciaux", slug: "spéciaux" },
      { name: "Monoarabica", slug: "monoarabica" },
      { name: "Recettes-Froides", slug: "recettes-froides" },
      { name: "IllyCrema", slug: "illy-crema" },
    ],
  },
  {
    name: "Le Chocolat",
    icon: <FontAwesomeIcon icon={faMugHot} size="2x" />,
    link: "/products/le-chocolat",
    slug: "le-chocolat",
    subCategory: [
      { name: "Classiques", slug: "classiques" },
      { name: "Domori", slug: "domori" },
    ],
  },
  {
    name: "Le Thé",
    icon: <FontAwesomeIcon icon={faMugTea} size="2x" />,
    link: "/products/le-the",
    slug: "le-the",
  },
  {
    name: "Le Froid",
    icon: <FontAwesomeIcon icon={faGlass} size="2x" />,
    link: "/products/le-froid",
    slug: "le-froid",
    subCategory: [
      { name: "Eaux", slug: "eaux" },
      { name: "Softs", slug: "softs" },
      { name: "Granita", slug: "granita" },
      { name: "Bières", slug: "bieres" },
    ],
  },
  {
    name: "Le Vin",
    icon: <FontAwesomeIcon icon={faWineBottle} size="2x" />,
    link: "/products/le-vin",
    slug: "le-vin",
  },
];
