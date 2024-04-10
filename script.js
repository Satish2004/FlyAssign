


$(document).ready(function () {
    $('#taxForm').submit(function (e) {
      e.preventDefault();
      $('#ageError, #incomeError').hide();
      var age = $('#age').val();
      var income = parseFloat($('#income').val());
      var extraIncome = parseFloat($('#extraIncome').val()) || 0;
      var deductions = parseFloat($('#deductions').val()) || 0;
      var tax = 0;

      if (!age) {
        $('#ageError').show();
        return;
      }

      if (!income) {
        $('#incomeError').show();
        return;
      }

      var taxableIncome = income + extraIncome - deductions;

      if (age === 'lt40') {
        tax = (taxableIncome > 800000) ? 0.3 * (taxableIncome - 800000) : 0;
      } else if (age === 'gte40lt60') {
        tax = (taxableIncome > 800000) ? 0.4 * (taxableIncome - 800000) : 0;
      } else if (age === 'gte60') {
        tax = (taxableIncome > 800000) ? 0.1 * (taxableIncome - 800000) : 0;
      }
   

      $('#resultText').text('Tax Amount: ' + tax.toFixed(2) + ' Lakhs');
      $('#resultModal').modal('show');
    });
  });


