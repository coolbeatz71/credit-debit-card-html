const primaryColor = "#219bb2";

//JS to move label on focus
const focusIn = (id) => {
  $(`${id} ~ label`).animate(
    {
      fontSize: "0.6rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    80,
  );
};

const focusOut = (id) => {
  $(`${id} ~ label`).animate(
    {
      fontSize: "12.5px",
      top: "0.8rem",
      padding: 0,
    },
    80,
  );
};

// name field
$("#name").on("focusin", function () {
  focusIn("#name");
});
$("#name").on("focusout", function () {
  if ($(this).val() === "") focusOut("#name");
  else $(this).next().css("color", primaryColor);
});

// card number field
$("#cardnumber").on("focusin", function () {
  focusIn("#cardnumber");
});
$("#cardnumber").on("focusout", function () {
  if ($(this).val() === "") focusOut("#cardnumber");
  else $(this).next().css("color", primaryColor);
});

// expiry date field
$("#expirationdate").on("focusin", function () {
  focusIn("#expirationdate");
});
$("#expirationdate").on("focusout", function () {
  if ($(this).val() === "") focusOut("#expirationdate");
  else $(this).next().css("color", primaryColor);
});

// security code field
$("#securitycode").on("focusin", function () {
  focusIn("#securitycode");
});
$("#securitycode").on("focusout", function () {
  if ($(this).val() === "") focusOut("#securitycode");
  else $(this).next().css("color", primaryColor);
});
