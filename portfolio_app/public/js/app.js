var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			showHome: true,
			showAbout: false,
			showPortfolio: false,
			showContact: false
		};
	},
		homeClick:function(){
		this.setState({
			showHome: true,
			showAbout: false,
			showPortfolio: false,
			showContact: false
		});
	},
		aboutClick: function(){
		this.setState({
			showHome: false,
			showAbout: true,
			showPortfolio: false, 
			showContact: false
		});
	},
		portfolioClick: function(){
			this.setState({
				showHome: false,
				showAbout: false,
				showPortfolio: true,
				showContact: false
			})
	},
		contactClick: function(){
			this.setState({
				showHome: false,
				showAbout: false,
				showPortfolio: false,
				showContact: true
			})
	},
		render: function(){
			return(
				<div>
					<div className="nav-bar"> 
						<div className="home-page" onClick={this.homeClick}> 
						Home
						</div>

						<div className="about-page" onClick={this.aboutClick}> 
						About Me 
						</div>
					
						<div className="portfolio-page" onClick={this.portfolioClick}>
						Portfolio 
						</div>

						<div className="contact-page" onClick={this.contactClick}> 
						Contact
						</div>
					</div>	
					
					<div className="show-results">
							{this.state.showHome ? <HomePage /> : null }
							{this.state.showAbout ?  <AboutPage /> : null }
							{this.state.showContact ? <ContactPage /> : null } 
							{this.state.showPortfolio ? <PortfolioPage /> : null } 
					</div>
				</div>
			);
		}
}); 

var HomePage = React.createClass({
	getInitialState: function(){
		return{
			showHome: true,
			showAbout: false,
			showPortfolio: false,
			showContact: false
		}
	},
	render: function(){
		return(
			<div className="home-text"> 
				<div className="motto">
					Create 
					<div className="and">&</div> 
					Explore
				</div>
			</div>
			)
	}
})
var AboutPage = React.createClass({
	getInitialState: function(){
		return{
			showHome: false,
			showAbout: true,
			showPortfolio: false,
			showContact: false
		};
	},
		render: function(){
			return(
				<div>
					<div className="about-text">
						<div className="header2">Hey there!</div>
							<p className="about-me">
								My name is Ada and I'm a soon-to-be WDI grad student. I also love the great outdoors, lunching on some tuna & yellowtail and dinnering on a nice bowl of ramen with miso soup base and pork belly slice. Did I just hear your stomach growl? Well come eat with me! 
							<br></br>
							<br></br>
								All jokes aside, I'm an aspiring web developer with a creative flare and enjoy building apps while keeping the user experience in mind. 
							<br></br>
							<br></br>
								Browse through my portfolio page for project video demos or contact page to view résumé and other platforms. 
							</p>
					</div>
				</div>
				);
		}
})

var PortfolioPage = React.createClass({
	getInitialState: function(){
		return{
			showHome: false,
			showAbout: false,
			showPortfolio: true,
			showContact: false
		}
	},
	render: function(){
		return(
			<div>
				<div className="portfolio-text">
					<div className="header2">Here is a list of shit that I've done!</div>
					<p className="about-me">
						Check out a demo.
					</p>
					<dl className="dl-horizontal">
  					<dt>Wishlister</dt>
  							<dd>
  								<iframe src="https://player.vimeo.com/video/173643188" width="320" height="219" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
  								</iframe>
								</dd>
 						<dt>What The Fork?</dt> 
 							<dd>
 								<iframe src="https://player.vimeo.com/video/173649473" width="320" height="219" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
 								</iframe>
 							</dd>
 						<dt>More </dt>
 						<dd>Coming soon....</dd>
 					</dl>	
				</div>
			</div>
			)
	}
})

var ContactPage = React.createClass({
	getInitialState: function(){
		return{
			showHome: false,
			showAbout: false,
			showPortfolio: false,
			showContact: true
		}
	},
	render: function(){
		return(
				<div className="contact-text">
					<div className="header2">Reach out!</div>
						<p className="contact-me">
							I'd love to hear from you!
							<br></br>
							<br></br>

  						Send me an email via <a> axu1122@gmail.com</a>.
  						<br></br>

 							Connect with me on
 							<a href="http://bit.ly/29vRhlZ"> LinkedIn</a>.
 							<br></br>

 							Take a gander at my
 							<a href="http://bit.ly/29khctX"> Github</a>,
 							<br></br>

 							or instead view my 
 							<a href="http://bit.ly/29AyDeb"> résumé</a>.
 						</p>
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