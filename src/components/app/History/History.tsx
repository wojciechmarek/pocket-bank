'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { MoreVertical } from 'lucide-react'
import { Navigation } from '../common/Navigation'
import React from 'react'
import { TransactionsTable } from './TransactionsTable'

type Props = {}

const defaultData = [
  {
    type: 'in',
    date: '2021-01-01',
    amount: 20,
    description: 'test',
    status: 'Processing',
    amountAfter: 80,
  },
  {
    type: 'in',
    date: '2021-01-02',
    amount: 20,
    description: 'test',
    status: 'Finished',
    amountAfter: 60,
  },
]

export const History = (props: Props) => {
  const [data, setData] = React.useState(() => [...defaultData])

  const handleAddNewRowButtonClick = () => {
    setData([
      ...data,
      {
        type: Math.random() > 0.5 ? 'in' : 'out',
        date: new Date().toLocaleTimeString(),
        amount: Math.round(Math.random() * 100),
        description: 'test',
        status: Math.random() > 0.5 ? 'Processing' : 'Finished',
        amountAfter: Math.round(Math.random() * 100),
      },
    ])
  }

  const handleTransactionDetailsButtonClick = (id: string) => {
    alert(id)
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between max-w-5xl lg:mx-auto mb-8">
        <div className="relative overflow-x-auto shadow-md w-full">
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 rounded-md bg-[#1d1d1d] hover:bg-[#2d2d2d]"
              onClick={handleAddNewRowButtonClick}
            >
              New transaction
            </button>
          </div>
          <div className="mt-4">
            <TransactionsTable
              transactions={data}
              onTransactionClick={(id) =>
                handleTransactionDetailsButtonClick(id)
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}
