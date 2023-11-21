import "./secondCard.scss";
import "../Third-Card/thirdCard.scss";
const SecondCard = ({ cardData }: any) => {
  return (
    <div className="Third-card" style={{ marginBottom: "15px" }}>
      <div className="Third-card-img">
        <img src={cardData.img} />
      </div>
      <div className="heading-div">
        <span className="heading">{cardData.heading}</span>
      </div>
      <div className="Content">
        {cardData.content.map((cont: any, index: number) => {
          return <ThirdChildContent key={index} cont={cont} />;
        })}
      </div>
    </div>
  );
};

const ThirdChildContent = ({ cont }: any) => {
  return (
    <div className="child-content">
      <img src={cont.checkbox} alt="Checkbox" />
      <span>{cont.text}</span>
    </div>
  );
};
export default SecondCard;
