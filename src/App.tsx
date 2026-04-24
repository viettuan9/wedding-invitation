import { Toaster } from "react-hot-toast";
import { useState } from "react";
import "./App.css";
import { Footer, Header } from "./components/layout";
import { EventDetails, Hero, MapLocation } from "./features";

function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  return (
    <>
      <Header onOpenRsvp={() => setIsRsvpOpen(true)} />

      <main>
        <Hero />

        <EventDetails
          openRsvp={isRsvpOpen}
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onCloseRsvp={() => setIsRsvpOpen(false)}
        />

        <MapLocation />

        {/* <PhotoGallery /> */}
      </main>

      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
