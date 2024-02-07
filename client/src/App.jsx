import './App.css';
import './tailwind.css';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members")
      .then(res => res.json())
      .then(data => setData(data))
    console.log(data);
  }, [])




  return (
    <>
      <WebRouter />
    </>
  );
}

export default App;
