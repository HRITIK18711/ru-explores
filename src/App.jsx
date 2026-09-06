import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Stories from "./Component/Stories";
import MenuBar from "./Component/MenuBar";
import About from "./Component/About";
import Privacy from "./Component/Privacy";
import Disc from "./Component/Disc";
import Content from "./Component/Content";
import Main_News_Section from "./Component/Main_News_Section";
import Home_Sports_News from "./Component/Home_Sports_News";
import Webstories from "./Component/Webstories";
import Home_Entertainment_News from "./Component/Home_Entertainment_News";
import Footer from "./Component/Footer";
import LatestNews from "./Component/LatestNews";
import Kedar from "./Component/Kedar";
import JamaNews from "./Component/JamaNews";
import Mahabhodi from "./Component/Mahabhodi";
import Metro from "./Component/Metro";
import IndiaGate from "./Component/IndiaGate";
import GreatBuddha from "./Component/GreatBuddha";
import DelhiMysterious from "./Component/DelhiMysterious";
import MalchaMahal from "./Component/MalchaMahal";
import QutubMinar from "./Component/QutubMinar";
import Events from "./Component/Events";
import CP from "./Component/CP";
import Lotus from "./Component/Lotus";
import Nizamuddin from "./Component/Nizamuddin";
import PhotoStory from "./Component/PhotoStory";
import MetroData from "./Component/Metrodata";
import Tunghnath from "./Component/tunghnath"; 
import RedFort from "./Component/RedFort";
import Safdarjunga from "./Component/Safdarjunga";
import PhotoStory1 from "./Component/PhotoStory1";
import Sarojini from "./Component/Sarojini";
import Lajpat from "./Component/Lajpat";
import JantarMantar from "./Component/Jantarmantar";
import Kedarkantha from "./Component/Kedarkantha";
import Hanumanmandir from "./Component/Hanumanmandir";
import Mehraulipark from "./Component/Mehraulipark";
import Palikabazaar from "./Component/Palikabazaar";
import Tughlaqabadfort from "./Component/Tughlaqabadfort";
import BaraImambara from "./Component/BaraImambara";
import JaneshwarMishraPark from "./Component/JaneshwarMishraPark";
import SikandarBagh from "./Component/SikandarBagh";
import ResidencyLucknow from "./Component/ResidencyLucknow";
import OldHeritageLucknow from "./Component/old_heritage_lucknow";
import DilkushaKothi from "./Component/dilkhusha_kothi";
import LaMartiniere from "./Component/LaMartiniere";
import FeedbackForm from "./Component/FeedbackForm";
import BhaktapurNepal from "./Component/BhaktapurNepal";
import NagarkotNepal from "./Component/NagarkotNepal";
import KathmanduNepal from "./Component/KathmanduNepal";
import Pashupatinath from "./Component/pashupatinath";
import Patan from "./Component/Patan";
import Mustang from "./Component/Mustang";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/webstories/");

  return (
    <>
      {!hideNavbar && (
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur px-2 sm:px-4">
          <MenuBar />
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow w-full">
        {children}
      </div>

      {!hideNavbar && <Footer />}
    </>
  );
}

function HomePage() {
  return (
    <>
      <Content />
      <LatestNews />
      <PhotoStory />
      <Main_News_Section />
      {/* <Home_Sports_News />
      <Home_Entertainment_News /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Helmet>
        <title>RU Explores</title>
        <meta name="google-adsense-account" content="ca-pub-3708107674627087" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-top -z-20 opacity-40"
          style={{ backgroundImage: "url('/Image/hero.jpeg')" }}
        ></div>

        {/* OVERLAY */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/20 -z-10"></div>

        {/* MAIN WRAPPER */}
        <div className="relative z-10 flex flex-col min-h-screen">

          <Layout>
            <Routes>

              {/* HOME */}
              <Route path="/" element={<HomePage />} />

              {/* OTHER */}
              <Route path="/webstories" element={<Webstories />} />
              <Route path="/webstories/:slug" element={<Stories />} />

              {/* EVENTS FIXED */}
              <Route path="/events" element={<Events />} />

              <Route path="/photostory" element={<PhotoStory1 />} />
              <Route path="/events/:slug" element={<Events />} />

              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disc" element={<Disc />} />
              <Route path="/kedar" element={<Kedar />} />
              <Route path="/metro" element={<MetroData />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              
              <Route
                path="/kedarkantha-trek-uttarakhand-travel-guide"
                element={<Kedarkantha/>}
              />
              <Route
                path="/kathmandu-nepal-travel-guide"
                element={<KathmanduNepal/>}
              />
              <Route
                path="/pracheen-hanuman-mandir-connaught-place-delhi-travel-guide"
                element={<Hanumanmandir />}
              />
              <Route
                path="/bhaktapur-nepal-travel-guide"
                element={<BhaktapurNepal/>}
              />
              <Route
                path="/nagarkot-nepal-travel-guide"
                element={<NagarkotNepal/>}
              />
              <Route
                path="/palika-bazaar-connaught-place-new-delhi-travel-guide"
                element={<Palikabazaar />}
              />
              <Route
                path="/tughlaqabad-fort-delhi-travel-guide"
                element={<Tughlaqabadfort />}
              />
              <Route
                path="/mehrauli-archaeological-park-delhi-travel-guide"
                element={<Mehraulipark />}
              />
              {/* IMPORTANT */}
              <Route
                path="/jama-masjid-delhi-travel-guide"
                element={<JamaNews />}
              />
              <Route path="/metro/:slug" element={<MetroData />} />

              <Route
                path="/mahabodhi-temple-bihar-travel-guide"
                element={<Mahabhodi />}
              />
              <Route
                path="/jantar-mantar-delhi-travel-guide"
                element={<JantarMantar />}
              />
              <Route
                path="/lajpat-nagar-market-delhi-travel-guide"
                element={<Lajpat />}
              />
              <Route
                path="/safdarjung-tomb-delhi-travel-guide"
                element={<Safdarjunga/>}
              />
              <Route
                path="/sarojini-nagar-market-delhi-travel-guide"
                element={<Sarojini/>}
              />
              
              <Route
                path="/red-fort-delhi-travel-guide"
                element={<RedFort />}
              />

              <Route
                path="/chopta-tungnath-chandrashila-trek-uttarakhand-travel-guide"
                element={<Tunghnath/>}
              />
              <Route
                path="/old-lucknow-heritage-walk-lucknow-uttar-pradesh-travel-guide"
                element={<OldHeritageLucknow/>}
              />
              <Route
                path="/dilkhusha-kothi-garden-lucknow-uttar-pradesh-travel-guide"
                element={<DilkushaKothi/>}
              />

              <Route
                path="/india-gate-delhi-travel-guide"
                element={<IndiaGate />}
              />

              <Route
                path="/great-buddha-statue-bihar-travel-guide"
                element={<GreatBuddha />}
              />

              <Route
                path="/delhi-mysterious-place-travel-guide"
                element={<DelhiMysterious />}
              />

              <Route
                path="/malcha-mahal-delhi-travel-guide"
                element={<MalchaMahal />}
              />

              <Route
                path="/qutub-minar-delhi-travel-guide"
                element={<QutubMinar />}
              />

              <Route
                path="/connaught-place-new-delhi-travel-guide"
                element={<CP />}
              />

              <Route
                path="/lotus-temple-delhi-travel-guide"
                element={<Lotus />}
              />

              <Route
                path="/hazrat-nizamuddin-dargah-delhi-travel-guide"
                element={<Nizamuddin />}
              />

              <Route
                path="/Janeshwar-mishra-park-lucknow-uttar-pradesh-travel-guide"
                element={<JaneshwarMishraPark />}
              />

              <Route
                path="/residency-lucknow-uttar-pradesh-travel-guide"
                element={<ResidencyLucknow />}
              />

              <Route
                path="/bara-imambara-lucknow-uttar-pradesh-travel-guide"
                element={<BaraImambara />}
              />

              <Route
                path="/sikandar-bagh-lucknow-uttar-pradesh-travel-guide"
                element={<SikandarBagh />}
              />
              <Route
                path="/La Martiniere College Lucknow: History, Architecture, Timings & Visitor Guide"
                element={<LaMartiniere/>}
              />
              <Route 
              path="/pashupatinath-temple-kathmandu-nepal-travel-guide" 
              element={<Pashupatinath/>}
              />
             
              <Route 
              path="/patan-nepal-travel-guide" 
              element={<Patan/>}
              />

              <Route 
              path="/mustang-nepal-travel-guide" 
              element={<Mustang/>}
              />
              
            </Routes>
          </Layout>

        </div>
      </div>
    </Router>
  );
}

export default App;