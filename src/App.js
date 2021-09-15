import Form from "./component/Form";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <Form />
      <p>The HTML version of the Form can be found <a href="https://github.com/MelvinPeepers/netlify_standard_form_react/blob/main/public/index.html">here</a></p>
      <p>The JSX version of the Form can be found <a href="https://github.com/MelvinPeepers/netlify_standard_form_react/blob/main/src/component/Form.js">here</a></p>
      <p>For React you will need both the HTML and JSX version of the form for Netlify.</p>
      <p> A great Tutorial can be found <a href="https://www.freecodecamp.org/news/how-to-add-a-netlify-form-to-a-react-app/">here</a>.</p>
    </div>
  );
}

export default App;
