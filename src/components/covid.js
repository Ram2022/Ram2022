import React, { useEffect, useState } from 'react';
import './covid.css';
export const Covid = () => {
    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const apidata = await fetch("https://api.covid19india.org/data.json");
            const data = await apidata.json();
            setdata(data.statewise[0]);
            console.log(data.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        //alert('hi')
        getCovidData();
    }, [])

    return (
        <div>
            <span className="text-white">Live</span>
            <h4 className="text-white"><span><svg height="100" width="100" className="blinking">
                <circle cx="50" cy="50" r="10" fill="red" />
  Sorry, your browser does not support inline SVG.
</svg> </span></h4>
        
           <marquee> <h2 className="text-white">Covid 19 Live Tracker</h2></marquee>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-counter primary">
                            <i className="fa fa-flag"></i>
                            <span className="count-numbers">INDIA</span>
                            <span className="count-name">Country</span>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card-counter warning2">
                            <i className="fa fa-database"></i>
                            <span className="count-numbers">{data.active}</span>
                            <span className="count-name">Active</span>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card-counter success">
                            <i className="fa fa-database"></i>
                            <span className="count-numbers">{data.recovered}</span>
                            <span className="count-name">Recovered</span>
                        </div>
                    </div>

                   
                </div>
               
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-counter warning">
                            <i className="fa fa-database"></i>
                            <span className="count-numbers">{data.confirmed}</span>
                            <span className="count-name">Confirmed</span>
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="card-counter danger">
                            <i className="fa fa-database"></i>
                            <span className="count-numbers">{data.deaths}</span>
                            <span className="count-name">Death</span>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card-counter time">
                            <i className="fa fa-clock"></i>
                            <span className="count-numbers">{data.lastupdatedtime}</span>
                            <span className="count-name">Last Updated On</span>
                        </div>
                    </div>

                    
                </div>
                <div style={{color: "gray", textAlign:"right", paddingTop: "100px"}}>Developed by:
                 Ram Gupta</div>
                 <div style={{color: "gray", textAlign:"right", paddingTop: "10px"}}>Source:
                 covid19india.org</div>
            </div>
            
        </div>

    )
}
export default Covid;