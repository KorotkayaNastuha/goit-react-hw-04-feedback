
import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 

  const handleIncrement = event => {
    const { name } = event.currentTarget;
    
    switch (name) {
      case 'good':
        setGood(good+1);
        break;
      case 'neutral':
        setNeutral(neutral+1);
        break;
      case 'bad':
        setBad(bad+1);
        break;
      default:
        return;
    }
  };  

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round(((good + neutral) / countTotalFeedback()) * 100);
  };
    
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
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement}></FeedbackOptions>
      </Section>

      <Section title='Statistics'>
          {countTotalFeedback() > 0  
           ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}>
            </Statistics>
           : <Notification message="There is no feedback"></Notification>}
      </Section>
    </div>
  }
