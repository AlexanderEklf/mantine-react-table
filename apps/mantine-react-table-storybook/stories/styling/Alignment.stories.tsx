import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  MantineReactTable,
  MantineReactTableProps,
  MRT_ColumnDef,
} from 'mantine-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Styling/Table Alignment Examples',
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
    header: 'Age',
    accessorKey: 'age',
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

const data = [...Array(25)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.datatype.number({ min: 20, max: 60 }),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.number(),
}));

export const DefaultLeft: Story<MantineReactTableProps> = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const CenterCells: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsWithGrabHandle: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnDragging
    mantineTableHeadCellProps={{
      align: 'center',
    }}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsWithGrabHandleNoSorting: Story<
  MantineReactTableProps
> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnDragging
    enableSorting={false}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
  />
);

export const CenterCellsNoColumnActions: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
    mantineTableHeadCellProps={{
      align: 'center',
    }}
    mantineTableBodyCellProps={{
      align: 'center',
    }}
  />
);

export const RightAlignNumberColumn: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        mantineTableBodyCellProps: {
          align: 'right',
        },
        mantineTableHeadCellProps: {
          align: 'right',
        },
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
    ]}
    data={data}
  />
);
