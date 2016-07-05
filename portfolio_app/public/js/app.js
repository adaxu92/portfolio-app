var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			showAbout: false,
			showPortfolio: false,
			showContact: false
		}
	},
		handleClick: function(){
		this.setState(
			{showAbout = !showAbout},
			{showPortfolio = showPortfolio}, 
			{showContact = showContact}
		})
	},
		render: function(){
			return(
				<div className="homePage">
					<div className={this.state.showAbout ? "" : "hidden"} onClick={this.handleClick}></div>
					<div className={this.state.showPortfolio ? "hidden" : ""}></div>
					<div className={this.state.showContact ? "hidden": ""}></div>
				</div>
			)
		}
	}
}); 
	


ReactDOM.render(
	<div>
		<MainComponent/>
	</div>,
	document.getElementById('main-container')
);