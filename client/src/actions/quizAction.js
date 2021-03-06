import axios from "axios";

export const addquestions = (question) => async (dispatch) => {
  dispatch({ type: "NEW_QUESTION_REQUEST" });
  try {
    const response = await axios.post("/api/question/addquestion", question);
    console.log(response);
    dispatch({ type: "NEW_QUESTION_SUCCESS" });
  } catch (error) {
    dispatch({ type: "NEW_QUESTION_FAILED", payload: error });
  }
};

export const getquestions = (courseId) => async (dispatch) => {
  dispatch({ type: "GET_QUESTIONS_REQUEST" });

  try {
    const response = await axios.post("/api/question/getques", {
      id: courseId,
    });
    
    dispatch({ type: "GET_QUESTIONS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_QUESTIONS_FAILED", payload: error });
  }
};