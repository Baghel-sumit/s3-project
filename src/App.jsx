import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if the user has a preference for dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply the theme based on the user's preference
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Toggle the theme class and update local storage
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <div className="">
      <button className="btn-primary" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p className="text-light">Light mode content</p>
      <p className="text-dark">Dark mode content</p>
    </div>
  );
}

export default App;
