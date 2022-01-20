import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Missions from "./pages/missions/index";
import RocketDetails from "./pages/rocketDetails/index";
import Loader from "./components/loader";
import ScrollToTop from "./ScrollToTop";
import "./styles/globals.scss";

const EXCHANGE_RATES = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_year
      upcoming
      launch_success
      launch_site {
        site_name
      }
      links {
        article_link
        video_link
        mission_patch
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        rocket_type
        rocket {
          id
          company
          country
          description
          engines {
            type
            version
          }
          mass {
            kg
          }
          height {
            meters
          }
          first_stage {
            engines
            reusable
            fuel_amount_tons
          }
          second_stage {
            engines
            fuel_amount_tons
          }
          stages
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <header>
          <nav>
            <Link to="/"> Home </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Missions data={data} />} />
          <Route
            path="/rocket-details/:id"
            element={<RocketDetails data={data} />}
          />
        </Routes>
        <footer>
          {" "}
          <small>&copy; 2022 RandomLite | All Rights Reserved</small>{" "}
        </footer>
      </Router>
    </div>
  );
}
