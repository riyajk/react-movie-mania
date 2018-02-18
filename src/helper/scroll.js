import ReactDOM from 'react-dom';

export const didScrollToBottom = (objThis) => {

  const dom = ReactDOM.findDOMNode(objThis);

  const scrollTop = dom.scrollTop,
    clientHeight = dom.clientHeight,
    scrollHeight = dom.scrollHeight;

  if (scrollHeight <= (scrollTop + clientHeight)) {
    return true
  } else {
    return false;
  }


}
