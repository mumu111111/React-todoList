import  React from 'react';

class Welcome extends React.Component{
   
    constructor(props){
        super(props)

        this.state={
            date: new Date()
        }
        setInterval(()=>{
            this.setState({
                date: new Date()
            })
        })
        console.log('我已经在constuctor 里将 props 和 state 被初始化好了')
    }
   
   
   componentWillMount(){
       console.log('运行到这里的话， 说明马上就要运行render了')
   }
   
    render(){
        

        console.log('这里是render， 将返回的值 插入到 页面')
        return (

            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>{this.state.date.toString()}</h2>
            </div>    
        )
    }

componentDidMount(){

    console.log('已经挂载在页面里了')
}

}

export default Welcome