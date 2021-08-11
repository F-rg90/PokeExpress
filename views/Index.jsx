const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};


class Index extends React.Component{

  render() {
    console.log("props", this.props.pokemon)
    return(
      <div style={myStyle}>
        <h1>See all the pokemon!</h1>
        <ul>
        {
              this.props.pokemon.map((pokemon, i) => {
                   return(
                     <li key={pokemon._id}>
                       <a href={`/pokemon/${pokemon._id}`}>
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
