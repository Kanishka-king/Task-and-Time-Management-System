import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    author: "",
    genre: "",
    chapters: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/return");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
      <br></br><br></br>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">UPDATE</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Id</label><br></br><br></br>
                    <input
                      type="numbers"
                      name="id"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.id}
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label>TASK</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label>DESCRIPTION</label>
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
                      type="NUMBER"
                      name="chapters"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.chapters}
                    />
                  </div>
                  <br></br>
                  <button className="glow-on-hover5">Update</button><br></br><br></br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProduct;