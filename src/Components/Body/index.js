import Card from "../Card";
import './body.css';
const Body = (props) => {
    const priceDetails = props.priceDetails;
    return (
        <section className="pricing py-5">
         <div className="container">
            <div className="row">
          {priceDetails.map(({title, price, details}) => 
                <Card key={title} title={title} price={price} details={details} />
            )}

    </div>
  </div>
</section>
    )
}
export default Body;