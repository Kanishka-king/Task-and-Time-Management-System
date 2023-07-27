import React, { useState } from "react";
import productService from "../service/product.service";

const addproject = () =>
 {
  const [product, setProduct] = useState({
    name: "",
    author: "",
    genre: "",
    chapters: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        setProduct({
          name: "",
          author: "",
          genre: "",
          chapters: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container mt-3">
      <br></br>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">ADD MANGHWA</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                  <br></br>
                    <label>TASK</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                  <br></br>
                    <label>DESCRIPTION</label>
                    <br></br>
                    <input
                      type="text"
                      name="author"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.author}
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label>LIMIT</label>
                    <input
                      type="text"
                      name="genre"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.genre}
                    />
                  </div>
                   <br></br>
                  <div className="mb-3">
                    <label>DATE</label><br></br><br></br>
                    <input
                      type="number"
                      name="chapters"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.chapters}
                    />
                  </div>
                  <br></br><br></br>
                  <button className="glow-on-hover5">ADD</button><br></br><br></br><br></br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default addproject;