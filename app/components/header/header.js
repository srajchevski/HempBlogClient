import React, {Component} from 'react';
import {Link} from 'react-router';

const categories = ["Home", "Kat 1","Kat 2","Kat 3","Kat 4","Kat 5"];

export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  renderCategories(cat) {
    return (
        <li key={cat} className="hvr-bounce-to-bottom"><Link to={cat==="Home" ? "/" : `/${cat}`}>{cat}</Link></li>
    );
  }

  render() {
    return (
        <div className="header">
          <div className="header-nav">
            <nav className="navbar navbar-default">

              <div className="navbar-header">
                <Link className="navbar-brand" to="/" style={{backgroundColor:"seagreen"}}><span>H</span>empMedico</Link>
              </div>


              <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {categories.map(this.renderCategories.bind(this))}
                </ul>

              </div>
            </nav>
          </div>
        </div>
    )
  }
}
