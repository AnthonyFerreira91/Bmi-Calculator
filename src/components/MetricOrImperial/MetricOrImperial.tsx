import './MetricOrImperial.css';

type MetricOrImperialProps = {
	inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MetricOrImperial({inputOnChange}: MetricOrImperialProps) {
	return (
		<>
			<div className="firstSectionInput">
				<label htmlFor="height">Height</label>
				<input onChange={inputOnChange} type="text" name="height" id="height" placeholder="0"/>
				<span id="textCM">cm</span>
			</div>
			<div className="firstSectionInput">
				<label htmlFor="weight">Weight</label>
				<input onChange={inputOnChange} type="text" name="weight" id="weight" placeholder="0" />
				<span id="textKG">kg</span>
			</div>
		</>
	)
}
