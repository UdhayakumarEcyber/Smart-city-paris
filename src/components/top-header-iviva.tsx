import React, { useState } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';



interface IMapChangeMode {
  uxpContext: IContextProvider;
}
interface ITab {
 
}
const TopIvivaHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  
  return (
    <WidgetWrapper className="smart-city_box empty-box"> 

        <div className='header-content iviva-header-content'>
                <div className='logo'></div> 
                <h2>Smart City Digital Twin</h2>
        </div>
 
        {/* <h4>Overall City</h4> */}

    </WidgetWrapper> 
  );
};
export default TopIvivaHeader; 