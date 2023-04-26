const Card = ({title, price, details}) => {
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
            <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
                {details.map(({liClass, icon, desc},index) => 
                    <li key={`${title}-${index}`} className={liClass}><span className="fa-li">
                        <i className={icon}></i></span> 
                        { (title === "Pro" && index=== 6 ) && <strong> Unlimited </strong> }
                       { (title !== "Free" && index=== 0 ) ? <strong> {desc}</strong> : `${desc}` } 
                        
                        </li>
                )}
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card;