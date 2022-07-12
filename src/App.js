import Layout from "./components/layout/layout";
import Shopping from "./container/shopping/shopping";
import {Routes,Route} from 'react-router-dom'
import Checkout from "./container/checkout/Checkout";
import Account from "./container/Account/Account";

function App() {

return(
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Shopping/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </Layout>

    </>
)}
export default App;
