import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkTheme
} from 'react-native-ui-kitten';

import {
    VictoryPie,
    VictoryLabel,
} from "victory-native";

import {
    Svg
} from 'react-native-svg';

export class PieChart extends RkComponent {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            data: [
                {
                    x: 1,
                    y: 120,
                    title: '7000',
                    subTitle: 'CATS',
                    color: RkTheme.current.colors.primary,
                    selectedColor: RkTheme.current.colors.primaryActive,
                },
                {
                    x: 2,
                    y: 150,
                    title: '9500',
                    subTitle: 'DOGS',
                    color: RkTheme.current.colors.info,
                    selectedColor: RkTheme.current.colors.infoActive,
                },
                {
                    x: 3,
                    y: 75,
                    title: '4750',
                    subTitle: 'LOSEY',
                    color: RkTheme.current.colors.success,
                    selectedColor: RkTheme.current.colors.successActive,
                }
            ]
        }
    }

    computeColors() {
        return this.state.data.map((item, i) => {
            return i == this.state.selected ? item.selectedColor : item.color
        })
    }

    handlePress(e, props) {
        this.setState({
            selected: props.index
        })
    }

    render() {
        return (
            <Svg height={250}
                       width={250}>
                <VictoryPie
                    labels={[]}
                    colorScale={this.computeColors()}
                    data={this.state.data}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPressIn: (evt, props) => this.handlePress(evt, props)
                        }
                    }]}
                >
                </VictoryPie>
                
            </Svg>
        )
    }
}
