import React, { Component } from "react";
// import quizQuestions from "../../api/quizQuestions";
import Quiz from "./Quiz";
import Result from "./Result";
import "./Fresult.css";
import Footer from "../Home/Footer";
import NavBar from "../Contact/NavBar";
import axios from "axios";

class Fresult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      questionSubject: "",
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      quizQuestions: [],
      degree: 0,
      testid: 0,
      loading: true
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillReceiveProps(newprops) {
    const ids =
      typeof newprops.match.params.id !== "undefined"
        ? newprops.match.params.id
        : 0;
    this.getQuizes(ids);
  }

  componentDidMount() {
    const ids =
      typeof this.props.match.params.id !== "undefined"
        ? this.props.match.params.id
        : 0;
    this.getQuizes(ids);
  }

  getQuizes(ids) {
    this.resetQuestionior(ids);

    axios({
      method: "GET",
      url: "http://localhost:4000/questions/generate_test/" + ids,
      headers: { Authorization: "Bearer " + localStorage.getItem("usertoken") }
    }).then(response => {
      if (
        typeof response.data.status !== "undefined" &&
        response.data.status == 200
      ) {
        this.setState({ loading: false });
        if (
          typeof response.data.test !== "undefined" &&
          response.data.test.length > 0
        ) {
          this.setState({
            quizQuestions: response.data.test,
            testid: response.data.testid
          });

          const AnswerOptions = this.state.quizQuestions.map(
            question => question.answers
          );

          this.setState({
            questionSubject: this.state.quizQuestions[0].subject,
            question: this.state.quizQuestions[0].question,
            answerOptions: AnswerOptions[0]
          });
        }
      }
    });
  }

  resetQuestionior(ids) {
    this.setState({
      counter: 0,
      questionId: 1,
      questionSubject: "",
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      quizQuestions: [],
      degree: ids,
      testid: 0,
      loading: true
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < this.state.quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.getResults(), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      questionSubject:
        typeof this.state.quizQuestions[counter].subject != "undefined"
          ? this.state.quizQuestions[counter].subject
          : "",
      question:
        typeof this.state.quizQuestions[counter].question != "undefined"
          ? this.state.quizQuestions[counter].question
          : "",
      answerOptions:
        typeof this.state.quizQuestions[counter].answers != "undefined"
          ? this.state.quizQuestions[counter].answers
          : [],
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);

    const data = {
      degree: this.state.degree,
      testid: this.state.testid,
      answers: answersCountKeys.join()
    };
    var results = "";

    var promise = new Promise(function(resolve, reject) {
      axios({
        method: "POST",
        url: "http://localhost:4000/questions/generate_test_result/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("usertoken")
        },
        data
      }).then(response => {
        if (
          typeof response.data.status !== "undefined" &&
          response.data.status == 200
        ) {
          results = response.data.result;
          resolve(true);
        }
      });
    });
    promise.then(bool => this.setState({ result: results }));
  }

  renderQuiz() {
    if (this.state.loading == true) {
      return "";
    } else if (this.state.question != "") {
      return (
        <React.Fragment>
          <h4 className="question_subject_title">
            {this.state.questionSubject} Quiz
          </h4>
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={this.state.quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        </React.Fragment>
      );
    } else {
      return (
        <div className="mrgnb45">
          <h1 className="text-center mt-5 mb-5">
            No Question found in this test.
          </h1>
        </div>
      );
    }
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    const usertokenval = localStorage.getItem("usertoken");
    if (!usertokenval) {
      return (
        <React.Fragment>
          <NavBar />
          <div>
            <h3 className="text-center mt-5 mb-5 ft">
              Please Login/Signup to take assessment test.
            </h3>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="App container-content">
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Fresult;
