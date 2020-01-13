import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactTextRotator from 'react-text-rotator';


const content = [
    {
      text: "“We make a living by what we get,But we make a life by what we give.”",
      className: 'classA',
      animation: 'fade',
    },
    {
      text: '“The life of a man consists not in seeing visions and in dreaming dreams, but in active charity and in willing service”',
      className: 'classB',
      animation: 'fade',
    },
    {
      text: '“Charity sees the need, not the cause”',
      className: 'classC',
      animation: 'fade',
    },
    {
      text: '“Good actions give strength to ourselves and inspire good actions in others.”',
      className: 'classD',
      animation: 'fade',
    },
    {
      text: 'We shall never surrender...',
      className: 'classE',
      animation: 'fade',
    },
  ];
class SliderPage extends Component {
    render() {
    return (
        <div>
        <ReactTextRotator
          content={content}
          time={5000}
          startDelay={2000}
        />
      </div>
        );
    }
}

export default SliderPage;