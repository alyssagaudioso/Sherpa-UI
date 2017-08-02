import React, { Component } from 'react';
import { View, Text, VrButton, Image, asset } from 'react-vr';

export default class JumpButton extends Component {

  render() {
    return (
        <VrButton onClick={()=>this.props.changeScene(this.props.scene)}
                  style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderColor: 'black',
                      borderStyle: 'solid',
                      borderWidth: .005,
                      borderRadius: 0.00,
                      width: .8,
                      height: .2,
                      justifyContent: 'center',
                      transform: [
                        {translate: [-2.5, 1.5, -5]}
                      ]
                  }}>
            <Text style={{
                    textAlign: 'center',
                    fontSize: .1,
                    fontWeight: 'bold',
                  }}
            >{this.props.scene}
            </Text>
        </VrButton>
    )
  }
};