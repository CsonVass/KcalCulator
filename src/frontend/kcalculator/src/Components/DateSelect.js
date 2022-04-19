import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({startDate, setDate}) => {
  return (
  <div className="col d-flex justify-content-around align-items-center">
    
    <h2 className="d-flex justify-content-center">Date</h2>
    <div>
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setDate(date)}
      dateFormat="yyyy-MM-dd" />
      </div>
  </div>
  )
}

export default DateSelect;