import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  overflow: hidden;
`

const gridAnimV = keyframes`
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-103vw);
	}
`;

const gridAnimH = keyframes`
	from {
		transform: translateY(0);
	}

	to {
		transform: translateY(103vh);
	}
`;

const VLine = styled.div`
  height: 100vh;
  width: 1px;
  background-color: black;
  position: absolute;
  right: 0;
  top: 0;

  animation: ${gridAnimV} 10s -${props => props.delay}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite;
`

const HLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;

  animation: ${gridAnimH} 10s -${props => props.delay}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite;
`


class App extends Component {

  componentWillMount() {
    let lines = [];

    for (let i = 0; i < 11; i++) {
      lines.push(i);
    }

    this.lines = lines;
  }

  render() {
    return (
      <Container>
        <Helmet>
                <title>YSDN 2018</title>
        </Helmet>

        {this.lines.map(i => {
          return (
              <HLine key={i} delay={i*0.9}/>
          )
        })}

        {this.lines.map(i => {
          return (
              <VLine key={i} delay={i*0.9}/>
          )
        })}

      </Container>
    );
  }
}

export default App;
