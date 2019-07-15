'use strict';

let React;
let ReactDOM;

describe('RaviTest', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('RaviTest works', () => {
    function App() {
      return (
        <div>
          <div>
            <div>
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    expect(container.innerHTML).toBe('<h1>Hello World</h1>');
  });
});
