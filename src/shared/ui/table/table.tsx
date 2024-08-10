import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { FC, ReactNode } from 'react'

const Table: FC<{
  data: { [key: string]: ReactNode }[]
  columns: { accessorKey: string; header: string }[]
}> = ({ data, columns }) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: false,
    enableColumnActions: false,
    enableTopToolbar: false,
    enableStickyFooter: true,
    enableStickyHeader: true,
    localization: 'ru',
  })

  return <MaterialReactTable table={table} />
}

export default Table
