import React, { useState, useEffect } from 'react';
import { WidgetWrapper } from 'uxp/components';
import { IContextProvider } from '../uxp';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const TopRightHeader: React.FunctionComponent<IMapChangeMode> = (props) => {
  const { uxpContext } = props;
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<string>('');

  useEffect(() => {
    
    const getCurrentDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
      setCurrentDate(now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }));
    };
 
    const getCurrentWeather = async () => {
      try {
        const apiKey = '607a538dc29b5380f8ed270cd7db39c2';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Madinah&units=metric&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json(); 
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description; 
          setCurrentWeather(`${temperature}°C`);
        } else {
          console.error('Error fetching weather data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };
 
    getCurrentDateTime();
    getCurrentWeather();
 
    const intervalId = setInterval(getCurrentDateTime, 1000);
 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <WidgetWrapper className="smart-city_box top-rht-container-box">
      <div className='header-rht-content'>
          <div className='rgt-head-cont head-timer'>{currentTime}</div>
          <div className='rgt-head-cont head-date'>{currentDate}</div>
          <div className='rgt-head-cont head-weather'>{currentWeather}</div>
          <div className='rgt-head-cont head-location'>Pullman Hotel</div> 
      </div>   

    </WidgetWrapper>
  );
};

export default TopRightHeader;
 