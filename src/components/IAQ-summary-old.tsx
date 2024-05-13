import React, { useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";
import {
  DataList,
  WidgetWrapper,
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
  DropDownButton,
} from "uxp/components";

const IAQ_Summary: React.FunctionComponent<{}> = () => {
  const water_consumption_data1 = [
    {
      name: "1 Jan",
      AQI_index: 150,
      amt: 470,
    },
    {
      name: "2 Jan",
      AQI_index: 100,
      amt: 350,
    },
    {
      name: "3 Jan",
      AQI_index: 324,
      amt: 290,
    },
    {
      name: "4 Jan",
      AQI_index: 187,
      amt: 200,
    },
    {
      name: "5 Jan",
      AQI_index: 398,
      amt: 211,
    },
    {
      name: "6 Jan",
      AQI_index: 400,
      amt: 250,
    },
    {
      name: "7 Jan",
      AQI_index: 169,
      amt: 100,
    },
  ];

  const water_consumption_data2 = [
    {
      name: "1 Jan",
      AQI_index: 400,
      amt: 240,
    },
    {
      name: "2 Jan",
      AQI_index: 337,
      amt: 2210,
    },
    {
      name: "3 Jan",
      AQI_index: 168,
      amt: 229,
    },
    {
      name: "4 Jan",
      AQI_index: 335,
      amt: 200,
    },
    {
      name: "5 Jan",
      AQI_index: 175,
      amt: 218,
    },
    {
      name: "6 Jan",
      AQI_index: 248,
      amt: 250,
    },
    {
      name: "7 Jan",
      AQI_index: 357,
      amt: 210,
    },
  ];

  const water_consumption_data3 = [
    {
      name: "1 Jan",
      AQI_index: 235,
      amt: 240,
    },
    {
      name: "2 Jan",
      AQI_index: 400,
      amt: 2210,
    },
    {
      name: "3 Jan",
      AQI_index: 275,
      amt: 229,
    },
    {
      name: "4 Jan",
      AQI_index: 280,
      amt: 200,
    },
    {
      name: "5 Jan",
      AQI_index: 210,
      amt: 181,
    },
    {
      name: "6 Jan",
      AQI_index: 254,
      amt: 500,
    },
    {
      name: "7 Jan",
      AQI_index: 168,
      amt: 450,
    },
  ];

  const [toggleFilterValue, setToggleFilterValue] =
    React.useState<string>("day");

  let [selectedOption, setSelectedOption] = React.useState<string>("2.5PM");
  let options = [
    { label: "2.5PM", value: "2.5PM" },
    { label: "3PM", value: "3PM" },
    { label: "3.5PM", value: "3.5PM" },
    { label: "4PM", value: "4PM" },
  ];
  const handleFilterChange = (value: any) => {
    console.log("Selected Filter Value:", value);
    setToggleFilterValue(value);
  };

  const filterToDataMap: Record<
    string,
    Array<{
      name: string;
      AQI_index: number;
      amt: number;
    }>
  > = {
    month: water_consumption_data1,
    week: water_consumption_data2,
    day: water_consumption_data3,
  };

  const water_consumption_data: any[] =
    filterToDataMap[toggleFilterValue] || water_consumption_data1;

  const finalChartData = water_consumption_data.map((item) => ({
    ...item,
    averageValue: 246.8571428571429,
  }));
  console.log("finalchart", finalChartData);
  return (
    <WidgetWrapper className="smart-city_box water_consumption-box">
      <TitleBar
        title="IAQ Summary"
        icon="https://static.iviva.com/images/Udhayimages/water-summary.png"
      ></TitleBar>

      <div className="smart-city-content">
        <div className="chart-top">
          <div className="sub_title_bar">Mg/m3</div>
          <Select
            options={options}
            selected={selectedOption}
            onChange={(newValue, option) => {
              setSelectedOption(newValue);
            }}
          />
          <ToggleFilter
            options={[
              { label: "7D", value: "day" },
              { label: "1M", value: "week" },
              { label: "1Y", value: "month" },
            ]}
            value={toggleFilterValue}
            onChange={handleFilterChange}
          />
        </div>

        <div className="status-content">
          {/* <ResponsiveContainer width="100%" height={280}> */}

          <ResponsiveContainer>
            <ComposedChart
              data={finalChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff" }} />
              {/* <CartesianGrid strokeDasharray="0 0" /> */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                }}
              />
              <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
              <Legend />
              <Line
                name="AQI Index"
                type="linear"
                dataKey="AQI_index"
                stroke="#ffffff"
                dot={{
                  stroke: "#03b999",
                  fill: "#03b999",
                  strokeWidth: 2,
                  r: 5,
                }}
                isAnimationActive={false}
              />
              <Line
                name="Average"
                type="monotone"
                dataKey="averageValue"
                stroke="#044f51"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
                  <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
                </linearGradient>
              </defs>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default IAQ_Summary;

