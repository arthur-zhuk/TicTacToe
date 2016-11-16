var TicTacClient = React.createClass({
  getInitialState: function() {
    return {
      tiles: [
        "", "", "",
        "", "", "",
        "", "", ""
      ],
      rows: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
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

    winScore.player += winTiles[id];

    this.setState({ tiles: tiles, turn: this.state.turn = "o" ? "x" : "o", winScore: winScore });
    this.checkWinner();
    // After each click move to the AI's turn.
    this.aiTurn();
  },
  checkWinner: function() {
    var tiles = this.state.tiles;
    // Map through. Check if row contains all of 'o' or 'x' then this.state.turn wins message appears.
    this.state.rows.map(function(row) {
      return row.every(function(element){
        if (tiles[element] === "o") {
          return console.log(tiles[element] + " every element in this row is " + tiles[element]);
        }
      })
    });
  },
  // Could also remember the ID in an array and write the code to ignore all Id's who've been selected previously.
  isValid: function(chosenNumber) {
    var tiles = this.state.tiles;
    if (tiles[chosenNumber] !== "") {
      console.log(chosenNumber);
      this.isValid(Math.floor(Math.random() * (8 - 0 + 1)) + 0);
    } else {
      tiles[chosenNumber] = this.state.turn;
    }
  },
  aiTurn: function() {
    //this.setState({ turn: this.state.turn ===})
	  var randomNumber;
    var tiles = this.state.tiles;
	tiles[0] = "oo";
	if (tiles[0][1] === "o")
		  alert("it's 2d");
	  else if (tiles[2].includes("o"))
	  randomNumber = 5;
    //var randomNumber = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    this.isValid(randomNumber);
    this.setState({ turn: this.state.turn = "x" ? "o" : "x" });
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
