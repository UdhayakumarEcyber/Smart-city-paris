import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  DataList,
  WidgetWrapper,
  DynamicSelect,
  SearchBox,
  DataTable,
  MapComponent,
  TitleBar,
  ItemListCard,
  FilterPanel,
  DataGrid,
  ItemCard,
  FormField,
  Label,
  Select,
  Input,
  DateRangePicker,
  DatePicker,
  Checkbox,
  ProfileImage,
  Popover,
  TrendChartComponent,
  ToggleFilter,
} from "uxp/components";

import { IContextProvider } from "../uxp";
import { EventsEnum } from "../index";

interface IWidgetProps {
  uxpContext: IContextProvider;
  workOrderAsset: IWorkOrderAsset;
}

interface IWorkOrderAsset {
  // name: string;
  longitude?: number;
  latitude?: number;
  viewAngle?: number;
  altitude?: number;
}

const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = ({
  workOrderAsset,
  ...props
}) => {
  // const StreetLightWorkOrder: React.FunctionComponent<IWidgetProps> = (props) => {

  let { uxpContext } = props;

  let [selected, setSelected] = React.useState<string | null>("op-1");
  let [inputValue, setInputValue] = React.useState<string | null>("Work Order");
  let [inputValue1, setInputValue1] = React.useState<string | null>("Location");

  const [workOrders, setWorkOrders] = useState([]);

  let lat: number, long: number, viewAngle: number, altitude: number;

  function getWorkOrders() {
    props.uxpContext
      .executeAction("DigitalTwin", "Get Work Orders", {}, { json: true })
      .then((res: any) => {
        console.log("Response From Get Work Orders API is", res, typeof res);
        setWorkOrders(res);
        // setLoading(false);
      })
      .catch((e: any) => {
        console.error("Error fetching health data:", e);
        // setLoading(false);
      });
  }

  React.useEffect(() => {
    getWorkOrders();
  }, []);

  const streetLightData = [
    {
      id: "1",
      name: "High",
      name1: "Attention",
      value: workOrders.filter((order) => order.PriorityID === "Urgent").length,
    },
    {
      id: "2",
      name: "Medium",
      name1: "Pending",
      value: workOrders.filter((order) => order.PriorityID === "Medium").length,
    },
    {
      id: "3",
      name: "Low",
      name1: "Resloved",
      value: workOrders.filter((order) => order.PriorityID === "Low").length,
    },
  ];

  const [poleData, setPoleData] = useState(null);

  // React.useEffect(() => {
  //   workOrders.forEach((workOrder) => {
  //     const regex = /Pole\s+(.*?)\s+has\s+a\s+total/;
  //     const match = workOrder.Description.match(regex);

  //     const word = match ? match[1] : null;
  //     console.log(word);

  //     if (word) {
  //       getPoleData(word);
  //     }
  //   });
  // }, [workOrders]);

  // React.useEffect(() => {
  //   var lat = poleData?.latitude;
  //   var long = poleData?.longitude;
  //   console.log("To Check Lat and Long", lat, long);
  // }, [poleData]);

  async function getPoleData(poleName: any) {
    await props.uxpContext
      .executeAction(
        "DigitalTwin",
        "GetAssetByPoleName",
        { poleName },
        { json: true }
      )
      .then((res: any) => {
        console.log(res);
        setPoleData(res);
        lat = res.latitude;
        long = res.longitude;
        viewAngle = 0;
        altitude = 75;
      })
      .then(() => console.log("To Check Lat and Long", lat, long))
      .catch((e: any) => {
        console.error("Error fetching Pole data:", e);
      });
  }

  // console.log("my pole lat", lat);
  // console.log("my pole lat",long);

  const handleResultClick = async (workOrder: any) => {
    const regex = /Pole\s+(.*?)\s+has\s+a\s+total/;
    const match = workOrder.Description.match(regex);

    const word = match ? match[1] : null;
    console.log(word);

    if (word) {
      await getPoleData(word);
    }
    props.uxpContext.eventHandler?.(EventsEnum.DistrictJump, {
      longitude: long,
      latitude: lat,
      viewAngle: viewAngle,
      altitude: altitude,
    });

    console.log("Hi Hello", long, lat);
  };

  const problemTypeColors: { [key: string]: string } = {
    "Main Fail": "rgb(106, 186, 53)",
    "AC Voltage": "rgb(99, 245, 227)",
    "Power Factor": "rgb(25, 157, 142)",
    "Load Fail": "rgb(25, 190, 92)",
    "Lux Sensor Blocked": "#619482",
    "Partial Failure": "rgb(179, 238, 142",
    "Lamp Flickering": "rgb(99, 245, 227)",
  };

  return (
    <WidgetWrapper className="smart-city_box order_summary-box">
      <TitleBar
        title="Street Light Work Order Priority"
        icon="https://static.iviva.com/images/Udhayimages/work-list.png"
      ></TitleBar>

      <div className="smart-city_box waste-bin-box ">
        <div className="smart-city-content" style={{ height: "80px" }}>
          <div className="status-content">
            {streetLightData.map((item) => (
              <div key={item.id} className={`status ${item?.name1}`}>
                <h3>{item?.value}</h3>
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TitleBar
        title="Street Light Work Order"
        icon="https://static.iviva.com/images/Udhayimages/work-order.png"
      ></TitleBar>
      <div
        className="smart-city-content"
        style={{ height: "215px", borderBottom: "1px solid" }}
      >
        <div className="chart-top">
          <FormField inline className="showcase-input">
            <SearchBox
              value={inputValue}
              onChange={(newValue) => {
                setInputValue(newValue);
              }}
              position="left"
              placeholder=""
            />
            <SearchBox
              value={inputValue1}
              onChange={(newValue) => {
                setInputValue1(newValue);
              }}
              position="left"
              placeholder=""
            />
            <Select
              selected={selected}
              options={[
                { label: "All Alert", value: "op-1" },
                { label: "All Alert 1", value: "op-2" },
                { label: "All Alert 2", value: "op-3" },
              ]}
              onChange={(value) => {
                setSelected(value);
              }}
              placeholder=" -- select --"
            />
            <Select
              selected={selected}
              options={[
                { label: "Alert Type", value: "op-1" },
                { label: "Alert Type 1", value: "op-2" },
                { label: "Alert Type 2", value: "op-3" },
              ]}
              onChange={(value) => {
                setSelected(value);
              }}
              placeholder=" -- select --"
            />
          </FormField>
        </div>

        <div className="work_order-content">
          <table>
            <thead>
              <tr>
                <th style={{ width: "28%" }}>CWO ID</th>
                <th style={{ width: "15%" }}>Site Location</th>
                <th style={{ width: "30%" }}>Created Date</th>
                <th style={{ width: "20%" }}>Problem Type</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {workOrders.map((workOrder, index) => (
                <tr key={index}>
                  <td style={{ width: "28%" }}>
                    <a onClick={() => handleResultClick(workOrder)}>
                      {workOrder?.CWOID}
                    </a>
                  </td>
                  <td style={{ width: "15%" }}>
                    <a onClick={() => handleResultClick(workOrder)}>
                      {workOrder?.SiteLocationFullName}
                    </a>
                  </td>
                  <td style={{ width: "30%" }}>
                    <a onClick={() => handleResultClick(workOrder)}>
                      {workOrder?.CreatedDateTime}
                    </a>
                  </td>
                  {/* <td style={{width:'20%'}}>{workOrder.ProblemType}</td> */}
                  <td
                    style={{
                      width: "20%",
                      color:
                        problemTypeColors[workOrder.ProblemType] || "inherit",
                    }}
                  >
                    <a onClick={() => handleResultClick(workOrder)}>
                      {workOrder?.ProblemType}
                    </a>
                  </td>
                  <td style={{ width: "7%" }}>
                    <a
                      className="cwo_key"
                      target="_blank"
                      href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${workOrder?.CWOKey}`}
                    ></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default StreetLightWorkOrder;
