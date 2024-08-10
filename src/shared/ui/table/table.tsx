import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { FC, useMemo } from 'react'

const Table: FC<{ data: any; columns: any }> = ({ data, columns }) => {
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
