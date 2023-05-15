import './ThirdSection.css';

export default function ThirdSection() {
	return (
		<section id='thirdSection'>
      <div id='thirdSection-1'>
        <div className="thirdSectionItem">
          <img src="/src/assets/images/icon-eating.svg" alt="iconEating" />
          <div>
            <h4>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control,<br/>
              disease prevention, better digestion, immunity,<br/>
              mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src="/src/assets/images/icon-exercise.svg" alt="iconExercice" />
          <div>
            <h4>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control,<br/>
              elevates mood, and reduces disease risk,<br/>
              fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src="/src/assets/images/icon-sleep.svg" alt="iconeSleep" />
          <div>
            <h4>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional<br/>
              stability, and physical wellness, promoting<br/>
              overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
	)
}
