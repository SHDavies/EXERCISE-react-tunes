var React = require('react');
var SearchItunes = require('./SearchItunes');
var Griddle = require('griddle-react');

var ImageComponent = React.createClass({
  render: function() {
    return(
      <img src={this.props.data}></img>
    );
  }
});

var UrlComponent = React.createClass({
  render: function() {
    return (
      <a href={this.props.data}>{this.props.rowData.trackName}</a>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {data: ""};
  },
  updateState: function(info) {
    this.setState({
      data: info
    });
  },
  render: function(){
    var griddleMeta = [
      {columnName: 'trackName',displayName: 'Name'},
      {columnName: 'artistName',displayName: 'Artist'},
      {columnName: 'primaryGenreName',displayName: 'Genre'},
      {columnName: 'artworkUrl100',displayName: 'Artwork',customComponent: ImageComponent},
      {columnName: 'trackPrice',displayName: 'Price'},{columnName: 'kind',displayName: 'Type'},
      {columnName: 'trackViewUrl',displayName: 'Online Link',customComponent: UrlComponent}
    ];
    var style1 = {marginTop: '49px', borderRadius: 0};
    var style2 = {margin: '7px'};
    return (
      <span>
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-6" style={style2}>
                <SearchItunes cb={this.updateState}></SearchItunes>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default" style={style1}>
          <div className="panel-heading">
            {this.state.data ? "Your Search Results" : "Make a Search"}
          </div>
          <Griddle results={this.state.data} tableClassName="table" columnMetadata={griddleMeta} columns={['trackName', 'artistName', 'primaryGenreName', 'artworkUrl100', 'trackPrice', 'trackViewUrl']}></Griddle>
        </div>
      </span>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
