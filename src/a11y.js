/**
 * Wrapps a callback function in an event handler that responds to Enter or Space keys.
 * To be used with onKeyPress/onKeyDown/onKeyUp
 * @example
 * <div onClick={() => doSomething()} onKeyPress={onEnterOrSpace(() => doSomething()))}>
 * @param {() => any} callback
 * @returns {React.KeyboardEventHandler}
 */
export function onEnterOrSpace(callback) {
  return (event) => {
    if (event.key === "Enter" || event.key === " ") {
      if (typeof callback === "function") {
        callback();
        // we already handled this event we can stop the browser default
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };
}
