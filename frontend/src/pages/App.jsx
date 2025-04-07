import Header from '../sections/Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [leaderList, setLeaderList] = useState([]);
  const [showLeaderBoardModal, setLeaderBoardModal] = useState(false);

  return (
    <>
      <Header />
      <Outlet
        context={[
          leaderList,
          setLeaderList,
          showLeaderBoardModal,
          setLeaderBoardModal,
        ]}
      />
    </>
  );
}

export default App;
