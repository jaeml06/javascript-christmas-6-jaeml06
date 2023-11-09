import EventControl from "./EventControl";

class App {
  async run() {
    const eventProgram = new EventControl();
    await eventProgram.start();
  }
}

export default App;
