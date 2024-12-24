# React 19 useEffect Cleanup Bug

This repository demonstrates a subtle bug related to the `useEffect` hook's cleanup function in React 19.  The bug occurs when the cleanup function attempts to modify the component's state, leading to unpredictable behavior.  The solution shows how to correctly implement the cleanup function without affecting state.