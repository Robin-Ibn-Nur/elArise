import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation('/');
    }, 4500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default App;
