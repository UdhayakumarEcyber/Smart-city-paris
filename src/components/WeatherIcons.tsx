import React from 'react';
import { WidgetWrapper } from "uxp/components";
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const WeatherIcons: React.FC<IMapChangeMode> = ({ uxpContext }) => {
  const weatherIcons = [ 
    'rainy',  
    'cloud',
    'sun'
  ];

  const handleWeatherClick = (state: string) => {
    uxpContext.eventHandler?.(EventsEnum.WeatherControl, { state });
    console.log('Weather', state)
  };

  return (
    <WidgetWrapper className="smart-city_box">
      <div className='weather-list'>
        <ul>
          {weatherIcons.map((icon, index) => (
            <li key={index}>
              <a href="javascript:void(0);" onClick={() => handleWeatherClick(icon)}>
                <img src={`https://static.iviva.com/images/Udhayimages/${icon}.png`} alt={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </WidgetWrapper>
  );
};

export default WeatherIcons;


 