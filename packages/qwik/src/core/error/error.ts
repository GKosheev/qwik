import { logErrorAndStop } from '../util/log';
import { qDev } from '../util/qdev';

export const QError_stringifyClassOrStyle = 0;
export const QError_cannotSerializeNode = 1; // 'Can not serialize a HTML Node that is not an Element'
export const QError_runtimeQrlNoElement = 2; // `Q-ERROR: '${qrl}' is runtime but no instance found on element.`
export const QError_verifySerializable = 3; // 'Only primitive and object literals can be serialized', value,
export const QError_errorWhileRendering = 4; // Crash while rendering
export const QError_cannotRenderOverExistingContainer = 5; //'You can render over a existing q:container. Skipping render().'
export const QError_setProperty = 6; //'Set property'
export const QError_qrlOrError = 7;
export const QError_onlyObjectWrapped = 8;
export const QError_onlyLiteralWrapped = 9;
export const QError_qrlIsNotFunction = 10;
export const QError_dynamicImportFailed = 11;
export const QError_unknownTypeArgument = 12;
export const QError_notFoundContext = 13;
export const QError_useMethodOutsideContext = 14;
export const QError_missingRenderCtx = 15;
export const QError_missingDoc = 16;
export const QError_immutableProps = 17;
export const QError_hostCanOnlyBeAtRoot = 18;
export const QError_immutableJsxProps = 19;
export const QError_useInvokeContext = 20;
export const QError_containerAlreadyPaused = 21;
export const QError_canNotMountUseServerMount = 22;
export const QError_rootNodeMustBeHTML = 23;
export const QError_strictHTMLChildren = 24;
export const QError_invalidJsxNodeType = 25;
export const QError_trackUseStore = 26;
export const QError_missingObjectId = 27;
export const QError_invalidContext = 28;
export const QError_canNotRenderHTML = 29;
export const QError_qrlMissingContainer = 30;
export const QError_qrlMissingChunk = 31;
export const QError_invalidRefValue = 32;
export const qError = (code: number, ...parts: any[]): Error => {
  const text = codeToText(code);
  return logErrorAndStop(text, ...parts);
};

export const codeToText = (code: number): string => {
  if (qDev) {
    const MAP = [
      'Error while serializing class attribute', // 0
      'Can not serialize a HTML Node that is not an Element', // 1
      'Runtime but no instance found on element.', // 2
      'Only primitive and object literals can be serialized', // 3
      'Crash while rendering', // 4
      'You can render over a existing q:container. Skipping render().', // 5
      'Set property', // 6
      "Only function's and 'string's are supported.", // 7
      "Only objects can be wrapped in 'QObject'", // 8
      `Only objects literals can be wrapped in 'QObject'`, // 9
      'QRL is not a function', // 10
      'Dynamic import not found', // 11
      'Unknown type argument', // 12
      'Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider()', // 13
      "Invoking 'use*()' method outside of invocation context.", // 14
      'Cant access renderCtx for existing context', // 15
      'Cant access document for existing context', // 16
      'props are immutable', // 17
      '<div> component can only be used at the root of a Qwik component$()', // 18
      'Props are immutable by default.', // 19
      `Calling a 'use*()' method outside 'component$(() => { HERE })' is not allowed. 'use*()' methods provide hooks to the 'component$' state and lifecycle, ie 'use' hooks can only be called syncronously within the 'component$' function or another 'use' method.
For more information see: https://qwik.builder.io/docs/components/lifecycle/#use-method-rules`, // 20
      'Container is already paused. Skipping', // 21
      'Components using useServerMount() can only be mounted in the server, if you need your component to be mounted in the client, use "useMount$()" instead', // 22
      'When rendering directly on top of Document, the root node must be a <html>', // 23
      'A <html> node must have 2 children. The first one <head> and the second one a <body>', // 24
      'Invalid JSXNode type. It must be either a function or a string. Found:', // 25
      'Tracking value changes can only be done to useStore() objects and component props', // 26
      'Missing Object ID for captured object', // 27
      'The provided Context reference is not a valid context created by createContextId()', // 28
      '<html> is the root container, it can not be rendered inside a component', // 29
      'QRLs can not be resolved because it does not have an attached container. This means that the QRL does not know where it belongs inside the DOM, so it cant dynamically import() from a relative path.', // 30
      'QRLs can not be dynamically resolved, because it does not have a chunk path', // 31
      'The JSX ref attribute must be a Signal', // 32
    ];
    return `Code(${code}): ${MAP[code] ?? ''}`;
  } else {
    return `Code(${code})`;
  }
};
