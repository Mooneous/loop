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
		{ title: 'LAPPING', subTitle: 'SEA WAVES', pic: 'pic8.jpg' },
	];
	let [Active, setActive] = useState(0);
	const path = process.env.PUBLIC_URL;
	const len = 8;
	const list = useRef(null);

	const prev = () => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);
		setActive(Active === 0 ? (Active = len - 1) : --Active);
	};

	const next = () => {
		const firstEl = list.current.firstElementChild;
		list.current.append(firstEl);
		setActive((Active) => (Active === len - 1 ? (Active = 0) : ++Active));
	};

	useEffect(() => {
		const lastEl = list.current.lastElementChild;
		list.current.prepend(lastEl);
	}, []);

	useEffect(() => {
		console.log(Active);
	}, [Active]);

	return (
		<main>
			<ul className='list' ref={list}>
				{data.map((item, idx) => {
					let activeClass = '';
					Active === idx && (activeClass = 'on');
					return (
						<li key={idx} className={activeClass}>
							<div className='inner'>
								<img src={path + '/img/' + item.pic} alt={item.title} />
								<div className='txtActive'>
									<div className='upper'>
										<p>{item.title}</p>
									</div>
									<div className='lower'>
										<p>{item.subTitle}</p>
									</div>
								</div>

								<div className='txtThumb'>
									<p>
										{item.title} <br />
										{item.subTitle}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>

			<button className='prev' onClick={prev}>
				prev
			</button>
			<button className='next' onClick={next}>
				next
			</button>
		</main>
	);
}

export default App;

//Array(7).fill().map((item, idx)??? data.map((item, idx)?????????
