import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
  

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';


 
const Waste_Segregation_Metrics: React.FunctionComponent<{}> = (props) => {
 

    var AfterHours = [
     {
         "DepartmentName": "Abu Burayaqa Dist",
         "TotalTons": "218 Tons" 
     },
     {
         "DepartmentName": "Al Hadiqua Dist",
         "TotalTons": "153 Tons" 
     },
     {
         "DepartmentName": "Ar Rayah Dist",
         "TotalTons": "98 Tons " 
     },
     {
         "DepartmentName": "Al Qiblatayan Dist",
         "TotalTons": "185 Tons" 
     },
     {
         "DepartmentName": "Al Wabra Dist",
         "TotalTons": "164 Tons" 
     },
     {
         "DepartmentName": "Bani Muawiyah Dist",
         "TotalTons": "104 Tons" 
     },
     {
         "DepartmentName": "Mahzur Dist",
         "TotalTons": "158 Tons" 
     },
     {
         "DepartmentName": "Al Jamawat Dist",
         "TotalTons": "21 Tons" 
     },
     {
         "DepartmentName": "Ad Duwaimah Dist",
         "TotalTons": "60 Tons " 
     },
     {
         "DepartmentName": "As Salam Dist",
         "TotalTons": "29 Tons" 
     },
     {
         "DepartmentName": "Al Uyun Dist",
         "TotalTons": "85 Tons" 
     },
     {
         "DepartmentName": "Al Manakhah Dist",
         "TotalTons": "18 Tons" 
     },
     {
         "DepartmentName": "Bani Dhafar Dist",
         "TotalTons": "30 Tons" 
     },
     {
         "DepartmentName": "Urwah Dist",
         "TotalTons": "131 Tons" 
     },
     {
         "DepartmentName": "Al Iskan Dist",
         "TotalTons": "101 Tons" 
     },
     {
         "DepartmentName": "Al Khatim Dist",
         "TotalTons": "65 Tons" 
     },
     {
         "DepartmentName": "Al Rawabi Dist",
         "TotalTons": "27 Tons" 
     },
     {
         "DepartmentName": "Al Aridh Dist",
         "TotalTons": "58 Tons" 
     }, 
     {
         "DepartmentName": "Al Qalah Dist",
         "TotalTons": "75 Tons" 
     },
     {
         "DepartmentName": "Bir Uthman Dist",
         "TotalTons": "135 Tons" 
     },
     {
         "DepartmentName": "Dhu Al Hulayfah Dist",
         "TotalTons": "90 Tons" 
     },
     {
         "DepartmentName": "Al Usayfirin Dist",
         "TotalTons": "104 Tons" 
     },
     {
         "DepartmentName": "Al Khalideya Dist",
         "TotalTons": "158 Tons" 
     },
     {
         "DepartmentName": "Al Zahra Dist",
         "TotalTons": "165 Tons" 
     },
     {
         "DepartmentName": "Al Aziziyzh Dist",
         "TotalTons": "114 Tons" 
     },
     {
         "DepartmentName": "Al Mabuth Dist",
         "TotalTons": "167 Tons" 
     } 
 ];
 

 var data =[
     {
       "id": "plastic",
       "label": "Plastic",
       "value": 3273,
       "color": "rgb(106 186 53)"
     },
     {
       "id": "paper",
       "label": "Paper", 
       "value": 2947,
       "color": "rgb(25 190 92)"
     },
     {
       "id": "metal",
       "label": "Metal",
       "value":  2838,
       "color": "rgb(50 161 152)"
     },
     {
       "id": "food_waste",
       "label": "Food Waste",
       "value":  3875,
       "color": "rgb(99 245 227)"
     },
     {
       "id": "glass",
       "label": "Glass",
       "value":  1945,
       "color": "rgb(179 238 142)"
     }
   ]

   
 
const MyResponsivePie = ({  }) => (
 
<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      {/* <ResponsiveContainer width={300} height={250}> */}
      <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 2.0}>  
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            content={(props) => {
              const { payload } = props;

              return (
                <ul>
                  {data.map((entry, index) => (
                    <li key={`legend-${index}`} style={{ color: entry.color }}>
                      <em style={{ background: entry.color }}></em>
                      <span style={{color: '#fff'}}>{`${entry.label}:`}</span>
                      <span className="data_values"  style={{color: '#fff'}}>{` ${entry.value} Tons`}</span>
                    </li>
                  ))}
                </ul>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div> 

)
 
 let [sectionAfterHours, setsectionAfterHours] = React.useState<any>([]);
 let [afterhoursData,setafterhoursData]=React.useState<any>([])
 let [afterhoursColorData,setafterhoursColorData]=React.useState<any>([])
 let MaxIndex, offset = 1;  

 React.useEffect(()=>{
     getAfterHours()
 },[]);

 async function getAfterHours() {
     
     setsectionAfterHours(AfterHours);
     const StartIndex = 0, EndIndex = 24;
     afterhoursFun(StartIndex, EndIndex, AfterHours); 
     
 }


 function afterhoursFun(StartIndex:number, EndIndex:number, ahdata:Array<any>) {
     let cdata = ahdata;
     MaxIndex = (cdata.length);
     let AfterTotal = 0;
     afterhoursData = `<div class="afterhours_tree"> `
     
     afterhoursData = afterhoursData +` <ul>`

     for (var i = StartIndex; i < EndIndex; i++) {
         afterhoursData = afterhoursData + 
                 `<li>                                    
                         <p> ` + cdata[i].DepartmentName + ` 
                             <span class="` + cdata[i].DepartmentName + `">` + cdata[i].TotalTons + `</span>
                         </p>   
                 </li>`
         AfterTotal = AfterTotal + parseInt(cdata[i].TotalTons);
     }

     afterhoursData = afterhoursData + `</ul>`
      
     afterhoursData = afterhoursData + `</div>`;

     let afterhoursDataColor = `<div class="color_value">              
               <ul>`
                 for (var i = StartIndex; i < EndIndex; i++) {
                     afterhoursColorData = Math.round((parseInt(cdata[i].TotalTons) / AfterTotal) * 100);
                     afterhoursDataColor = afterhoursDataColor + `<li class="` + cdata[i].DepartmentName + `" style="width : ` + afterhoursColorData + `%"></li>`
                 }
                 
                 afterhoursDataColor = afterhoursDataColor + `</ul>                        
             </div>`;

     setafterhoursData(afterhoursData);
     setafterhoursColorData(afterhoursDataColor);
 }
  

return (
<WidgetWrapper className="smart-city_box segregation_metrics-box">  

<TitleBar title="Waste Segregation Metrics"  icon='https://static.iviva.com/images/Udhayimages/waste-seg-matrix.png'></TitleBar>  

<div className="smart-city-content">  
 <div className="technician_chart" style={{ height: 200 }}>  
     <MyResponsivePie/>
 </div>  

      <div className="body" style={{marginTop: '2em'}}>
 
         <div className='sub_title_bar district-waste'> District Waste (Tons)</div>  
         <div className='afterhours_inner_widget'> 
         
          <div className="afterhours_data_color" dangerouslySetInnerHTML={{__html: afterhoursColorData }}></div> 
             <div className="afterhours_data" dangerouslySetInnerHTML={{__html: afterhoursData }}></div>
        </div>
    </div>
</div>

</WidgetWrapper>
)
}

export default Waste_Segregation_Metrics;
