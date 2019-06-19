import React from "react";
import "./Admin.css";
import { Tabs, Tab } from "react-bootstrap";
import ClientManagement from "./client-management/ClientManagement";
import ExchangeManagement from "./exchange-management/ExchangeManagement";

const Admin = () => (
  <div>
    <header>
      <h4>Admin</h4>
    </header>
    <div className="admin-container">
      <Tabs defaultActiveKey="client" id="uncontrolled-tab-example">
        <Tab eventKey="client" title="Client Management">
          <ClientManagement />
        </Tab>
        <Tab eventKey="exchange" title="Exchange Management">
          <ExchangeManagement />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default Admin;
