var React = require("react");
var Router = require("react-router");
var SyntaxStore = require("../stores/syntax-store.js");
var cookie = require('react-cookie');

var SyntaxChanger = React.createClass({

	getInitialState: function() {
		return {
			theme : SyntaxStore.getCookie()
		};
	},
	
	handleChange: function(e){
		var theme = e.target.value;
		SyntaxStore.setCookie(theme);
		this.saveTheme(theme);
		e.preventDefault();
		return null;
	},

	saveTheme: function(theme){
		var self = this;

		self.setState({
			theme : theme
		});
	},

	render: function() {
		var theme = this.state.theme;

		return (
 			<select defaultValue={theme} onChange={this.handleChange}>
	 			<option value="ascetic">ascetic</option>
	 			<option value="color-brewer">color-brewer</option>
	 			<option value="docco">docco</option>
	 			<option value="github">github</option>
	 			<option value="mono-blue">mono-blue</option>
	 			<option value="tomorrow">tomorrow</option>
	 			<option value="vs">vs</option>
	 			<option value="xcode">xcode</option>
 			</select>
		);
	}
});

module.exports = SyntaxChanger;