import { Navbar } from "./components/Navbar.jsx";
import { Entry } from "./components/Entry.jsx";
import data from "./data.json";

function App() {
  let entries = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img.src}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}

        // Or
        // entry={entry}
      />
    )
  })

  return (
    <>
      <Navbar />
      {entries}
    </>
  )
}

export { App };