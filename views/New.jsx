const React = require('react');

class New extends React.Component{
  constructor(){
    super()
    this.state={
      name: "Oshawott"
    }
  }
  render(){
    return (
      <div>
      <h1>Create a Pokemon</h1>

          <form action="/pokemon" method="POST">
            Name: <input type="text" name="name"/><br/>
            image <input type="text" name="Img"/><br/>
            Captured?: <input type="checkbox" name="Captured"/><br/>
            <input type="submit" name="" value="Generate Pokemon"/>
          </form>
      </div>
    );
  }
}
module.exports = New;
