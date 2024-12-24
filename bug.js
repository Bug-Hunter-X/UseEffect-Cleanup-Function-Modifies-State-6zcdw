```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect cleanup function
    return () => {
      console.log('cleanup');
      setCount(100); //This is causing the error
    };
  }, []);

  return <div>Count: {count}</div>;
}
```