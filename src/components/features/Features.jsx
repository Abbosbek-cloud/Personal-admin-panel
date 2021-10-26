import React from 'react'
import "./features.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function Features() {
  const features = [
    {
      name: "Ravenue",
      price : "$2,215",
      rate : -11.4,
      comp : "Compared to last month",
      icon: <ArrowDownward className="featuredIcon negative"/>
    },
    {
      name: "Sales",
      price : "$4,217",
      rate : -8.5,
      comp : "Compared to last month",
      icon: <ArrowDownward className="featuredIcon negative"/>

    },
    {
      name: "Cost",
      price : "$5,213",
      rate : +6.4,
      comp : "Compared to last month",
      icon : <ArrowUpward className="featuredIcon" />
    },
  ]
  return (
    <div classNam="featuredInfo container-sm">
      {features.map(feature => 
        <div classNam="featuredItem row">
          <span classNam="featuredTtile">{feature.name}</span>
          <div classNam="featuredMoneyContainer">
            <span classNam="featuredMoney">{feature.price}</span>
            <span classNam="featuredMoneyRate">{feature.rate} {feature.icon}</span>
          </div>
          <span classNam="featuresub">{feature.comp}</span>
        </div>
      )}
    </div>
  );
}
