const Print = () => {
    return(
        <div className="container">
            <div className="text-center">
                <h2 className="font-weight-bold">A. R. Electric & Electronics</h2>
                <p>2F, Porimal Tower, N.S. Road, Kushtia - 7400. <br />Contact: 01711-236456, 01848-455987</p>
                <p>Invoice No# <span className="font-weight-bold">3</span></p>
            </div>
            <div className="customerName">
                <p><span className="font-weight-bold">Name:</span> Asif Salman Malik - 01770810050</p>
                <p><span className="font-weight-bold">Address:</span> Babu Para, Alamdanga, Chuadanga.</p>
            </div>
            <div className="invoiceTablePrint">
                <h4 className="text-center font-weight-bold mb-4">Sales Invoice</h4>
                <table class="table">
                <thead>
                  <tr>
                  <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Sale Rate</th>
                    <th scope="col">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Pran Chinigura Rice - 1KG</th>
                      <td>19 Pcs</td>
                      <td>৳ 108</td>
                      <td>৳ 120</td>
                  </tr>
                  <tr className="font-weight-bold">
                    <th>Total Items: 1</th>
                    <td colspan="2">Total</td>
                    <td>৳ 35.00</td>
                  </tr>
                  <tr>
                    <td colspan="3">Discount</td>
                    <td>৳ 0.00</td>
                  </tr>
                  <tr>
                    <td colspan="3">Grand Total</td>
                    <td>৳ 105.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button">
                <a className="btn btn-primary" href="#"><i className="fa fa-long-arrow-alt-left"></i> BACK TO INVOICE LIST</a>
                <a className="btn btn-success float-right" href="#"><i className="fa fa-print"></i> PRINT INVOICE</a>
            </div>
        </div>
    );
}

export default Print;