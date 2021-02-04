import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import styled from "@emotion/styled";

import { DashboarPage } from "src/pages/dashboard/dashboardPage";
import { MerchantsPage } from "src/pages/merchants/merchantsPage";
import { TransactionsPage } from "src/pages/transactions/transactionsPage";
import { UsersPage } from "src/pages/users/usersPage";

/**
 * Styles
 */

const LayoutS = styled.div`
  display: grid;
  grid-row-gap: 24px;
  padding: 8px;
`;

const NavS = styled.nav`
  grid-row: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const NavLinksS = styled.div`
  grid-row: 2;
`;

/**
 * Types
 */

export enum Routes {
  dashboard = "/",
  users = "/users",
  merchants = "/merchants",
  transactions = "/transactions",
}

/**
 * Components
 */

function AppRouter(): JSX.Element {
  return (
    <Router>
      <LayoutS>
        <NavS>
          <ul>
            <li>
              <Link to={Routes.dashboard}>Dashboard</Link>
            </li>
            <li>
              <Link to={Routes.users}>Users</Link>
            </li>
            <li>
              <Link to={Routes.merchants}>Merchants</Link>
            </li>
            <li>
              <Link to={Routes.transactions}>Transactions</Link>
            </li>
          </ul>
        </NavS>
        <NavLinksS>
          <Route component={DashboarPage} exact path={Routes.dashboard} />
          <Route component={UsersPage} exact path={Routes.users} />
          <Route component={MerchantsPage} exact path={Routes.merchants} />
          <Route component={TransactionsPage} exact path={Routes.transactions} />
        </NavLinksS>
      </LayoutS>
    </Router>
  );
}

export default AppRouter;
