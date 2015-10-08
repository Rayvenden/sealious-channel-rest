var Sealious = {};

var React = require("react");
var Router = require("react-router");
var Description_provider = require("../stores/description-provider.js");
var Store = require("../stores/store.js");
var SyntaxStore = require("../stores/syntax-store.js");

module.exports = Sealious;

Sealious.Navigation = require("./navigation.jsx");
Sealious.SelectAction = require("./select-action.jsx");
Sealious.ResourceType = require("./resource-type.jsx");
Sealious.Output = require("./output.jsx");
Sealious.RestHandler_method = require("./rest-handler-method.jsx");


Sealious.App = React.createClass({
	mixins: [ Router.State, Router.Navigation],
	getInitialState: function(){
		return {
			structure : []
		};
	},

	componentDidMount: function(){
		this.loadStructure();
	},

	loadStructure: function(){
		Description_provider.getStructure().then(this.storeStructure);
	},

	storeStructure: function(structure){
		console.log("app.jsx: loaded rest structure", structure);
		this.setState({
			structure: structure
		});
	},

	render: function () {
		return (
			<div className="app">
				<Sealious.Navigation structure={this.state.structure}/>		
				<Router.RouteHandler structure={this.state.structure}/>
			</div>
		)
	}
});
