import React, { useState, useEffect } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp'; 

interface IMapChangeMode {
  uxpContext: IContextProvider;
} 

const TopHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props; 
  
  return (
    <WidgetWrapper className="smart-city_box poi-box"> 

                <div className="smart-city-content">  
                    <div className="poi-sec">  
                        <a href='javascript:void(0);'>Click me</a>
                    </div>  
                </div>

    </WidgetWrapper> 
  );
};
export default TopHeader; 
 