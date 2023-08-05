import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';
import DefaultLayout from '../components/Layout/DefaultLayout';

function App() {
    let Layout = DefaultLayout;
    return (
        <Router history={history}>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         started: state.app.started,
//         isLoggedIn: state.user.isLoggedIn,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
