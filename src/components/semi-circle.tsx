import React, { Component } from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import { WidgetWrapper, SearchBox,  TitleBar, FormField, Label, Select, DatePicker,  } from "uxp/components";
  
   
 
 const SemiCircle: React.FunctionComponent<{}> = () => {   
    
        return ( 
           
            <WidgetWrapper className="smart-city_box vehicle_summary-box">  
               
                <TitleBar title="Alert Trends" icon='https://static.iviva.com/images/Udhayimages/alert-trends.png'></TitleBar>  
    
                <div className="smart-city-content">  

                    <div className="chart-top"></div> 
              
                    <div className="technician_chart" style={{ height: 300 }}>   
                         {/* <SemiCircleProgressBar percentage={33} showPercentValue /> */} 
                    </div>  

                </div>
    
            </WidgetWrapper>
    
        )
    }; 

export default SemiCircle;
