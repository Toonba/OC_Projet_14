import { useState } from 'react';

export const testInitialState = 0;

export const useTableData = () => {
  const [tableData, setTableData] = useState(testInitialState);

  return { tableData, setTableData };
};