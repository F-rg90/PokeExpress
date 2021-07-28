const React = require('react');
const pokemon = require('../models/pokemon');



const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};


class Index extends React.Component{
  render() {
    return(
      <div style={myStyle}>
        <h1>See all the pokemon!</h1>
        <ul>
        {
          pokemon.map((pokemon, i) => {
            return(
              <li key={pokemon._id}>
                <a href={`/pokemon/${i}`}>
                {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
                </a>
                
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
module.exports = Index;
