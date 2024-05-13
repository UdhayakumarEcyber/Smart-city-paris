import React, { useState, useEffect } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp'; 

interface IMapChangeMode {
  uxpContext: IContextProvider;
} 

const TopHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props; 
  
  return (
    <WidgetWrapper className="smart-city_box empty-box"> 

        <div className="header-content">
              <div className='logo'></div>
                <h3>Madina Smart City</h3>   
        </div> 

    </WidgetWrapper> 
  );
};
export default TopHeader; 
 