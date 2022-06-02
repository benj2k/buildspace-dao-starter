import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("address : ", address);

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to CopyPasteDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  return (
    <div className="landing">
      <h1>Wallet connected !</h1>
    </div>
  );
};

export default App;
