import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="split">
            <div className="split_left">
              <a href="#" className="heading">
                <p>
                  OPEN SOCIETY
                  <br />
                  FOUNDATIONS
                </p>
              </a>
            </div>
            <div className="split_right">
              <nav>
                <a href="#" className="header_button active">
                  WER WIR SIND
                </a>
                <a href="#" className="header_button">
                  WIE WIR ARBEITEN
                </a>
                <a href="#" className="header_button">
                  WAS WIR TUN
                </a>
                <img
                  className="header_icon lupa"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ka13r27y8vpYbhAhshK_8k4MMIonx75Rh-w0hvCxwmJfNFQPKbqkRuMn8jSFdnnEaHk&usqp=CAU"
                  alt="Search"
                />
                <img
                  className="header_icon menu"
                  src="https://static.thenounproject.com/png/3187934-200.png"
                  alt="Menu"
                />
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
