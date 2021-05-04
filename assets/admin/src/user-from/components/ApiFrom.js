import React from 'react';

export default class ApiFrom extends React.Component {
  render() {
    return (
      <div className="api-key-input">
        <form>
          <label for="key">API KEY:</label>
          <input class="regular-text" type="text" name="key"></input>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    )
  }
}
