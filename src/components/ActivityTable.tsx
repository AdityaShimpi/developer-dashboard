/*import React from 'react';
import { RiGitPullRequestLine, RiGitMergeLine, RiGitCommitLine, RiEyeLine, RiMessageLine, RiAlertLine, RiCheckLine } from 'react-icons/ri';
import DayWiseActivityChart from './DayWiseActivityChart';

interface ActivityItem {
  name: string;
  value: string;
}

interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

interface Activity {
  name: string;
  totalActivity: ActivityItem[];
  dayWiseActivity: DayWiseActivity[];
}

interface ActivityTableProps {
  data: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th><RiGitPullRequestLine /> PR Open</th>
            <th><RiGitMergeLine /> PR Merged</th>
            <th><RiGitCommitLine /> Commits</th>
            <th><RiEyeLine /> PR Reviewed</th>
            <th><RiMessageLine /> PR Comments</th>
            <th><RiAlertLine /> Incident Alerts</th>
            <th><RiCheckLine /> Incidents Resolved</th>
          </tr>
        </thead>
        <tbody>
          {data.map((activity, index) => (
            <tr key={index}>
              <td>{activity.name}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'PR Open')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'PR Merged')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'Commits')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'PR Reviewed')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'PR Comments')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'Incident Alerts')?.value}</td>
              <td>{activity.totalActivity.find((item: ActivityItem) => item.name === 'Incidents Resolved')?.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.map((activity, index) => (
        <div key={index}>
          <h2>Day-wise Activity for {activity.name}</h2>
          <DayWiseActivityChart data={activity.dayWiseActivity} />
        </div>
      ))}
    </>
  );
};

export default ActivityTable;
*/
import './activitytable.css';
import React, { useState } from 'react';
import { Activity } from '../types';
import DayWiseActivityChart from './DayWiseActivityChart'; // Import DayWiseActivityChart component
/*import LineChart from './LineChart'; // Import LineChart component
import PieChart from './PieChart'; // Import PieChart component*/

import client01 from '../assets/client01.jpeg';
import client02 from '../assets/client02.jpeg';
import client03 from '../assets/client03.jpeg';
import client04 from '../assets/client04.jpeg';

// Define images array
const images = [client01, client02, client03, client04];

interface ActivityTableProps {
  data: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<null | number>(null); // State to track the selected card index

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index); // Update the selected card index when a card is clicked
    const daywiseSection = document.getElementById('daywise-data-section');
    if (daywiseSection) {
      daywiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="activity-table-cards-container-outer">
      <div className="Dashboard">
        <h1>Dashboard</h1>
      </div>
      <div className="activity-table-cards-container">
        {data.map((personActivity, index) => (
          <div key={index} className="activity-table-card" onClick={() => handleCardClick(index)}>
            <img src={images[index]} alt={`Client ${index + 1}`} />
            <h3>{personActivity.name}</h3>
            <ul>
              {personActivity.totalActivity.map((item, i) => (
                <li key={i}>
                  {item.name}: {item.value}
                  <div className="progress-bar-container">
                    <div
                      className={`progress-bar ${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="daywise-data" id="daywise-data-section"> {/* Add id for scrolling */}
        {/* Conditionally render the DayWiseActivityChart component */}
        {selectedCardIndex !== null && (
          <div>
            <h2>Day-wise Activity for {data[selectedCardIndex].name}</h2>
            <DayWiseActivityChart data={data[selectedCardIndex].dayWiseActivity} />
           {/*
            <LineChart data={data[selectedCardIndex].totalActivity} /> 
            <PieChart data={data[selectedCardIndex].totalActivity} /> 
            */} 
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityTable;



