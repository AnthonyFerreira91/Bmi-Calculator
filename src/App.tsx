function App() {
  return (
    <div id="app">
      <div id='firstDiv'>
        <div>
          <h1>Body Mass Index Calculator</h1>
          <p>Better understand your weight in relation to your height using our 
            body mass index (BM) calculator. While BMI is not the sole determinant 
            of a healthy weight, it offers a valuable starting point to evaluate 
            your overall health and well-being.</p>
        </div>
        <div>
          <h3>Enter your details below</h3>
          Metric
          Imperial
          Height
          Weight

          Your BMI is...
          {/* add score */}
          
          Your BMI suggests you're {/* add classification */}
          Your ideal weight is between {/* add range */}
        </div>
      </div>
      <div id='secondDiv'>
        <div>
          <img src="img" alt="<img>" />
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a
            healthy weight may lower your chances of experiencing health issues later on,
            such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced
            fat and sugar content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily for
            five days a week.
          </p>
        </div>
      </div>
      <div id='thirdDiv'>
        <div>
          <h4>Healthy eating</h4>
          <p>
            Healthy eating promotes weight control, disease prevention, better digestion,
            immunity, mental clarity, and mood.
          </p>
        </div>

        <div>
          <h4>Regular exercise</h4>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease
            risk, fostering wellness and longevity.
          </p>
        </div>

        <div>
          <h4>Adequate sleep</h4>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting
            overall restoration and rejuvenation.
          </p>
        </div>
      </div>
      <div id='fourthDiv'>
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited for
          every person. Specific groups should carefully consider their BMI outcomes, and in
          certain cases, the measurement may not be beneficial to use.
        </p>

        <div>
          <h5>Gender</h5>
          <p>
            The development and body fat composition of girls and boys vary with age. Consequently,
            a child's age and gender are considered when evaluating their BMI.
          </p>
        </div>

        <div>
          <h5>Age</h5>
          <p>
            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
            body fat content.
          </p>
        </div>

        <div>
          <h5>Muscle</h5>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as it doesn't
            differentiate muscle from fat.
          </p>
        </div>

        <div>
          <h5>Pregnancy</h5>
          <p>
            Expectant mothers experience weight gain due to their growing baby. Maintaining a
            healthy pre-pregnancy BMI is advisable to minimise health risks for both mother
            and child.
          </p>
        </div>

        <div>
          <h5>Race</h5>
          <p>
            Certain health concerns may affect individuals of some Black and Asian origins at
            lower BMIs than others. To learn more, it is advised to discuss this with your
            GP or practice nurse.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
