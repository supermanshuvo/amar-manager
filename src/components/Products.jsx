import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import Order from './Order';
import { Checkbox } from './Checkbox'

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
                prepareRow,
                selectedFlatRows
              } = useTable({
                columns,
                data,
            },
            useRowSelect,
            hooks => {
              hooks.visibleColumns.push(columns => [
                {
                  product_name : 'selection',
                  Header: ({ getToggleAllRowsSelectedProps }) => (
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                  ),
                  Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
                },
                ...columns
              ])
            }
          )
    const selectedItem = selectedFlatRows.map(row => row.original)
    console.log(selectedItem);
    return (
      <div>
        <Link className="btn btn-success btn-sm" to="/invoice">INVOICE LIST</Link>
        <div className="row mt-2">
          <div className="col-md-5">
          <table className="table table-hover" {...getTableProps()}>
                <thead className="bg-primary text-white">
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
                <Order selectedItem />
              <Link className="btn btn-success btn-sm" to="/invoice">CREATE INVOICE</Link>
            </div>
          </div>
        </div>

        <pre>
        <code>
          {JSON.stringify(
            {
              selectedItem: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre>
      </div>
    );
}
export default Products;