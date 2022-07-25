import "./Votes.css";
import { useState } from "react";

function Votes() {
  const [chocolateVote, setChocolateVote] = useState(0);
  const [vanillaVote, setVanillaVote] = useState(0);
  const [strawberryVote, setStrawberryVote] = useState(0);

  const voteChocolate = () => {
    setChocolateVote(chocolateVote + 1);
  };
  const voteVanilla = () => {
    setVanillaVote(vanillaVote + 1);
  };
  const voteStrawberry = () => {
    setStrawberryVote(strawberryVote + 1);
  };

  const totalVotes = chocolateVote + vanillaVote + strawberryVote;

  const VC = ((chocolateVote / totalVotes) * 100).toFixed(1);
  const VV = ((vanillaVote / totalVotes) * 100).toFixed(1);
  const VS = ((strawberryVote / totalVotes) * 100).toFixed(1);

  let resultsChoco = chocolateVote >= 1;
  let resultsVan = vanillaVote >= 1;
  let resultsStraw = strawberryVote >= 1;

  return (
    <div>
      <div>
        <h1 className="vote-header">Vote Here</h1>
        <button onClick={() => voteChocolate()}>Chocolate</button>
        <button onClick={() => voteVanilla()}>Vanilla</button>
        <button onClick={() => voteStrawberry()}>Strawberry</button>
      </div>

      {resultsChoco ? (
        <>
          <div>
            Chocolate: {chocolateVote} ({VC}%)
          </div>
          <div
            className="choco-bar"
            style={{
              width: VC + "%",
              height: "20px",
              backgroundColor: "brown",
              borderRadius: "25px",
            }}
          ></div>
        </>
      ) : (
        "Chocolate: No votes yet"
      )}
      <br></br>

      {resultsVan ? (
        <>
          <div>
            Vanilla: {vanillaVote} ({VV}%)
          </div>
          <div
            className="van-bar"
            style={{
              width: VV + "%",
              height: "20px",
              backgroundColor: "tan",
              borderRadius: "25px",
            }}
          ></div>
        </>
      ) : (
        "Vanilla: No votes yet"
      )}
      <br></br>
      {resultsStraw ? (
        <>
          <div>
            Strawberry: {strawberryVote} ({VS}%)
          </div>
          <div
            className="straw-bar"
            style={{
              width: VS + "%",
              height: "20px",
              backgroundColor: "pink",
              borderRadius: "25px",
            }}
          ></div>
        </>
      ) : (
        "Strawberry: No votes yet"
      )}
    </div>
  );
}

export default Votes;
