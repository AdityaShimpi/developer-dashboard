import React, { useEffect, useState } from 'react';
import './App.css';
import ActivityTable from './components/ActivityTable';
import { fetchData } from './services/api';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
interface Activity {
  name: string;
  totalActivity: { name: string, value: string }[];
  dayWiseActivity: { date: string, items: { children: { count: string, label: string, fillColor: string }[] } }[];
}

const App: React.FC = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
        console.log('Fetched Data:', responseData); // Log the response data
        setData(responseData.AuthorWorklog.rows); // Set rows as data
      } catch (error: any) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar/>
         </div>
      <div className='welcome'>
      <h1>Welcome to,</h1>
      <h2>Dev <br></br>Dynamics</h2>
      </div>
      
      {error && <p>{error}</p>}
      <ActivityTable data={data} />

      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
