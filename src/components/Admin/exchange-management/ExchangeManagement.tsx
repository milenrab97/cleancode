import React from "react";
import "./ExchangeManagement.css";
import Switch from "react-switch";
import Table from "../../Table/Table";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  openExchange,
  closeExchange,
  requestExchangeStatus,
  requestExchangeData
} from "../../../actions/admin";
import {
  isExchangeOpenSelector,
  exchangeInfoSelector
} from "../../../reducers/exchange";
import { bindActionCreators } from "redux";
import { ExchangeInfo } from "../../../contracts/global";

export interface ExchangeManagementProps {
  isExchangeOpen: boolean;
  exchangeInfo: ExchangeInfo;
  requestExchangeStatus(): void;
  openExchange(): void;
  closeExchange(): void;
  requestExchangeData(): void;
}

export interface ExchangeManagementRow {
  statistic: string;
  value: string | number;
}

export class _ExchangeManagement extends React.PureComponent<
  ExchangeManagementProps,
  {}
  > {
  static propTypes = {};

  columnDefs = [
    {
      headerName: "Statistic",
      field: "statistic"
    },
    {
      headerName: "Value",
      field: "value"
    }
  ];

  componentDidMount() {
    const { requestExchangeStatus, requestExchangeData } = this.props;

    requestExchangeStatus();
    requestExchangeData();
  }

  getRowData() {
    const {
      totalInstruments,
      totalBuyOrders,
      totalSellOrders,
      totalTrades
    } = this.props.exchangeInfo;

    const rowData = [
      {
        statistic: "Total instruments",
        value: totalInstruments
      },
      {
        statistic: "Total buy orders",
        value: totalBuyOrders
      },
      {
        statistic: "Total sell orders",
        value: totalSellOrders
      },
      {
        statistic: "Total trades",
        value: totalTrades
      }
    ];

    return rowData;
  }

  handleSwitchChange = (isMarketOpen: boolean) => {
    const { openExchange, closeExchange } = this.props;

    if (isMarketOpen) {
      openExchange();
    } else {
      closeExchange();
    }
  };

  getTableRowKey = (row: ExchangeManagementRow) => row.statistic;

  render() {
    const { isExchangeOpen } = this.props;
    const rowData = this.getRowData();

    return (
      <div className="spacer">
        <div className="exchange-header">
          <p>Exchange</p>
          <Switch onChange={this.handleSwitchChange} checked={isExchangeOpen} />
          <p>{isExchangeOpen ? "ON" : "OFF"}</p>
        </div>
        <Table
          columnDefs={this.columnDefs}
          rowData={rowData}
          getRowKey={this.getTableRowKey}
        />
      </div>
    );
  }
}

_ExchangeManagement.propTypes = {
  isExchangeOpen: PropTypes.bool,
  exchangeInfo: PropTypes.object,
  requestExchangeStatus: PropTypes.func,
  openExchange: PropTypes.func,
  closeExchange: PropTypes.func,
  requestExchangeData: PropTypes.func
};

const mapStateToProps = (state: any) => ({
  isExchangeOpen: isExchangeOpenSelector(state),
  exchangeInfo: exchangeInfoSelector(state)
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { requestExchangeStatus, openExchange, closeExchange, requestExchangeData },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_ExchangeManagement);
