import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CoffeeshopTitle } from "../coffeeshop/CoffeeshopTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const RewardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <NumberInput label="Points" source="points" />
      </SimpleForm>
    </Edit>
  );
};
