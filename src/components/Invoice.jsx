import { Link } from 'react-router-dom';
const Invoice = () => {
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
                            <th scope="row">1</th>
                            <td>Shuvo</td>
                            <td>01303316865</td>
                            <td>02/05/2021</td>
                            <td>02:16 PM</td>
                            <td>1</td>
                            <td>৳ 115.00</td>
                        </tr>
                    </tbody>
                </table>
                <Link className="btn btn-primary" to="/print">PRINT INVOICE</Link>
            </div>
        </div>
    );
}

export default Invoice;