import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TableComponent.css';

const TableComponent = (props) => {
  const { columns, rows, darkMode } = props;

  
  return (
    <div className={`table-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <DataGrid
        rows={rows}
        columns={columns.map((col) => ({
          ...col,
          headerClassName: darkMode ? 'dark-header' : 'light-header',
          headerCellClassName: darkMode ? 'dark-header-cell' : 'light-header-cell',
          renderCell: (params) => {
            if (params.field === 'isActive') { // Check if the column is "isActive"
              return (
                <div className={`cell-text ${darkMode ? 'dark-text' : 'light-text'}`}>
                  {params.value ? 'Active' : 'Inactive'} {/* Display "Active" or "Inactive" */}
                </div>
              );
            }
            return (
              <div className={`cell-text ${darkMode ? 'dark-text' : 'light-text'}`}>
                {params.value}
              </div>
            );
          },
        }))}
      />
    </div>
  );
};
  
export default TableComponent;
