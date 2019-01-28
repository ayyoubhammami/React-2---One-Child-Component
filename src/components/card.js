import React, {Component} from "react";

class Box extends Component {
	render() {
		return(

			
				
			<div className="cap">
				
        <img src={this.props.imgg} style={{marginLeft:this.props.margL}} className="cap"  alt="capt" />
        <p className="nom"  >{this.props.nom} <b>{this.props.prenom}</b></p>
		<p className="desc">{this.props.role1}</p>
		<p className="desc">{this.props.role2}</p>

            </div>
			
		);
	}
}

export default Box;