
import{Routes, Route} from 'react-router'
import { HomePage } from './pages/Home';
import { Users } from './pages/Users/Index';
import { Messages } from './pages/Messages';


function App(){
    return (<>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='Users' element={ <Users/>}/>
            <Route path='Messages' element={<Messages/>}/>
        </Routes>
    </>
    );
}
export default App;
