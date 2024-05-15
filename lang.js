<script>
  // Function to get the browser's preferred language
  function getPreferredLanguage() {
    return navigator.language || navigator.userLanguage;
  }

  // Function to prompt the user to select a language
  function selectLanguage() {
    var preferredLanguage = getPreferredLanguage();

    // Display a prompt to select a language
    var selectedLanguage = prompt('Select your preferred language:\n\n1. English\n2. French\n3. Spanish');

    // Handle the selected language
    if (selectedLanguage === '1') {
      alert('Welcome to Elspace Tunis');
    } else if (selectedLanguage === '2') {
      alert('Bienvenue à Elspace Tunis');
    } else if (selectedLanguage === '3') {
      alert('Bienvenido a Elspace Tunis');
    } else {
      // If an invalid option is selected or canceled, fallback to the browser's preferred language
      alert('Welcome to Elspace Tunis');
    }
  }

  // Call the selectLanguage function when the page loads
  window.onload = selectLanguage;
</script>