import { PropsWithChildren, ReactElement } from "react";
import { TableOptions, useTable } from "react-table";
import './table.css'

export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
    columns: any
}

export default function CountriesTable<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement {
    const { data, columns } = props
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {... headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (<td{...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}