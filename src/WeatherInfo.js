import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">
              <FormattedDate date={props.data.date} />,{props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}% </strong>
              <br /> Wind: <strong> {props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={50}
            />
            <div>
              <span className="temperture">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
