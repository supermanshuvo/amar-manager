import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';


const Invoice = () => {
    var invoices = localStorage.getItem("invoice");
    var invoice = JSON.parse(invoices);
    const column = [
        {
            Header : 'Invoice ID',
            accessor : 'invoice_id',
        },
        {
            Header : 'Customer Name',
            accessor : 'invoice_customer.name',
        },
        {
            Header : 'Contact No.',
            accessor : 'invoice_customer.mobile',
        },
        {
            Header : 'Date',
            accessor : 'invoice_date',
        },
        {
            Header : 'Time',
            accessor : 'invoice_time',
        },
        {
            Header : 'Products',
            accessor : 'invoice_items[0].cart_qty',
        },
        {
            Header : 'Amount',
            accessor : 'invoice_items[0].product_sale',
        }
    ]
    const columns = useMemo(() => column,[])
    const data = useMemo(() => invoice,[])
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
        <div className="container">
            <Link className="btn btn-success btn-sm mb-5 mt-2" to="/product">CREATE NEW INVOICE</Link>
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
            <Link className="btn btn-primary btn-sm mt-2" to="/print">PRINT INVOICE</Link>
        </div>

    );
}

export default Invoice;