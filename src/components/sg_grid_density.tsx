import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { IContextProvider } from "../uxp";
import { EventsEnum } from "../index";
import { TitleBar, WidgetWrapper } from "uxp/components";

interface IMapChangeMode {
  uxpContext: IContextProvider;
}

const SgGridDensity: React.FunctionComponent<IMapChangeMode> = (props) => {
  const [currentHour, setCurrentHour] = useState(12); // 12 pm in hours

  const { uxpContext } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const now = new Date();
    const initialHour = now.getHours() + now.getMinutes() / 60;
    setCurrentHour(initialHour);
  }, []);

  const changeFormatTime = (value: number) => {
    const hours = Math.floor(value) % 24;
    const formattedHours = String(hours).padStart(2, "0");
    const minutes = Math.round((value % 1) * 60);
    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newHour = parseFloat(event.target.value);
    setCurrentHour(newHour);
    uxpContext.eventHandler?.(EventsEnum.SetSGGridDensity, { percentage: 65 });
    inputRef.current?.blur();
  };

  const calculateGradientPercentage = () => {
    const start = 6;
    const end = 29;

    return ((currentHour - start) / (end - start)) * 100;
  };

  return (
    <WidgetWrapper className="smart-city_box sg_density-box">
      <TitleBar title="SG Density Controller" />
      <div className="sg_density-widget">
        <div className="timer-slider">
          <input
            ref={inputRef}
            type="range"
            className="timer-range"
            min={0}
            max={100}
            step={5}
            list="steplist"
            value={50}
            onChange={handleTimeChange}
            onClick={() =>
              uxpContext.eventHandler?.(EventsEnum.SetSGGridDensity, {
                percentage: 65,
              })
            }
            style={{
              background: `linear-gradient(to right, rgb(9 230 152) 0%, #023d28 ${calculateGradientPercentage()}%, #fff ${calculateGradientPercentage()}%, #ddd 100%)`,
            }}
            title={`Selected Time: ${changeFormatTime(currentHour)}`}
          />
          {/* </div> */}
          <datalist id="steplist">
            <option>0</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
            <option>60</option>
            <option>65</option>
            <option>70</option>
            <option>75</option>
            <option>80</option>
            <option>85</option>
            <option>90</option>
            <option>95</option>
            <option>100</option>
          </datalist>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default SgGridDensity;
