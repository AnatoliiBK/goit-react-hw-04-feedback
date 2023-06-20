import React, { useState, useEffect } from 'react';
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";


export function App() {
    // state = {
    //   good: 0,
    //   neutral: 0,
    //   bad: 0,
    // };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  
    // incrementFeedback = (category) => {
    //   this.setState((prevState) => ({
    //     // good: prevState.good,
    //     // neutral: prevState.neutral,
    //     // bad: prevState.bad,
    //     ...prevState,
    //     [category]: prevState[category] + 1,
    //   }));
    // };
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
      
  
    // countTotalFeedback = (state) => {
    //   return state.good + state.neutral + state.bad;
    // };
    const countTotalFeedback = () => {
        return good + neutral + bad;
      };       
    // countPositiveFeedbackPercentage = (state) => {
    //   const total = this.countTotalFeedback(state);
    //   return total !== 0 ? Math.round((state.good / total) * 100) : 0;
    // };     
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total !== 0 ? Math.round((good / total) * 100) : 0;
    };
      
  
    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState !== this.state) {
    //     console.log(this.state);
    //   }
    // }
    useEffect(() => {
        console.log({ good, neutral, bad });
      }, [good, neutral, bad]);
      
  
    // render() {
    //   const options = Object.keys(this.state);
    //   const total = this.countTotalFeedback(this.state);
  
    //   return (
    //     <div className="App">
    //       <Section title="Please leave feedback">
    //         <FeedbackOptions
    //           options={options}
    //           onLeaveFeedback={this.incrementFeedback}
    //         />
    //       </Section>
  
    //       <Section title="Statistics">
    //         {total > 0 ? (
    //           <Statistics
    //             good={this.state.good}
    //             neutral={this.state.neutral}
    //             bad={this.state.bad}
    //             total={total}
    //             positivePercentage={this.countPositiveFeedbackPercentage(
    //               this.state
    //             )}
    //           />
    //         ) : (
    //           <Notification message="There is no feedback" />
    //         )}
    //       </Section>
    //     </div>
    //   );
    // }
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

// import React, { Component } from "react";

// import { Statistics } from "./statistics/Statistics";
// import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
// import { Section } from "./section/Section";
// import { Notification } from "./notification/Notification";

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   incrementFeedback = (category) => {
//     this.setState((prevState) => ({
//       // good: prevState.good,
//       // neutral: prevState.neutral,
//       // bad: prevState.bad,
//       ...prevState,
//       [category]: prevState[category] + 1,
//     }));
//   };

//   countTotalFeedback = (state) => {
//     return state.good + state.neutral + state.bad;
//   };

//   countPositiveFeedbackPercentage = (state) => {
//     const total = this.countTotalFeedback(state);
//     return total !== 0 ? Math.round((state.good / total) * 100) : 0;
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState !== this.state) {
//       console.log(this.state);
//     }
//   }

//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback(this.state);

//     return (
//       <div className="App">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.incrementFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage(
//                 this.state
//               )}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }