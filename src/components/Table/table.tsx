import { PropsWithChildren, ReactElement, useState } from "react";
import { TableOptions, useTable } from "react-table";
import { useStores } from "../../hooks/useStores";
import { Modal } from "./Modal/modal";
import './table.css'

export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
    columns: any
}

export default function CountriesTable<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement {
    const { data, columns } = props
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({ columns, data });

    const { modalStore } = useStores();

    return (
        <>
            <h2>Clique em um país para confirmar sua escolha</h2>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} onClick={() => {modalStore.setModalData(row.values); modalStore.setModalVisibility('active')}}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Modal />
        </>
    );
}