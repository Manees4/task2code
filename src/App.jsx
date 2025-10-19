import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import StatCard from "./components/StatCard";
import UsersTable from "./components/UsersTable";
import ActivityChart from "./components/ActivityChart";
import "./App.css";


export default function App() {
  const [active, setActive] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ posts: 0, comments: 0, albums: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, commentsRes, albumsRes, usersRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/comments"),
          fetch("https://jsonplaceholder.typicode.com/albums"),
          fetch("https://jsonplaceholder.typicode.com/users"),
        ]);

        const [posts, comments, albums, users] = await Promise.all([
          postsRes.json(),
          commentsRes.json(),
          albumsRes.json(),
          usersRes.json(),
        ]);

        setStats({
          posts: posts.length,
          comments: comments.length,
          albums: albums.length,
        });
        setUsers(users);

        const dummy = Array.from({ length: 10 }).map((_, i) => ({
          day: `Day ${i + 1}`,
          value: Math.floor(Math.random() * 100),
        }));
        setChartData(dummy);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <Sidebar active={active} onSelect={setActive} darkMode={darkMode} />
      <main className="main-content">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="stats-row">
          <StatCard title="Total Posts" value={stats.posts} />
          <StatCard title="Total Comments" value={stats.comments} />
          <StatCard title="Total Albums" value={stats.albums} />
        </div>

        {active === "overview" && (
          <div className="overview-section">
            <ActivityChart data={chartData} />
          </div>
        )}

        {active === "users" && (
          <div className="users-section">
            <UsersTable users={users} />
          </div>
        )}

        {active === "reports" && (
          <div className="report-box">
            <h2>Reports</h2>
            <p>Report data and analytics will appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
}





