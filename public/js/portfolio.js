console.log("test test");

// var image = "http://bit.ly/29olAcb"

var PortfolioDisplay = React.createClass({
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

// var ProjectA = React.createClass({
// 	render: function(){
// 		return (

// 			)
// 	}
// })

ReactDOM.render(
	<div>
	<PortfolioDisplay/>
	<AboutMe/>
	</div>,
	document.getElementById("content-container")
	);