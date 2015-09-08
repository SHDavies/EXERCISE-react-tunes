var React = require('react');
var $ = require('jquery');

var SearchItunes = React.createClass({
  propTypes: {
    cb: React.PropTypes.func.isRequired
  },
  formatURL: function() {
    return 'https://itunes.apple.com/search?term=' + this.refs.searchInput + '&entity=' + this.refs.selectInput;
  },
  handleSubmit: function(e) {
    $.ajax({
      method: "JSONP",
      url: this.formatURL,
      error: function(error) {
        console.log(error);
      },
      success: function(results) {
        this.props.cb(results.data);
      }
    }.bind(this));
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="input-group-inline col-sm-4">
            <input type="text" ref="searchInput" />
          </div>
          <div className="input-group-inline col-sm-4">
            <select ref="selectInput">
              <option value="musicTrack">Music</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <div className="input-group-inline col-sm-4">
            /*handleSubmit button goes here*/
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchItunes;
