import React from 'react';


class Header extends React.Component{
	constructor(props){
		super(props)
	}

	_onChange(e){
		let val= e.target.value

		this.props.onChange(val);
	}

	_onClick(){
		let val= this.props.input;
		this.props.onClick(val);
	}

	render(){
		return(
			<div>
				<input type="text" onChange={this._onChange.bind(this)} value={this.props.input} />
				<button onClick= {this._onClick.bind(this)}> Add </button>
			</div>

			)
	}
}

// const Header = ({input, onChange, onClick}) => {
	
// 	return (
// 			<div>
// 				<input type="text" onChange={(e) => onChange({input})} value={input} />
// 				<button onClick= {onClick({input})}> Add </button>
// 			</div>
// 		)
// }

export default Header;