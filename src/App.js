import back from './background.mp4';
import './App.css';

function App() {
  return (
    <div>
      <video className='videoTag' autoPlay loop muted>
        <source
          src= {back}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </div>

  );
}

export default App;
