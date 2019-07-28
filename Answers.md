# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
   ⁃ React is a Javascript library - a tool for building UI components.
   ⁃ It solves the issue of heavy use of the DOM with it’s own virtual DOM to manage state and only make changes when necessary.
   ⁃ Component based development - very modular code
   ⁃ You can use Javascript via JSX

1. What does it mean to think in react?
   ⁃ Break the UI Into a Component Hieararchy
   ⁃ Build a Static Version in React
   ⁃ Identify the Minimal Representation of UI State
   ⁃ Identify Where your State Should Live
   ⁃ Add Inverse Data Flow

1. Describe state.
   ⁃ An object that determines how that component renders and behaves. Allows you to create components that are dynamic and interactive.

1. Describe props.
   ⁃ Props are state set by parent and passed to child components and they are fixed throughout the component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
   ⁃ A function is said to have a side effect if it tries to modify anything outside it’s body. It is an impure function. Modifies state outside it’s scope.
   ⁃ You sync effects in a React component to state or prop changes via Lifecycle Hooks/Methods
