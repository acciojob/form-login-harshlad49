 function getFormvalue(event) {
      event.preventDefault(); // Prevent form from submitting and refreshing the page

      const form = event.target;
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      // Edge case handling for empty fields
      if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
        return;
      }

      alert(`${firstName} ${lastName}`.trim());
    }
