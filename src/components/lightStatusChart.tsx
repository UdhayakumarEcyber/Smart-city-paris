 

//  import React, { useState, useEffect } from 'react';
//  import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
//  import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//  import { IContextProvider } from '../uxp';
 
//  interface EnergyConsumptionData {
//    "Power Consumption"?: {
//      [key: string]: { [key: string]: number }[]
//    };
//    "Burning Hours"?: {
//      [key: string]: { [key: string]: number }[]
//    };
//  }
 
//  interface IWidgetProps {
//    instanceId?: string;
//    uxpContext?: IContextProvider;
//  } 
   
//  const StreetLightStatusChart: React.FunctionComponent<IWidgetProps> = (props) => {
//      const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
//      const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
//      const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');
    
//      const currentDate = new Date();
//      currentDate.setDate(0);  
 
//      const startDate = currentDate.toISOString();  
//      const endDate = new Date().toISOString(); 
//      const hierarchy = 'منطقة المدينة';
//      const start = startDate;
//      const end = endDate;   
   
//      const handleFilterChange = (value: "day" | "week" | "month") => {
//        console.log("Selected Filter Value:", value);
//        setToggleFilterValue(value);
//        if (value === 'day') {
//          setFilter('Day');
//        } else if (value === 'week') {
//          setFilter('Week');
//        } else if (value === 'month') { 
//          setFilter('Month'); 
//        }
//      };    
 
//      // const fetchData = () => { 
//      //     let newStart = start;
//      //     let newEnd = end;   
       
 
//      //     if (filter === 'Month') {
//      //       newStart = new Date('2024-02-03T00:00:00').toISOString(); 
//      //       newEnd = new Date().toISOString(); 
//      //     }
       
//      //     props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true })
//      //       .then((res: any) => {
//      //         console.log("Response From API is", res, typeof res);
//      //         setEnergyConsumptionData(res);
//      //       }).catch((e: any) => {
//      //         console.error("Error fetching data:", e);
//      //       });
//      //   }; 
 
//      const fetchData = async () => {
//        let newStart = start;
//        let newEnd = end;
   
//        if (filter === 'Month') {
//            newStart = new Date('2024-02-03T00:00:00').toISOString();
//            newEnd = new Date().toISOString();
//        }
   
//        try {
//            const res = await props.uxpContext.executeAction("TataStreetLightAPI", "GetSyncDataNew", { hierarchy, start: newStart, end: newEnd, filter }, { json: true });
//            //console.log("Response From API is", res, typeof res);
//            setEnergyConsumptionData(res);
//        } catch (e) {
//            console.error("Error fetching data:", e);
//        }
//    };
   
//      React.useEffect(() => {
//        fetchData();
//      }, [hierarchy, start, end, filter]); 
       
 
     
//   const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
//      let filteredData: { name: string; powerConsumption: number; burningHours: number }[] = [];
 
//      const powerConsumptionData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Power Consumption"] || [];
//      const burningHoursData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Burning Hours"] || [];
      
       
//    if (filterType === "day") {   
//      const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//      const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  
 
//      filteredData = daysInWeekAbbr.map((abbr, index) => {
//          const fullDayName = daysInWeekFull[index]; 
 
//          const currentDate = new Date();  
//          currentDate.setDate(currentDate.getDate() + index - 1);    
//          const day = currentDate.getDate();
//          const month = currentDate.toLocaleString('default', { month: 'short' });
//          // const year = currentDate.getFullYear(); 
//          const year = currentDate.toLocaleString('default', { year: '2-digit' });  
//          const dateString = `${day}/${month}/${year}`; 
 
//          const powerEntry = (powerConsumptionData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);
//          const burningEntry = (burningHoursData as any[]).find((entry: { day: string; }) => entry.day === fullDayName); 
 
//          const fullDateString = currentDate.toLocaleDateString(); // Full date string for tooltip
 
//          return {
//               name: abbr,
//              // name: dateString,
//              fullDate: fullDateString, 
//              powerConsumption: powerEntry ? powerEntry.value : 0,
//              burningHours: burningEntry ? burningEntry.value : 0,
//          };
//      }); 
  
 
       
//      }
 
//      else if (filterType === "week") {   
//          const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];  
               
//          filteredData = WeekNamesFull.map(weekName => {  
//              const powerEntry = (powerConsumptionData as any[]).find((entry: { week: string; }) => entry.week === weekName);
//              const burningEntry = (burningHoursData as any[]).find((entry: { week: string; }) => entry.week === weekName); 
//              const powerValue = powerEntry ? powerEntry.value : 0;
//              const burningValue = burningEntry ? burningEntry.value : 0;
 
//              return {
//                  name: weekName,
//                  powerConsumption: powerValue,
//                  burningHours: burningValue,
//              };
//          }); 
//      } 
 
//      else if (filterType === "month") {   
 
//          const startDate = new Date('2024-02-01T00:00:00').toISOString(); 
//          const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
//          const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
//              filteredData = monthNamesabbr.map((abbr, index) => {
//              const fullMonthName = monthNamesFull[index];
 
//              const powerEntry = (powerConsumptionData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
//              const burningEntry = (burningHoursData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName); 
//              const powerValue = powerEntry ? powerEntry.value : 0;
//              const burningValue = burningEntry ? burningEntry.value : 0;
 
//              return {
//                  name: abbr,
//                  powerConsumption: powerValue,
//                  burningHours: burningValue,
//              };
//          }); 
//      }  
//      return filteredData;
//  }; 
  
//    const transformedData1 = transformData(energyConsumptionData, 'month');
//    const transformedData2 = transformData(energyConsumptionData, 'week'); // Corrected from 'Week' to 'week'
//    const transformedData3 = transformData(energyConsumptionData, 'day');
   
//    const filterToDataMap: { [key: string]: any[] } = {
//      month: transformedData1,
//      week: transformedData2,  
//      day: transformedData3,
//    };
   
//    const selectedData = filterToDataMap[toggleFilterValue] || transformedData1; 
  
//    const transformedChartData = selectedData.map((item) => ({
//      ...item,
//      powerConsumption: item.powerConsumption / 1000,  
//      burningHours: item.burningHours / 1000,  
//    }));
 
  
  
//    return (
//      <WidgetWrapper className="smart-city_box energy_consumption-box">
//        <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
//        <div className="smart-city-content">
//          <div className="technician_chart">
//            <div className='chart-top'> 
 
//              <ToggleFilter
//                options={[
//                  { label: "7D", value: "day" },
//                  { label: "1M", value: "week" },
//                  { label: "1Y", value: "month" },
//                ]}
//                value={toggleFilterValue}
//                onChange={handleFilterChange}
//              /> 
//            </div>
 
//            <div className='chart-top' style={{marginTop:"0.5em"}}>
//              <div className="sub_title_bar">Total MWh</div>  
//              <div className="sub_title_bar hrs">Hours</div>
//            </div>
           
//            <ResponsiveContainer> 
 
//                    <AreaChart
//                      data={transformedChartData}  
//                      margin={{
//                          top: 10,
//                          right: 0,
//                          left: 0,
//                          bottom: 30,
//                      }}
//                  > 
//                      <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
 
//                      <XAxis dataKey="name" />    
 
//                      <YAxis yAxisId="left" />  
//                      <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${(value)}K`}/> 
                    
 
 
 
//            <Tooltip
//      formatter={(value: any, name: any, props: any) => [`${value} kWh`, name]}
//      labelFormatter={(label: string) => { // Corrected parameter type to string
  
 
//          if (toggleFilterValue === 'day') {
  
//              const dayIndexMap: { [key: string]: number } = {
//                  "Sun": 0,
//                  "Mon": 1,
//                  "Tue": 2,
//                  "Wed": 3,
//                  "Thu": 4,
//                  "Fri": 5,
//                  "Sat": 6
//              };
  
//              const dayIndex = dayIndexMap[label];
  
//              const currentDate = new Date();
//              const currentDay = currentDate.getDay();
//              const startDate = new Date(currentDate);
//              startDate.setDate(startDate.getDate() - currentDay); 
  
//              const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + dayIndex);
               
//              const day = targetDate.getDate();
//              const month = targetDate.getMonth() + 1;
//              const year = targetDate.getFullYear();
 
//              // Format the date as "dd/mm/yyyy"
//              const formattedDate = `${day}/${month}/${year}`;
 
//              return `Date: ${formattedDate}`;
 
//          } else {
//              return `Date: ${label}`;  
//          }
//      }}
//  /> 
 
//                      <Legend /> 
//                      <Area
//                          type="monotone"
//                          dataKey="powerConsumption"
//                          name="Power Consumption (MWh)"
//                          stackId="1"
//                          stroke="#001912"
//                          fill="url(#gradient1)"
//                          yAxisId="left"
//                      />
//                      <Area
//                          type="monotone"
//                          dataKey="burningHours"
//                          name="Burning Hours (MWh)"
//                          stackId="1"
//                          stroke="#79dccc"
//                          fill="url(#gradient2)"
//                          yAxisId="left"
//                      />
//                      <Area
//                          type="monotone"
//                          dataKey="hours"
//                          stackId="0"
//                          fill="url(#gradient3)"
//                          yAxisId="right"
//                          style={{ display: "none" }}
//                          legendType="none"
//                      />
//                      <defs> 
//                          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
//                              <stop offset="10%" stopColor="#01a4ef" stopOpacity={0.8} />
//                              <stop offset="90%" stopColor="#013335" stopOpacity={0.9} />
//                          </linearGradient>
//                          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
//                              <stop offset="10%" stopColor="#00947b" stopOpacity={0.8} />
//                              <stop offset="90%" stopColor="#053122" stopOpacity={0.9} />
//                          </linearGradient> 
//                      </defs>
//                  </AreaChart>
 
//            </ResponsiveContainer>
//          </div>
//        </div>
//      </WidgetWrapper>
//    );
//  };
 
//  export default StreetLightStatusChart;
 

 








import React, { useState, useEffect } from 'react';
import { WidgetWrapper, TitleBar, ToggleFilter } from "uxp/components";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IContextProvider } from '../uxp';

interface EnergyConsumptionData {
  "Expenditure"?: {
    [key: string]: { [key: string]: number }[]
  };
}

interface IWidgetProps {
  instanceId?: string;
  uxpContext?: IContextProvider;
} 
  
const StreetLightStatusChart: React.FunctionComponent<IWidgetProps> = (props) => {

  const { uxpContext } = props;
    const [energyConsumptionData, setEnergyConsumptionData] = React.useState<EnergyConsumptionData>({});
    const [toggleFilterValue, setToggleFilterValue] = useState<"day" | "week" | "month">("day");
    const [filter, setFilter] = useState<'Day' | 'Week' | 'Month'>('Day');
   
    const currentDate = new Date();
    currentDate.setDate(0);  

    const startDate = currentDate.toISOString();  
    const endDate = new Date().toISOString(); 
    const hierarchy = 'منطقة المدينة';
    const start = startDate;
    const end = endDate;   
  
    const handleFilterChange = (value: "day" | "week" | "month") => {
      console.log("Selected Filter Value:", value);
      setToggleFilterValue(value);
      if (value === 'day') {
        setFilter('Day');
      } else if (value === 'week') {
        setFilter('Week');
      } else if (value === 'month') { 
        setFilter('Month'); 
      }
    };    
 

  console.log("for Check context", props.uxpContext);

  const fetchData = () => {  

    props.uxpContext.executeAction("TataStreetLightAPI", "GetExpenditure", { hierarchy, start: start, end: end, filter }, { json: true })
        
    .then((res: any) => {

      console.log("Response uxpContext",uxpContext);
            console.log("Response From GetExpenditure API is", res, typeof res);
            setEnergyConsumptionData(res);
        })
        .catch((e: any) => {
            console.error("Error fetching data:", e);
        });
};

  
    
 const transformData = (rawData: EnergyConsumptionData, filterType: "day" | "week" | "month") => {
  let filteredData: { name: string; powerConsumption: number }[] = [];


  const expenditureData: (any[] | { [key: string]: { [key: string]: number; }[]; }) = rawData["Expenditure"] || [];
 
if (filterType === "day") {   
  const daysInWeekFull: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysInWeekAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 


  filteredData = daysInWeekAbbr.map((abbr, index) => {
      const fullDayName = daysInWeekFull[index]; 

      const currentDate = new Date();  
      currentDate.setDate(currentDate.getDate() + index - 1);    
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      // const year = currentDate.getFullYear(); 
      const year = currentDate.toLocaleString('default', { year: '2-digit' });  
      const dateString = `${day}/${month}/${year}`; 

      const powerEntry = (expenditureData as any[]).find((entry: { day: string; }) => entry.day === fullDayName);  
      const fullDateString = currentDate.toLocaleDateString();  

      return {
           name: abbr, 
          fullDate: fullDateString, 
          powerConsumption: powerEntry ? powerEntry.value : 0, 
      };
  });  
    
  }

  else if (filterType === "week") {   
      const WeekNamesFull: string[] = ["Week1", "Week2", "Week3", "Week4"];  
            
      filteredData = WeekNamesFull.map(weekName => {  
          const powerEntry = (expenditureData as any[]).find((entry: { week: string; }) => entry.week === weekName); 
          const powerValue = powerEntry ? powerEntry.value : 0; 

          return {
              name: weekName,
              powerConsumption: powerValue, 
          };
      }); 
  } 

  else if (filterType === "month") {   

      const startDate = new Date('2024-02-01T00:00:00').toISOString(); 
      const monthNamesFull: string[] = [ "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
      const monthNamesabbr: string[] = [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

          filteredData = monthNamesabbr.map((abbr, index) => {
          const fullMonthName = monthNamesFull[index];

          const powerEntry = (expenditureData as any[]).find((entry: { month: string; }) => entry.month === fullMonthName);
           
          const powerValue = powerEntry ? powerEntry.value : 0; 

          return {
              name: abbr,
              powerConsumption: powerValue 
          };
      }); 
  }  
  return filteredData;
}; 

   
  const transformedData1 = transformData(energyConsumptionData, 'month');
  const transformedData2 = transformData(energyConsumptionData, 'week'); 
  const transformedData3 = transformData(energyConsumptionData, 'day');
  
  const filterToDataMap: { [key: string]: any[] } = {
    month: transformedData1,
    week: transformedData2,  
    day: transformedData3,
  };
  
  const selectedData = filterToDataMap[toggleFilterValue] || transformedData1; 
 
  const transformedChartData = selectedData.map((item) => ({
    ...item,
    powerConsumption: item.powerConsumption / 1000,  
  }));

  return (
    <WidgetWrapper className="smart-city_box energy_consumption-box">
      <TitleBar icon='https://static.iviva.com/images/Udhayimages/energy.png' title="Streetlight Energy Consumption"> </TitleBar>
      <div className="smart-city-content">
        <div className="technician_chart">
          <div className='chart-top'> 
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

          <div className='chart-top' style={{marginTop:"0.5em"}}>
            <div className="sub_title_bar">Total MWh</div>  
          </div>
          
          <ResponsiveContainer> 

              <BarChart
                data={transformedChartData}  
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 30,
                }}
            > 
                 <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
                <XAxis dataKey="name" />    
                <YAxis />
                <Tooltip formatter={(value: any) => `${value} MWh`} />
                <Legend /> 
                <Bar
                    dataKey="powerConsumption"
                    name="Expenditure (MWh)"
                    fill="#01a4ef"
                />
            </BarChart>

          </ResponsiveContainer>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default StreetLightStatusChart;

  