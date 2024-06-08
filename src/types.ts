// src/types.ts

export interface ActivityItem {
  name: string;
  value: string;
}

export interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

export interface LineChartDataPoint {
  name: string;
  value: number;
  //time, pull_requests, merges, meetings, documentation
  // Add more properties as needed
}

export interface PieChartDataPoint {
  name: string;
  value: number;
}


export interface Activity {
  name: string;
  totalActivity: ActivityItem[];
  dayWiseActivity: DayWiseActivity[];
}
