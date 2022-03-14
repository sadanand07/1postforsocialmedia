// Import Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { AuthenticationAction } from "./ReduxStore/Actions/AuthenticationAction";

// Import Components
import { Navigation } from "./Navigation/Naviagation";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { authenticated, isLoading } = auth;

  useEffect(() => {
    dispatch(AuthenticationAction());
  }, [dispatch]);

  return (
    <section className="App">
      <Navigation authenticated={authenticated} isLoading={isLoading} />
    </section>
  );
}
