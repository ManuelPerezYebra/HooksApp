import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
import HooksApp from './components/HooksApp.jsx/HooksApp';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import CounterApp from './01-useState/CounterApp';
const App = () => {
	return (
		<>
			<GlobalStyles />
			<HooksApp />
			<CounterApp />
			<CounterWithCustomHook />
		</>
	);
};

export default App;
