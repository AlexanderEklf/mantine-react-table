import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  MantineReactTable,
  MantineReactTableProps,
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
} from 'mantine-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Fixed Bugs/useEffects',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
  },
];

const data = [...Array(100)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.number(),
}));

export const FilterModesRefetch: Story<MantineReactTableProps> = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );

  useEffect(() => {
    console.log('refetch', columnFilters);
  }, [columnFilters]);

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      initialState={{ showColumnFilters: true }}
      state={{ columnFilters }}
      onColumnFiltersChange={setColumnFilters}
    />
  );
};
