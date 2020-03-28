import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from '../reducers/'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import handleError from '../../utilities/handleError';
import {BASE_URL} from '../../constants/ApiUrls'

const persistConfig = {
    key: "root",
    storage: AsyncStorage
  };
  const logger = createLogger();
  
  
  /**-------------------Initiate axios instance--------------------------- **/
  
  const configureAxios = () => {
  
    return axios.create({
      baseURL: `${BASE_URL}`,
      timeout: 20000,
      withCredentials: false,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    });
  
  };

  /**
   * handleError
   */


  
  
  /**------------------configure redux persist----------------------------**/
  
  const configurePersistStore = () => {
  
    const persistedReducer = persistReducer(persistConfig, reducers);
  
    return persistedReducer;
  };
  
  
  export const axiosInstance = configureAxios();
  
  
  /**-------------------Axios response Intercepertor--------------------------- **/
  
  axiosInstance.interceptors.response.use(response => {
  
    return response.data
  
  }, error => {
    console.log("enter the errorr");
    const errors = handleError(error);
    return Promise.reject(errors);
  })
  
  
  /**-------------------Added Middleware for actions----------------------- **/
  
  const configureMiddlewares = () => {
  
    const middleware = [
      logger,
      thunk.withExtraArgument({
        api: axiosInstance,
      })
    ];
  
    return middleware;
  };
  
  /**-------------------Create Store-------------------------------------- **/
  
  const configureStore = () => {
    const middlewares = configureMiddlewares();
    const persistReducers = configurePersistStore();
  
    let store = createStore(persistReducers, compose(applyMiddleware(...middlewares)));
    const persistor = persistStore(store);
    return { store, persistor };
  }
  
  export default configureStore