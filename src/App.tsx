import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SelectedGenreIdProvider } from './SelectedGenreIdContext';



export function App() {
  
  return (
    <SelectedGenreIdProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
       <SideBar />
       < Content />         
      </div>
    </SelectedGenreIdProvider>
  )
}