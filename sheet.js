function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Parse form data
  var name = e.parameter.name;
  var email = e.parameter.email;
  var shift = e.parameter.shift;
  
  // Append to sheet
  sheet.appendRow([new Date(), name, email, shift]);
  
  // Return success response
  return ContentService
    .createTextOutput("Success! Entry saved.")
    .setMimeType(ContentService.MimeType.TEXT);
}