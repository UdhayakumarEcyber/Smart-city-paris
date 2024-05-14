import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
 

const Comapre_IAQ: React.FunctionComponent<{}> = () => {  

    const statusData1 = [
        {  
          airtype: 'O2', 
          value: 65.54,
          reading: 'Mg/m3'
        },
        {  
            airtype: 'NO2', 
            value: 0.12,
            reading: 'Mg/m3', 
            addclass:"yellow-bg" 
        },
        {  
            airtype: 'SO2', 
            value: 8.74,
            reading: 'Mg/m3',
            addclass:"red-bg" 
        },
        {  
            airtype: 'CO', 
            value: 94.12,
            reading: 'Mg/m3' 
        },
        {  
            airtype: 'PM10', 
            value: 15.33,
            reading: 'Mg/m3', 
            addclass:"yellow-bg" 
        },
        {  
            airtype: 'PM2.5', 
            value: 19.67,
            reading: 'Mg/m3' 
        } 
      ];


      const statusData2 = [
        {  
          airtype: 'O2', 
          value: 83.68,
          reading: 'Mg/m3',
          addclass:"red-bg" 
        },
        {  
            airtype: 'NO2', 
            value: 0.36,
            reading: 'Mg/m3' 
        },
        {  
            airtype: 'SO2', 
            value: 9.59,
            reading: 'Mg/m3',
            addclass:"red-bg" 
        },
        {  
            airtype: 'CO', 
            value: 142.90,
            reading: 'Mg/m3',
            addclass:"yellow-bg"
        },
        {  
            airtype: 'PM10', 
            value: 29.75,
            reading: 'Mg/m3'  
        },
        {  
            airtype: 'PM2.5', 
            value: 21.47,
            reading: 'Mg/m3' 
        } 
      ];

      const statusElementsLocation1 = statusData1.map((item, index) => ( 
        <div className= {`${item.addclass} status`}  key={index}>
          <p>{item.airtype}</p>
          <h2>{item.value}</h2>
          <span>{item.reading}</span>
        </div>
      )); 
    

      const statusElementsLocation2 = statusData2.map((item, index) => ( 
        <div className= {`${item.addclass} status`}  key={index}>
          <p>{item.airtype}</p>
          <h2>{item.value}</h2>
          <span>{item.reading}</span>
        </div>
      ));

 


      
    const water_consumption_data1 = [
      {
        name: '1 Jan', 
        consumption: 1950,
        value:1674,
        amt: 2400,
      },
      {
        name: '2 Jan', 
        consumption: 2100,
        value:1582,
        amt: 2210,
      },
      {
        name: '3 Jan', 
        consumption: 3011,
        value:2015,
        amt: 2290,
      },
      {
        name: '4 Jan', 
        consumption: 2104,
        value: 2365,
        amt: 2000,
      },
      {
        name: '5 Jan', 
        consumption: 1680,
        value: 1245,
        amt: 2181,
      },
      {
        name: '6 Jan', 
        consumption: 3800,
        value:3250,
        amt: 2500,
      },
      {
        name: '7 Jan', 
        consumption: 2350,
        value: 1254,
        amt: 2100,
      },
    ];

    const water_consumption_data2 = [
      {
        name: '1 Jan', 
        consumption: 2148,
        value:1582,
        amt: 2400,
      },
      {
        name: '2 Jan', 
        consumption: 1398,
        value: 3201,
        amt: 2210,
      },
      {
        name: '3 Jan', 
        consumption: 1680,
        value:2014,
        amt: 2290,
      },
      {
        name: '4 Jan', 
        consumption: 2564,
        value:1582,
        amt: 2000,
      },
      {
        name: '5 Jan', 
        consumption: 4800,
        value:2031,
        amt: 2181,
      },
      {
        name: '6 Jan', 
        consumption: 1680,
        value: 1562,
        amt: 2500,
      },
      {
        name: '7 Jan', 
        consumption: 2021,
        value:2105,
        amt: 2100,
      },
    ];
  
    const water_consumption_data3 = [
      {
        name: '1 Jan', 
        consumption: 1354,
        value:1235,
        amt: 2400,
      },
      {
        name: '2 Jan', 
        consumption: 3625,
        value:1352,
        amt: 2210,
      },
      {
        name: '3 Jan', 
        consumption: 2045,
        value:2015,
        amt: 2290,
      },
      {
        name: '4 Jan', 
        consumption: 1358,
        value:1278,
        amt: 2000,
      },
      {
        name: '5 Jan', 
        consumption: 1563,
        value:1468,
        amt: 2181,
      },
      {
        name: '6 Jan', 
        consumption: 1025,
        value:1653,
        amt: 2500,
      },
      {
        name: '7 Jan', 
        consumption: 1325,
        value:1205,
        amt: 2100,
      },
    ];


    const [toggleFilterValue, setToggleFilterValue] = React.useState<string>("day");  

    const handleFilterChange = (value:any) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };  
 

    const filterToDataMap: Record<string, Array<{ name: string;  consumption: number; amt: number; }>> = {
        month: water_consumption_data1,
        week: water_consumption_data2,
        day: water_consumption_data3, 
    };
     
    const water_consumption_data = filterToDataMap[toggleFilterValue] || water_consumption_data1;

    let [inputValue, setInputValue] = React.useState<string | null>("Location");
    let [inputValue1, setInputValue1] = React.useState<string | null>("Location");
    
     
    return ( 

         <WidgetWrapper className="smart-city_box iaq-box compare-iaq">  

            <TitleBar title="Compare IAQ" icon='https://static.iviva.com/images/Udhayimages/balance.png'></TitleBar> 

            <div className="smart-city-content">   

                    <div className='status-content'> 
                         
                         <div className='loaction-status-content loaction1-status-content'> 
                          
                                <FormField>
                                    <SearchBox
                                        value={inputValue}
                                        onChange={(newValue) => { setInputValue(newValue) }} 
                                        placeholder='Location'
                                        className="iaq-searchbox"
                                    />
                                </FormField>  
                        
                              {statusElementsLocation1} 
                         </div> 

                         <div className='versus'>VS</div>

                         <div className='loaction-status-content loaction2-status-content'>

                          
                                <FormField>
                                    <SearchBox
                                        value={inputValue1}
                                        onChange={(newValue) => { setInputValue1(newValue) }}
                                        placeholder='Location' 
                                        className="iaq-searchbox"
                                    />
                                </FormField>  

                              {statusElementsLocation2} 
                         </div> 
                      
                      </div> 

                      <div className="smart-city-content smart-city-content-chart">  

                      <div  className='chart-top'>

                        <div className="sub_title_bar">Mg/m3</div>  

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
    
                        <div className='status-content'>
        
                              <ResponsiveContainer>
                                  <LineChart
                                  // width={500}
                                  // height={350}
                                  data={water_consumption_data}
                                  margin={{
                                      top: 5,
                                      right: 30,
                                      left: 20,
                                      bottom: 5,
                                  }}
                                  
                                  > 
                                  <CartesianGrid stroke="#1a6f60cf" strokeDasharray="1 1" />
                                  <XAxis dataKey="name"  tick={{ fill: '#ffffff' }} />
                                  <YAxis  tick={{ fill: '#ffffff' }} />
                                  <Tooltip /> 
                                  <Line type="monotone" dataKey="consumption" stroke="#ffffff" activeDot={{ r: 8 }} />
                                  <Line type="monotone" dataKey="value" stroke="#ff0" activeDot={{ r: 8 }} />
                                  </LineChart>
                              </ResponsiveContainer>   
        
                                
                        </div>
          
                    </div>
  
            </div>

        </WidgetWrapper> 
    )
}; 
  

export default Comapre_IAQ;
