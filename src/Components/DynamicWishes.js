import React, { Component } from 'react';

class dynamicWishes extends Component {
        state = {
          hour: null,
        }
        
        componentDidMount() {
          this.getHour()
        }
      
        getHour = () => {
         const date = new Date();
         const hour = date.getHours()
         this.setState({
            hour
         });
        }
      
        render(){
          const {hour} = this.state;
          return (
            <div>
              <h2>{ hour<12 ?`Good Morning` : `Good Afternoon`}</h2>
            </div>
          );
        }
      
      }
export default dynamicWishes;