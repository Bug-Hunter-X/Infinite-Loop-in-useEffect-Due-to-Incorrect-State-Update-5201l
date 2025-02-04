```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting state directly inside the effect
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```