```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way: use a functional update for the count state
    setCount(prevCount => prevCount + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```