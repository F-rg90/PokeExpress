const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};


class Index extends React.Component{
  render() {
    return(
      <div>
        <h1>See all the pokemon!</h1>
        <nav>
        <a href='/pokemon/new'>Create a New Pokemon</a>
        </nav>
        <ul>
        {
          pokemon.map((pokemon) => {
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
module.export = Index;
