import React, { FC, useEffect } from 'react';
import { WidgetWrapper, TitleBar } from "uxp/components"; 
 
import { loadSmplrJs, Smplr } from '@smplrspace/smplr-loader';
import { Space } from '@smplrspace/smplr-loader/dist/generated/smplr';
import { tables, groupsPrev, zones } from './data'; 
import { IContextProvider } from '../uxp';

interface IWidgetProps {
  uxpContext?: IContextProvider,
  instanceId?: string
}


const BuildingOccupancy: React.FunctionComponent<IWidgetProps> = (props) => {
  const map = React.useRef(null);
  let [pirSensors, setData] = React.useState([]);
  let [occSensors, setGroups] = React.useState([]); 
 

React.useEffect(() => {
  
  if (pirSensors.length > 0 && occSensors.length > 0) {
     updateDataLayers();
  }
}, [pirSensors, occSensors]);

React.useEffect(() => {
  if (props.uxpContext) {
     props.uxpContext.executeAction("PIR", "getPIRValues", {}, { json: true })
        .then((res: any) => setData(res))
        .catch((e: any) => console.error(e));

     props.uxpContext.executeAction("PIR", "getOccValues", {}, { json: true })
        .then((occ: any) => setGroups(occ))
        .catch((e: any) => console.error(e));
  }
}, [props.uxpContext]);


React.useEffect(() => {
  
  loadSmplrJs('umd')
     .then((smplr) => {
        const _space = new smplr.Space({
           spaceId: "fe74631e-60b9-4294-8d3e-a66c085fd273",
           clientToken: "pub_245931da5bad4cdc8a8b3b12c74b4b6d",
           containerId: 'test',
        });

        _space.startViewer({
           preview: false,
           onReady: () => { 
              updateDataLayers();
           },
           onError: (error) => console.error('Could not start viewer', error),
        });

        map.current = _space;
     })
     .catch((error) => console.error(error));
}, []);

  return (
    <WidgetWrapper className="smart-city_box floor-occupancy-box">
      
            <TitleBar title="Building Occupancy" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
        
           <div className="smart-city-content">  
     
              <div id="ViewsMenu" className="modal-layer show"> 

          <div className="smplr-wrapper">
              <div id="test" className="smplr-embed"></div>
          </div>
          </div> 

       </div>
     </WidgetWrapper>
  )

  function updateDataLayers() {     
      // remove previous layers if any
      map.current?.removeDataLayer('rooms');
      map.current?.removeDataLayer('desks');
    
      // add new layers
      map.current?.addDataLayer({
        id: 'zones',
        type: 'polygon',
        data: zones,
        //tooltip: (d:any) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
        color: (d:any) => d.color,
        alpha: 0.15,
        height: (d:any) => d.name == 'Zone A' ? '2.9' : '0.9',
      });
      map.current?.addDataLayer({
        id: 'desks',
        type: 'furniture',
        data: tables,
        tooltip: (d:any) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
        color: (d:any) => d.region === 'red' ? '#ff0000' : '#00ff00',
      });
      map.current?.addDataLayer({
        id: 'pirSensors',
        type: 'point',
        data: pirSensors,
        tooltip: (d:any) => `${d.name} - ${d.latestValue == 1 ? 'On' : d.latestValue == 0 ? 'Off' : d.latestValue == 254 ? 'Not Responding' : 'No Response for > 4 min'}`,
        color: (d:any) => d.latestValue == 1 ? '#ebe534' : d.latestValue == 0 ? '#0f0f0f' : d.latestValue == 254 ? '#030bfc' : '#fc0339',
      });
      map.current?.addDataLayer({
        id: 'occSensors',
        type: 'polygon',
        data: occSensors,
        tooltip: (d:any) => `${d.groupName} - ${d.latestValue} %`,
        color: '#42f5b3',
        height: '0.9',
      });
    }
}; 
  export default BuildingOccupancy;

 