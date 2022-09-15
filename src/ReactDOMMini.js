import ReactReconciler from 'react-reconciler';

// Building a Custom React Renderer:
// https://www.youtube.com/watch?v=CGpMlWVcHok

const reconciler = ReactReconciler({
  createInstance(type, props) {
    const el = document.createElement(type);
    ['className', 'src', 'alt', 'href', 'target', 'rel'].forEach(attr => {
      if (props[attr]) {
        el[attr] = props[attr];
      }
    });
    return el;
  },
  createTextInstance(text, rootContainerInstance) {
    return document.createTextNode(text);
  },

  removeChild(container, child) {
    container.removeChild(child);
  },
  appendChild(container, child) {
    container.appendChild(child);
  },
  appendInitialChild(container, child) {
    container.appendChild(child);
  },
  appendChildToContainer: (container, child) => {
    container.appendChild(child);
  },

  insertBefore() {},

  supportsMutation: true,
  // isPrimaryRenderer: false,
  // supportsPersistence: false,
  // supportsHydration: false,
  // noTimeout: -1,

  removeChildFromContainer: (container, child) => {},
  insertInContainerBefore: (container, child, beforeChild) => {},
  getRootHostContext: () => null,
  getChildHostContext: parentHostContext => parentHostContext,
  finalizeInitialChildren(instance) {},
  prepareUpdate(instance, _type, oldProps, newProps) {},
  commitUpdate(
    instance,
    [reconstruct, diff],
    type,
    _oldProps,
    newProps,
    fiber,
  ) {},
  // commitMount(instance, _type, _props, _int) {},
  // getPublicInstance: instance => instance,
  prepareForCommit: () => null,
  // preparePortalMount: container => {},
  resetAfterCommit: () => {},
  shouldSetTextContent: () => false,
  clearContainer: () => false,
  // hideInstance(instance) {},
  // unhideInstance(instance, props) {},
  // hideTextInstance() {},
  // unhideTextInstance() {},
  // getCurrentEventPriority: () => {},
  // beforeActiveInstanceBlur: () => {},
  // afterActiveInstanceBlur: () => {},
  // detachDeletedInstance: () => {},
  // now: performance.now,
  // scheduleTimeout: setTimeout,
  // cancelTimeout: clearTimeout,
});

const ReactDOMMini = {
  createRoot: target => ({
    render(children) {
      let container = reconciler.createContainer(target, false, false);
      reconciler.updateContainer(children, container, null, null);
    },
  }),
};

export default ReactDOMMini;