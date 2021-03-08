const cardnumber = document.getElementById("cardnumber");
const expirationdate = document.getElementById("expirationdate");
const securitycode = document.getElementById("securitycode");

var cardnumber_mask = new IMask(cardnumber, {
  mask: [
    {
      mask: "0000-000000-00000",
      regex: "^3[47]\\d{0,13}",
      cardtype: "american express",
    },
    {
      mask: "0000-0000-0000-0000",
      regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}",
      cardtype: "discover",
    },
    {
      mask: "0000-000000-0000",
      regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}",
      cardtype: "diners",
    },
    {
      mask: "0000-0000-0000-0000",
      regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}",
      cardtype: "mastercard",
    },
    {
      mask: "0000-000000-00000",
      regex: "^(?:2131|1800)\\d{0,11}",
      cardtype: "jcb15",
    },
    {
      mask: "0000-0000-0000-0000",
      regex: "^(?:35\\d{0,2})\\d{0,12}",
      cardtype: "jcb",
    },
    {
      mask: "0000-0000-0000-0000",
      regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}",
      cardtype: "maestro",
    },

    {
      mask: "0000-0000-0000-0000",
      regex: "^4\\d{0,15}",
      cardtype: "visa",
    },
    {
      mask: "0000-0000-0000-0000",
      regex: "^62\\d{0,14}",
      cardtype: "unionpay",
    },
    {
      mask: "0000-0000-0000-0000",
      cardtype: "Unknown",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, "");

    for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
      let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
      if (number.match(re) != null) {
        return dynamicMasked.compiledMasks[i];
      }
    }
  },
});

var securitycode_mask = new IMask(securitycode, {
  mask: "0000",
});

var expirationdate_mask = new IMask(expirationdate, {
  mask: "MM{/}YY",
  groups: {
    YY: new IMask.MaskedPattern.Group.Range([0, 99]),
    MM: new IMask.MaskedPattern.Group.Range([1, 12]),
  },
});

cardnumber_mask.on("accept", function () {
  switch (cardnumber_mask.masked.currentMask.cardtype) {
    case "visa":
      $("i").removeClass("suffix-mastercard");
      $("i").addClass("suffix-visa");
      break;
    case "mastercard":
      $("i").removeClass("suffix-visa");
      $("i").addClass("suffix-mastercard");
      break;
    default:
      $("i").removeClass("suffix-visa");
      $("i").removeClass("suffix-mastercard");
      break;
  }
});
