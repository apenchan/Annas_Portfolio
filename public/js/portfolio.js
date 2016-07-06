console.log("test test");

// var image = "http://bit.ly/29olAcb"

var PortfolioDisplay = React.createClass({
	getInitialState: function(){
		return {
			showProjectA: true,
			showProjectB: false
		};
	},
	handleProjectA: function(){
		console.log("project A, here we go!!!");
		this.setState({
			showProjectA: true,
			showProjectB: false
		});
	},
	render: function(){
		return (
			<ul>
			<li className="title-name">
			Anna Penchansky
			</li>
			<li className="github">
			github.com/apenchan
			</li>
			<li className="email">
			a.penchansky@gmail.com
			</li>
			<li className="number">
			561.662.0891
			</li>
			</ul>
		);
	}
});

var ProjectALink = React.createClass({
	getProjectAInfo: function(){
		console.log("getting project A!");
		$.ajax({
			url: '/portfolio/projecta/',
			method: 'GET',
			success: function(data){
				console.log("here lies project A" + data);
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
			})
		},
		render: function(){
			return(
				<button
				onClick={this.getProjectAInfo}
				className="project-a-btn">
				ProjectA
				</button>
			);
	}
});

var ProjectBLink = React.createClass({
	getProjectBInfo: function(){
		console.log("getting project B!");
		$.ajax({
			url: '/portfolio/projectb/',
			method: 'GET',
			success: function(data){
				console.log("here lies project B" + data);
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
			})
		},
		render: function(){
			return(
				<button
				onClick={this.getProjectBInfo}
				className="project-b-btn">
				ProjectB
				</button>
			);
	}
});

// var Image = React.createClass({
// 	render: function(){
// 		return (
// 			<img src={this.state.image} alt=""/>
// 			);
// 	}
// });

var AboutMe = React.createClass({
	render: function(){
		return (
			<p className="about-me">
			Welcome to my about me and my name is Anna! I am currently a junior web developer and have a passion for cooking, video editing, and puppies. I have a history of tech work and would love to out-bowl you any day!
			</p>
			);
	}
});

// var NavBar = React.createClass({
// 	getInitialState: function(){

// 	},
// 	render: function(){
// 		return (

// 			)
// 	}
// })

ReactDOM.render(
	<div>
	<PortfolioDisplay/>
	<AboutMe/>
	<ProjectALink/>
	<ProjectBLink/>
	</div>,
	document.getElementById("content-container")
	);