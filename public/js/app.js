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

						<div className="contact-page" onClick={this.contactClick}> 
						Contact
						</div>						

						<div className="portfolio-page" onClick={this.portfolioClick}>
						Portfolio 
						</div>

						<div className="about-page" onClick={this.aboutClick}> 
						About Me 
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
								My name is Ada and I'm an aspiring web developer who recently graduated from WDI at General Assembly. I enjoy exercising my creative flare and building apps while keeping the user experience in mind.
							<br></br>
							<br></br>
								My knowledge includes Ruby on Rails, Node.js and Express. Some front-end frameworks include Bootstrap, React and am currently diving into Angular and Sass! 
							<br></br>
							<br></br>
								Aside from developing, I love hiking, eating ramen (regardless of the weather outside) and playing with my 9 year old cat, Luna.
							<br></br>
							<br></br>
								Feel free to browse through my portfolio page for project video demos or contact page to view résumé and other platforms.
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
					<div className="header2">Here is a list of things that I've done!</div>
					<p className="about-me">
						Check out a demo.
					</p>
					<dl className="dl-horizontal">
  					<dt>Wishlister</dt>
  							<dd>
  								<iframe src="https://player.vimeo.com/video/173643188" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
  								</iframe>
								</dd>
 						<dt>What The Fork?</dt> 
 							<dd>
 								<iframe src="https://player.vimeo.com/video/173649473" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
 								</iframe>
 							</dd>
 						<dt>Lovelace Provisions</dt>
 							<dd><iframe src="https://player.vimeo.com/video/175870321" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></dd>
 						<dt>More </dt>
 						<dd id="soon"> Coming soon....</dd>
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

  						Send me an email via <a> adaxu92@gmail.com</a>.
  						<br></br>

 							Connect with me on
 							<a href="http://bit.ly/29vRhlZ"> LinkedIn</a>.
 							<br></br>

 							Take a gander at my
 							<a href="http://bit.ly/29khctX"> Github</a>,
 							<br></br>

 							or instead view my 
 							<a href="../Ada_Dev.pdf"> résumé</a>.
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