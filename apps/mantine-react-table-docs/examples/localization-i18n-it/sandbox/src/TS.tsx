import React, { FC } from 'react';

//Import Mantine React Table and its Types
import MaterialReactTable, { MRT_ColumnDef } from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_IT } from 'mantine-react-table/locales/it';

//mock data
import { data, Person } from './makeData';

const columns: MRT_ColumnDef<Person>[] = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: 'Nome di battesimo',
  },
  {
    accessorKey: 'lastName',
    header: 'Cognome',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Età',
  },
  //end
];

const Example: FC = () => {
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
      localization={MRT_Localization_IT}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { itIT } from '@mui/material/locale';

const ExampleWithThemeProvider: FC = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme(theme, itIT)}>
      <Example />
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;