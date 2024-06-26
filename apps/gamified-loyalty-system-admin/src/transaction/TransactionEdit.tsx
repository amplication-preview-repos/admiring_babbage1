import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { CoffeeshopTitle } from "../coffeeshop/CoffeeshopTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="coffeeshop.id"
          reference="Coffeeshop"
          label="Coffeeshop"
        >
          <SelectInput optionText={CoffeeshopTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Points" source="points" />
      </SimpleForm>
    </Edit>
  );
};