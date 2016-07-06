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
				<div>
					<div className="nav-bar">
						<div className="about-page" onClick={this.aboutClick}> 
						Home Page 
						</div>
					
						<div className="portfolio-page" onClick={this.portfolioClick}>
						Portfolio	
						</div>

						<div className="contact-page" onClick={this.contactClick}> 
						Contact
						</div>
					</div>	
					
					<div className="show-results">
						{this.state.showAbout ?  <AboutPage /> : null }
						{this.state.showContact ? <ContactPage /> : null } 
						{this.state.showPortfolio ? <PortfolioPage /> : null } 
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
					<div className="about-text">
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
				<div className="portfolio-text">
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
				<div className="contact-text">
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