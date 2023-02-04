import food_catalog from "./FoodComposition.csv";

export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },

  {
    id: 5,
    name: "Cardamom seed, dried, ground",
    description: "Ground spice commonly used ",
  },
  {
    id: 6,
    name: "Cinnamon, dried, ground",
    description: "Dried and ground bark or quills ",
  },
  {
    id: 7,
    name: "Cloves, dried, ground",
    description: "Dried and ground, unopened flower ",
  },
  {
    id: 8,
    name: "Coriander seed, dried, ground",
    description: "Dried and ground fruit or ",
  },
  {
    id: 9,
    name: "Cumin (cummin) seed, dried, ground",
    description: "Dried and ground frui",
  },
  {
    id: 10,
    name: "Curry powder",
    description: "Dried and ground mixture of spices for use in ",
  },
  {
    id: 11,
    name: "Fenugreek seed, dried",
    description: "Dried fenugreek seeds used as a spic",
  },
  {
    id: 12,
    name: "Ginger, dried, ground",
    description: "Dried and ground rhizome of Zingibe",
  },
  {
    id: 13,
    name: "Mustard powder",
    description: "Dry powder composed of ground yellow mustard seeds, ",
  },
  {
    id: 14,
    name: "Nutmeg, dried, ground",
    description: "Dried and ground seed of Myristica fragrans",
  },
  {
    id: 15,
    name: "Oregano, dried",
    description: "Dried, and sometimes ground, leaves of Oreganum vu",
  },
  {
    id: 16,
    name: "Paprika, dry powder",
    description: "Dried and ground fruit of red capsicums (sweet",
  },
  {
    id: 17,
    name: "Pepper, black, ground",
    description: "Dried and ground unripe fruit of the pepper",
  },
  {
    id: 18,
    name: "Rosemary, dried",
    description: "Dried woody herb with fragrant needle-like green l",
  },
  {
    id: 19,
    name: "Sage, dried",
    description: "Dry leaves of Salvia officinalis used as a herb.",
  },
  {
    id: 20,
    name: "Thyme, dried, ground",
    description: "Dried, and sometimes ground, leaves of Thymu",
  },
  {
    id: 21,
    name: "Turmeric, dried, ground",
    description: "Dried and ground rhizome of Curcuma domes",
  },
  {
    id: 22,
    name: "Salt substitute, potassium chloride",
    description: "Product sold as a repla",
  },
  {
    id: 23,
    name: "Salt, table, iodised",
    description: "Fine granules of sodium chloride sold ",
  },
  {
    id: 24,
    name: "Salt, table, non-iodised",
    description: "Fine granules of sodium chloride so",
  },
  {
    id: 25,
    name: "Stock, dry powder or cube",
    description: "Concentrated meat stock that is d",
  },
  {
    id: 26,
    name: "Taco seasoning mix, chilli-based",
    description: "Powdered product intended for ",
  },
  {
    id: 27,
    name: "Baking powder, dry powder",
    description: "Fine white powder used to chemically le",
  },
  {
    id: 28,
    name: "Baking soda (bicarbonate), dry powder",
    description: "Fine white powder used to ",
  },
  {
    id: 29,
    name: "Gelatine, all types",
    description: "Unflavoured light yellow granular proteinac",
  },
  {
    id: 30,
    name: "Gluten, from wheat (vital wheat gluten)",
    description: "Protein rich extract of ",
  },
  {
    id: 31,
    name: "Starch, potato",
    description: "Fine powder composed of polysaccharides derived f",
  },
  {
    id: 32,
    name: "Vanilla, artificial or imitation",
    description: "Solution containing the substa",
  },
  {
    id: 33,
    name: "Vanilla bean extract",
    description: "Alcoholic extract of the vanilla bean (Vanil",
  },
  {
    id: 34,
    name: "Cream of tartar, dry powder",
    description: "Purified, crystallised potassium bi",
  },
];
