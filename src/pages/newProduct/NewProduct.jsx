import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="new__product">
      <h1 className="add__product-title">New Product</h1>
      <form className="add__product-form">
        <div className="add__product-item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="add__product-item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="add__product-item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="add__product-item">
          <label>Active</label>
          <select name="active" id="activeme">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="add__product-btn">Create</button>
      </form>
    </div>
  );
}
