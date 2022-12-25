import React from 'react';

//Import Mantine React Table and its Types
import MaterialReactTable from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_ZH_HANT } from 'mantine-react-table/locales/zh-Hant';

//mock data
import { data } from './makeData';

const columns = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: '名',
  },
  {
    accessorKey: 'lastName',
    header: '姓',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: '年齡',
  },
  //end
];

const Example = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enablePinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_ZH_HANT}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { zhHK } from '@mui/material/locale';

const ExampleWithThemeProvider = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme(theme, zhHK)}>
      <Example />
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;
