import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('CricPulse HD caught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0D1117] text-[#F8F9FA] flex items-center justify-center p-6">
          <div className="max-w-md w-full glass-panel p-8 rounded-2xl text-center border border-red-500/20 shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Cricket Feed Interrupted</h2>
            <p className="text-sm text-slate-400 mb-6">
              A temporary display error occurred while processing live match statistics. The score engine can be safely restored.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-[#162235] hover:bg-[#1f314c] text-white rounded-xl text-sm font-semibold transition-all border border-white/10"
              >
                Recover View
              </button>
              <button
                onClick={this.handleReload}
                className="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e012] text-black rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all neon-glow-green"
              >
                <RotateCcw className="w-4 h-4" />
                Reload Scoreboard
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
