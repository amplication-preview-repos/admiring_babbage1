import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { QrCodeList } from "./qrCode/QrCodeList";
import { QrCodeCreate } from "./qrCode/QrCodeCreate";
import { QrCodeEdit } from "./qrCode/QrCodeEdit";
import { QrCodeShow } from "./qrCode/QrCodeShow";
import { AchievementList } from "./achievement/AchievementList";
import { AchievementCreate } from "./achievement/AchievementCreate";
import { AchievementEdit } from "./achievement/AchievementEdit";
import { AchievementShow } from "./achievement/AchievementShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { CoffeeshopList } from "./coffeeshop/CoffeeshopList";
import { CoffeeshopCreate } from "./coffeeshop/CoffeeshopCreate";
import { CoffeeshopEdit } from "./coffeeshop/CoffeeshopEdit";
import { CoffeeshopShow } from "./coffeeshop/CoffeeshopShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GamifiedLoyaltySystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="QrCode"
          list={QrCodeList}
          edit={QrCodeEdit}
          create={QrCodeCreate}
          show={QrCodeShow}
        />
        <Resource
          name="Achievement"
          list={AchievementList}
          edit={AchievementEdit}
          create={AchievementCreate}
          show={AchievementShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Coffeeshop"
          list={CoffeeshopList}
          edit={CoffeeshopEdit}
          create={CoffeeshopCreate}
          show={CoffeeshopShow}
        />
      </Admin>
    </div>
  );
};

export default App;
