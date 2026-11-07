import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Shown instead of the children if they crash. null hides the broken part quietly. */
  fallback?: ReactNode;
  /** Changing this value (e.g. the URL) clears a previous error. */
  resetKey?: string;
}

interface State {
  failed: boolean;
}

/**
 * Stops one broken component from blanking the whole page.
 * React has no hook for this, so it has to be a class component.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Section failed to render:', error, info.componentStack);
  }

  componentDidUpdate(prev: Props) {
    if (this.state.failed && prev.resetKey !== this.props.resetKey) this.setState({ failed: false });
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
