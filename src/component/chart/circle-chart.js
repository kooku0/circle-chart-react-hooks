import React from 'react'
import './circle-chart.css'

const CircleChart = (props) => {
  const circleColor = props.percentage > 0 && props.percentage <= 100 ? props.color : "#dfdfdf"

  return (
    <div>
      <div className="circle-chart">
        <svg viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            style={{ stroke: circleColor }}
            className="circle"
            strokeDasharray={`${props.percentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage" style={{ fill: circleColor }}>
            {props.percentage}%
          </text>
        </svg>
      </div>
    </div>
  )
}

export default CircleChart