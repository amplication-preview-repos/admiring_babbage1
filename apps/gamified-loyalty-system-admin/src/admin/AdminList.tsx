import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COFFEESHOP_TITLE_FIELD } from "../coffeeshop/CoffeeshopTitle";

export const AdminList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Admins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Coffeeshop"
          source="coffeeshop.id"
          reference="Coffeeshop"
        >
          <TextField source={COFFEESHOP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
