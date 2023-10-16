import React, { Component } from 'react';
import "./ColorPicker.css"
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isColorListVisible: false,
        };
    }

    toggleColorList = () => {
        this.setState((prevState) => ({
            isColorListVisible: !prevState.isColorListVisible,
        }));
    };

    setBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
        this.setState({ selectedColor: color, isColorListVisible: false });
    };

    render() {
        const { colors } = this.props;
        const { isColorListVisible } = this.state;

        return (
            <div className="color-picker">
                {isColorListVisible && (
                    <ul className="color-list">
                        {colors.map((color, index) => (
                            <li key={index}>
                                <button
                                    style={{ backgroundColor: color }}
                                    onClick={() => this.setBackgroundColor(color)}
                                >
                                    &nbsp;
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={this.toggleColorList}>Pick a color</button>
            </div>
        );
    }
}

export default ColorPicker;
