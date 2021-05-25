import { Link } from 'react-router-dom';
const Invoice = () => {
    var count = 0;
    var invoice = localStorage.getItem("invoice");
    var invoice = JSON.parse(invoice);
    if(!invoice.length){
        return(
            <div className="container">
            <Link className="btn btn-success" to="/product">CREATE NEW INVOICE</Link>
            <div className="table mt-4 font-weight-light">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Invoice ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Contact No.</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Products</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                </table>
                        <h3 colspan="4" className="text-center">There is no data</h3>
                <Link className="btn btn-primary" to="/print">PRINT INVOICE</Link>
            </div>
        </div>
        );
    }else{
        return (
            <div className="container">
                <Link className="btn btn-success" to="/product">CREATE NEW INVOICE</Link>
                <div className="table mt-4 font-weight-light">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Invoice ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Products</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Asif Salman Malik</td>
                                <td>01770810050</td>
                                <td>22/05/2021</td>
                                <td>03:16 PM</td>
                                <td>2</td>
                                <td>৳ 175.00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Shuvo</td>
                                <td>01303316865</td>
                                <td>02/05/2021</td>
                                <td>02:16 PM</td>
                                <td>1</td>
                                <td>৳ 115.00</td>
                            </tr>
                            {invoice.map(invoice => {
                                console.log(count);
                                return(
                                    <tr>
                                        <th scope="row">{invoice.invoice_id}</th>
                                        <td>{invoice.invoice_customer.name}</td>
                                        <td>{invoice.invoice_customer.mobile}</td>
                                        <td>{invoice.invoice_date}</td>
                                        <td>{invoice.invoice_time}</td>
                                        <td>{invoice.invoice_items[count].cart_qty}</td>
                                        <td>৳ {(invoice.invoice_items[count].product_sale * invoice.invoice_items[count].cart_qty)}</td>
                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                    <Link className="btn btn-primary" to="/print">PRINT INVOICE</Link>
                </div>
            </div>
        );
    }
}

export default Invoice;