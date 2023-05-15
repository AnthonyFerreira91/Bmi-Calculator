import './ShowResult.css';

type ShowResultProps = {
	result: string
	idealWeight: number
}

export default function ShowResult({result, idealWeight}: ShowResultProps) {
	let healthStatus = "";
	if(+result < 18.5) {
		healthStatus = "Underweight";
	} else if(+result < 24.9) {
		healthStatus = "Healthy weight";
	} else if (+result < 29.9) {
		healthStatus = "Overweight";
	} else {
		healthStatus = "Obese";
	}

	if(result === "NaN" || +result < 1 || +result > 100) {
		return (
			<div id="firstSection-2-3">
				<div id="firstSectionWelcome">
					<h4>Welcome!</h4>
					<p>Enter your height and weight and you'll see your BMI result here</p>
				</div>
			</div>
		)
	} else {
		return (
			<div id="firstSection-2-3">
					<div id="result-1">
						<p>Your BMI is...</p>
						<h4>{result}</h4>
					</div>
					<div id="result-2">
						<p>Your BMI suggests you're a {healthStatus}. Your ideal weight is between <strong>{idealWeight - 15}kgs - {idealWeight}kgs</strong></p>
					</div>
			</div>
		)
	}
}
