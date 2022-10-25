import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      email: '',
    };
  }

  async changeHandler(e) {
    await this.setState({ email: e.target.value });
    if (this.state.email) {
      document.querySelector('.email_submit').classList.remove('hide');
    } else {
      document.querySelector('.email_submit').classList.add('hide');
    }
  }

  clickHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <footer>
        <div className="subscribe">
          <div className="container">
            <div className="subscribe_split">
              <p>
                Abonnieren Sie Updates über die Arbeit von Open Society auf der
                ganzen Welt
              </p>
              <form>
                <input
                  placeholder="Deine E-Mail-Adresse"
                  type="text"
                  className="email_form"
                  value={this.state.email}
                  onChange={this.changeHandler}
                />
                <button
                  onClick={this.clickHandler}
                  className="email_submit hide"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer_footer">
          <div className="container">
            <div className="split">
              <div className="social_things">
                <a href="#">
                  <img
                    src="https://www.pngmart.com/files/22/Facebook-PNG-Transparent.png"
                    alt=""
                    className="social_img facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://www.unitedcounties.org/wp-content/uploads/2016/10/Twitter-Logo-Square.png"
                    alt=""
                    className="social_img twitter"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://www.pinclipart.com/picdir/middle/341-3415668_swimming-pool-clipart-black-and-white.png"
                    alt=""
                    className="social_img youtube"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://freepngimg.com/thumb/instagram/118519-logo-pic-insta-png-free-photo.png"
                    alt=""
                    className="social_img instagram"
                  />
                </a>
              </div>
              <div className="privacy">
                <a href="#">Geschäftsbedingungen</a>
                <a href="#">Privatsphäre</a>
                <a href="#">Barrierefreiheit</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
