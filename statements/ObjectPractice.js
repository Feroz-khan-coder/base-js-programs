var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {
      this.language = value;
    }
  };
  // Set a property using set:
  person.lang = "en";
  console.log(person.language);