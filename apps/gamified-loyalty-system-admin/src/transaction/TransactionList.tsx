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
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { COFFEESHOP_TITLE_FIELD } from "../coffeeshop/CoffeeshopTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Admin" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Coffeeshop"
          source="coffeeshop.id"
          reference="Coffeeshop"
        >
          <TextField source={COFFEESHOP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Points" source="points" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
