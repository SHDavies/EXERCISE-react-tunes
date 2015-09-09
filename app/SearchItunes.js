var React = require('react');
var $ = require('jquery');

var SearchItunes = React.createClass({
  propTypes: {
    cb: React.PropTypes.func.isRequired
  },
  formatURL: function() {
    return 'https://itunes.apple.com/search?term=' + this.refs.searchInput.getDOMNode().value + '&entity=' + this.refs.selectInput.getDOMNode().value;
  },
  handleSubmit: function(e) {
    $.ajax({
      headers: {'Access-Control-Allow-Origin': '*'},
      dataType: "JSONP",
      url: this.formatURL(),
      error: function(error) {
        console.log(error);
      },
      success: function(data) {
        this.props.cb(data.results);
      }.bind(this)
    });
    this.refs.searchInput = '';
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="input-group-inline col-sm-4">
            <input type="text" ref="searchInput" className="form-control"/>
          </div>
          <div className="input-group-inline col-sm-4">
            <select ref="selectInput" className="form-control">
              <option value="musicTrack">Music</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <div className="input-group-inline col-sm-4">
            <button onClick={this.handleSubmit} className="btn btn-primary">Get Info</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchItunes;
