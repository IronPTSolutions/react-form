import React from 'react'
import Input from './Input';

const validations = {
  tagline: value => value.length > 1
};

class SimpleForm extends React.Component {
  state = {
    data: {
      tagline: "",
    },
    error: {
      tagline: true,
    },
    touch: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const validationFn = validations[name];
    const isValid = validationFn(value);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
      error: {
        ...this.state.error,
        [name]: !isValid,
      },
    });
  };

  handleBlur = (event) => {
    const { name } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  render() {
    const { data, error, touch } = this.state;

    const isError = Object.values(error).some(el => el)

    return (
      <div className="row">
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="tagline"
              value={data.tagline}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              error={error.tagline}
              touch={touch.tagline}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isError}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col">
          <label>State</label>

          <pre>{JSON.stringify(this.state, null, " ")}</pre>
        </div>
      </div>
    );
  }
}

export default SimpleForm
