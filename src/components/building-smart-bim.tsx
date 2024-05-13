 
import React, { useState } from 'react';
import { WidgetWrapper, TitleBar } from "uxp/components";

const BuildingSmartBim: React.FunctionComponent<{}> = () => {
  

  return (
    <WidgetWrapper className="smart-city_box building_layout-box">
       <TitleBar title="Smart Bim" icon='https://static.iviva.com/images/Udhayimages/mda-building-images/bim.png'></TitleBar>  
    
      <div className="smart-city-content"> 

 
      <div id="ViewsMenu" className="modal-layer show">

          <div className='model-items'>
              <div className="menu-item image">
                <div className="item-header">
                  <div className="blue-plate"></div>
                  <img className="header-image" src="https://demo.iviva.cloud/AccountResources/OI/14e92953-5143-4bd6-a5d3-b61c414af193-a.png"/>
                  <div className="header-no-image"></div>
                  <div className="blue-overlay"></div>
                  <div className="blue-overlay-mask"></div>
                </div>
                <div className="item-body">
                    <div className="primary-text">435 Bourke St</div>
                    <div className="secondary-text">Singapore</div>
                </div>
                <div className="centering-container">
                  <div className="blue-button enabled" ><a href='https://demo.iviva.cloud/Apps/SmartBIM/home' target='_blank'>VIEW</a></div>
                </div>
              </div>


              <div className="menu-item image">
                <div className="item-header">
                  <div className="blue-plate"></div>
                  <img className="header-image" src="https://demo.iviva.cloud/AccountResources/OI/14e92953-5143-4bd6-a5d3-b61c414af193-a.png"/>
                  <div className="header-no-image"></div>
                  <div className="blue-overlay"></div>
                  <div className="blue-overlay-mask"></div>
                </div>
                <div className="item-body">
                  <div className="primary-text">435 Bourke St Building view</div>
                  <div className="secondary-text">435 Bourke St Building view</div>
                </div>
                <div className="centering-container">
                  <div className="blue-button enabled" ><a href='https://demo.iviva.cloud/Apps/SmartBIM/home' target='_blank'>VIEW</a></div>
                </div>
              </div>
       
              <div className="menu-item image">
                <div className="item-header">
                  <div className="blue-plate"></div>
                  <img className="header-image" src="https://demo.iviva.cloud/AccountResources/OI/14e92953-5143-4bd6-a5d3-b61c414af193-a.png"/>
                  <div className="header-no-image"></div>
                  <div className="blue-overlay"></div>
                  <div className="blue-overlay-mask"></div>
                </div>
                <div className="item-body">
                    <div className="primary-text">435 Bourke St Floor 5</div>
                    <div className="secondary-text">435 Bourke St Floor 5</div>
               </div>
                <div className="centering-container">
                  <div className="blue-button enabled" ><a href='https://demo.iviva.cloud/Apps/SmartBIM/home' target='_blank'>VIEW</a></div>
                </div>
              </div>

              <div className="menu-item image">
                <div className="item-header">
                  <div className="blue-plate"></div>
                  <img className="header-image" src="https://demo.iviva.cloud/AccountResources/OI/14e92953-5143-4bd6-a5d3-b61c414af193-a.png"/>
                  <div className="header-no-image"></div>
                  <div className="blue-overlay"></div>
                  <div className="blue-overlay-mask"></div>
                </div>
                <div className="item-body">
                    <div className="primary-text">435 Bourke St GF</div>
                    <div className="secondary-text">435 Bourke St GF</div>
                </div>
                <div className="centering-container">
                  <div className="blue-button enabled" ><a href='https://demo.iviva.cloud/Apps/SmartBIM/home' target='_blank'>VIEW</a></div>
                </div>
              </div>
          </div>
      </div>


      </div>
    </WidgetWrapper>
  );
};

export default BuildingSmartBim;

 