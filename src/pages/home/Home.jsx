import Chart from '../../components/charts/Chart'
import Features from '../../components/features/Features'
import './home.css'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

export default function Home() {
  return (
    <div classNam="home">
      <Features />
      <Chart data={ userData } title="User Analytics" grid dataKey="Active User" />
      <div classNam="homeWidget">
        <WidgetSm />
        <WidgetLg /> 
      </div>
    </div>
  )
}
