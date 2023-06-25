import React, { useState, useEffect } from 'react';
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";


export function App() {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  
    const incrementFeedback = (category) => {
        switch (category) {
          case 'good':
            setGood(good + 1);
            break;
          case 'neutral':
            setNeutral(neutral + 1);
            break;
          case 'bad':
            setBad(bad + 1);
            break;
          default:
            break;
        }
      };
      
  
    const countTotalFeedback = () => {
        return good + neutral + bad;
      };       
    
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total !== 0 ? Math.round((good / total) * 100) : 0;
    };
      
  
    useEffect(() => {
        console.log({ good, neutral, bad });
      }, [good, neutral, bad]);
      
  
    
    const options = ['good', 'neutral', 'bad'];
    const total = countTotalFeedback();

    return (
        <div className="App">
            <Section title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback} />
            </Section>

            <Section title="Statistics">
            {total > 0 ? (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()}
                />
            ) : (
                <Notification message="There is no feedback" />
            )}
            </Section>
        </div>
    );
}