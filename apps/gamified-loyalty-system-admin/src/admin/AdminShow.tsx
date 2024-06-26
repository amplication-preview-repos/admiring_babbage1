import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADMIN_TITLE_FIELD } from "./AdminTitle";
import { COFFEESHOP_TITLE_FIELD } from "../coffeeshop/CoffeeshopTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Transaction"
          target="adminId"
          label="Transactions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
