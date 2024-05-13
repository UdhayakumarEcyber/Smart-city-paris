import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,LabelList  } from 'recharts';

import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
 
 

const MaintenanceWorkOrderSummary: React.FunctionComponent<{}> = () => {   

    var order_Summarydata = [ 
        {
            "id": "1", 
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46", 
            'status': 'attention', 
            "alert_Type" : "Faulty" 
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "attention",
            "alert_Type" : "Faulty" 
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "attention",
            "alert_Type" : "Offline" 
        },
        {
            "id": "4", 
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "pending",
            "alert_Type" : "Offline" 
        } ,
        {
            "id": "5", 
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "pending",
            "alert_Type" : "Working" 
        } ,
        {
            "id": "6", 
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "resloved",
            "alert_Type" : "Working" 
        } ,
        {
            "id": "7", 
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist", 
            "alert_Time":"2023-01-11 07:56:46",
            "status" : "resloved",
            "alert_Type" : "resloved" 
        } 
    ];
     
    
    const getDataItems = (max: number, pageToken: string) => {
        let last = 0
    
        if (pageToken !== null) last = parseInt(pageToken);
    
        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let data = order_Summarydata.filter((item: any, key: number) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() }
            resolve(response);
        })
    
        return p;
    }
    
        return ( 
    
           
           <WidgetWrapper className="smart-city_box order_summary-box"> 
    
            <TitleBar title="Maintenance Work Order Summary"></TitleBar>
    
            
            <div className="smart-city-content">
                    <DataTable
                      data={(max, last) => getDataItems(max, last)}
                      pageSize={10}
                      columns={[
                          {
                              title: "Work Order",
                              width: "20%",
                              renderColumn: (item) => <ItemCard
                                  item={item}
                                  subTitleField="work_Order"
                                  className="data-table-item"
                              />
                          },
                          {
                              title: "Location",
                              width: "25%",
                              renderColumn: (item) => <ItemCard
                                  item={item}
                                  subTitleField="location"
                                  className="data-table-item"
                              />
                          },
                          {
                              title: "Alert Time",
                              width: "25%",
                              renderColumn: (item) => <ItemCard
                                  item={item}
                                  subTitleField="alert_Time"
                                  className="data-table-item"
                              />
                          },
                          {
                              title: "Alert Type",
                              width: "20%",
                              renderColumn: (item) => <ItemCard
                                  item={item}
                                  subTitleField="alert_Type"
                                  className="data-table-item"
                              />
                          },
                          {
                              title: " ",
                              width: "10%",
                              renderColumn: (item) => <ItemCard
                                  item={item}
                                  subTitleField=""
                                  className={`data-table-item ${item.status}`}
                              />
    
                               
                          }
                      ]}
                  />
            </div>
    
            </WidgetWrapper>   
        )
    }; 
  

export default MaintenanceWorkOrderSummary;
