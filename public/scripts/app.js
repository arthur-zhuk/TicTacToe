var TicTacClient = React.createClass({
  getInitialState: function() {
    return {
      tiles: [
        "", "", "",
        "", "", "",
        "", "", ""
      ],
      winScore: { player: 0, ai: 0 },
      winTiles: [
        2, 7, 6,
        9, 5, 1,
        4, 3, 8
      ],
      turn: "o"
    }
  },
  handleClick: function(event) {
    var tiles = this.state.tiles;
    var id = event.target.id;
    var winScore = this.state.winScore;
    var winTiles = this.state.winTiles;
    if (tiles[id] !== "") {
      return;
    }
    console.log(this.state.winScore);

    tiles[id] = this.state.turn;
    //debugger;
    winScore.player += winTiles[id];

    this.setState({ tiles: tiles, turn: this.state.turn === "o" ? "x" : "o", winScore: winScore });
    //checkWinner();
  },
  checkWinner: function() {

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
