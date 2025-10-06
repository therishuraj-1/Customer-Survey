function startSurvey() {
      document.getElementById('welcome-screen').classList.add('hidden');
      document.getElementById('survey-form').classList.remove('hidden');
    }

    document.getElementById('survey').addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const answers = {};
      formData.forEach((value, key) => {
        answers[key] = value;
      });

      localStorage.setItem('customerSurvey', JSON.stringify(answers));
      console.log('Saved to localStorage:', answers);

      document.getElementById('survey-form').classList.add('hidden');
      document.getElementById('thank-you').classList.remove('hidden');
    });