var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			showAbout: false,
			showPortfolio: false,
			showContact: false
		};
	},
		aboutClick: function(){
		this.setState({
			showAbout: true,
			showPortfolio: false, 
			showContact: false
		});
	},
		portfolioClick: function(){
			this.setState({
				showAbout: false,
				showPortfolio: true,
				showContact: false
			})
	},
		contactClick: function(){
			this.setState({
				showAbout: false,
				showPortfolio: false,
				showContact: true
			})
	},
		render: function(){
			return(
				<div className="nav-bar">
					<div onClick={this.aboutClick}> 
						Home Page 
						{this.state.showAbout ?  <AboutPage /> : null }
					</div>
					
					<div onClick={this.portfolioClick}> 
						Portfolio
						{this.state.showPortfolio ? <PortfolioPage /> : null } 
					</div>
					
					<div onClick={this.contactClick}> 
						Contact
						{this.state.showContact ? <ContactPage /> : null } 
					</div>
				</div>
			);
		}
}); 

var AboutPage = React.createClass({
	getInitialState: function(){
		return{
			showAbout: true,
			showPortfolio: false,
			showContact: false
		};
	},
		render: function(){
			return(
				<div>
					<div className="about-page">
						Hey there! My name is Ada and I'm a recent WDI grad who enjoys blah blah blah.
					</div>
				</div>
				);
		}
})

var PortfolioPage = React.createClass({
	getInitialState: function(){
		return{
			showAbout: false,
			showPortfolio: true,
			showContact: false
		}
	},
	render: function(){
		return(
			<div>
				<div className="portfolio-page">
					Here is a list of shit that's I've done. 
					<li>bleh</li>
					<li>bleh</li>
					<li>bleh</li>
				</div>
			</div>
			)
	}
})

var ContactPage = React.createClass({
	getInitialState: function(){
		return{
			showAbout: false,
			showPortfolio: false,
			showContact: true
		}
	},
	render: function(){
		return(
			<div>
				<div className="contact-page">
					This is my contacts.
					877-393-4448.
				</div>
			</div>
			)
	}
})


ReactDOM.render(
	<div>
		<MainComponent/>
	</div>,
	document.getElementById('main-container')
);