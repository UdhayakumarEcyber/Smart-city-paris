    
import React, { useState, useEffect, useRef } from 'react';  
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import { IContextProvider } from '../uxp';  
import { AutoSizer } from 'react-virtualized';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId: string,
    locationkey: string  
} 

const Pole_Details: React.FunctionComponent<IWidgetProps> = (props:any) => { 

    return (   

     <WidgetWrapper className="smart-city_box building_layout-box  pole-detail-box">
      <TitleBar title="Pole Details" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
        <div className="smart-city-content">  
         
            <div className='pole-details'>

                <div className='pole-details-top'>
                    <div className='pole-number'>
                        <label>Pole Number :</label>
                        <span> 231-M`L-</span>
                    </div>
                    <div className='pole-logo'> 
                        <span></span>
                    </div>
                </div>

                <div className='pole-details-content'>
                    <ul>
                        <li><label>No. of Devices :</label> <span>2</span></li>
                        <li> <label>Pole Status :</label> <span>ON/OFF/ERROR</span></li>
                        <li><label>Alarm Message :</label> <span>1 High and 2 Medium Failure</span></li>
                        <li><label>Location :</label> <span>Neighbourhood, Municipality</span></li>
                    </ul>

                    <ul>
                        <li><label>Controller ID :</label> <span>SL-0000078882</span></li>
                        <li> <label>Alarm Status :</label> <span>ALERT</span></li>
                        <li><label>Serverity :</label> <span>HIGH, MEDIUM, LOW</span></li>
                        <li><label>Alarm Type :</label> <span>Main Fail</span></li>
                        <li><label>Last Updated :</label> <span> 14-02-24 14:11 GST</span></li>
                    </ul>

                    <ul>
                        <li><label>Controller ID :</label> <span>SL-0000078882</span></li>
                        <li> <label>Alarm Status :</label> <span>ALERT</span></li>
                        <li><label>Serverity :</label> <span>MEDIUM</span></li>
                        <li><label>Alarm Type :</label> <span>Lux Sensor Blocked</span></li>
                        <li><label>Last Updated :</label> <span> 14-02-24 14:11 GST</span></li>
                    </ul>
                    
                    
                </div>

            </div>
              
          </div> 
        </WidgetWrapper>  
    )
}; 

 export default Pole_Details;


 