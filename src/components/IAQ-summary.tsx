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
      AQI_values: [
        { category: "PM2.5", AQI_index: 150, baseline_values: 150 },
        { category: "PM10", AQI_index: 120, baseline_values: 150 },
        { category: "CO", AQI_index: 100, baseline_values: 150 },
        { category: "SO2", AQI_index: 90, baseline_values: 150 },
        { category: "NO2", AQI_index: 80, baseline_values: 150 },
        { category: "O2", AQI_index: 70, baseline_values: 150 },
      ],
      amt: 470,
    },
    {
      name: "2 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 100, baseline_values: 150 },
        { category: "PM10", AQI_index: 90, baseline_values: 150 },
        { category: "CO", AQI_index: 80, baseline_values: 150 },
        { category: "SO2", AQI_index: 70, baseline_values: 150 },
        { category: "NO2", AQI_index: 60, baseline_values: 150 },
        { category: "O2", AQI_index: 50, baseline_values: 150 },
      ],
      amt: 350,
    },
    {
      name: "3 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 324, baseline_values: 150 },
        { category: "PM10", AQI_index: 300, baseline_values: 150 },
        { category: "CO", AQI_index: 280, baseline_values: 150 },
        { category: "SO2", AQI_index: 260, baseline_values: 150 },
        { category: "NO2", AQI_index: 240, baseline_values: 150 },
        { category: "O2", AQI_index: 220, baseline_values: 150 },
      ],
      amt: 290,
    },
    {
      name: "4 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 187, baseline_values: 150 },
        { category: "PM10", AQI_index: 160, baseline_values: 150 },
        { category: "CO", AQI_index: 140, baseline_values: 150 },
        { category: "SO2", AQI_index: 120, baseline_values: 150 },
        { category: "NO2", AQI_index: 100, baseline_values: 150 },
        { category: "O2", AQI_index: 80, baseline_values: 150 },
      ],
      amt: 200,
    },
    {
      name: "5 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 398, baseline_values: 150 },
        { category: "PM10", AQI_index: 370, baseline_values: 150 },
        { category: "CO", AQI_index: 340, baseline_values: 150 },
        { category: "SO2", AQI_index: 310, baseline_values: 150 },
        { category: "NO2", AQI_index: 280, baseline_values: 150 },
        { category: "O2", AQI_index: 250, baseline_values: 150 },
      ],
      amt: 211,
    },
    {
      name: "6 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 400, baseline_values: 150 },
        { category: "PM10", AQI_index: 380, baseline_values: 150 },
        { category: "CO", AQI_index: 360, baseline_values: 150 },
        { category: "SO2", AQI_index: 340, baseline_values: 150 },
        { category: "NO2", AQI_index: 320, baseline_values: 150 },
        { category: "O2", AQI_index: 300, baseline_values: 150 },
      ],
      amt: 250,
    },
    {
      name: "7 Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 169, baseline_values: 150 },
        { category: "PM10", AQI_index: 150, baseline_values: 150 },
        { category: "CO", AQI_index: 130, baseline_values: 150 },
        { category: "SO2", AQI_index: 110, baseline_values: 150 },
        { category: "NO2", AQI_index: 90, baseline_values: 150 },
        { category: "O2", AQI_index: 70, baseline_values: 150 },
      ],
      amt: 100,
    },
  ];

  const water_consumption_data2 = [
    {
      name: "Week 1",
      AQI_values: [
        { category: "PM2.5", AQI_index: 335, baseline_values: 350 },
        { category: "PM10", AQI_index: 290, baseline_values: 350 },
        { category: "CO", AQI_index: 270, baseline_values: 350 },
        { category: "SO2", AQI_index: 250, baseline_values: 350 },
        { category: "NO2", AQI_index: 230, baseline_values: 350 },
        { category: "O2", AQI_index: 210, baseline_values: 350 },
      ],
      amt: 2340,
    },
    {
      name: "Week 2",
      AQI_values: [
        { category: "PM2.5", AQI_index: 325, baseline_values: 350 },
        { category: "PM10", AQI_index: 280, baseline_values: 350 },
        { category: "CO", AQI_index: 260, baseline_values: 350 },
        { category: "SO2", AQI_index: 240, baseline_values: 350 },
        { category: "NO2", AQI_index: 220, baseline_values: 350 },
        { category: "O2", AQI_index: 200, baseline_values: 350 },
      ],
      amt: 2200,
    },
    {
      name: "Week 3",
      AQI_values: [
        { category: "PM2.5", AQI_index: 280, baseline_values: 350 },
        { category: "PM10", AQI_index: 235, baseline_values: 350 },
        { category: "CO", AQI_index: 215, baseline_values: 350 },
        { category: "SO2", AQI_index: 195, baseline_values: 350 },
        { category: "NO2", AQI_index: 175, baseline_values: 350 },
        { category: "O2", AQI_index: 155, baseline_values: 350 },
      ],
      amt: 2150,
    },
    {
      name: "Week 4",
      AQI_values: [
        { category: "PM2.5", AQI_index: 295, baseline_values: 350 },
        { category: "PM10", AQI_index: 250, baseline_values: 350 },
        { category: "CO", AQI_index: 230, baseline_values: 350 },
        { category: "SO2", AQI_index: 210, baseline_values: 350 },
        { category: "NO2", AQI_index: 190, baseline_values: 350 },
        { category: "O2", AQI_index: 170, baseline_values: 350 },
      ],
      amt: 1980,
    },
  ];

  const water_consumption_data3 = [
    {
      name: "Jan",
      AQI_values: [
        { category: "PM2.5", AQI_index: 290, baseline_values: 400 },
        { category: "PM10", AQI_index: 245, baseline_values: 400 },
        { category: "CO", AQI_index: 220, baseline_values: 400 },
        { category: "SO2", AQI_index: 200, baseline_values: 400 },
        { category: "NO2", AQI_index: 180, baseline_values: 400 },
        { category: "O2", AQI_index: 160, baseline_values: 400 },
      ],
      amt: 2170,
    },
    {
      name: "Feb",
      AQI_values: [
        { category: "PM2.5", AQI_index: 310, baseline_values: 400 },
        { category: "PM10", AQI_index: 265, baseline_values: 400 },
        { category: "CO", AQI_index: 240, baseline_values: 400 },
        { category: "SO2", AQI_index: 220, baseline_values: 400 },
        { category: "NO2", AQI_index: 200, baseline_values: 400 },
        { category: "O2", AQI_index: 180, baseline_values: 400 },
      ],
      amt: 2400,
    },
    {
      name: "Mar",
      AQI_values: [
        { category: "PM2.5", AQI_index: 275, baseline_values: 400 },
        { category: "PM10", AQI_index: 230, baseline_values: 400 },
        { category: "CO", AQI_index: 210, baseline_values: 400 },
        { category: "SO2", AQI_index: 190, baseline_values: 400 },
        { category: "NO2", AQI_index: 170, baseline_values: 400 },
        { category: "O2", AQI_index: 150, baseline_values: 400 },
      ],
      amt: 2250,
    },
    {
      name: "Apr",
      AQI_values: [
        { category: "PM2.5", AQI_index: 285, baseline_values: 400 },
        { category: "PM10", AQI_index: 240, baseline_values: 400 },
        { category: "CO", AQI_index: 220, baseline_values: 400 },
        { category: "SO2", AQI_index: 200, baseline_values: 400 },
        { category: "NO2", AQI_index: 180, baseline_values: 400 },
        { category: "O2", AQI_index: 160, baseline_values: 400 },
      ],
      amt: 1990,
    },
    {
      name: "May",
      AQI_values: [
        { category: "PM2.5", AQI_index: 330, baseline_values: 400 },
        { category: "PM10", AQI_index: 285, baseline_values: 400 },
        { category: "CO", AQI_index: 260, baseline_values: 400 },
        { category: "SO2", AQI_index: 240, baseline_values: 400 },
        { category: "NO2", AQI_index: 220, baseline_values: 400 },
        { category: "O2", AQI_index: 200, baseline_values: 400 },
      ],
      amt: 2300,
    },
    {
      name: "Jun",
      AQI_values: [
        { category: "PM2.5", AQI_index: 310, baseline_values: 400 },
        { category: "PM10", AQI_index: 265, baseline_values: 400 },
        { category: "CO", AQI_index: 240, baseline_values: 400 },
        { category: "SO2", AQI_index: 220, baseline_values: 400 },
        { category: "NO2", AQI_index: 200, baseline_values: 400 },
        { category: "O2", AQI_index: 180, baseline_values: 400 },
      ],
      amt: 2450,
    },
    {
      name: "Jul",
      AQI_values: [
        { category: "PM2.5", AQI_index: 295, baseline_values: 400 },
        { category: "PM10", AQI_index: 250, baseline_values: 400 },
        { category: "CO", AQI_index: 230, baseline_values: 400 },
        { category: "SO2", AQI_index: 210, baseline_values: 400 },
        { category: "NO2", AQI_index: 190, baseline_values: 400 },
        { category: "O2", AQI_index: 170, baseline_values: 400 },
      ],
      amt: 2120,
    },
    {
      name: "Aug",
      AQI_values: [
        { category: "PM2.5", AQI_index: 300, baseline_values: 400 },
        { category: "PM10", AQI_index: 255, baseline_values: 400 },
        { category: "CO", AQI_index: 235, baseline_values: 400 },
        { category: "SO2", AQI_index: 215, baseline_values: 400 },
        { category: "NO2", AQI_index: 195, baseline_values: 400 },
        { category: "O2", AQI_index: 175, baseline_values: 400 },
      ],
      amt: 2050,
    },
    {
      name: "Sep",
      AQI_values: [
        { category: "PM2.5", AQI_index: 295, baseline_values: 400 },
        { category: "PM10", AQI_index: 250, baseline_values: 400 },
        { category: "CO", AQI_index: 230, baseline_values: 400 },
        { category: "SO2", AQI_index: 210, baseline_values: 400 },
        { category: "NO2", AQI_index: 190, baseline_values: 400 },
        { category: "O2", AQI_index: 170, baseline_values: 400 },
      ],
      amt: 1950,
    },
    {
      name: "Oct",
      AQI_values: [
        { category: "PM2.5", AQI_index: 310, baseline_values: 400 },
        { category: "PM10", AQI_index: 265, baseline_values: 400 },
        { category: "CO", AQI_index: 240, baseline_values: 400 },
        { category: "SO2", AQI_index: 220, baseline_values: 400 },
        { category: "NO2", AQI_index: 200, baseline_values: 400 },
        { category: "O2", AQI_index: 180, baseline_values: 400 },
      ],
      amt: 2100,
    },
    {
      name: "Nov",
      AQI_values: [
        { category: "PM2.5", AQI_index: 320, baseline_values: 400 },
        { category: "PM10", AQI_index: 275, baseline_values: 400 },
        { category: "CO", AQI_index: 250, baseline_values: 400 },
        { category: "SO2", AQI_index: 230, baseline_values: 400 },
        { category: "NO2", AQI_index: 210, baseline_values: 400 },
        { category: "O2", AQI_index: 190, baseline_values: 400 },
      ],
      amt: 2200,
    },
    {
      name: "Dec",
      AQI_values: [
        { category: "PM2.5", AQI_index: 330, baseline_values: 400 },
        { category: "PM10", AQI_index: 285, baseline_values: 400 },
        { category: "CO", AQI_index: 260, baseline_values: 400 },
        { category: "SO2", AQI_index: 240, baseline_values: 400 },
        { category: "NO2", AQI_index: 220, baseline_values: 400 },
        { category: "O2", AQI_index: 200, baseline_values: 400 },
      ],
      amt: 2300,
    },
  ];

  const [toggleFilterValue, setToggleFilterValue] =
    React.useState<string>("day");

  let [selectedOption, setSelectedOption] = React.useState<string>("PM2.5");
  let options = [
    { label: "PM2.5", value: "PM2.5" },
    { label: "PM10", value: "PM10" },
    { label: "CO", value: "CO" },
    { label: "SO2", value: "SO2" },
    { label: "NO2", value: "NO2" },
    { label: "O2", value: "O2" },
  ];
  const handleFilterChange = (value: any) => {
    console.log("Selected Filter Value:", value);
    setToggleFilterValue(value);
  };

  const filterToDataMap: Record<
    string,
    Array<{
      name: string;
      AQI_values: {
        category: string;
        AQI_index: number;
        baseline_values: number;
      }[];
      amt: number;
    }>
  > = {
    day: water_consumption_data1,
    week: water_consumption_data2,
    month: water_consumption_data3,
  };

  const water_consumption_data: any[] =
    filterToDataMap[toggleFilterValue] || water_consumption_data1;

  const val: any = water_consumption_data.reduce(
    (acc, obj) => acc + obj.AQI_index,
    0
  );

  // Calculate the average
  // const averageVal = val / water_consumption_data.length;

  const finalChartData = water_consumption_data.map((item) => ({
    ...item,
    // averageValue: averageVal,
  }));

  const flattenedData = finalChartData.map((item) => {
    const name = item.name;
    const selectedAQI = item.AQI_values.find(
      (value: any) => value.category === selectedOption
    );

    return {
      name,
      selectedOption,
      AQI_index: selectedAQI ? selectedAQI.AQI_index : 0, // Show 0 if the selected category is not found
      baseline_values: selectedAQI ? selectedAQI.baseline_values : 0, // Show 0 if the selected category is not found
    };
  });
  console.log("finalchart", flattenedData);
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
              data={flattenedData}
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
                // isAnimationActive={false}
              />
              {/* <Line
                name="Baseline"
                type="monotone"
                dataKey="baseline_values"
                stroke="#044f51"
                strokeWidth="2"
              /> */}

<Line
                      name="Baseline"
                      type="monotone"
                      dataKey="baseline_values"
                      stroke="#62c607"
                      strokeWidth={2}
                      strokeDasharray="3 3" 
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
