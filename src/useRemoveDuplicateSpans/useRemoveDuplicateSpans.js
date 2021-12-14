import { useEffect } from "react";

const useRemoveDuplicateSpans = () => {
  useEffect(() => {
    const removeDuplicateSpans = (classname) => {
      let spans = document.querySelectorAll(`.${classname}`);
      spans.forEach((element, index) => {
        if (index > 0) {
          element?.remove();
        }
      });
    };
    let classNames = [
      "classiques",
      "monoarabica",
      "spéciaux",
      "illy-crema",
      "domori",
      "recettes-froides",
      "sodas",
      "eaux",
      "softs",
      "granita",
      "bieres",
    ];
    classNames.forEach((className) => removeDuplicateSpans(className));
    //methode caca pour faire ça
  });
};

export default useRemoveDuplicateSpans;
