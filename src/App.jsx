import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import ProjectsLayout from './pages/ProjectsLayout';
import NotFound from './components/NotFound';
import './styles/App.css'; // Import Tailwind CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="project/:id" element={<ProjectsLayout />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
