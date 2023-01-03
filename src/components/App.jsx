
import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round(((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100);
  };

  
  render() {
    const { good, neutral, bad } = this.state;
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'azure',
      }}
    >
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}></FeedbackOptions>
      </Section>

      <Section title='Statistics'>
          {this.countTotalFeedback() > 0  
           ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>
           : <Notification message="There is no feedback"></Notification>}
      </Section>
    </div>
  }
}