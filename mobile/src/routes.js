import { createStackNavigation } from 'react-navigation'

import Login from './pages/login'
import Timeline from './pages/timeline'
import NewTweet from './pages/new-tweet'

const Routes = createStackNavigation({
    Login,
    Timeline,
    NewTweet
})

export default Routes