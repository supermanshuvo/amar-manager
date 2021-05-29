import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTable } from 'react-table';
const Products = () => {
  var customerData = localStorage.getItem("customer");
  var customer = JSON.parse(customerData);
  var stockData = localStorage.getItem("stock");
  var stock = JSON.parse(stockData);

  const column = [
                {
                    Header : 'Product Name',
                    accessor : 'product_name',
                },
                {
                    Header : 'Quantity',
                    accessor : 'product_quantity',
                },
                {
                    Header : 'Purchase Rate',
                    accessor : 'product_purchase',
                },
                {
                  Header : 'Sale Rate',
                  accessor : 'product_sale'
                }
            ]
            const columns = useMemo(() => column,[])
            const data = useMemo(() => stock,[])
            const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow
              } = useTable({
                columns,
                data
            })  
    return (
      <div>
        <Link className="btn btn-success" to="/invoice">INVOICE LIST</Link>
        <div className="row mt-2">
          <div className="col-md-5">
          <table className="table table-hover" {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
          </div>
          <div className="col-md-7">
            <div className="col-md-8 float-left">
              <h5>Select Customer</h5>
              <select className="form-control" id="exampleFormControlSelect1">
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
              <table className="table table-hover">
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
                    <td colSpan="2">Total</td>
                    <td>৳ 35.00</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Discount</td>
                    <td><input type="text" name="discount" id="discount" placeholder="0.00"/></td>
                  </tr>
                  <tr>
                    <td colSpan="3">Grand Total</td>
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