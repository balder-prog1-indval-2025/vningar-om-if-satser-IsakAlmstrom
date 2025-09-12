write("Myndig: 0");
write("Längd: 1");
write("Negativt/positivt tal: 2");
write("x & y: 3");
write("Räknare: 4");
write("Spelkort: 5");
write("Månader: 6");
write("Årstider: 7");
write("Huvudräkning: 8");
write("Fakta om två tal: 9");
write("Fakta om tre tal: 10");
write("Tecken: 11");
write("Tal mellan -999 och 999: 12");
write("Triangel: 13");
let program = +(await read("Vilket program vill du köra? "));
if (program == 0) {
  let ålder = +(await read("Ålder: "));
  if (ålder >= 18) {
    write("Myndig");
  } else {
    write("Omyndig");
  }
}
if (program == 1) {
  let längd = +(await read("Längd (i centimeter): "));
  if (längd >= 200) {
    write("Hej du långe!");
  } else if (längd <= 170) {
    write("Hej du korte!");
  } else {
    write("Hej du medellånge!");
  }
}
if (program == 2) {
  let tal = +(await read("Ett tal: "));
  if (tal > 0) {
    write("Talet är positivt");
  } else if (tal < 0) {
    write("talet är negativt");
  } else {
    write("talet är noll");
  }
}
if (program == 3) {
  let x = +(await read("x="));
  let y = +(await read("y="));
  if (x > y) {
    write("x > y");
  } else if (x < y) {
    write("x < y");
  } else {
    write("x = y");
  }
}
if (program == 4) {
  let tal1 = +(await read("tal 1: "));
  let tal2 = +(await read("Tal 2: "));
  let operator = await read("Operator: ");
  if (operator == "+") {
    write(tal1 + tal2);
  } else if (operator == "*") {
    write(tal1 * tal2);
  } else if (operator == "/") {
    write(tal1 / tal2);
  } else if (operator == "-") {
    write(tal1 - tal2);
  } else {
    write(operator + " är inte en operator, testa +, -, * eller /");
  }
}
if (program == 5) {
  let valör = +(await read("Valör (1-13): "));
  if (valör == 1) {
    write("Ett ess");
  } else if (valör == 11) {
    write("En knäkt");
  } else if (valör == 12) {
    write("En dam");
  } else if (valör == 13) {
    write("en kung");
  } else if (valör > 1 && valör < 11) {
    write("En " + Math.round(valör) + ":a");
  } else {
    write(valör + " är inte en godkänd valör");
  }
}
if (program == 6) {
  let månad = +(await read("Månad (1-12): "));
  if (månad == 1) {
    write("Januari");
  } else if (månad == 2) {
    write("Februari");
  } else if (månad == 3) {
    write("Mars");
  } else if (månad == 4) {
    write("April");
  } else if (månad == 5) {
    write("Maj");
  } else if (månad == 6) {
    write("Juni");
  } else if (månad == 7) {
    write("juli");
  } else if (månad == 8) {
    write("augusti");
  } else if (månad == 9) {
    write("september");
  } else if (månad == 10) {
    write("Oktober");
  } else if (månad == 11) {
    write("November");
  } else if (månad == 12) {
    write("December");
  } else {
    write(månad + " är inte en av månaderna");
  }
}
if (program == 7) {
  let månad = +(await read("Månad (1-12): "));
  if (månad == 1 || månad == 2 || månad == 12) {
    write("Vinter");
  } else if (månad >= 3 && månad <= 5) {
    write("Vår");
  } else if (månad >= 6 && månad <= 8) {
    write("Sommar");
  } else if (månad >= 9 && månad <= 11) {
    write("Höst");
  } else {
    write(månad + " är inte en av månaderna");
  }
}
if (program == 8) {
  let tal1 = +(await read("Tal 1: "));
  let tal2 = +(await read("Tal 2: "));
  let produkt = +(await read("Produkt: "));
  if (produkt == tal1 * tal2) {
    write("Korrekt");
  } else {
    write("Inkorrekt, rätt svar: " + tal1 * tal2);
  }
}
if (program == 9) {
  let tal1 = +(await read("Tal 1: "));
  let tal2 = +(await read("Tal 2: "));
  write("Medelvärde: " + (tal1 + tal2) / 2);
  write("Summa: " + (tal1 + tal2));
  if (tal1 > tal2) {
    write("Minsta: " + tal2);
    write("Största: " + tal1);
  } else {
    write("Minsta: " + tal1);
    write("Största: " + tal2);
  }
}
if (program == 10) {
  let tal1 = +(await read("Tal 1: "));
  let tal2 = +(await read("Tal 2: "));
  let tal3 = +(await read("Tal 3: "));
  write("Medelvärde: " + (tal1 + tal2 + tal3) / 3);
  write("Summa: " + (tal1 + tal2 + tal3));
  write("Minsta: " + Math.min(tal1, tal2, tal3));
  write("Största: " + Math.max(tal1, tal2, tal3));
}
if (program == 11) {
  let tecken = await read("Tecken: ");
  if (tecken != tecken.toLowerCase()) {
    write("Stor bokstav");
  } else if ("abcdefghijklmnopqrstuvwxyzåäö".includes(tecken)) {
    write("Liten bokstav");
  } else {
    write("Annat tecken");
  }
}
if (program == 12) {
  let tal = +(await read("Ett tal mellan -999 och 999: "));
  if ((tal >= -99 && tal <= -10) || (tal >= 10 && tal <= 99)) {
    write("Två siffror");
  } else if (tal >= -9 && tal <= 9) {
    write("En siffra");
  } else {
    write("Tre siffror");
  }
}
if (program == 13) {
  let tal1 = +(await read("Tal 1: "));
  let tal2 = +(await read("Tal 2: "));
  let tal3 = +(await read("Tal 3: "));
  if (
    tal1 > 0 &&
    tal2 > 0 &&
    tal3 > 0 &&
    tal1 < tal2 + tal3 &&
    tal2 < tal1 + tal3 &&
    tal3 < tal1 + tal2
  ) {
    write("Triangel: Ja!");
  } else {
    write("Triangel: Nej!");
  }
}
if (program > 13 || program < 0) {
  write(program + " är inte ett av programmen");
}

export {};
