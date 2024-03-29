import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1 // changement < en > pour afficher dans l'ordre décroissant
  );
  const nextCard = () => {
    setTimeout(
      () => setIndex(index < `${byDateDesc?.length}` -1 ? index + 1 : 0),
      // retrait de 1 pour enlever l'image blanche
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={`${event.title}_${event.date}`}> {/* ajout d'un div pour mettre key et ajout de event.date pour identification unique */}
        
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((bulletPoint, radioIdx) => (
                <input
                  key={`${bulletPoint.title}_${bulletPoint.date}_radio`} /* enlever event pour mettre bulletPoint car plus parlant */
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx} /* remplacement idx par index. Nous devons comparer avec le bon index pour mettre à jour correctement et pour que les points suivent */
                  readOnly /* ajout de readOnly pour enlever warning */
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
