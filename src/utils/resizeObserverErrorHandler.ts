


const originalErrorHandler = window.onerror;
const originalUnhandledRejectionHandler = window.onunhandledrejection;
const originalConsoleError = console.error;


const isResizeObserverError = (message: any): boolean => {
  if (typeof message === 'string') {
    return message.includes('ResizeObserver loop completed with undelivered notifications');
  }
  if (message && typeof message.message === 'string') {
    return message.message.includes('ResizeObserver loop completed with undelivered notifications');
  }
  return false;
};


export const initResizeObserverErrorHandler = (): void => {
  
  window.onerror = (message, source, lineno, colno, error) => {
    if (isResizeObserverError(message)) {
      return true; 
    }
    
    
    if (originalErrorHandler) {
      return originalErrorHandler(message, source, lineno, colno, error);
    }
    
    return false; 
  };

  
  window.onunhandledrejection = (event) => {
    if (isResizeObserverError(event.reason)) {
      event.preventDefault(); 
      return;
    }
    
    
    if (originalUnhandledRejectionHandler) {
      return originalUnhandledRejectionHandler.call(window, event);
    }
  };

  
  console.error = (...args: any[]) => {
    
    const hasResizeObserverError = args.some(arg => isResizeObserverError(arg));
    
    if (hasResizeObserverError) {
      
      return;
    }
    
    
    originalConsoleError.apply(console, args);
  };

  
  const originalAddEventListener = window.addEventListener;
  window.addEventListener = function(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) {
    if (type === 'error' && listener) {
      const wrappedListener = (event: Event) => {
        const errorEvent = event as ErrorEvent;
        if (isResizeObserverError(errorEvent.message || errorEvent.error)) {
          return; 
        }
        if (typeof listener === 'function') {
          listener(event);
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        }
      };
      return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    return originalAddEventListener.call(this, type, listener || (() => {}), options);
  };

  console.log('✅ ResizeObserver error suppressor initialized');
};


export const restoreOriginalErrorHandlers = (): void => {
  window.onerror = originalErrorHandler;
  window.onunhandledrejection = originalUnhandledRejectionHandler;
  console.error = originalConsoleError;
};


export const createSafeResizeObserver = (callback: ResizeObserverCallback): ResizeObserver => {
  const safeCallback: ResizeObserverCallback = (entries, observer) => {
    try {
      callback(entries, observer);
    } catch (error) {
      
      if (
        error instanceof Error && 
        error.message.includes('ResizeObserver loop completed with undelivered notifications')
      ) {
        return;
      }
      
      throw error;
    }
  };

  return new ResizeObserver(safeCallback);
};
