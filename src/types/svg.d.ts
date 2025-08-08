import 'qwik';

declare module 'qwik' {
  namespace JSX {
    interface PathElementProps {
      strokeLinecap?: string;
      strokeLinejoin?: string;
      strokeWidth?: string;
      d?: string;
    }

    interface IntrinsicElements {
      path: PathElementProps;
    }
  }
}