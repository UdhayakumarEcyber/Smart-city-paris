import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const SunController: React.FunctionComponent<IMapChangeMode> = (props) => {
  const [currentHour, setCurrentHour] = useState(12); // 12 pm in hours
  const [showTooltip, setShowTooltip] = useState(false);

  const { uxpContext } = props;
  const inputRef = useRef<HTMLInputElement>(null);  

  useEffect(() => {
    const now = new Date(); 
    const initialHour = now.getHours() + now.getMinutes() / 60;
    setCurrentHour(initialHour);
  }, []);

  const changeFormatTime = (value: number) => {
    const hours = Math.floor(value) % 24;
    const formattedHours = String(hours).padStart(2, '0');
    const minutes = Math.round((value % 1) * 60);
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => { 
    const newHour = parseFloat(event.target.value); 
    setCurrentHour(newHour); 
    //console.log(`Current Time: ${changeFormatTime(newHour)}`); 
    uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(newHour) }); 
    inputRef.current?.blur(); 
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const calculateGradientPercentage = () => {
    const start = 6;
    const end = 29;

    return ((currentHour - start) / (end - start)) * 100;
  };

  return (
    <div className='timer-widget'>
      <div className='timer-slider' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     
     
        <input
          ref={inputRef}  
          type="range"
          className='timer-range'
          min={6}
          max={29}
          step={0.5}
          value={currentHour}
          onChange={handleTimeChange}
          onClick={() => uxpContext.eventHandler?.(EventsEnum.SunPosition, { time: changeFormatTime(currentHour) })}
          style={{
            background: `linear-gradient(to right, rgb(9 230 152) 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`
          }}
          title={`Selected Time: ${changeFormatTime(currentHour)}`} 
         
        />


        {showTooltip && (
          <p className='tooltip' style={{ top: `calc(${calculateGradientPercentage()}% - 5rem)` }}>
            Time: {changeFormatTime(currentHour)}
          </p>
        )}
      </div>
    </div>
  );
}

export default SunController;
 