import React, { Component } from 'react';
import Loading from '../loading';

export default class extends Component {
  componentDidMount() {
    fetch(this.props.filePath)
      .then(response => response.text()
          .then((data) => {
            const docEl = document.createElement('div');
            docEl.className = 'document-container';
            docEl.innerHTML = data.replace(/(?:\r\n|\r|\n)/g, '<br />');
            document.getElementById('txt').innerHTML = docEl.outerHTML;
          })
          .catch(error => console.log('Error: ', error)),
      )
      .catch(error => console.log('Error: ', error));
  }

  render() {
    return (
      <div id="txt">
        <Loading />
      </div>
    );
  }
}
