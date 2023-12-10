'use client'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { coinDataContext } from '../context/coin-data.context';

const Search: React.FC = ()=>{
    const data = useContext(coinDataContext);

    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(event.target.value)
    }

   const filteredCoin = data.filter((coin)=>{
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        coin.code.toLocaleLowerCase().includes(searchTerm.toLowerCase())
   });

    return(
        <div>
            <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleSearch}
            className='border border-solid p-2 m-5 border-1 border-black rounded-lg text-black w-1/2'/>
            <ul>
                {filteredCoin.map((coin)=>(
                    <li key={coin.rank}>
                        <Link to={"/asset-details"}>{coin.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;