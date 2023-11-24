import SecondCard from "../Cardscomponent/SecondCard/Secondcard";
import { secondCardData } from "../../datafile/SecondCardData";
import "../SecondPage/secondpage.scss";

const Secondpage = () => {
  return (
    <div className="second-page" style={{ paddingBottom: "32px" }}>
      <div className="Supporting-Roles">
        Wide Array Of Our Mobility Solutions
      </div>
      <div className="S-card-sec">
        {secondCardData.map((cardData: any, index: number) => {
          return <SecondCard key={index} cardData={cardData} />;
        })}
      </div>
    </div>
  );
};

export default Secondpage;
