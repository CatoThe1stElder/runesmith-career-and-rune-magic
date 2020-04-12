Hooks.on("init", () => {
	game.settings.register("runesmith-career-and-rune-magic", "rollMarks", {
		name : "Automatically Roll for Arcane Marks",
		hint : "When Critical Casting or Critical Channelling, the system will also roll a d10, if the result is an 8, it displays a link to roll on the Arcane Marks table.",
		scope : "world",
		config : true,
		default : true,
		type : Boolean
  });  

  console.log("Runesmith Module Loaded");
  console.log(Items.types);
  // WFRP4E.trappingTypes = {
  //   "clothingAccessories": "WFRP4E.TrappingType.ClothingAccessories",
  //   "foodAndDrink": "WFRP4E.TrappingType.FoodDrink",
  //   "toolsAndKits": "WFRP4E.TrappingType.ToolsKits",
  //   "booksAndDocuments": "WFRP4E.TrappingType.BooksDocuments",
  //   "tradeTools": "WFRP4E.TrappingType.TradeTools", // Unused - combined with tools and kits
  //   "drugsPoisonsHerbsDraughts": "WFRP4E.TrappingType.DrugsPoisonsHerbsDraughts",
  //   "ingredient": "WFRP4E.TrappingType.Ingredient",
  //   "misc": "WFRP4E.TrappingType.Misc",
  //   "rune": "Rune",
  // };

    // Pre-load templates
    loadTemplates([
      "modules\\runesmith-career-and-rune-magic\\templates\\items\\item-rune-sheet.html",
    ]);
})

