import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { COFFEESHOP_TITLE_FIELD } from "../coffeeshop/CoffeeshopTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QrCode"
          target="customerId"
          label="QRCodes"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsUsed" source="isUsed" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reward"
          target="customerId"
          label="Rewards"
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
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Points" source="points" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="customerId"
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
