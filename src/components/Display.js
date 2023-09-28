import React, { Component } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";


class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            point: this.props.point,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.point !== prevProps.point) {
          this.setState({ point: this.props.point });
        }
      }

    render(){
        return(
            <section><div>
        {this.state.point === 'first' ? <First /> : null}
        {this.state.point === 'second' ? <Second /> : null}
        {this.state.point === 'third' ? <Third /> : null}
            </div>
            </section>
        );
    }

}
export default Display;