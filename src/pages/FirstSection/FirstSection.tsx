import { ChangeEvent, useState, useEffect } from 'react';
import ShowResult from '../../components/ShowResult/ShowResult';
import MetricOrImperial from '../../components/MetricOrImperial/MetricOrImperial';
import './FirstSection.css';

export default function FirstSection() {
	const [height, setHeight] = useState<number>(0);
	const [weight, setWeight] = useState<number>(0);
	const [result, setResult] = useState<string>("");
	const [idealWeight, setIdealWeight] = useState<number>(0);
	const [imperial, setImperial] = useState<string>("false");

	useEffect(() => {
		if(height !== 0 && weight !== 0) {
			const heightMetre = height / 100;
			const bmi: string = (weight / Math.pow(heightMetre, 2)).toFixed(1);
			setResult(bmi);
			setIdealWeight(height - 100);
		}
	}, [height, weight])

	const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.id === 'height') {
			setHeight(parseInt(e.target.value));
		} else {
			setWeight(parseInt(e.target.value))
		}
	}

	const radioOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setImperial(e.target.value);
	}

	return (
		<section id='firstSection'>
			<div id='firstSection-1'>
				<img src="/src/assets/images/logo.svg" alt="logo" />
				<div id="firstSection-1-1">
					<h1>Body Mass<br/>Index Calculator</h1>
					<p>
						Better understand your weight in relation to your height using<br/>
						our body mass index (BM) calculator. While BMI is not the<br/>
						sole determinant of a healthy weight, it offers a valuable<br/>
						starting point to evaluate your overall health and well-being.
					</p>
				</div>
			</div>
			<div id="firstSection-2">
				<h3>Enter your details below</h3>
				<div id="firstSection-2-1">
					<div className="firstSectionRadio">
						<input type="radio" name="metricOrImperial" value="false" onChange={radioOnChange} checked={imperial === "false"}/>
						<label htmlFor="metric">Metric</label>
					</div>
					<div className="firstSectionRadio">
						<input type="radio" name="metricOrImperial" value="true" onChange={radioOnChange} checked={imperial === "true"}/>
						<label htmlFor="imperial">Imperial</label>
					</div>
				</div>
					<MetricOrImperial inputOnChange={inputOnChange} imperial={imperial}/>
				<ShowResult result={result} idealWeight={idealWeight}/>
			</div>
		</section>
	)
}
