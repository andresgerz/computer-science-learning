import React from "react"
import { Router, Route, Switch, NavLink, useLocation } from "react-router-dom"


import Welcome from './components/Welcome';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Result from './components/Result';

function Routes(props) {
    const location = useLocation();
    
    React.useEffect(() => {
        console.log("*", location.pathname)
        props.setPathname(location.pathname)
    },[location])

    return (
        <>
          <Route exact path="/" component={Welcome} />
          <Route path="/step-one" component={StepOne} />
          <Route path="/step-two" component={StepTwo} />
          <Route path="/step-three" component={StepThree} />
          <Route path="/result" component={Result} />
        </>
    );
}

export default Routes;