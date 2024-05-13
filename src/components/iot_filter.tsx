import React, { useState, useEffect } from 'react';
import { WidgetWrapper, MultiSelect, FormField } from 'uxp/components';
import { IContextProvider } from '../uxp';
import { EventsEnum } from '../index';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId: string,
    locationkey: string,
    appMode: string;
} 

const IOT_Filter: React.FunctionComponent<IWidgetProps> = (props) => {
    const { uxpContext, appMode } = props; 

    const [assetCategory, setAssetCategory] = useState(['Streetlight']);
    const [assetState, setAssetState] = useState(['Normal']);
    const [assetEffect, setAssetEffect] = useState(['Steady']);
    const [assetLocation, setAssetLocation] = useState(['Ad Dar Dist']);

    useEffect(() => {
        uxpContext.eventHandler?.(
            EventsEnum.SummaryGroupFilter, 
                { 
                    AssetCategory: assetCategory, 
                    AssetState: assetState, 
                    AssetEffect: assetEffect,
                    AssetLocation: assetLocation
                }
            ); 
    }, [
        assetCategory,
        assetState,
        assetEffect,
        assetLocation
    ]);

    const assetCategoryData = [
        { value: 'Streetlight', label: 'Streetlight' },
        { value: 'CCTV', label: 'CCTV' }
    ];
    
    const assetStateData = [
        { value: 'Normal', label: 'Normal' },
        { value: 'Warning', label: 'Warning' },
        { value: 'Alert', label: 'Alert' }
    ];
    
    const assetEffectData = [
        { value: 'Steady', label: 'Steady' },
        { value: 'Glow', label: 'Glow' },
        { value: 'Blink', label: 'Blink' }
    ]; 
    
    const [assetLocationData, setAssetLocationData] = useState([]); 
        
    useEffect(() => {
        getData();
    }, []);

    function getData() {  
        props.uxpContext.executeAction("E3D","GetDistrictDetails",{},{json:true}).then((res: any)=>{ 
            console.log("District",res.map( (value:any) => ({label:value.name, value:value.name})));
            setAssetLocationData(res.map( (value:any) => ({label:value.name, value:value.name})));
        }).catch((e: any)=>{
            
        }); 
    }  

    return (    
        <WidgetWrapper className="smart-city_box iot_filter-detail-box">
            <div className="smart-city-content" style={{width:'auto', overflow:"none"}}>
                <div className="iot-filter">
                    <div className="iot-filter-top chart-top">
                        <FormField inline className="showcase-input">
                            <div className="select-filter">  
                                <MultiSelect 
                                    placeholder="Asset Category"
                                    options={assetCategoryData}
                                    onChange={(value: any) => setAssetCategory(value)}
                                    selected={assetCategory}
                                    isValid={!!assetCategory}
                                    hideClearButton  
                                    hideDoneButton 
                                />
                            </div>
                            <div className='select-filter'>  
                                <MultiSelect
                                    placeholder="Asset State"
                                    options={assetStateData}
                                    onChange={(value: any) => setAssetState(value)}
                                    selected={assetState}
                                    isValid={!!assetState}
                                    hideDoneButton
                                />  
                            </div>
                            <div className='select-filter'>   
                                <MultiSelect    
                                    placeholder="Asset Effect"
                                    options={assetEffectData}
                                    onChange={(value: any) => setAssetEffect(value)}
                                    selected={assetEffect}
                                    isValid={!!assetEffect}
                                    hideDoneButton
                                /> 
                            </div>
                            <div className='select-filter'>  
                                <MultiSelect
                                    placeholder="Asset Location"
                                    options={assetLocationData}
                                    onChange={(value: any) => setAssetLocation(value)}
                                    selected={assetLocation}
                                    isValid={!!assetLocation}
                                    hideDoneButton
                                /> 
                            </div> 
                        </FormField>
                    </div>
                </div> 
            </div>  
        </WidgetWrapper> 
    )
}; 

export default IOT_Filter;




 