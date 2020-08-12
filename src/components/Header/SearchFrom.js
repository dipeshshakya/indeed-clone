import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import PlacesAutocomplete from "./PlacesAutocomplete";
import { Formik } from "formik";
const languages = [
  {
    name: "C Programming",
  },
  {
    name: "Java Developer",
  },
  {
    name: "software engineer",
  },
  {
    name: "C# Developer",
  },
  {
    name: "React Front-end Engineer",
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;
export class SearchFrom extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });

    // alert(this.value);
    // console.log(this.props.updateValue(this.value).bind());
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Job title, keywords, or company",
      value,
      onChange: this.onChange.bind(this),
    };
    return (
      <Formik
        initialValues={{
          jobTitle: "",
          location: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          if (values) {
            // console.log("value from form ", values);
            this.props.updateValue(values["jobTitle"]);
          }
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="form__wrapper">
            <div className="SearchForm__whatInput">
              <label htmlFor="">What</label>
              <p>Job title, keywords, or company</p>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                name="jobTitle"
                id="jobTitle"
                onSuggestionSelected={(event, { suggestion, method }) => {
                  if (method === "enter") {
                    event.preventDefault();
                  }
                  this.setState({
                    value: suggestion.name,
                  });
                  // const jobTitle = event.target.name;
                  // const fvalue = event.target.value;

                  setFieldValue("jobTitle", suggestion.name);
                }}
              />
              {/* <input type="text" placeholder="Job title, keywords, or company" /> */}
            </div>
            <div className="SearchForm__whereInput">
              <label htmlFor="">where</label>
              <p>city, state/territory or postcode</p>
              <PlacesAutocomplete />
              {/* <input type="text" placeholder="city, state/territory or postcode" /> */}
            </div>
            <div className="form__button">
              <button type="submit">Find jobs</button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default SearchFrom;
