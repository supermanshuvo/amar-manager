import { Link } from 'react-router-dom';
const Products = () => {
    return (
      <div>
        <Link className="btn btn-success" to="/invoice">INVOICE LIST</Link>
        <div className="row mt-2">
          <div className="col-md-4">
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
                <tr>
                  <th scope="row">Miniket Rice - Regular</th>
                  <td>589 KG</td>
                  <td>61.5</td>
                  <td>65.4</td>
                </tr>
                <tr>
                  <th scope="row">Lux Beauty Soap(Rose) - 125g</th>
                  <td>19 Pcs</td>
                  <td>30.78	</td>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">Rupchanda Soyabean Oil - 1 Ltr</th>
                  <td>12 Pcs</td>
                  <td>128</td>
                  <td>140</td>
                </tr>
                <tr>
                  <th scope="row">Radhuni Termaric Powder - 100g</th>
                  <td>8 Pcs</td>
                  <td>29</td>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">Pran Chinigura Rice - 1KG</th>
                  <td>19 Pcs</td>
                  <td>108</td>
                  <td>120</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-8">
            <div className="col-md-8 float-left">
              <h5>Select Customer</h5>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Please Select Customer</option>
                <option> Asif Salman Malik - 01770810050 </option>
                <option> Mahamudur Rahaman - 01915787135 </option>
                <option> Dolon Banerjee - 01920696102 </option>
                <option> Aktaruzzaman Swopwon - 01770810050 </option>
                <option> Shuvo - 01303316865 </option>
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
                      <td><i className="fa fa-trash-alt"></i></td>
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