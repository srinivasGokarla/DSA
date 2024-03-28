// // WordSearch.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const WordSearch = () => {
//   const [word, setWord] = useState('');
//   const [meanings, setMeanings] = useState([]);
//   const [synonyms, setSynonyms] = useState([]);
//   const [antonyms, setAntonyms] = useState([]);
//   const MEANINGS_API_URL = `https://api.api-ninjas.com/v1/thesaurus/${word}/definitions?limit=5&api_key=mn0RE9kEpB31k4pguIeBHQ==U9y4GfNdRaiG8QIX`;
// const SYNONYMS_API_URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=5&api_key=YOUR_API_KEY`;
// const ANTONYMS_API_URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=5&api_key=YOUR_API_KEY`;
// //mn0RE9kEpB31k4pguIeBHQ==U9y4GfNdRaiG8QIX
// //https://api.api-ninjas.com/v1/thesaurus?word=
  
//   const handleSearch = async () => {
//     try {
//         const meaningsResponse = await axios.get(`${MEANINGS_API_URL}`);
//         const synonymsResponse = await axios.get(`${SYNONYMS_API_URL}`);
//         const antonymsResponse = await axios.get(`${ANTONYMS_API_URL}`);
        
//         setMeanings(meaningsResponse.data);
//         setSynonyms(synonymsResponse.data);
//         setAntonyms(antonymsResponse.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   return (
//     <div>
//       <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
      
//       <div>
//         <h2>Meanings</h2>
//         <ul>
//           {meanings.map((meaning, index) => (
//             <li key={index}>{meaning}</li>
//           ))}
//         </ul>
//       </div>
      
//       <div>
//         <h2>Synonyms</h2>
//         <ul>
//           {synonyms.map((synonym, index) => (
//             <li key={index}>{synonym}</li>
//           ))}
//         </ul>
//       </div>
      
//       <div>
//         <h2>Antonyms</h2>
//         <ul>
//           {antonyms.map((antonym, index) => (
//             <li key={index}>{antonym}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WordSearch;

import React, { useState } from 'react';
import axios from 'axios';

const WordSearch = () => {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`, {
        headers: {
          'X-Api-Key': 'mn0RE9kEpB31k4pguIeBHQ==U9y4GfNdRaiG8QIX'
        }
      });

      const { definitions, synonyms, antonyms } = response.data;

      setMeanings(definitions || []);
      setSynonyms(synonyms || []); 
      setAntonyms(antonyms || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {/* <div  className='box' >
        <h2>Meanings</h2>
        <ul>
          {meanings.map((meaning, index) => (
            <li key={index}>{meaning}</li>
          ))}
        </ul>
      </div> */}

      <div className='box'>
        <h2>Synonyms</h2>
        <ul>
          {synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>

      <div  className='box' >
        <h2>Antonyms</h2>
        <ul>
          {antonyms.map((antonym, index) => (
            <li key={index}>{antonym}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordSearch;

