import './MetricOrImperial.css';

type MetricOrImperialProps = {
	inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	imperial: string
}

export default function MetricOrImperial({inputOnChange, imperial}: MetricOrImperialProps) {
	if(imperial === "false") {
		return (
			<>
				<div id="firstSectionMetric">
					<div className="firstSectionMetric">
						<label htmlFor="height">Height</label>
						<input onChange={inputOnChange} type="text" name="height" id="height" placeholder="0"/>
						<span id="textCM">cm</span>
					</div>
					<div className="firstSectionMetric">
						<label htmlFor="weight">Weight</label>
						<input onChange={inputOnChange} type="text" name="weight" id="weight" placeholder="0" />
						<span id="textKG">kg</span>
					</div>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div id="firstSectionImperial">
					<div className="firstSectionImperial">
						<label id="label" htmlFor="height">Height</label>
						<div className="imperialInput">
							<input type="text" placeholder='0'/>
							<span id="ft">ft</span>
							<input type="text" placeholder='0'/>
							<span id="in">in</span>
						</div>
					</div>
					<div className="firstSectionImperial">
						<label htmlFor="weight">Weight</label>
						<div className="imperialInput">
							<input type="text" placeholder='0'/>
							<span id="st">st</span>
							<input type="text" placeholder='0'/>
							<span id="lbs">lbs</span>
						</div>
					</div>
				</div>
			</>
		)
	}
	
}
