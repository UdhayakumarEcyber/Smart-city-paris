    
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

const IncidentManagement: React.FunctionComponent<IWidgetProps> = (props:any) => {
    let { uxpContext,locationkey } = props;  

    const [cameras, setcamerasData] = React.useState<any>([])  

    async function getIncidentData() {
        let data = await uxpContext.executeAction("IncidentDashboard2", "GetCamerasForLocation", { LocationKey: locationkey}, { json: true })
         setcamerasData(JSON.parse(data)) 
       // setcamerasData(data);  
        console.log('Hello', data); 
    }

    React.useEffect(() => {
        getIncidentData()
    }, [])  

    return (   

     <WidgetWrapper className="smart-city_box building_layout-box  incident-manage-box">
      <TitleBar title="Incident Management" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
        <div className="smart-city-content">  
         
            <div className="parent8PAXAuto">    

                { cameras.length > 0 && cameras.map((c: any, k: any) => {  
                    return (   
                        <div className="child8PAXAuto">
                            <AutoSizer className='iframe-resize'>
                                {({ height, width }) => {     
                                    let url;  
                                    url = 'https://mda.lucyday.io/Milestone/cctvgrid/index.html?isweblet=1&nvrassetkey=93&camlist='+c?.CamID+'|'+c?.AssetID; 
                                      
                                  return <iframe id="liveIframe" src={url}  width={width} height={height}></iframe>  
                                }}
                            </AutoSizer>   
                        </div> 
                    )
                })}    
         
            </div>    
          </div> 
        </WidgetWrapper>  
    )
}; 

 export default IncidentManagement;


 