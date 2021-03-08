import React from 'react';
import Typed from 'typed.js';
import init_pointer from './pointer';
import './style.css';
import './pointer.css';

class LandingPage extends React.Component {
	componentDidMount() {
		const options = {
			strings: ["LEE JU HAE'S WORKS"],
			typeSpeed: 100,
			backSpeed: 50,
			loop: true,
			loopCount: Infinity,
			backDelay: 2000,
			// cursorChar: '',
		};
		this.typed = new Typed(this.el, options);
		init_pointer({
			pointerColor: "#222",
			ringSize: 15,
			ringClickSize: 10,
		  })

	}

	render() {
		return (
			<div className="layer">
				<span className="content" ref={(el) => {this.el = el;}}/>
				<span className="blank"></span>
			</div>
		);
	};
}

export default LandingPage;
