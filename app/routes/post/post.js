import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, router} from 'react-router';

const post = {};
const suggested = [{_id:"movv6"},{_id:"sv8m0"},{_id:"84nmc"}];

class Post extends Component {
    constructor(props) {
        super(props);
    }
    renderSuggested(row, index) {
        return (
            <li key={row._id} className="nbs-flexisel-item">
                <div className="banner-bottom-grid">
                    <h3>Blog Title is HEMP</h3>
                    <img src="images/3.jpg" alt=" " className="img-responsive" />
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

                <div className="single-post-div">
                    <div className="post-header">
                        <Link to="/kat" className="single-post-cat">Kategorija</Link>
                        <h3 style={{color:"#c34c21",fontSize:"30pt",fontFamily:"LobsterTwo-Regular",textAlign:"center"}}>Post CBD THC</h3>
                    </div>
                    <img src="/images/cbd-benefits.jpg" />
                    <p className="para">
                        Lorem ipsum dolor sit amet, vim paulo nobis ea. Meis graeci evertitur in pro. Dictas commodo recusabo id pri, ut usu feugiat facilis noluisse, ei viderer perfecto phaedrum mel. Ea vis erant voluptua vituperatoribus, ut eum oporteat forensibus. Summo tacimates nam ad. Pri probo equidem an.

                        Iisque expetenda qui cu, esse minimum sed ne, an ullum graeci vix. Idque appareat perfecto ne pri, mel id ullum tollit delectus. An sit ancillae evertitur, est solet mucius corpora ea, his utinam praesent id. Accusam molestiae sadipscing mea no, eum quodsi mentitum conceptam at. Inani adversarium pro te, no autem qualisque mea. An mea aliquip interesset complectitur, quo ut laoreet offendit tincidunt.

                        Dignissim vituperata incorrupte quo ad. Vis wisi ancillae id, in ius nisl alienum, ei mei falli quaestio honestatis. Pro tation doming euripidis an, tamquam indoctum et qui. No exerci volumus iracundia sea, pro ea falli labitur iracundia. Quodsi prompta veritus sed in, quo ea falli graeco labitur, conceptam ullamcorper disputationi ea vel.

                        Agam solum est ea, ei possit albucius erroribus est, pro et quodsi quaestio scribentur. Cu eum doming nusquam, ludus eirmod aperiam ea vix, primis feugiat sea te. Nullam possit in usu, ex mea impedit mediocrem. Munere signiferumque in cum. Quod novum pro ne. Ut sed corrumpit honestatis consequuntur, eu stet urbanitas definiebas qui, pri ut albucius scripserit comprehensam.

                        Sea augue mandamus ex. Sea labore moderatius in. His at virtute omnesque, ei probo audiam mel. Quo consequat contentiones in, velit accusam quo ea, iusto petentium ei nec. Id nonumes corpora deleniti est, vel wisi idque impedit ad, propriae insolens accusata te eos. Pericula consulatu ius at, id sumo possit his, nec alii invenire no.
                    </p>
                </div>

                <div className="row">

                    <h3 style={{color:"#c34c21",fontSize:"26pt",fontFamily:"LobsterTwo-Regular",textAlign:"center"}}>Suggested</h3>
                    <ul className="nbs-flexisel-ul" style={{width:"100%",marginTop:25}}>
                        {suggested.map(this.renderSuggested.bind(this))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Post;