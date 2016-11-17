var TicTacClient = React.createClass({
  getInitialState: function() {
    return {
      tiles: [
        "", "", "",
        "", "", "",
        "", "", ""
      ],
      numTurns: 0
    };
  },
  handleClick: function(event) {
    var tiles = this.state.tiles;
    var id = event.target.id;
    console.log(id);
    // human marks his spot.
    this.humanMark(id);

    // ai marks spot.
    this.aiMark(id);

    this.setState({ tiles: tiles, turn: this.state.turn = "o" ? "x" : "o" });
  },
  humanMark: function(id) {
    var tiles = this.state.tiles;
    var numTurns = this.state.numTurns;
    this.setState({ tiles: tiles[id] = "o" });
    console.log(tiles);
    this.setState({ numTurns: numTurns + 1 });
    console.log("numturns is: " + numTurns)
  },
  aiMark: function (id) {
    var tiles = this.state.tiles;
    var numTurns = this.state.numTurns;
    if (numTurns === 1 && tiles[0] === "o")
      this.setState({ tiles: tiles[4] = "x" });
    else if (tiles[2] === "o")
      this.setState({ tiles: tiles[1] = "x" });
    this.setState({ numTurns: numTurns + 1 });
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
  }
});

ReactDOM.render(
  <TicTacClient />,
  document.getElementById('content')
);
