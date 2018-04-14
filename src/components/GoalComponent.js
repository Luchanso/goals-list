import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import React from 'react';
import GoalInput from './GoalInput';
import LinearProgress from 'material-ui/LinearProgress'
import { colors } from 'material-ui/styles'

class GoalComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: undefined }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        this.setState({ inputValue: event.target.value })
    }


    handleAddProgressByAmount(amount) {
        this.props.onGoalProgress(this.props.goal, Number(amount))
    }

    handleAddProgress() {
        if (this.state.inputValue) {
            this.props.onGoalProgress(this.props.goal, Number(this.state.inputValue))
        }
        this.setState({ inputValue: "" })
    }

    render() {
        return (
            <div style={{ width: "90vw", display: "flex", alignItems:"stretch" }}>
                <div className="goal-component" style={{ width: "60%", border: 3, borderColor: colors.white }}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <i style={{ color: colors.white }}>{this.props.goal.name}</i>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="bar-and-buttons" style={{ flexGrow: 3 }}>
                            <LinearProgress style={{
                                backgroundColor: "#a3e2f3",
                                backgroundClip: "padding-box",
                                overflow: "hidden",
                                borderRadius: 50,
                                height: 20,
                                marginLeft: 5,
                                marginTop: 5,
                                marginBottom: 5
                            }} mode="determinate" max={this.props.goal.threshold} value={this.props.goal.progress} />
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: 5 }}>
                                <FloatingActionButton onClick={() => this.handleAddProgressByAmount("1")}>
                                    <i>+1</i>
                                </FloatingActionButton>
                                <FloatingActionButton onClick={() => this.handleAddProgressByAmount("5")}>
                                    <i>+5</i>
                                </FloatingActionButton>
                                <FloatingActionButton onClick={() => this.handleAddProgressByAmount("10")}>
                                    <i>+10</i>
                                </FloatingActionButton>
                            </div>
                        </div>
                        {/* <GoalInput value={this.state.inputValue} onChange={this.handleInput} /> */}
                        {/* <FloatingActionButton onClick={() => this.handleAddProgress()}>
                            <ContentAdd />
                        </FloatingActionButton> */}
                    </div>

                </div>
                <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
                    <div style={{alignSelf: "center"}}>
                        <i style={{ color: colors.white }}>current progress: {this.props.goal.progress}/{this.props.goal.threshold}</i>
                    </div>
                    <div style={{alignSelf: "center"}}>
                        <i style={{ color: colors.white }}>progress for day to succeed: {Math.ceil((this.props.goal.threshold - this.props.goal.progress) / 90)}</i>
                    </div>
                </div>
            </div>
        );
    }
}

GoalComponent.propTypes = {
    goal: PropTypes.shape({
        name: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        threshold: PropTypes.number.isRequired
    }),
    onGoalProgress: PropTypes.func.isRequired
}

export default GoalComponent