import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, router} from 'react-router';
import Popup from '../../components/popup/popup';

const posts = [{_id:"mozq6"},{_id:"nv8m0"},{_id:"44n4c"},{_id:"ap9mx"},{_id:"00m8d"},{_id:"83c27"}];

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {popup_visible: false};
    }
    renderPosts(row, index) {
        return (
            <li key={row._id} className="nbs-flexisel-item">
                <div className="banner-bottom-grid">
                    <h3>Blog Title is HEMP</h3>
                    <img src="images/3.jpg" alt=" " className="img-responsive"/>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident
                    </p>
                    <div className="more">
                        <Link to="/posts/1312" className="hvr-bounce-to-bottom sint" style={{float:"right"}}>Read More</Link>
                    </div>
                </div>
            </li>
        );
    }
    triggerPopup() {
        this.setState({popup_visible: true});

        let elem = this.refs.popup_div.refs.popup;
        let pos = -300;
        setInterval(()=>{
            if (pos == 20) {
                clearInterval();
            } else {
                pos++;
                elem.style.bottom = pos + "px";
            }
        }, 5);
    }
    closePopup() {
        this.setState({popup_visible: false});
        let elem = this.refs.popup_div.refs.popup;
        elem.style.bottom = -300 + "px";
    }

    render() {
        return (
            <div className="header-bottom">
                <div className="header-bottom-top">
                    <ul>
                        <li><a href="#" className="g"> </a></li>
                        <li><a href="#" className="p"> </a></li>
                        <li><a href="#" className="facebook"> </a></li>
                        <li><a href="#" className="twitter"> </a></li>
                    </ul>
                </div>
                <div className="clearfix"></div>

                <div style={{marginBottom:35, height:640}}>
                    <h3 onClick={this.triggerPopup.bind(this)} style={{color:"#c34c21",fontSize:"30pt",fontFamily:"LobsterTwo-Regular",textAlign:"center"}}>Kategorija 1</h3>
                    <ul className="nbs-flexisel-ul" style={{width:"100%",marginTop:25}}>
                        {posts.map(this.renderPosts.bind(this))}

                    </ul>
                </div>

                <Popup visible={this.state.popup_visible} closePopup={this.closePopup.bind(this)} ref="popup_div"/>
            </div>
        );
    }
}

export default Category;