import { Link } from 'react-router-dom';
const Products = () => {
  var customerData = localStorage.getItem("customer");
  var customer = JSON.parse(customerData);
  var stockData = localStorage.getItem("stock");
  var stock = JSON.parse(stockData);
    return (
      <div>
        <Link className="btn btn-success" to="/invoice">INVOICE LIST</Link>
        <div className="row mt-2">
          <div className="col-md-5">
            <table class="table">
              <thead class="bg-primary">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Purchase Rate</th>
                  <th scope="col">Sale Rate</th>
                </tr>
              </thead>
              <tbody>
                {stock.map(stock => {
                  return(
                    <tr>
                      <th scope="row">{stock.product_name}</th>
                      <td>{stock.product_quantity} {stock.product_unit}</td>
                      <td>{stock.product_purchase}</td>
                      <td>{stock.product_sale}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-7">
            <div className="col-md-8 float-left">
              <h5>Select Customer</h5>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Please Select Customer</option>
                {customer.map(customer =>{
                  return(
                    <option>{customer.name} - {customer.mobile}</option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-4 float-right">
              <div className="card bg-secondary">
                <div className="card-body text-white">
                  <p className="float-left">Total Amount:</p>
                  <p className="float-right font-weight-bold">BDT 0.00</p>
                </div>
              </div>
            </div>
            <div className="col-*-12 mt-4">
              <table class="table">
                <thead>
                  <tr>
                  <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Sale Rate</th>
                    <th scope="col">Sub Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Pran Chinigura Rice - 1KG</th>
                      <td>19 Pcs</td>
                      <td>108</td>
                      <td>120</td>
                      <td><button className="btn btn-danger">Delete <i className="fa fa-trash-alt"></i></button></td>
                  </tr>
                  <tr className="font-weight-bold">
                    <th>Total Items: 1</th>
                    <td colspan="2">Total</td>
                    <td>৳ 35.00</td>
                  </tr>
                  <tr>
                    <td colspan="3">Discount</td>
                    <td><input type="text" name="discount" id="discount" placeholder="0.00"/></td>
                  </tr>
                  <tr>
                    <td colspan="3">Grand Total</td>
                    <td>৳ 105.00</td>
                  </tr>
                </tbody>
              </table>
              <Link className="btn btn-success" to="/invoice">CREATE INVOICE</Link>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Products;