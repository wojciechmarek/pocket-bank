"use client";

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { MoreVertical } from 'lucide-react'
import React, { useEffect } from 'react'

type Props = {
  transactions: Transaction[];
  onTransactionClick: (id: string) => void;
}

type Transaction = {
  type: string
  date: string,
  amount: number,
  description: string,
  status: string,
  amountAfter: number,
}

export const TransactionsTable = (props: Props) => {
  const { table } = useTransactionsTable(props);

  return (
    <table className='w-full text-left'>
      <thead className='border-b-2 border-zinc-800'>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} scope="col" className="px-6 py-3">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className=''>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className='border-b border-zinc-800 hover:bg-[#1d1d1d]'>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className='px-6 py-4'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// ------ table logic hook ------
const useTransactionsTable = (props: Props) => {
  const { transactions, onTransactionClick } = props;

  const [data, setData] = React.useState(() => [...transactions])

  const columnHelper = createColumnHelper<Transaction>()

  const columns = [
    columnHelper.accessor('type', {
      header: () => 'Type'
    }),
    columnHelper.accessor(row => row.date, {
      id: 'date',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor('amount', {
      header: () => 'Amount',
      cell: info => {
        switch (info.row.getValue("type")) {
          case "in":
            return <span className="bg-green-500 px-3 py-1 rounded-md">+ {info.getValue()}</span>

          case "out":
            return <span className="bg-red-500 px-3 py-1 rounded-md">- {info.getValue()}</span>
        }
      },
    }),
    columnHelper.accessor('description', {
      header: () => <span>Description</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
    }),
    columnHelper.accessor('amountAfter', {
      header: 'After transaction',
    }),
    columnHelper.display({
      id: 'actions',
      cell: info => (
        <div className="flex flex-row gap-2">
          <button className="mx-auto" onClick={() => onTransactionClick(info.row.getValue("date"))}>
            <MoreVertical />
          </button>
        </div>
      ),

    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const rerender = React.useReducer(() => ({}), {})[1]

  useEffect(() => {
    setData(transactions);
    rerender();
  }, [transactions, rerender])

  return {
    table
  }
}
