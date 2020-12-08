import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import "../styles/Secondpage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import CountUp from "react-countup";
import { stateContext } from "../App";

const Secondpage = () => {
  const { selectedState, setSelectedState } = useContext(stateContext);
  const selectState = selectedState;
  //'selectedState' is the state selected by user from homepage!!

  //const [dashboard, setDashboard] = useState([{}]);
  const [dateChecked, setDateChecked] = useState("");
  const [positive, setPositive] = useState("");
  const [tested, setTested] = useState("");
  const [recovered, setRecovered] = useState("");
  const [death, setDeath] = useState("");
  const [positiveIncrease, setpositiveIncrease] = useState("");
  const [testedIncrease, settestedIncrease] = useState("");
  const [recoveredIncrease, setrecoveredIncrease] = useState("");
  const [deathIncrease, setdeathIncrease] = useState("");
  const [stateName, setStateName] = useState(selectState);
  const [stateAbrev, setStateAbrev] = useState("");

  const [positive1, setPositive1] = useState("");

  let today = new Date();
  let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
  let date2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-2);
  let date3 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-3);
  let date4 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-4);
  let date5 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-5);
  let date6 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-6);
  let date7 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-7);

  let positive2 = positive - positiveIncrease;
  let positive3 = positive - positiveIncrease*2;
  let positive4 = positive - positiveIncrease*3;
  let positive5 = positive - positiveIncrease*4;
  let positive6 = positive - positiveIncrease*5;
  let positive7 = positive - positiveIncrease*6;

  let tested2 = tested - testedIncrease;
  let tested3 = tested - testedIncrease*2;
  let tested4 = tested - testedIncrease*3;
  let tested5 = tested - testedIncrease*4;
  let tested6 = tested - testedIncrease*5;
  let tested7 = tested - testedIncrease*6;

  let recovered2 = recovered - recoveredIncrease;
  let recovered3 = recovered - recoveredIncrease*2;
  let recovered4 = recovered - recoveredIncrease*3;
  let recovered5 = recovered - recoveredIncrease*4;
  let recovered6 = recovered - recoveredIncrease*5;
  let recovered7 = recovered - recoveredIncrease*6;

  let death2 = death - deathIncrease;
  let death3 = death - deathIncrease*2;
  let death4 = death - deathIncrease*3;
  let death5 = death - deathIncrease*4;
  let death6 = death - deathIncrease*5;
  let death7 = death - deathIncrease*6;


  let data = {
    labels: [
      date7,
      date6,
      date5,
      date4,
      date3,
      date2,
      date1,
    ],
    datasets: [
      {
        label: "Confirmed",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(255, 7, 58, 0.6)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(255, 7, 58, 0.6)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 7, 58, 0.6)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [positive7,positive6,positive5,positive4,positive3,positive2,positive],
      },
    ],
  };

  let data2 = {
    labels: [
      date7,
      date6,
      date5,
      date4,
      date3,
      date2,
      date1,
    ],
    datasets: [
      {
        label: "Tested",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(7, 32, 255, 0.6)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(7, 32, 255, 0.6)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(7, 32, 255, 0.6)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [tested7, tested6, tested5, tested4, tested3, tested2, tested],
      },
    ],
  };

  let data3 = {
    labels: [
      date7,
      date6,
      date5,
      date4,
      date3,
      date2,
      date1,
    ],
    datasets: [
      {
        label: "Recovered",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#28a745",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#28a745",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#28a745",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [recovered7, recovered6, recovered5, recovered4, recovered3, recovered2, recovered],
      },
    ],
  };

  let data4 = {
    labels: [
      date7,
      date6,
      date5,
      date4,
      date3,
      date2,
      date1,
    ],
    datasets: [
      {
        label: "Deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(108, 117, 125, 0.6)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(108, 117, 125, 0.6)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(108, 117, 125, 0.6)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [death7, death6, death5, death4, death3, death2, death],
      },
    ],
  };

  let abbrev = new Map();
  abbrev["Alabama"] = "AL";
  abbrev["Alaska"] = "AK";
  abbrev["American Samoa"] = "AS";
  abbrev["Arizona"] = "AZ";
  abbrev["Arkansas"] = "AR";
  abbrev["California"] = "CA";
  abbrev["Colorado"] = "CO";
  abbrev["Connecticut"] = "CT";
  abbrev["Delaware"] = "DE";
  abbrev["District Of Columbia"] = "DC";
  abbrev["Florida"] = "FL";
  abbrev["Georgia"] = "GA";
  abbrev["Guam"] = "GU";
  abbrev["Hawaii"] = "HI";
  abbrev["Idaho"] = "ID";
  abbrev["Illinois"] = "IL";
  abbrev["Indiana"] = "IN";
  abbrev["Iowa"] = "IA";
  abbrev["Kansas"] = "KS";
  abbrev["Kentucky"] = "KY";
  abbrev["Louisiana"] = "LA";
  abbrev["Maine"] = "ME";
  abbrev["Maryland"] = "MD";
  abbrev["Massachusetts"] = "MA";
  abbrev["Michigan"] = "MI";
  abbrev["Minnesota"] = "MN";
  abbrev["Mississippi"] = "MS";
  abbrev["Missouri"] = "MO";
  abbrev["Montana"] = "MT";
  abbrev["Nebraska"] = "NE";
  abbrev["Nevada"] = "NV";
  abbrev["New Hampshire"] = "NH";
  abbrev["New Jersey"] = "NJ";
  abbrev["New Mexico"] = "NM";
  abbrev["New York"] = "NY";
  abbrev["North Carolina"] = "NC";
  abbrev["North Dakota"] = "ND";
  abbrev["Northern Mariana Is"] = "MP";
  abbrev["Ohio"] = "OH";
  abbrev["Oklahoma"] = "OK";
  abbrev["Oregon"] = "OR";
  abbrev["Pennsylvania"] = "PA";
  abbrev["Puerto Rico"] = "PR";
  abbrev["Rhode Island"] = "RI";
  abbrev["South Carolina"] = "SC";
  abbrev["South Dakota"] = "SD";
  abbrev["Tennessee"] = "TN";
  abbrev["Texas"] = "TX";
  abbrev["Utah"] = "UT";
  abbrev["Vermont"] = "VT";
  abbrev["Virginia"] = "VA";
  abbrev["Virgin Islands"] = "VI";
  abbrev["Washington"] = "WA";
  abbrev["West Virginia"] = "WV";
  abbrev["Wisconsin"] = "WI";
  abbrev["Wyoming"] = "WY";

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("http://localhost:3500/states/" + abbrev[stateName]);
      //const result = await axios("http://localhost:3500/states/" + "AK");
      //setDashboard(result.data); 
      console.log(result);
      setDateChecked(result.data.lastUpdated);
      setPositive(result.data.positive);
      setTested(result.data.negative);
      setRecovered(result.data.recovered);
      setDeath(result.data.deaths);
      setStateAbrev(abbrev[stateName]);
      setpositiveIncrease(result.data.positiveIncrease);
      settestedIncrease(result.data.negativeIncrease);
      setrecoveredIncrease(result.data.negativeIncrease);
      setdeathIncrease(result.data.deathIncrease);
      //setStateName(result.data[0].state);
      setPositive1(result.data.positive1)
    };
    const savedata = () => {};
    fetchdata();
    savedata();
  }, []);
  return (
    //This is the Second page. It will have COVID-19 dashboard for chosen state.
    //Use the 'styles/Secondpage.css' to style this page.
    <div className="Secondpage">
      <div className="left-arrow-icon">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
      </div>
      <div className="mainContent-area">
        <div className="data-area">
          <div className="stateName">
            <h1>{stateName}</h1>
          </div>
          <div className="updatedTime">{dateChecked}</div>
          <div className="detail-data-area">
            <div className="StateConfirmed">
              <h3 className="detail-data-list">Confirmed</h3>
              <div className="Confirmed-increased">
                <FontAwesomeIcon className="arrow-up" icon={faArrowUp} />
                {positiveIncrease}
              </div>
              <CountUp end={positive} start={0} duration={4} separator="," />
            </div>
            <div className="StateTested">
              <h3 className="detail-data-list">Tested</h3>
              <div className="Tested-increased">
                <FontAwesomeIcon className="arrow-up" icon={faArrowUp} />
                {testedIncrease}
              </div>
              <CountUp end={tested} start={0} duration={4} separator="," />
            </div>
            <div className="StateRecovered">
              <h3 className="detail-data-list">Recovered</h3>
              <div className="Recovered-increased">
                <FontAwesomeIcon className="arrow-up" icon={faArrowUp} />
                {recoveredIncrease}
              </div>
              <CountUp end={recovered} start={0} duration={4} separator="," />
            </div>
            <div className="StateDeaths">
              <h3 className="detail-data-list">Deaths</h3>
              <div className="Death-increased">
                <FontAwesomeIcon className="arrow-up" icon={faArrowUp} />
                {deathIncrease}
              </div>
              <CountUp end={death} start={0} duration={4} separator="," />
            </div>
          </div>
        </div>

        {/*data.datasets.data = graphIncrease(data, dashboard.deathIncrease)}
      {//data.datasets.data*/}
        <div className="graph-area">
          <div className="graph">
            <Line
              data={data}
              width={500}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="graph2">
            <Line
              data={data2}
              width={500}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="graph3">
            <Line
              data={data3}
              width={500}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="graph4">
            <Line
              data={data4}
              width={500}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
      <div className="right-arrow-icon">
        <Link
          to="/restrictions-on-travelers"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </div>
  );
};

export default Secondpage;
