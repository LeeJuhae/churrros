import React from 'react';
import Typed from 'typed.js';
import './style.css';

class LandingPage extends React.Component {
	componentDidMount() {
		const options = {
			strings: ["CHURRROS' WORKS"],
			typeSpeed: 70,
			backSpeed: 50,
		//   loop: true,
		//   loopCount: Infinity,
			// cursorChar: '',
		};
		this.typed = new Typed(this.el, options);
	}

	render() {
		return (
			<div>
				<span id="welcome_str" ref={(el) => {this.el = el;}}/>
			</div>
		);
	};
}

export default LandingPage;
