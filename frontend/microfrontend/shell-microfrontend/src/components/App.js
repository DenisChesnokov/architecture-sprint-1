import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { CurrentUserContext, CurrentUserProvider } from "@shared/contexts";
import { api, auth } from "@shared/utils";
import { Header, Footer, ProtectedRoute } from "@shell/components";
import { ProfileContainer } from "@profile/containers";
import { CardsContainer } from "@cards/containers";
import { Register, Login } from "@auth/components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth.checkToken(token)
        .then((res) => {
          setEmail(res.data.email);
          setIsLoggedIn(true);
          history.push("/");
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  }, [history]);

  function onSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setEmail("");
    history.push("/signin");
  }

  return (
    <CurrentUserProvider>
      <div className="page__content">
        <Header email={email} onSignOut={onSignOut} />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={() => (
              <>
                <ProfileContainer />
                <CardsContainer />
              </>
            )}
            loggedIn={isLoggedIn}
          />
          <Route path="/signup">
            <Register onRegister={auth.register} />
          </Route>
          <Route path="/signin">
            <Login onLogin={auth.login} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserProvider>
  );
}

export default App;