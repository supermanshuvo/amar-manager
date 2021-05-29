import { useMemo } from 'react';
import { useTable } from 'react-table';

const Order = () => {
  var invoices = localStorage.getItem("invoice");
  var invoice = JSON.parse(invoices);
  const column = [
    {
      Header : 'Product Name',
      accessor : 'product_name'
    },
    {
      Header : 'Quantity', 
      accessor : 'product_quantity'
    },
    {
      Header : 'Sale Rate',
      accessor : 'product_sale'
    },
    {
      Header : 'Sub Total',
      accessor : 'product_purchase'
    },
    {
      Header : 'Action',
      accessor : 'delete'
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
                data,
            })
    return (
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
    );
}

export default Order;