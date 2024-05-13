import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent  } from "uxp/components";
 

// Define the type for the option objects
type Option = {
  label: string;
  value: string;
};

type ToggleFilterProps = {
  options: Option[]; // Use the Option type
  value: string;
  onChange: (value: string) => void;
};


const Traffic_Control: React.FunctionComponent<{}> = () => {  
    
    
  let [inputValue1, setInputValue1] = React.useState<string | null>("Location");
  let [selected, setSelected] = React.useState<string | null>("op-1");  
  let [date, setDate] = React.useState<Date>(new Date());
 

  var taffic_Controldata = [ 
      {
          "id": "1", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311101", 
          'street': 'Anbu Ayyub Al-Ansari', 
          "status" : "Green" 
      },
      {
          "id": "2",
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311102",
          "street" : "Anbu Ayyub Al-Ansari",
          "status" : "Green" 
      },
      {
          "id": "3",
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311103",
          "street" : "Anbu Ayyub Al-Ansari",
          "status" : "Green" 
      },
      {
          "id": "4", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311104",
          "street" : "Anbu Ayyub Al-Ansari",
          "status" : "Red" 
      } ,
      {
          "id": "5", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311105",
          "street" : "Anbu Ayyub Al-Ansari",
          "status" : "Red" 
      },
      {
          "id": "6", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311106",
          "street" : "First Ring Rd-Kind Faisal",
          "status" : "Green" 
      } ,
      {
          "id": "7", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311107",
          "street" : "First Ring Rd-Kind Faisal",
          "status" : "Red" 
      } ,
      {
          "id": "8", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311108",
          "street" : "First Ring Rd-Kind Faisal",
          "status" : "Green" 
      } ,
      {
          "id": "9", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311109",
          "street" : "First Ring Rd-Kind Faisal",
          "status" : "Green" 
      } ,
      {
          "id": "10", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311110",
          "street" : "Kind Faisal Rd",
          "status" : "Green" 
      } ,
      {
          "id": "11", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311111",
          "street" : "Kind Faisal Rd",
          "status" : "Red" 
      },
      {
          "id": "12",
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311112",
          "street" : "Kind Faisal Rd",
          "status" : "Red" 
      },
      {
          "id": "13",
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311113",
          "street" : "Kind Faisal Rd",
          "status" : "Green" 
      },
      {
          "id": "14", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311114",
          "street" : "Abdul Muhsin ibn Abdul",
          "status" : "Red" 
      } ,
      {
          "id": "15", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311115",
          "street" : "Abdul Muhsin ibn Abdul",
          "status" : "Green" 
      },
      {
          "id": "16", 
          "work_Order": 'Wo-123456789',
          "location": "Al Masjid an Nabawi", 
          "alert_Time":"42311116",
          "street" : "Abdul Muhsin ibn Abdul",
          "status" : "Green" 
      }
       
  ];
   

  const alertworkordertData  = [ 
    {
        id: '1',
        name: 'Attention', 
        value: 8 
    },
    {
        id: '2',
        name: 'Pending', 
        value: 5 
    },
    {
        id: '3',
        name: 'Resloved', 
        value: 21 
    }
];  

  
  const getDataItems = (max: number, pageToken: string) => {
      let last = 0
  
      if (pageToken !== null) last = parseInt(pageToken);
  
      let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
          let data = taffic_Controldata.filter((item: any, key: number) => (key > last && key <= last + max));
          let response = { items: data, pageToken: (last + data.length).toString() }
          resolve(response);
      })
  
      return p;
  }

    const [toggleFilterValueday, setToggleFilterValueday] = useState("1");

    const handleFilterChangeday = (value: string) => {
      setToggleFilterValueday(value);
    };








    
    const cctvData = [
        {  
          id: 1, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg', 
          selectOptions: ['Al Haram District, Cam 100', 'Al Haram District, Cam 101', 'Al Haram District, Cam 102'],
          selectedOption: 'Al Haram District, Cam 102', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        }, 
        {  
          id: 2, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg', 
          selectOptions: ['Al Masjid An Nabawi, Cam 34', 'Al Masjid An Nabawi, Cam 35', 'Al Masjid An Nabawi, Cam 36'],
          selectedOption: 'Al Masjid An Nabawi, Cam 34', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        },
        {  
          id: 3, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg', 
          selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
          selectedOption: 'Al Haram District, Cam 20', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Red"
        },
        {  
          id: 4, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg',
          selectOptions: ['Al Haram District, Cam 15', 'Al Haram District, Cam 16', 'Al Haram District, Cam 17'],
          selectedOption: 'Al Haram District, Cam 15',  
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        },
        {  
          id: 5, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg', 
          selectOptions: ['Al Haram District, Cam 46', 'Al Haram District, Cam 47', 'Al Haram District, Cam 48'],
          selectedOption: 'Al Haram District, Cam 46', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        },
        {  
          id: 6, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg',
          selectOptions: ['Al Masjid An Nabawi, Cam 26', 'Al Masjid An Nabawi, Cam 27', 'Al Masjid An Nabawi, Cam 27'],
          selectedOption: 'Al Masjid An Nabawi, Cam 26', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Red"
        },
        {  
          id: 7, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg', 
          selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
          selectedOption: 'Al Haram District, Cam 20', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Red"
        },
        {  
          id: 8, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg', 
          selectOptions: ['Al Haram District, Cam 57', 'Al Haram District, Cam 58', 'Al Haram District, Cam 59'],
          selectedOption: 'Al Haram District, Cam 57', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        },
        {  
          id: 9,  
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg', 
          selectOptions: ['Al Masjid An Nabawi, Cam 5', 'Al Masjid An Nabawi, Cam 6', 'Al Masjid An Nabawi, Cam 7'],
          selectedOption: 'Al Masjid An Nabawi, Cam 5', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        },
        {  
          id: 10, 
          cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg', 
          selectOptions: ['Al Haram District, Cam 74', 'Al Haram District, Cam 75', 'Al Haram District, Cam 76'],
          selectedOption: 'Al Haram District, Cam 74', 
          location : "Al Masjid an Nabawi", 
          location_id :"42311112",
          location_status: "Green"
        }     
      ];

 
 

      const [data, setData] = useState(cctvData);

      const handleSelectChange = (itemId: number, newValue: string) => {
        // Update the selected option for the item with the given ID
        setData((prevData) =>
          prevData.map((item) =>
            item.id === itemId ? { ...item, selectedOption: newValue } : item
          )
        );
      }; 
  
    return (


        <WidgetWrapper className="smart-city_box order_summary-box"> 
  
          <TitleBar title="Traffic Control" icon='https://static.iviva.com/images/Udhayimages/traffic-light.png'>

          <div className='top_tabs'>
                <ToggleFilter  
                      options={[
                          { label: "LIST", value: "1" },
                          { label: "CCTV", value: "2" } 
                      ]}
                      value={toggleFilterValueday}
                      onChange={handleFilterChangeday}
                  /> 
               </div> 

          </TitleBar>
  
          
  <div className="smart-city-content"  style={{height:'730px'}}>
        <div className="chart-top">
                        
                        <FormField inline className="showcase-input" > 
                            
                                <SearchBox 
                                    value={inputValue1}
                                    onChange={(newValue) => { setInputValue1(newValue) }}
                                    position="left"
                                    placeholder=''
                                /> 
                            <div style={{width:"20%"}}>   

                            </div>     
                        
                            <Select
                                selected={selected}
                                options={[
                                    { label: "All Alert", value: "op-1" },
                                    { label: "All Alert 1", value: "op-2" },
                                    { label: "All Alert 2", value: "op-3" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                            />

                            <DatePicker
                                title="Date"
                                date={date}
                                onChange={(date) => setDate(date)}
                            />
                            
                        </FormField>
                </div> 
 
        
        <div className="tab-content"  style={{height:'88%'}}>
          {toggleFilterValueday === "1" && (
            <>
            <div   style={{height:'80%'}}>
              <DataTable
                  data={(max, last) => getDataItems(max, last)}
                  pageSize={17}
                  columns={[ 
                      {
                          title: "Location",
                          width: "33%",
                          renderColumn: (item) => <ItemCard
                              item={item}
                              subTitleField="location"
                              className="data-table-item"
                          />
                      },
                      {
                          title: "ID",
                          width: "17%",
                          renderColumn: (item) => <ItemCard
                              item={item}
                              subTitleField="alert_Time"
                              className="data-table-item"
                          />
                      },
                      {
                          title: "Street",
                          width: "35%",
                          renderColumn: (item) => <ItemCard
                              item={item}
                              subTitleField="street"
                              className="data-table-item"
                          />
                      },
                      {
                          title: "Mode",
                          width: "15%",
                          renderColumn: (item) => <ItemCard
                              item={item}
                              subTitleField="status"
                              className={`data-table-item ${item.status}`}
                          />

                           
                      }
                  ]}
              /> 
            </div>

            <div className='smart-city_box waste-bin-box '>
            <div className="smart-city-content" style={{height:'100px'}}>  

                <div className='status-content'>

                    {alertworkordertData.map((item) => ( 
                        <div  key={item.id} className={`status ${item.name}`}>
                            <h3>{item.value}</h3>
                            <p>{item.name}</p>
                        </div> 
                    ))}

                </div>
            </div>
            </div>
</>
          )}
          {toggleFilterValueday === "2" && (


           <div className="smart-city_box cctv-overview-box" style={{height: "460px"}}>  

            
    
           <div className="smart-city-content" style={{height: "auto", marginTop:'0'}}>   
    
                   <div className='status-content'>  
    
                       {data.map((item) => (
                      <div className='cctv-list' key={item.id}>
                         
                        <select
                          value={item.selectedOption}
                          onChange={(e) => handleSelectChange(item.id, e.target.value)}
                        >
                          {item.selectOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
    
                        <div className='cctv-pict'>
                             <img src={item.cctv_pict} alt='CCTV Picture' style={{height:'82px'}}/>
                        </div>

                        <div className='loction'>{item.location}</div>
                        <div className='loction-number'>{item.location_id}</div>
                        <div className={`loction-status ${item.location_status}`}>{item.location_status}</div>
    
                      </div>
                    ))} 
                   
                   </div> 
    
           </div> 
      
       </div> 


          )}
        </div>
      </div>
   
      </WidgetWrapper>  
  
  )
};


  function ToggleFilter({ options, value, onChange }: ToggleFilterProps) {
    return (
      <div className="toggle-filter">
        {options.map(option => (
          <button
            key={option.value}
            className={option.value === value ? "active" : ""}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }


  export default Traffic_Control;