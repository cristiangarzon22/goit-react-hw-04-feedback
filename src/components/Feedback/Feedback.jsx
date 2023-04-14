import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Feedback = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const [hasFeedback,setHasFeedback] = useState(false);
   
const  handleFeedback = (feedback) => {
    if(feedback ==='good'){
      setGood(prev => prev + 1);
    }
    else if(feedback ==='neutral'){
      setNeutral(prev => prev + 1);
    }
    else if(feedback ==='bad'){
      setBad(prev => prev + 1);
    }
    setHasFeedback(true);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

    return (
      <div>
        <h1>Expresso Café Feedback</h1>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </div>
    );
  }
  Feedback.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
    };
  Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  
export default Feedback;
