```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct cleanup function - avoids modifying state
    return () => {
      console.log('cleanup');
      //Do not modify the state here
    };
  }, []);

  return <div>Count: {count}</div>;
}
```