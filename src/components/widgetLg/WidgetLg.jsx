import "./widgetLg.css"
import Pf from "../images/profile.jpg";

export default function WidgetLg() {

  const userInfo = [
    {
      name : 'George Max',
      date : '2 Jun 2021',
      amount : '$1780',
      type : 'Approved'
    },
    {
      name : 'Louise',
      date : '2 May 2021',
      amount : '$1450',
      type : 'Declined'
    },
    {
      name : 'Mrs.Samira',
      date : '5 Jul 2020',
      amount : '$5680',
      type : 'Pending'
    },
    {
      name : 'Mr.Bek',
      date : '8 Dec 2019',
      amount : '$2380',
      type : 'Approved'
    }
  ]

  const Button = ({ type }) => {
    return <button classNam={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div classNam="widgetLg">
      <h3 classNam="widgetLgTitle">Latest Transactions</h3>
      <table classNam="widgetLgTable">
        <tr classNam="widgetLgTr">
          <th classNam="widgetLgTh">Customer</th>
          <th classNam="widgetLgTh">Date</th>
          <th classNam="widgetLgTh">Amount</th>
          <th classNam="widgetLgTh">Status</th>
        </tr>
        {userInfo.map((user) => (
          <tr classNam="widgetLgTr">
            <td classNam="widgetLgUser">
              <img 
                src={Pf} 
                alt="" 
                classNam="widgetLgUserImage" 
              />
              <span classNam="widgetLgUserName">{user.name}</span>
            </td>
            <td classNam="widgetLgDate">{user.date}</td>
            <td classNam="widgetLgAmount">{user.amount}</td>
            <td classNam="widgetLgStatus">
              <Button type={user.type} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}