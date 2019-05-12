var React= require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = ()=>{
        return(
            <div>
                <h2>Navigation Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', backgroundColor:'gray'}}>Get Weather</IndexLink>&nbsp;
                <Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold', backgroundColor:'gray'}}>About</Link> &nbsp;
                <Link to="examples" activeClassName="active" activeStyle={{fontWeight:'bold', backgroundColor:'gray'}}>Examples</Link>
            </div>
            
        );
    }

module.exports = Navigation;
