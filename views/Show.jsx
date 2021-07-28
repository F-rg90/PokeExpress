<h1> Gotta Catch 'Em All</h1>

<h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>

<img src={pokemon.img + '.jpg'}/>
<a href="/pokemon">Back</a>
)
}
}

module.exports = Show;
