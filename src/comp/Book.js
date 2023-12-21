import "./Book.css";

const Book = (props) => {

  const{pic,Name,Seller,Rating,Price}=props  // Obj Destructure
 

  return (
    <>
      <div className="Book container-fluid border m-5 p-1 ">
        <div className="Book_img">
          <img src={props.pic} />
        </div>
        <div>
          <dl className="Book_info m-3 border p-3">
            <dt>Book name ::</dt>
            <dd>{Name}</dd>
            <dt>Seller:</dt>
            <dd>{Seller}</dd>
            <dt>Rating : </dt>
            <dd>{Rating}</dd>
            <dt>Price</dt>
            <dd>{Price}</dd>
            <button className="btn btn-warning m-1">Add to Cart</button>
            <button className=" btn btn-success m-1" >Order Now</button>
          </dl>

        </div>
      </div>
     {console.log(props)}


    </>
  );
};
export default Book;
