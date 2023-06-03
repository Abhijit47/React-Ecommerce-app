import React from "react";
import "./Card.css";
import data from "../../../assets/data";

const badgeStyle = {
  top: '0.5rem',
  right: '0.5rem',
};

const Card = (props) => {
  const { count, setCount } = props.state;

  // create one function to check if the button is clicked
  // view options or Add to cart

  // if the button type is add to cart 
  // incrementation to count + 1

  const handleChange = (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === 'Add to cart') {
      e.target.innerText = "Remove cart";
      e.target.classList = "btn btn-danger mt-auto";
      setCount(count + 1);
    } else if (e.target.innerText === 'Remove cart') {
      e.target.innerText = "Add to cart";
      e.target.classList = "btn btn-outline-dark mt-auto";
      setCount(count - 1);
    }
  };

  return data.map((item, id) => {
    return (
      <div className="col mb-5" key={id} >
        <div className="card h-100 shadow-sm">
          {/* <!-- Sale badge--> */}
          {
            item.id === 2 || item.id === 4 || item.id === 5 || item.id === 7
              ?
              (
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={badgeStyle}>
                  Sale
                </div>
              ) : (
                <div
                  className="badge bg-dark text-white position-absolute fade"
                  style={badgeStyle}>
                  Sale
                </div>
              )
          }

          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{item.name}</h5>

              {/* <!-- Product reviews--> */}
              {
                item.id === 2 || item.id === 4 || item.id === 7 || item.id === 8
                  ?
                  (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star"></div>
                      <div className="bi-star"></div>
                      <div className="bi-star"></div>
                      <div className="bi-star"></div>
                      <div className="bi-star"></div>
                    </div>
                  )
              }

              {/* <!-- Product price--> */}
              {/* $40.00 - $80.00 */}
              <div className="d-flex justify-content-center gap-2">
                {
                  item.id === 1 || item.id === 6
                    ?
                    (
                      <>
                        <p>{item.price_min}</p>
                        <p>{item.price_max}</p>
                      </>
                    )
                    :
                    item.id === 2 || item.id === 3 || item.id === 5 || item.id === 7
                      ?
                      (
                        <>
                          <p className="text-muted text-decoration-line-through">
                            {item.price_max}
                          </p>
                          <p>{item.price_min}</p>
                        </>
                      ) : (
                        <>
                          <p>{item.price_max}</p>
                          <p>{item.price_min}</p>
                        </>
                      )
                }
              </div>
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {
                item.buttonName === "View options"
                  ? <button className="btn btn-outline-dark mt-auto">{item.buttonName}</button>
                  : <button className="btn btn-outline-dark mt-auto" onClick={handleChange}>
                    {item.buttonName}
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;