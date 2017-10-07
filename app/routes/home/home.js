import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, router} from 'react-router';
import DatePicker from "react-datepicker";
import moment from 'moment';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import 'url-search-params-polyfill';
import 'react-datepicker/dist/react-datepicker.css';

const data = [{_id:"721s2", title:"CBD+", category:"kat1", url:"www.hempmedico.com/cbd", language:"SLO", post_image:"/img/coekot.jpg", date_added:"19.09.2017"},
    {_id:"scmo2", title:"Hemp = ambrosia", category:"kat2", url:"www.hempmedico.com/hemp-ambrosia", language:"EN", post_image:"/img/img.jpg", date_added:"19.09.2017"},
    {_id:"pokn8", title:"CannaHoney", category:"kat3", url:"www.hempmedico.com/cannabis-honey", language:"EN", post_image:"/img/mourinho.jpg", date_added:"19.09.2017"}];
const suggested = [{_id:"movv6"},{_id:"sv8m0"},{_id:"84nmc"}, {_id:"90asd"}];
const left_posts = [{_id:"xsa9x"},{_id:"mvbov"}];
const three = [{_id:"ap9mx"},{_id:"00m8d"},{_id:"83c27"}];

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {tab:"popular", email:""};
    }

    componentWillMount() {
        // get everything
    }
    changeEmail(event) {
        this.setState({email: event.target.value});
    }
    changeTab(tab) {
        this.setState({tab});
        // get suggested (popular / recent)
    }
    renderThree(row, index) {
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
    renderPost(row) {
        return (
            <div key={row._id} className="blog-left-grid">
                <div className="blog-left-grid-left">
                    <h3><a href="single.html">voluptates repudiandae non recusandae</a></h3>
                    <p>June 29 2015 | <Link to="/kat" style={{textDecoration:"underline", textTransform: "uppercase", color:"#999"}}>KATEGORIJA</Link></p>
                </div>
                <div className="blog-left-grid-right">
                    <a href="#" className="hvr-bounce-to-bottom non">20 Comments</a>
                </div>
                <div className="clearfix"> </div>
                <a href="single.html"><img src="images/4.jpg" alt=" " className="img-responsive" /></a>
                <p className="para"> Itaque earum rerum hic tenetur a sapiente delectus,
                    ut aut reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.Et harum quidem rerum
                    facilis est et expedita distinctio. Nam libero tempore, cum
                    soluta nobis est eligendi optio cumque nihil impedit quo minus
                    id quod maxime placeat facere possimus, omnis voluptas assumenda
                    est, omnis dolor repellendus. Temporibus autem quibusdam et
                    aut officiis debitis.</p>
                <div className="rd-mre">
                    <a href="single.html" className="hvr-bounce-to-bottom quod">Read More</a>
                </div>
            </div>
        );
    }
    renderSuggested(row) {
        return (
            <Link key={row._id} to={`/posts/1312`}>
                <div className="facts">
                    <div className="tab_list">
                        <img src="images/cbd_popup_scaled.jpg" alt=" " className="img-responsive" />
                    </div>
                    <div className="tab_list1">
                        <span className="tab_list1_title">excepturi sint occaecati</span>
                        <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </Link>
        );
    }

    subscribeToNewsletter() {
        // check if valid email
        if (this.state.email) {
            // subscribe
            this.setState({email:''});
        } else {
            alert("Email not valid");
        }
    }

    render () {
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
                <div className="clearfix"> </div>

                <div className="banner">
                    <script src="js/responsiveslides.min.js"></script>


                        <div  id="top" className="callbacks_container wow fadeInUp" data-wow-delay="0.5s">
                            <ul className="rslides" id="slider3">
                                <li>
                                    <div className="banner-inf">
                                        <h3>soluta nobis est eligendi cumque</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                        lectus, non euismod tortor ante eu libero</p>
                                        <a href="single.html">See More</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className="banner-bottom">
                    <div className="nbs-flexisel-container">
                        <div className="nbs-flexisel-inner">
                            <ul className="nbs-flexisel-ul" style={{width:"100%"}}>
                                {three.map(this.renderThree.bind(this))}

                            </ul>
                            <div className="nbs-flexisel-nav-left" style={{top: 330}}></div>
                            <div className="nbs-flexisel-nav-right" style={{top: 330}}></div>
                        </div>
                    </div>

                    <script type="text/javascript" src="js/jquery.flexisel.js"></script>
                </div>

                <div className="blog">
                    <div className="blog-left">

                        {left_posts.map(this.renderPost.bind(this))}

                    </div>
                    <div className="blog-right">
                        <div className="sap_tabs">
                            <div id="horizontalTab" style={{display: "block", width: "100%", margin: 0}}>
                                <ul className="resp-tabs-list">
                                    <li className={`resp-tab-item grid1 ${this.state.tab=="popular" ? "resp-tab-active": ""}`} onClick={this.changeTab.bind(this, "popular")}><span>Popular</span></li>
                                    <li className={`resp-tab-item grid2 ${this.state.tab=="recent" ? "resp-tab-active": ""}`} onClick={this.changeTab.bind(this, "recent")}><span>Recent</span></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="resp-tabs-container">
                                    <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                        <div className="facts">
                                            <div className="tab_list">
                                                <a href="images/7-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                                    <img src="images/7.jpg" alt=" " className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="tab_list1">
                                                <a href="#">excepturi sint occaecati</a>
                                                <p>June 30 2015 <span>Nam libero tempore, cum soluta nobis.</span></p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="facts">
                                            <div className="tab_list">
                                                <a href="images/8-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                                    <img src="images/8.jpg" alt=" " className="img-responsive" />
                                                </a>
                                            </div>

                                            <div className="tab_list1">
                                                <a href="#">excepturi sint occaecati</a>
                                                <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="facts">
                                            <div className="tab_list">
                                                <a href="images/9-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                                    <img src="images/9.jpg" alt=" " className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="tab_list1">
                                                <a href="#">excepturi sint occaecati</a>
                                                <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="facts">
                                            <div className="tab_list">
                                                <a href="images/10-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                                  <img src="images/10.jpg" alt=" " className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="tab_list1">
                                                <a href="#">excepturi sint occaecati</a>
                                                <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                                                <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                                                <p>June 30 2015<span>Nam libero tempore, cum soluta nobis.</span></p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                    <div className="tab-1" aria-labelledby="tab_item-1">

                                        {suggested.map(this.renderSuggested.bind(this))}

                                    </div>
                                </div>

                                <script src="js/easyResponsiveTabs.js" type="text/javascript"></script>

                                <link rel="stylesheet" href="css/swipebox.css"/>
                                <script src="js/jquery.swipebox.min.js"></script>

                            </div>
                        </div>
                        <div className="newsletter">
                            <h3>Subscribe To Our Newsletter</h3>
                            <form>
                                <input type="email" value={this.state.email} className="form-control" onChange={this.changeEmail.bind(this)} placeholder="Email Address"/>
                                <input type="submit" value="Send" style={{float:"right"}} onClick={this.subscribeToNewsletter.bind(this)}/>
                            </form>
                        </div>
                        <div className="four-fig">
                            <div className="four-fig1">
                                <a href="images/11-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                    <img src="images/11.jpg" className="img-responsive" alt=" " />
                                </a>
                            </div>
                            <div className="four-fig1">
                                <a href="images/14-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                    <img src="images/14.jpg" className="img-responsive" alt=" " />
                                </a>
                            </div>
                            <div className="four-fig1">
                                <a href="images/10-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                    <img src="images/21.jpg" className="img-responsive" alt=" " />
                                </a>
                            </div>
                            <div className="four-fig1">
                                <a href="images/8-.jpg" className="b-link-stripe b-animate-go   swipebox"  title="">
                                    <img src="images/22.jpg" className="img-responsive" alt=" " />
                                </a>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="pgs">
                            <h3>Pages</h3>
                            <ul>
                                <li><a href="#">doloribus asperiores repellat</a></li>
                                <li><a href="#">Itaque earum rerum hic tenetur</a></li>
                                <li><a href="#">deserunt mollitia laborum et dolorum</a></li>
                                <li><a href="#">facilis est et expedita distinctio</a></li>
                                <li><a href="#">occaecati cupiditate non provident</a></li>
                                <li><a href="#">deserunt mollitia laborum et dolorum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

Dashboard.contextTypes = {
    router: React.PropTypes.object
};

export default Dashboard;