import parse from "html-react-parser";
export default function Availability({ availability }) {
  return (
    <div className="availability">
      <div className="availability-text">
        {parse(availability.acf.availability_text)}
      </div>
      <div className="time">
        <div className="day">{parse(availability.acf.day)}</div>

        <div className="daymonth">
          <div className="month">{parse(availability.acf.month)}</div>
          <div className="year">{parse(availability.acf.year)}</div>
        </div>
      </div>
    </div>
  );
}
