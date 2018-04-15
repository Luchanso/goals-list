import React from 'react';
import GoalInput from './GoalInput';
import { colors } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types';
import GoalAdd from './GoalAdd';
import GoalProgressBar from './GoalProgressBar'
import '../css/goal.css'

class GoalComponent extends React.Component {

    constructor(props) {
        super(props);
        //this.state = { inputValue: "" }
        //this.handleInput = this.handleInput.bind(this)
        this.handleAddProgressByAmount = this.handleAddProgressByAmount.bind(this)
    }

    // handleInput(event) {
    //     this.setState({ inputValue: event.target.value })
    // }


    handleAddProgressByAmount(amount) {
        this.props.onGoalProgress(this.props.goal, Number(amount))
    }

    // handleAddProgress() {
    //     if (this.state.inputValue) {
    //         this.props.onGoalProgress(this.props.goal, Number(this.state.inputValue))
    //     }
    //     this.setState({ inputValue: "" })
    // }

    render() {
        let buttons = [];
        ["1", "5", "10"].forEach((i) => {
            buttons.push(<GoalAdd onClick={this.handleAddProgressByAmount} value={i}/>);
        })

        return (
            <div className="goal-outer">
                <div className="goal">
                    <div className="goal-interactive">
                        <div className="goal-name" >
                            <i>{this.props.goal.name}</i>
                        </div>
                        <div className="goal-bar-and-buttons">
                            <GoalProgressBar goal={this.props.goal} />
                            <div className="goal-buttons">
                                {buttons}
                            </div>
                            {/* <GoalInput value={this.state.inputValue} onChange={this.handleInput} /> */}
                            {/* <FloatingActionButton onClick={() => this.handleAddProgress()}>
                            <ContentAdd />
                        </FloatingActionButton> */}
                        </div>
                    </div>
                    <div className="goal-info" >
                        <div>
                            <i>current progress: {this.props.goal.progress}/{this.props.goal.threshold}</i>
                        </div>
                        <div>
                            {/* todo! better algorithm for calculation when timer with new actions and state will be ready */}
                            <i>progress for day to succeed: 
                            {Math.ceil((this.props.goal.threshold - this.props.goal.progress) / ((Date.UTC(2018, 7, 9) - Date.now())/(24*60*60*1000)))}</i>
                        </div>
                    </div>
                </div>
                {!this.props.isLast && <Divider />}
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