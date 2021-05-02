import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count : 0,
      heads : 0,
      tails : 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
      <h1>Yazı mı Tura mı?</h1>
      <Coin side={this.state.side} flipping={this.state.flipping} />
      <button onClick={this.handleClick}>At!</button>
      <p>
        Toplam
        <strong> {this.state.count} </strong>
        atıştan
        <strong> {this.state.heads} </strong>ü tura
        <strong> {this.state.tails} </strong>
        si yazı geldi.
      </p>
    </div>
    );
  }
}

export default CoinFlipper;

