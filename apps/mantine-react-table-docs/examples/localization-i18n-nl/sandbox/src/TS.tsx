import React, { FC } from 'react';

//Import Mantine React Table and its Types
import MaterialReactTable, { MRT_ColumnDef } from 'mantine-react-table';

//Import Mantine React Table Translations
import { MRT_Localization_NL } from 'mantine-react-table/locales/nl';

//mock data
import { data, Person } from './makeData';

const columns: MRT_ColumnDef<Person>[] = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: 'Voornaam',
  },
  {
    accessorKey: 'lastName',
    header: 'Achternaam',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Leeftijd',
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
      localization={MRT_Localization_NL}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { nlNL } from '@mui/material/locale';

const ExampleWithThemeProvider: FC = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme(theme, nlNL)}>
      <Example />
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;
