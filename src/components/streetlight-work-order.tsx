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
      name: "New",
      name1: "Attention",
      // value: workOrders.filter((order) => order.PriorityID === "Urgent").length,
      value: workOrders.filter((order) => order.Stage === "New").length,
    },
    {
      id: "2",
      name: "Acknowledge",
      name1: "acknowledgement",
      // value: workOrders.filter((order) => order.PriorityID === "Medium").length,
      value: workOrders.filter(
        (order) => order.PriorityID === "Acknowledgement"
      ).length,
    },
    {
      id: "3",
      name: "InProgress",
      name1: "Pending",
      // value: workOrders.filter((order) => order.PriorityID === "Medium").length,
      value: workOrders.filter((order) => order.PriorityID === "InProgress")
        .length,
    },
    {
      id: "4",
      name: "Completed",
      name1: "Resloved",
      // value: workOrders.filter((order) => order.PriorityID === "Low").length,
      value: workOrders.filter((order) => order.PriorityID === "Completed")
        .length,
    },
  ];

  const [poleData, setPoleData] = useState(null);

  const getDataItems = (max: number, pageToken: string) => {
    let last = 0;
    if (pageToken !== null) last = parseInt(pageToken);

    let p = new Promise<{ items: Array<any>; pageToken: string }>(
      (resolve, reject) => {
        let data = workOrders.filter(
          (item: any, key: number) => key > last && key <= last + max
        );
        let response = {
          items: data,
          pageToken: (last + data.length).toString(),
        };
        resolve(response);
      }
    );

    return p;
  };

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

      <div className="smart-city_box waste-bin-box work-order-box">
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

        {/* <div className="work_order-content">
          <DataTable
            data={(max, last) => getDataItems(max, last)}
            pageSize={2}
            columns={[
              {
                title: "CWO ID",
                width: "28%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="CWOID"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Location",
                width: "15%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="SiteLocationFullName"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Created Date",
                width: "30%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="CreatedDateTime"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Problem Type",
                width: "20%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="ProblemType"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: " ",
                width: "10%",
                renderColumn: (item) => (
                  <a
                    className="cwo_key"
                    target="_blank"
                    href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${item?.CWOKey}`}
                  ></a>
                ),
              },
            ]}
          />
        </div> */}


        <div className="work_order-content" style={{height:'350px'}}>
          <DataTable
            data={(max, last) => getDataItems(max, last)}
            pageSize={17}
            columns={[
              {
                title: "CWO ID",
                width: "25%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="CWOID"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Location",
                width: "15%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="SiteLocationFullName"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Created Date",
                width: "30%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="CreatedDateTime"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "Problem Type",
                width: "20%",
                renderColumn: (item) => (
                  <ItemCard
                    item={item}
                    subTitleField="ProblemType"
                    className="data-table-item"
                  />
                ),
              },
              {
                title: "",
                width: "10%",
                renderColumn: (item) => (
                  <a
                    className="cwo_key"
                    target="_blank"
                    href={`https://ccc-demo.raseel.city/Apps/ivivaFacility/wo-details?key=${item?.CWOKey}`}
                  ></a>
                ),
              },
            ]}
          />


           
              
        </div>




      </div>
    </WidgetWrapper>
  );
};

export default StreetLightWorkOrder;
