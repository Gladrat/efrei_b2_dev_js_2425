export function reactive(state, callbackFn) {
  return new Proxy(state, {
    set(target, key, value) {
      target[key] = value;
      
      callbackFn();
      console.log("App a été re-render - source", key);

      return true;
    }
  })
}

export function createElement(tag, props = {}, ...children) {
  return {
    tag,
    props,
    children,
  };
}

export function render(vNode, container) {
  // console.log(vNode.tag);
  // console.log(vNode.children);

  if (typeof vNode === "string") {
    container.appendChild(document.createTextNode(vNode));
    return;
  }

  const element = document.createElement(vNode.tag);

  if (vNode.props) {
    Object.keys(vNode.props).forEach((key) => {
      if (typeof vNode.props[key] === "function" && key.startsWith("on")) {
        const event = key.slice(2).toLowerCase();
        const callbackFn = vNode.props[key];

        element.addEventListener(event, callbackFn);
      } else {
        element.setAttribute(key, vNode.props[key]);
      }
    });
  }

  vNode.children.forEach((child) => render(child, element));

  container.appendChild(element);  
}
