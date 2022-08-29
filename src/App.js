import './scss/style.scss';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
	const data = [
		{ title: 'WOODED', subTitle: 'CALM VALLEY', pic: 'pic1.jpg' },
		{ title: 'SERENE', subTitle: 'WIDE PLAINS', pic: 'pic2.jpg' },
		{ title: 'FOGGY', subTitle: 'CALM LAKE', pic: 'pic3.jpg' },
		{ title: 'QUIET', subTitle: 'ROADSIDE ', pic: 'pic4.jpg' },
		{ title: 'WINDY', subTitle: 'MOUNTAIN', pic: 'pic5.jpg' },
		{ title: 'DIMMED', subTitle: 'LANDSCAPE', pic: 'pic6.jpg' },
		{ title: 'SUNSET', subTitle: 'GRASSLAND', pic: 'pic7.jpg' },
		//{ title: 'LAPPING', subTitle: 'SEA WAVES', pic: 'pic8.jpg' },
	];
	const path = process.env.PUBLIC_URL;

	return <main></main>;
}

export default App;

//Array(7).fill().map((item, idx)와 data.map((item, idx)는같다