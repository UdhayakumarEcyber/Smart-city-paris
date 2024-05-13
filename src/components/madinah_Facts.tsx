    
import React, { useState, useEffect, useRef } from 'react';  
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import { IContextProvider } from '../uxp';   
 

interface IWidgetProps {
    uxpContext?: IContextProvider 
} 
 

const Madinah_Facts: React.FunctionComponent<IWidgetProps> = (props:any) => {  

    return (   

     <WidgetWrapper className="smart-city_box building_layout-box  madinah-facts-box">
      <TitleBar title="Madinah Facts" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
        <div className="smart-city-content">  
         
            <div className='madinah-facts-details'> 

                <div className='madinah-facts-content'>
                    <ul>
                        <li><span>2,137,983</span><label>Population in the Medina region</label> </li>
                        <li><span>18</span><label>Number of government hospitals in the Medina region</label> </li>
                        <li><span>176</span><label>Number of health centers in the Medina region</label> </li>
                        <li><span>1,382</span><label>Archeological sites of the city</label></li>
                        <li><span>47</span><label>Number of mosques in the historic city</label></li>
                    </ul>  
                    
                </div>

            </div>
              
          </div> 
        </WidgetWrapper>  
    )
}; 

 export default Madinah_Facts;


 