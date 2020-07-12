import React,{ useState, useEffect }  from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';
import Axios from 'axios';

const App = () => {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState([true])

  useEffect(()=>
  {
    const fetch = async () =>{
    const results = await Axios('https://www.breakingbadapi.com/api/characters')
    console.log(results.data)
    setItems(results.data)
    setIsLoading(false)
    }

  fetch()
  },[])
  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
