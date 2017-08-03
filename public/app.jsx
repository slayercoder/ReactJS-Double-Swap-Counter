var styleCount = {
    display: "inline-block",
    border : "1px solid black",
    padding: 10,
    margin : 10 
};
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter1 : 0,
            counter2 : 0
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }
    handleClick1(){
        this.setState({counter2 : this.state.counter2 + 1});
    }
    handleClick2(){
        this.setState({counter1 : this.state.counter1 + 1});
    }
    render(){
        return(
            <div>
                <Child1 count = {this.state.counter2} click1 = {this.handleClick2}/>
                <Child2 count = {this.state.counter1} click2 = {this.handleClick1}/>
            </div>
        );
    }
}

class Child1 extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.click1();
    }
    render(){
        return(
            <div style = {styleCount}>
                <h2>Counter-1</h2>
                <h3>Count: {this.props.count}</h3>
                <button onClick = {this.handleClick}>Click</button>
            </div>
        );
    }
}

class Child2 extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    } 
    handleClick(){
        this.props.click2();
    }
    render(){
        return(
            <div style = {styleCount}>
                <h2>Counter-2</h2>
                <h3>Count: {this.props.count}</h3>
                <button onClick = {this.handleClick}>Click</button>
            </div>
        );
    }
}
ReactDOM.render(<Parent/>,document.getElementById('root'));