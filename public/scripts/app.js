var TicTacClient = React.createClass({
  getInitialState: function() {
    return {
      tiles: [
        "", "", "",
        "", "", "",
        "", "", ""
      ],
    }
  },
  handleClick: function(event) {
    var tiles = this.state.tiles;
    var id = event.target.id;
    console.log(id);

    this.setState({ tiles: tiles, turn: this.state.turn = "o" ? "x" : "o" });
  },
  render: function() {
    var handler = this.handleClick;
    return (
      <div className="main_area" id="game">
        {this.state.tiles.map(function(tile, index){
          return <div className="tile" key={index} id={index} onClick={handler}>{tile}</div>
        })}
      </div>
    )
  },

});

ReactDOM.render(
  <TicTacClient />,
  document.getElementById('content')
);
