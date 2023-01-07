import React from 'react';
import { Meta, Story } from '@storybook/react';
import MantineReactTable, {
  MantineReactTableProps,
  MRT_ColumnDef,
} from 'mantine-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Styling/Table Dimensions Examples',
};

export default meta;

const columns: MRT_ColumnDef<typeof data[0]>[] = [
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

const data = [...Array(25)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.number(),
}));

export const MaxWidthAndCentered: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    mantinePaperProps={{
      sx: {
        maxWidth: '800px',
        margin: 'auto',
      },
    }}
  />
);

export const maxHeight: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    mantineTableContainerProps={{
      sx: {
        maxHeight: '500px',
      },
    }}
  />
);

export const minHeight: Story<MantineReactTableProps> = () => (
  <MantineReactTable
    columns={columns}
    data={data.slice(0, 5)}
    mantineTableContainerProps={{
      sx: {
        minHeight: '800px',
      },
    }}
  />
);

export const minHeightParent: Story<MantineReactTableProps> = () => (
  <div style={{ height: '700px' }}>
    <MantineReactTable
      columns={columns}
      data={data.slice(0, 5)}
      mantineTableContainerProps={({ table }) => ({
        sx: {
          height: `calc(100% - ${table.refs.topToolbarRef.current?.offsetHeight}px - ${table.refs.bottomToolbarRef.current?.offsetHeight}px)`,
        },
      })}
      mantinePaperProps={{
        sx: {
          height: '100%',
        },
      }}
    />
  </div>
);
