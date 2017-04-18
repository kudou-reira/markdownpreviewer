"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      mark: ""
    };
    return _this;
  }

  Preview.prototype.handleChange = function handleChange(event) {
    this.setState({
      mark: event.target.value
    });
  };

  Preview.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "showMark text-center" },
        React.createElement(
          "h1",
          null,
          "Markdown"
        ),
        React.createElement("textarea", { onChange: function onChange() {
            return _this2.handleChange(event);
          }, value: this.state.mark, rows: "20", cols: "60" })
      ),
      React.createElement(
        "div",
        { className: "showPreview" },
        React.createElement(
          "h1",
          { className: "text-center" },
          "Preview"
        ),
        React.createElement(
          "p",
          null,
          "You may wonder what this is supposed to be...It's a \"markdown\" previewer."
        ),
        React.createElement(
          "p",
          null,
          "Markdown converts plain text to valid HTML. Try it out with \"### _\""
        ),
        React.createElement("div", { className: "modifyText", dangerouslySetInnerHTML: { __html: marked(this.state.mark) } })
      )
    );
  };

  return Preview;
}(React.Component);

ReactDOM.render(React.createElement(Preview, null), document.querySelector(".showMark"));